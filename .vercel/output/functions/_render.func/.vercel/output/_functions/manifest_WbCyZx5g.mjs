import { O as bold, Q as red, T as yellow, U as dim, V as blue } from './chunks/astro_G7tX4qtY.mjs';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at ".concat(i));
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at ".concat(j));
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at ".concat(j));
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at ".concat(i));
            if (!pattern)
                throw new TypeError("Missing pattern at ".concat(i));
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^".concat(escapeString(options.delimiter || "/#?"), "]+?");
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
    };
    var consumeText = function () {
        var result = "";
        var value;
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || "",
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || "",
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:".concat(token.pattern, ")$"), reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"".concat(token.name, "\" to not repeat, but got an array"));
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"".concat(token.name, "\" to not be empty"));
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"".concat(token.name, "\" to be ").concat(typeOfMessage));
        }
        return path;
    };
}
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.rYBb6LM-.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@4.3.2_sass@1.70.0_typescript@5.3.3/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.rYBb6LM-.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"route":"/api/sendemail","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/sendEmail\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"sendEmail","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/sendEmail.ts","pathname":"/api/sendEmail","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.rYBb6LM-.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"route":"/api/sendemailfooter","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/sendEmailFooter\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"sendEmailFooter","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/sendEmailFooter.ts","pathname":"/api/sendEmailFooter","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.r9itWOrE.js"},{"type":"external","value":"/_astro/page.rYBb6LM-.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"inline","content":".c-breadcrumbs{--color-link-breadcrumbs: inherit;--size-font-breadcrumbs: 1rem;--spacing-vertical-separator-breadcrumbs: 6px}.c-breadcrumbs__crumbs{list-style-type:none;margin:0;padding:0;display:flex;flex-wrap:wrap}.c-breadcrumbs__crumbs:where(.has-no-separators){row-gap:var(--spacing-vertical-separator-breadcrumbs);-moz-column-gap:1rem;column-gap:1rem}.c-breadcrumbs__crumb{display:flex;align-items:center}.c-breadcrumbs__crumb:has(.c-breadcrumbs__separator) .c-breadcrumbs__separator{display:flex;align-items:center;justify-content:center;margin:0 var(--spacing-vertical-separator-breadcrumbs)}.c-breadcrumbs__crumb:has(svg,image) :where(svg,image){max-width:var(--size-font-breadcrumbs);max-height:var(--size-font-breadcrumbs)}.c-breadcrumbs__link{font-size:var(--size-font-breadcrumbs);text-decoration:none;color:var(--color-link-breadcrumbs);line-height:1}\n"},{"type":"external","src":"/_astro/company.6m7psXx5.css"}],"routeData":{"route":"/news/[slug]","isIndex":false,"type":"page","pattern":"^\\/news\\/([^/]+?)\\/?$","segments":[[{"content":"news","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/news/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.r9itWOrE.js"},{"type":"external","value":"/_astro/page.rYBb6LM-.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"inline","content":".c-breadcrumbs{--color-link-breadcrumbs: inherit;--size-font-breadcrumbs: 1rem;--spacing-vertical-separator-breadcrumbs: 6px}.c-breadcrumbs__crumbs{list-style-type:none;margin:0;padding:0;display:flex;flex-wrap:wrap}.c-breadcrumbs__crumbs:where(.has-no-separators){row-gap:var(--spacing-vertical-separator-breadcrumbs);-moz-column-gap:1rem;column-gap:1rem}.c-breadcrumbs__crumb{display:flex;align-items:center}.c-breadcrumbs__crumb:has(.c-breadcrumbs__separator) .c-breadcrumbs__separator{display:flex;align-items:center;justify-content:center;margin:0 var(--spacing-vertical-separator-breadcrumbs)}.c-breadcrumbs__crumb:has(svg,image) :where(svg,image){max-width:var(--size-font-breadcrumbs);max-height:var(--size-font-breadcrumbs)}.c-breadcrumbs__link{font-size:var(--size-font-breadcrumbs);text-decoration:none;color:var(--color-link-breadcrumbs);line-height:1}\n"},{"type":"external","src":"/_astro/company.6m7psXx5.css"}],"routeData":{"route":"/projects/category/[category]","isIndex":true,"type":"page","pattern":"^\\/projects\\/category\\/([^/]+?)\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"category","dynamic":false,"spread":false}],[{"content":"category","dynamic":true,"spread":false}]],"params":["category"],"component":"src/pages/projects/category/[category]/index.astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Uf5aTSIB.js"},{"type":"external","value":"/_astro/page.rYBb6LM-.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/company.6m7psXx5.css"},{"type":"inline","content":".c-breadcrumbs{--color-link-breadcrumbs: inherit;--size-font-breadcrumbs: 1rem;--spacing-vertical-separator-breadcrumbs: 6px}.c-breadcrumbs__crumbs{list-style-type:none;margin:0;padding:0;display:flex;flex-wrap:wrap}.c-breadcrumbs__crumbs:where(.has-no-separators){row-gap:var(--spacing-vertical-separator-breadcrumbs);-moz-column-gap:1rem;column-gap:1rem}.c-breadcrumbs__crumb{display:flex;align-items:center}.c-breadcrumbs__crumb:has(.c-breadcrumbs__separator) .c-breadcrumbs__separator{display:flex;align-items:center;justify-content:center;margin:0 var(--spacing-vertical-separator-breadcrumbs)}.c-breadcrumbs__crumb:has(svg,image) :where(svg,image){max-width:var(--size-font-breadcrumbs);max-height:var(--size-font-breadcrumbs)}.c-breadcrumbs__link{font-size:var(--size-font-breadcrumbs);text-decoration:none;color:var(--color-link-breadcrumbs);line-height:1}\n.embla[data-astro-cid-ovxcmftc]{display:flex;align-items:center;gap:30px}.embla__viewport[data-astro-cid-ovxcmftc]{overflow:hidden}.embla__container[data-astro-cid-ovxcmftc]{display:flex;gap:20px}.embla__slide[data-astro-cid-ovxcmftc]{flex:0 0 100%;min-width:0}\n"}],"routeData":{"route":"/projects/[slug]","isIndex":false,"type":"page","pattern":"^\\/projects\\/([^/]+?)\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/projects/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.uPoGwerQ.js"},{"type":"external","value":"/_astro/page.rYBb6LM-.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"inline","content":".clip[data-astro-cid-aafkaq3q]{-webkit-clip-path:polygon(0 55%,100% 0,100% 100%,0% 100%);clip-path:polygon(0 55%,100% 0,100% 100%,0% 100%)}@media screen and (max-width: 680px){.clip[data-astro-cid-aafkaq3q]{-webkit-clip-path:polygon(0 10%,100% 0,100% 100%,0% 100%);clip-path:polygon(0 10%,100% 0,100% 100%,0% 100%)}}.embla[data-astro-cid-s63cuhea]{display:flex;align-items:center;gap:30px}.embla__viewport[data-astro-cid-s63cuhea]{overflow:hidden}.embla__container[data-astro-cid-s63cuhea]{display:flex;gap:20px}.embla__slide[data-astro-cid-s63cuhea]{flex:0 0 32.2%;min-width:0}.embla[data-astro-cid-s63cuhea] button[data-astro-cid-s63cuhea][disabled=disabled]{opacity:.8}@media screen and (max-width: 1140px){.embla__slide[data-astro-cid-s63cuhea]{flex:0 0 50%}}@media screen and (max-width: 640px){.embla__slide[data-astro-cid-s63cuhea]{flex:0 0 80%}}\n"},{"type":"external","src":"/_astro/company.6m7psXx5.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.r9itWOrE.js"},{"type":"external","value":"/_astro/page.rYBb6LM-.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/company.6m7psXx5.css"},{"type":"inline","content":".c-breadcrumbs{--color-link-breadcrumbs: inherit;--size-font-breadcrumbs: 1rem;--spacing-vertical-separator-breadcrumbs: 6px}.c-breadcrumbs__crumbs{list-style-type:none;margin:0;padding:0;display:flex;flex-wrap:wrap}.c-breadcrumbs__crumbs:where(.has-no-separators){row-gap:var(--spacing-vertical-separator-breadcrumbs);-moz-column-gap:1rem;column-gap:1rem}.c-breadcrumbs__crumb{display:flex;align-items:center}.c-breadcrumbs__crumb:has(.c-breadcrumbs__separator) .c-breadcrumbs__separator{display:flex;align-items:center;justify-content:center;margin:0 var(--spacing-vertical-separator-breadcrumbs)}.c-breadcrumbs__crumb:has(svg,image) :where(svg,image){max-width:var(--size-font-breadcrumbs);max-height:var(--size-font-breadcrumbs)}.c-breadcrumbs__link{font-size:var(--size-font-breadcrumbs);text-decoration:none;color:var(--color-link-breadcrumbs);line-height:1}\n"}],"routeData":{"route":"/company","isIndex":false,"type":"page","pattern":"^\\/company\\/?$","segments":[[{"content":"company","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/company.astro","pathname":"/company","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.r9itWOrE.js"},{"type":"external","value":"/_astro/page.rYBb6LM-.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"inline","content":".c-breadcrumbs{--color-link-breadcrumbs: inherit;--size-font-breadcrumbs: 1rem;--spacing-vertical-separator-breadcrumbs: 6px}.c-breadcrumbs__crumbs{list-style-type:none;margin:0;padding:0;display:flex;flex-wrap:wrap}.c-breadcrumbs__crumbs:where(.has-no-separators){row-gap:var(--spacing-vertical-separator-breadcrumbs);-moz-column-gap:1rem;column-gap:1rem}.c-breadcrumbs__crumb{display:flex;align-items:center}.c-breadcrumbs__crumb:has(.c-breadcrumbs__separator) .c-breadcrumbs__separator{display:flex;align-items:center;justify-content:center;margin:0 var(--spacing-vertical-separator-breadcrumbs)}.c-breadcrumbs__crumb:has(svg,image) :where(svg,image){max-width:var(--size-font-breadcrumbs);max-height:var(--size-font-breadcrumbs)}.c-breadcrumbs__link{font-size:var(--size-font-breadcrumbs);text-decoration:none;color:var(--color-link-breadcrumbs);line-height:1}\n"},{"type":"external","src":"/_astro/company.6m7psXx5.css"}],"routeData":{"route":"/news","isIndex":true,"type":"page","pattern":"^\\/news\\/?$","segments":[[{"content":"news","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/news/index.astro","pathname":"/news","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.r9itWOrE.js"},{"type":"external","value":"/_astro/page.rYBb6LM-.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"inline","content":".c-breadcrumbs{--color-link-breadcrumbs: inherit;--size-font-breadcrumbs: 1rem;--spacing-vertical-separator-breadcrumbs: 6px}.c-breadcrumbs__crumbs{list-style-type:none;margin:0;padding:0;display:flex;flex-wrap:wrap}.c-breadcrumbs__crumbs:where(.has-no-separators){row-gap:var(--spacing-vertical-separator-breadcrumbs);-moz-column-gap:1rem;column-gap:1rem}.c-breadcrumbs__crumb{display:flex;align-items:center}.c-breadcrumbs__crumb:has(.c-breadcrumbs__separator) .c-breadcrumbs__separator{display:flex;align-items:center;justify-content:center;margin:0 var(--spacing-vertical-separator-breadcrumbs)}.c-breadcrumbs__crumb:has(svg,image) :where(svg,image){max-width:var(--size-font-breadcrumbs);max-height:var(--size-font-breadcrumbs)}.c-breadcrumbs__link{font-size:var(--size-font-breadcrumbs);text-decoration:none;color:var(--color-link-breadcrumbs);line-height:1}\n"},{"type":"external","src":"/_astro/company.6m7psXx5.css"}],"routeData":{"route":"/projects","isIndex":true,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/index.astro","pathname":"/projects","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/user/Documents/GitHub/vector-roof/src/pages/company.astro",{"propagation":"none","containsHead":true}],["C:/Users/user/Documents/GitHub/vector-roof/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/user/Documents/GitHub/vector-roof/src/pages/news/[slug].astro",{"propagation":"none","containsHead":true}],["C:/Users/user/Documents/GitHub/vector-roof/src/pages/news/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/user/Documents/GitHub/vector-roof/src/pages/projects/[slug].astro",{"propagation":"none","containsHead":true}],["C:/Users/user/Documents/GitHub/vector-roof/src/pages/projects/category/[category]/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/user/Documents/GitHub/vector-roof/src/pages/projects/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/company.astro":"chunks/pages/company_EEV3eaDC.mjs","/node_modules/.pnpm/astro@4.3.2_sass@1.70.0_typescript@5.3.3/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_FEWcZ7Qk.mjs","/src/pages/api/sendEmail.ts":"chunks/pages/sendEmail_H2JLFBgM.mjs","/src/pages/api/sendEmailFooter.ts":"chunks/pages/sendEmailFooter_t0M-PdgF.mjs","\u0000@astrojs-manifest":"manifest_WbCyZx5g.mjs","C:/Users/user/Documents/GitHub/vector-roof/node_modules/.pnpm/@astrojs+react@3.0.9_@types+react-dom@18.2.18_@types+react@18.2.48_react-dom@18.2.0_react@18.2.0_vite@5.0.12/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_7a5sIVmK.mjs","\u0000@astro-page:node_modules/.pnpm/astro@4.3.2_sass@1.70.0_typescript@5.3.3/node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_KwOGt3HX.mjs","\u0000@astro-page:src/pages/api/sendEmail@_@ts":"chunks/sendEmail_EvY9XUln.mjs","\u0000@astro-page:src/pages/api/sendEmailFooter@_@ts":"chunks/sendEmailFooter_07HA5_ag.mjs","\u0000@astro-page:src/pages/news/[slug]@_@astro":"chunks/_slug__qa9BQaBi.mjs","\u0000@astro-page:src/pages/projects/category/[category]/index@_@astro":"chunks/index_1Si_W9XF.mjs","\u0000@astro-page:src/pages/projects/[slug]@_@astro":"chunks/_slug__Rb0vBraS.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_rpBdwGb6.mjs","\u0000@astro-page:src/pages/company@_@astro":"chunks/company_4NtVvkY7.mjs","\u0000@astro-page:src/pages/news/index@_@astro":"chunks/index_R7vBePU0.mjs","\u0000@astro-page:src/pages/projects/index@_@astro":"chunks/index_diulwtjn.mjs","C:/Users/user/Documents/GitHub/vector-roof/node_modules/.pnpm/@astrojs+vercel@7.1.1_astro@4.3.2/node_modules/@astrojs/vercel/dist/image/build-service.js":"chunks/build-service_ybWcQEeq.mjs","C:/Users/user/Documents/GitHub/vector-roof/src/assets/logo.png":"chunks/logo_devetpmk.mjs","C:/Users/user/Documents/GitHub/vector-roof/src/assets/pricing-mask.png":"chunks/pricing-mask_kgp8ymha.mjs","C:/Users/user/Documents/GitHub/vector-roof/src/assets/benefits-mask.png":"chunks/benefits-mask_edVdfcSL.mjs","C:/Users/user/Documents/GitHub/vector-roof/src/assets/benefits-footer-mask.svg":"chunks/benefits-footer-mask_RNFnNp3Z.mjs","C:/Users/user/Documents/GitHub/vector-roof/src/assets/company-poster.png":"chunks/company-poster_jZthKnQ8.mjs","C:/Users/user/Documents/GitHub/vector-roof/src/assets/company-logo.svg":"chunks/company-logo_9CAWYOQ7.mjs","C:/Users/user/Documents/GitHub/vector-roof/src/assets/hero-icon.svg":"chunks/hero-icon_qU9GKhvH.mjs","C:/Users/user/Documents/GitHub/vector-roof/src/assets/partners/danone.png":"chunks/danone_1LJHDx7T.mjs","C:/Users/user/Documents/GitHub/vector-roof/src/assets/partners/syberia.png":"chunks/syberia_YRV7pI7I.mjs","C:/Users/user/Documents/GitHub/vector-roof/src/assets/partners/rusal.png":"chunks/rusal_1lnFjs6m.mjs","C:/Users/user/Documents/GitHub/vector-roof/src/assets/partners/smsity.png":"chunks/smsity_faWlaqLP.mjs","C:/Users/user/Documents/GitHub/vector-roof/src/assets/partners/cult.png":"chunks/cult_U5uBFVSC.mjs","C:/Users/user/Documents/GitHub/vector-roof/src/assets/partners/sbis.svg":"chunks/sbis_4tKTd1Ua.mjs","C:/Users/user/Documents/GitHub/vector-roof/src/assets/partners/trans.png":"chunks/trans_3SXeJazR.mjs","C:/Users/user/Documents/GitHub/vector-roof/src/assets/partners/omega.png":"chunks/omega_A1qNj3Wh.mjs","C:/Users/user/Documents/GitHub/vector-roof/src/assets/partners/reviews/1.png":"chunks/1_3M8S2rbN.mjs","C:/Users/user/Documents/GitHub/vector-roof/src/assets/partners/reviews/2.png":"chunks/2_GKe6uzfW.mjs","C:/Users/user/Documents/GitHub/vector-roof/src/assets/partners/reviews/3.png":"chunks/3_PCKGSFKq.mjs","C:/Users/user/Documents/GitHub/vector-roof/src/assets/partners/reviews/4.png":"chunks/4_D9FgeehM.mjs","C:/Users/user/Documents/GitHub/vector-roof/src/assets/partners/reviews/5.png":"chunks/5_nPViAN82.mjs","C:/Users/user/Documents/GitHub/vector-roof/src/assets/projects/1.png":"chunks/1_tx93lGht.mjs","C:/Users/user/Documents/GitHub/vector-roof/src/assets/projects/2.png":"chunks/2_MsoH1chx.mjs","C:/Users/user/Documents/GitHub/vector-roof/src/assets/projects/3.png":"chunks/3_cAVz2Y8f.mjs","C:/Users/user/Documents/GitHub/vector-roof/src/assets/sale-mask.png":"chunks/sale-mask_7yCJ2HAR.mjs","C:/Users/user/Documents/GitHub/vector-roof/src/assets/services/membran.png":"chunks/membran_xLQ2Q9N7.mjs","C:/Users/user/Documents/GitHub/vector-roof/src/assets/services/membran-hover.png":"chunks/membran-hover_BVwK3rYC.mjs","C:/Users/user/Documents/GitHub/vector-roof/src/assets/services/pitched.png":"chunks/pitched_-D928poU.mjs","C:/Users/user/Documents/GitHub/vector-roof/src/assets/services/pitched-hover.png":"chunks/pitched-hover_FVi_xSMV.mjs","C:/Users/user/Documents/GitHub/vector-roof/src/assets/services/clad.png":"chunks/clad_WepMCiEd.mjs","C:/Users/user/Documents/GitHub/vector-roof/src/assets/services/clad-hover.png":"chunks/clad-hover_Sx8E39Rl.mjs","C:/Users/user/Documents/GitHub/vector-roof/src/assets/services/facade.png":"chunks/facade_W6REMEZ8.mjs","C:/Users/user/Documents/GitHub/vector-roof/src/assets/services/facade-hover.png":"chunks/facade-hover_8MysSA-P.mjs","C:/Users/user/Documents/GitHub/vector-roof/src/assets/services/waterproofing.png":"chunks/waterproofing_kw8BR1ex.mjs","C:/Users/user/Documents/GitHub/vector-roof/src/assets/services/waterproofing-hover.png":"chunks/waterproofing-hover_oD6cFTNs.mjs","C:/Users/user/Documents/GitHub/vector-roof/src/assets/services/metal.png":"chunks/metal_dtFtBjBn.mjs","C:/Users/user/Documents/GitHub/vector-roof/src/assets/services/metal-hover.png":"chunks/metal-hover_dpsWzJVR.mjs","C:/Users/user/Documents/GitHub/vector-roof/src/assets/company-mobile-bg.png":"chunks/company-mobile-bg_POQvnnU3.mjs","C:/Users/user/Documents/GitHub/vector-roof/src/assets/company-page-bg.png":"chunks/company-page-bg_ujQ2zcaB.mjs","C:/Users/user/Documents/GitHub/vector-roof/src/assets/company-sert.png":"chunks/company-sert_porFYaCF.mjs","C:/Users/user/Documents/GitHub/vector-roof/src/assets/company-mask.svg":"chunks/company-mask_a7fK9l2-.mjs","C:/Users/user/Documents/GitHub/vector-roof/src/assets/company-man.png":"chunks/company-man_UTkrV4Ex.mjs","C:/Users/user/Documents/GitHub/vector-roof/src/assets/map.png":"chunks/map_eDnNFBoH.mjs","C:/Users/user/Documents/GitHub/vector-roof/src/components/StartWork":"_astro/StartWork.t7o4B787.js","/astro/hoisted.js?q=0":"_astro/hoisted.Uf5aTSIB.js","C:/Users/user/Documents/GitHub/vector-roof/src/components/forms/PricingForm":"_astro/PricingForm.Jug4h6IY.js","C:/Users/user/Documents/GitHub/vector-roof/src/components/Modal":"_astro/Modal.TALNut8Q.js","astro:scripts/page.js":"_astro/page.rYBb6LM-.js","C:/Users/user/Documents/GitHub/vector-roof/src/components/VideoReview":"_astro/VideoReview.jjhzj8Hf.js","@astrojs/react/client.js":"_astro/client.8NMUNGTW.js","/astro/hoisted.js?q=1":"_astro/hoisted.uPoGwerQ.js","C:/Users/user/Documents/GitHub/vector-roof/src/components/forms/SaleForm":"_astro/SaleForm.AeTg1EQH.js","/astro/hoisted.js?q=2":"_astro/hoisted.r9itWOrE.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/company-mobile-bg._v2TEO8r.png","/_astro/company-sert.udMdEDwg.png","/_astro/company-mask.qcyLJf4X.svg","/_astro/company-man.-iH3s5uL.png","/_astro/map.D7gaRja2.png","/_astro/manrope-cyrillic-600-normal.FcZyQ26e.woff2","/_astro/manrope-greek-600-normal.v-66d4rN.woff2","/_astro/manrope-vietnamese-600-normal.9yidztRn.woff2","/_astro/manrope-latin-ext-600-normal.-tcDKn66.woff2","/_astro/manrope-latin-600-normal.GVeCShGU.woff2","/_astro/manrope-cyrillic-700-normal.zaa0fbxP.woff2","/_astro/manrope-greek-700-normal.wkmKlsuB.woff2","/_astro/manrope-vietnamese-700-normal.zq9GzOp4.woff2","/_astro/manrope-latin-ext-700-normal.fajghC96.woff2","/_astro/manrope-latin-700-normal.r8pKyiWI.woff2","/_astro/manrope-cyrillic-800-normal.fT8wqgcb.woff2","/_astro/manrope-greek-800-normal.RyAdGpGt.woff2","/_astro/manrope-vietnamese-800-normal.rgILZ7-o.woff2","/_astro/manrope-latin-ext-800-normal.ElO-7T4u.woff2","/_astro/manrope-latin-800-normal.k7s1vhyr.woff2","/_astro/company-page-bg.3gl4BAL2.png","/_astro/pricing-bg.AX-HZ06O.png","/_astro/pricing-mask.hH97UENA.png","/_astro/2.Lo0Lecjn.png","/_astro/3.m2khr50n.png","/_astro/hero-icon.12x-nEXn.svg","/_astro/hero-background-jpg.vvZTIht2.jpg","/_astro/benefits-mask.DZO9vgnP.png","/_astro/benefits-footer-mask.Kpatants.svg","/_astro/sale-mask.jnKkvivB.png","/_astro/manrope-cyrillic-600-normal.OYKT1CwH.woff","/_astro/manrope-greek-600-normal.E5iJaKEz.woff","/_astro/manrope-vietnamese-600-normal.wkD3gSTv.woff","/_astro/manrope-latin-ext-600-normal.zrq2-q0J.woff","/_astro/manrope-latin-600-normal.ggnU_auo.woff","/_astro/company-poster.mug2wEnw.png","/_astro/1.MAwtw25A.png","/_astro/manrope-cyrillic-700-normal.1vQJ2Bfv.woff","/_astro/manrope-greek-700-normal.4FOIZ2Nr.woff","/_astro/manrope-vietnamese-700-normal.jMHhXOE4.woff","/_astro/manrope-latin-ext-700-normal.PXlBStk4.woff","/_astro/manrope-latin-700-normal.OXhzCImh.woff","/_astro/company-logo.Dz4BTbxK.svg","/_astro/manrope-cyrillic-800-normal.raEX99ku.woff","/_astro/manrope-greek-800-normal.tnkX5KXS.woff","/_astro/manrope-vietnamese-800-normal.ODZ_M1D_.woff","/_astro/manrope-latin-ext-800-normal.bwIrdqE5.woff","/_astro/manrope-latin-800-normal.erngDu2L.woff","/_astro/danone.ConznPfF.png","/_astro/syberia.VWX8A0eU.png","/_astro/sale-bg.XgWtW3qK.png","/_astro/rusal.AgHAH334.png","/_astro/smsity.JfALhJaf.png","/_astro/cult.tBweXF1y.png","/_astro/sbis.HvJPlrXe.svg","/_astro/trans.xLBNSkc1.png","/_astro/omega.Grr7rhoM.png","/_astro/1.N6H_lc7F.png","/_astro/3.I9uu7qCi.png","/_astro/5.Ty-btH4W.png","/_astro/membran.0zNOkSOM.png","/_astro/membran-hover.pt4-Vd_i.png","/_astro/pitched.eAhu4FxL.png","/_astro/pitched-hover._uT9hhtI.png","/_astro/clad-hover.ZvOa5Wi4.png","/_astro/clad.pw3tRLYO.png","/_astro/2.ZoaQKqOd.png","/_astro/4.40tWrnmW.png","/_astro/facade-hover.RVvr61mq.png","/_astro/facade.H6hDZya-.png","/_astro/waterproofing.7-CZUQx1.png","/_astro/waterproofing-hover._koagLhr.png","/_astro/metal.CyqZP3lL.png","/_astro/metal-hover.WjEPNuoV.png","/_astro/logo.QbhwYj0G.png","/_astro/company.6m7psXx5.css","/company-poster.png","/favicon.ico","/_astro/CallbackForm.XsaD9pn4.js","/_astro/client.8NMUNGTW.js","/_astro/DailyMotion.WHeXlOxi.js","/_astro/embla-carousel.esm.CkmKs9YS.js","/_astro/Facebook.LI-8PXZP.js","/_astro/FilePlayer.ssU8FFJM.js","/_astro/hoisted.r9itWOrE.js","/_astro/hoisted.Uf5aTSIB.js","/_astro/hoisted.uPoGwerQ.js","/_astro/index.Hbs-fNTC.js","/_astro/index.Nkt9jjly.js","/_astro/index.tZTjid7p.js","/_astro/index.YV3eq1v5.js","/_astro/jsx-runtime.XGodtQ4D.js","/_astro/Kaltura.V_liy6lA.js","/_astro/Mixcloud.Ynomo_gD.js","/_astro/Modal.TALNut8Q.js","/_astro/page.rYBb6LM-.js","/_astro/Preview.obu8yYP-.js","/_astro/PricingForm.Jug4h6IY.js","/_astro/SaleForm.AeTg1EQH.js","/_astro/SoundCloud.Kj-38m7a.js","/_astro/StartWork.t7o4B787.js","/_astro/Streamable.jNwcLLnc.js","/_astro/Twitch.KBMOCzmd.js","/_astro/VideoReview.jjhzj8Hf.js","/_astro/VideoReview.lQddaqez.js","/_astro/Vidyard.ZQ2C3RtM.js","/_astro/Vimeo.l72VDXja.js","/_astro/Wistia.8SpwLycR.js","/_astro/YouTube.bSyO8u2l.js","/_astro/page.rYBb6LM-.js"],"buildFormat":"directory"});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
