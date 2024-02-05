import 'os';
import 'util';
import 'tty';
import { A as AstroError, I as InvalidImageService, E as ExpectedImageOptions, a as ExpectedImage, c as createAstro, b as createComponent, d as ImageMissingAlt, r as renderTemplate, m as maybeRenderHead, e as addAttribute, s as spreadAttributes, f as renderSlot, u as unescapeHTML, g as renderComponent, h as defineScriptVars, i as renderHead, F as Fragment$2 } from '../astro_G7tX4qtY.mjs';
/* empty css                            */
/* empty css                            */
import { i as isESMImportedImage, a as isLocalService, b as isRemoteImage, D as DEFAULT_HASH_PROPS } from '../astro/assets-service_EbHWy0PY.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { Transition, Dialog } from '@headlessui/react';
import { useState, Fragment as Fragment$1, useRef } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
/* empty css                           */

async function getConfiguredImageService() {
  if (!globalThis?.astroAsset?.imageService) {
    const { default: service } = await import(
      // @ts-expect-error
      '../build-service_ybWcQEeq.mjs'
    ).catch((e) => {
      const error = new AstroError(InvalidImageService);
      error.cause = e;
      throw error;
    });
    if (!globalThis.astroAsset)
      globalThis.astroAsset = {};
    globalThis.astroAsset.imageService = service;
    return service;
  }
  return globalThis.astroAsset.imageService;
}
async function getImage$1(options, imageConfig) {
  if (!options || typeof options !== "object") {
    throw new AstroError({
      ...ExpectedImageOptions,
      message: ExpectedImageOptions.message(JSON.stringify(options))
    });
  }
  if (typeof options.src === "undefined") {
    throw new AstroError({
      ...ExpectedImage,
      message: ExpectedImage.message(
        options.src,
        "undefined",
        JSON.stringify(options)
      )
    });
  }
  const service = await getConfiguredImageService();
  const resolvedOptions = {
    ...options,
    src: typeof options.src === "object" && "then" in options.src ? (await options.src).default ?? await options.src : options.src
  };
  const originalPath = isESMImportedImage(resolvedOptions.src) ? resolvedOptions.src.fsPath : resolvedOptions.src;
  const clonedSrc = isESMImportedImage(resolvedOptions.src) ? (
    // @ts-expect-error - clone is a private, hidden prop
    resolvedOptions.src.clone ?? resolvedOptions.src
  ) : resolvedOptions.src;
  resolvedOptions.src = clonedSrc;
  const validatedOptions = service.validateOptions ? await service.validateOptions(resolvedOptions, imageConfig) : resolvedOptions;
  const srcSetTransforms = service.getSrcSet ? await service.getSrcSet(validatedOptions, imageConfig) : [];
  let imageURL = await service.getURL(validatedOptions, imageConfig);
  let srcSets = await Promise.all(
    srcSetTransforms.map(async (srcSet) => ({
      transform: srcSet.transform,
      url: await service.getURL(srcSet.transform, imageConfig),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }))
  );
  if (isLocalService(service) && globalThis.astroAsset.addStaticImage && !(isRemoteImage(validatedOptions.src) && imageURL === validatedOptions.src)) {
    const propsToHash = service.propertiesToHash ?? DEFAULT_HASH_PROPS;
    imageURL = globalThis.astroAsset.addStaticImage(validatedOptions, propsToHash, originalPath);
    srcSets = srcSetTransforms.map((srcSet) => ({
      transform: srcSet.transform,
      url: globalThis.astroAsset.addStaticImage(srcSet.transform, propsToHash, originalPath),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }));
  }
  return {
    rawOptions: resolvedOptions,
    options: validatedOptions,
    src: imageURL,
    srcSet: {
      values: srcSets,
      attribute: srcSets.map((srcSet) => `${srcSet.url} ${srcSet.descriptor}`).join(", ")
    },
    attributes: service.getHTMLAttributes !== void 0 ? await service.getHTMLAttributes(validatedOptions, imageConfig) : {}
  };
}

const $$Astro$j = createAstro();
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "C:/Users/user/Documents/GitHub/vector-roof/node_modules/.pnpm/astro@4.3.2_sass@1.70.0_typescript@5.3.3/node_modules/astro/components/Image.astro", void 0);

const $$Astro$i = createAstro();
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({ ...props, format, widths: props.widths, densities: props.densities })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(props.src) && specialFormatsFallback.includes(props.src.format)) {
    resultFallbackFormat = props.src.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const imgAdditionalAttributes = {};
  const sourceAdditionaAttributes = {};
  if (props.sizes) {
    sourceAdditionaAttributes.sizes = props.sizes;
  }
  if (fallbackImage.srcSet.values.length > 0) {
    imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute("image/" + image.options.format, "type")}${spreadAttributes(sourceAdditionaAttributes)}>`;
  })} <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(imgAdditionalAttributes)}${spreadAttributes(fallbackImage.attributes)}> </picture>`;
}, "C:/Users/user/Documents/GitHub/vector-roof/node_modules/.pnpm/astro@4.3.2_sass@1.70.0_typescript@5.3.3/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"@astrojs/vercel/build-image-service","config":{"sizes":[640,750,828,1080,1200,1920,2048,3840],"domains":[],"remotePatterns":[{"protocol":"https"}]}},"domains":[],"remotePatterns":[{"protocol":"https"}]};
					new URL("file:///C:/Users/user/Documents/GitHub/vector-roof/.vercel/output/static/");
					const getImage = async (options) => await getImage$1(options, imageConfig);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$h = createAstro();
const $$Breadcrumbs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Breadcrumbs;
  const {
    indexText = "Home",
    mainBemClass = "c-breadcrumbs",
    ariaLabel = "breadcrumbs",
    crumbs = [],
    schemaJsonScript = true,
    baseUrl
  } = Astro2.props;
  const hasBaseUrl = baseUrl?.length;
  const coloredWarnLog = (message) => {
    console.warn(
      "\x1B[43m",
      "Astro Breadcrumbs",
      "\x1B[0m",
      "\x1B[33m",
      message,
      "\x1B[0m"
    );
  };
  const isValidUrl = (url) => {
    if (!url)
      return false;
    let urlToCheck;
    try {
      urlToCheck = new URL(url);
    } catch (e) {
      return false;
    }
    const checkProtocal = urlToCheck.protocol === "http:" || urlToCheck.protocol === "https:";
    if (!checkProtocal) {
      coloredWarnLog("Astro Breadcrumbs");
    }
    return checkProtocal;
  };
  const endsWithSlash = (url) => {
    if (!url)
      return false;
    return url.endsWith("/");
  };
  const getBaseUrl = () => {
    if (endsWithSlash(baseUrl) && hasBaseUrl) {
      coloredWarnLog("Base URL should not end with a slash. Falling back to relative URL.");
    }
    if (!isValidUrl(baseUrl) && hasBaseUrl) {
      coloredWarnLog("Base URL is not valid. Falling back to relative URL.");
    }
    return baseUrl;
  };
  let parts = [];
  if (crumbs.length === 0) {
    const paths = Astro2.url.pathname.split("/").filter((crumb) => crumb);
    parts = [
      {
        text: indexText,
        href: getBaseUrl() ?? "/"
      }
    ];
    paths.forEach((text, index) => {
      const generateHref = `/${paths.slice(0, index + 1).join("/")}`;
      const finalHref = getBaseUrl() ?? "" + generateHref;
      const matches = text.match(/^(.+?)(\.[a-z0-9]+)?$/i);
      if (matches && matches[2]) {
        text = matches[1];
      }
      parts = [
        ...parts,
        {
          text: text.replace(/[-_]/g, " "),
          href: finalHref
        }
      ];
    });
  }
  if (crumbs.length > 0) {
    parts = crumbs;
  }
  const schemaJson = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: parts.map((part, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@id": part.href,
        name: part.text
      }
    }))
  });
  return renderTemplate`${maybeRenderHead()}<nav${addAttribute(ariaLabel, "aria-label")}${addAttribute(mainBemClass, "class")}> <ol${addAttribute(`${mainBemClass}__crumbs${Astro2.slots.has("separator") ? " has-separators" : " has-no-separators"}`, "class")}> ${parts.map(({ text, ...attrs }, index, array) => renderTemplate`<li${addAttribute(`${mainBemClass}__crumb`, "class")}> ${Astro2.slots.has("index") && index === 0 && renderTemplate`<a${spreadAttributes(attrs)}${addAttribute(`${mainBemClass}__link is-index`, "class")}> ${renderSlot($$result, $$slots["index"])} </a>`} ${(!Astro2.slots.has("index") || Astro2.slots.has("index") && index !== 0) && renderTemplate`<a${spreadAttributes(attrs)}${addAttribute(`${mainBemClass}__link${index + 1 === array.length ? " is-current" : ""}`, "class")}${addAttribute(index + 1 === array.length ? "location" : false, "aria-current")}> ${text} </a>`} ${Astro2.slots.has("separator") && array.length - 1 !== index && renderTemplate`<span class="c-breadcrumbs__separator" aria-hidden="true"> ${renderSlot($$result, $$slots["separator"])} </span>`} </li>`)} </ol> </nav> ${schemaJsonScript && renderTemplate(_a$2 || (_a$2 = __template$2(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(schemaJson))}`;
}, "C:/Users/user/Documents/GitHub/vector-roof/node_modules/.pnpm/astro-breadcrumbs@1.8.1_astro@4.3.2/node_modules/astro-breadcrumbs/src/Breadcrumbs.astro", void 0);

const $$Astro$g = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/user/Documents/GitHub/vector-roof/node_modules/.pnpm/astro@4.3.2_sass@1.70.0_typescript@5.3.3/node_modules/astro/components/ViewTransitions.astro", void 0);

const icons = {"local":{"prefix":"local","lastModified":1707156066,"icons":{"arrow":{"body":"<path fill=\"none\" stroke=\"#FEFEFE\" stroke-width=\"2\" d=\"M12 6.95 6.465 1.413M12 6.95l-5.535 5.535M12 6.95H.5\"/>","width":14,"height":14},"arrow-right":{"body":"<path fill=\"currentColor\" d=\"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z\"/>","width":24,"height":24},"attach":{"body":"<path fill=\"currentColor\" d=\"m10.513 18.763.972.972 8.25-8.25a5.556 5.556 0 0 0 0-7.847 5.554 5.554 0 0 0-7.847 0l-8.937 8.938a4.581 4.581 0 0 0 0 6.472 4.566 4.566 0 0 0 3.236 1.34 4.563 4.563 0 0 0 3.237-1.34l8.25-8.25A3.578 3.578 0 0 0 18.73 8.25a3.58 3.58 0 0 0-1.056-2.55c-1.361-1.36-3.736-1.36-5.097 0l-7.563 7.563.972.972 7.563-7.562c.84-.84 2.313-.84 3.153 0 .42.42.653.98.653 1.577a2.21 2.21 0 0 1-.653 1.576l-8.25 8.25a3.205 3.205 0 0 1-4.528 0 3.205 3.205 0 0 1 0-4.528L12.86 4.61a4.178 4.178 0 0 1 5.903 0 4.178 4.178 0 0 1 0 5.903l-8.25 8.25Z\"/>","width":22,"height":22},"calendar":{"body":"<g fill=\"none\"><g fill=\"#A8A8A8\" clip-path=\"url(#a)\"><path d=\"M8.811 12.192a.457.457 0 0 0-.457-.458H5.066a.457.457 0 0 0-.457.457v3.288c0 .252.205.457.457.457h3.288a.457.457 0 0 0 .457-.457v-3.287Zm-.914 2.83H5.524v-2.373h2.373v2.373Zm6.773-2.83a.457.457 0 0 0-.457-.458h-3.287a.457.457 0 0 0-.457.457v3.288c0 .252.204.457.457.457h3.287a.457.457 0 0 0 .457-.457v-3.287Zm-.914 2.83h-2.373v-2.373h2.373v2.373Zm6.774-2.83a.457.457 0 0 0-.457-.458h-3.288a.457.457 0 0 0-.457.457v3.288c0 .252.205.457.457.457h3.288a.457.457 0 0 0 .457-.457v-3.287Zm-.915 2.83h-2.373v-2.373h2.374v2.373Zm3.03.914h3.287a.457.457 0 0 0 .457-.457v-3.287a.457.457 0 0 0-.457-.458h-3.287a.457.457 0 0 0-.457.457v3.288c0 .252.204.457.457.457Zm.457-3.287h2.373v2.373h-2.373v-2.373ZM8.811 18.14a.457.457 0 0 0-.457-.456H5.066a.457.457 0 0 0-.457.457v3.287c0 .252.205.457.457.457h3.288a.457.457 0 0 0 .457-.457v-3.287Zm-.914 2.831H5.524v-2.373h2.373v2.373Zm6.773-2.831a.457.457 0 0 0-.457-.456h-3.287a.457.457 0 0 0-.457.457v3.287c0 .252.204.457.457.457h3.287a.457.457 0 0 0 .457-.457v-3.287Zm-.914 2.831h-2.373v-2.373h2.373v2.373Zm6.774-2.831a.457.457 0 0 0-.457-.456h-3.288a.457.457 0 0 0-.457.457v3.287c0 .252.205.457.457.457h3.288a.457.457 0 0 0 .457-.457v-3.287Zm-.915 2.831h-2.373v-2.373h2.374v2.373Zm2.573.457c0 .252.204.457.457.457h3.287a.457.457 0 0 0 .457-.457v-3.287a.457.457 0 0 0-.457-.457h-3.287a.457.457 0 0 0-.457.457v3.287Zm.914-2.83h2.373v2.373h-2.373v-2.373ZM8.354 23.633H5.066a.457.457 0 0 0-.457.457v3.287c0 .253.205.457.457.457h3.288a.457.457 0 0 0 .457-.457V24.09a.457.457 0 0 0-.457-.457Zm-.457 3.287H5.524v-2.373h2.373v2.373Zm6.316-3.287h-3.287a.457.457 0 0 0-.457.457v3.287c0 .253.204.457.457.457h3.287a.457.457 0 0 0 .457-.457V24.09a.457.457 0 0 0-.457-.457Zm-.457 3.287h-2.373v-2.373h2.373v2.373Zm6.317-3.287h-3.288a.457.457 0 0 0-.457.457v3.287c0 .253.205.457.457.457h3.288a.457.457 0 0 0 .457-.457V24.09a.457.457 0 0 0-.457-.457Zm-.457 3.287h-2.374v-2.373h2.374v2.373Zm2.572.457c0 .253.204.457.457.457h3.287a.457.457 0 0 0 .457-.457V24.09a.457.457 0 0 0-.457-.457h-3.287a.457.457 0 0 0-.457.457v3.287Zm.914-2.83h2.373v2.373h-2.373v-2.373Z\"/><path d=\"M28.337 3.393h-.564V1.644a1.644 1.644 0 0 0-3.287 0v1.749H22.46V1.644A1.649 1.649 0 0 0 20.815 0c-.907 0-1.645.738-1.645 1.644v1.749h-2.026V1.644C17.144.738 16.407 0 15.5 0c-.907 0-1.644.738-1.644 1.644v1.749h-2.027V1.644A1.645 1.645 0 0 0 10.185 0C9.28 0 8.541.738 8.541 1.644v1.749H6.515V1.644C6.515.738 5.777 0 4.87 0S3.225.738 3.225 1.644v1.749h-.563A1.884 1.884 0 0 0 .78 5.274V29.12c0 1.037.844 1.881 1.882 1.881h17.51a.457.457 0 1 0 0-.914H2.663a.968.968 0 0 1-.968-.967V9.566h5.836a.457.457 0 1 0 0-.915H1.695V5.274c0-.533.434-.967.968-.967h.563v.674c0 .907.738 1.644 1.645 1.644.906 0 1.644-.737 1.644-1.644v-.674H8.54v.674a1.645 1.645 0 0 0 3.288 0v-.674h2.027v.674a1.645 1.645 0 0 0 3.288 0v-.674h2.027v.674a1.645 1.645 0 0 0 3.288 0v-.674h2.026v.674c0 .907.738 1.644 1.645 1.644.906 0 1.644-.737 1.644-1.644v-.674h.564c.533 0 .967.434.967.967v3.377H9.359a.457.457 0 1 0 0 .915h19.946v19.553a.968.968 0 0 1-.968.967h-6.335a.457.457 0 1 0 0 .914h6.335a1.884 1.884 0 0 0 1.882-1.881V5.274a1.884 1.884 0 0 0-1.882-1.881ZM5.6 4.98a.73.73 0 0 1-1.46 0V1.644a.73.73 0 0 1 1.46 0v3.337Zm5.315 0a.73.73 0 0 1-1.46 0V1.644a.73.73 0 0 1 1.46 0v3.337Zm5.315 0a.73.73 0 0 1-1.46 0V1.644a.73.73 0 0 1 1.46 0v3.337Zm5.315 0a.73.73 0 0 1-1.46 0V1.644a.73.73 0 0 1 1.46 0v3.337Zm5.314 0a.73.73 0 0 1-1.46 0V1.644a.73.73 0 0 1 1.46 0v3.337Z\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h31v31H0z\"/></clipPath></defs></g>","width":31,"height":31},"email":{"body":"<g fill=\"currentColor\"><g clip-path=\"url(#a)\"><path d=\"M8.3 10.219a.863.863 0 0 0 .63.252c.253.002.49-.1.624-.246l6.236-6.647c.417-.444.275-.805-.317-.805H2.432c-.592 0-.735.362-.32.808L8.3 10.219Zm-7.144 3.555L5.4 9.18 1.16 4.63c-.417-.446-.754-.3-.754.327v8.495c0 .626.336.771.75.323Z\"/><path d=\"M2.433 15.641H15.38c.592 0 .737-.363.323-.811l-4.222-4.578-.942 1.005a2.184 2.184 0 0 1-1.602.678c-.572 0-1.163-.21-1.61-.685l-.957-1.027-4.26 4.607c-.414.447-.27.81.322.81Zm14.973-2.192V5.067c0-.627-.338-.774-.755-.33l-4.198 4.474 4.205 4.56c.413.449.748.304.748-.322Z\"/></g><defs><clipPath id=\"a\"><path d=\"M.406.207h17v18h-17z\"/></clipPath></defs></g>","width":18},"map":{"body":"<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M7.983 17.906c1.766-2.147 6.108-7.733 6.108-10.743a6.842 6.842 0 0 0-13.685 0c0 3.01 4.342 8.596 6.109 10.743a.943.943 0 0 0 1.468 0Zm-.731-8.035a2.705 2.705 0 1 0 0-5.41 2.705 2.705 0 0 0 0 5.41Z\" clip-rule=\"evenodd\"/>","width":15},"marks":{"body":"<path fill=\"#F43333\" d=\"M33.836 0h-8.184L13.528 13.907h8.184L33.836 0ZM20.305 0H12.12L-.003 13.907H8.18L20.305 0Z\"/>","width":34,"height":14},"phone":{"body":"<g fill=\"currentColor\"><g clip-path=\"url(#a)\"><path d=\"M5.066 8.106a9.795 9.795 0 0 0 4.21 4.354l1.406-1.458a.626.626 0 0 1 .648-.162 7.05 7.05 0 0 0 2.281.377c.355 0 .639.294.639.661v2.314a.648.648 0 0 1-.639.661c-6 0-10.861-5.03-10.861-11.239a.65.65 0 0 1 .639-.66h2.236c.355 0 .639.293.639.66 0 .823.128 1.62.364 2.36a.68.68 0 0 1-.156.671L5.066 8.106Z\"/></g><defs><clipPath id=\"a\"><path d=\"M.836.969h15.333v15.867H.836z\"/></clipPath></defs></g>","width":17,"height":17},"square":{"body":"<g fill=\"none\"><g fill=\"#A8A8A8\" clip-path=\"url(#a)\"><path d=\"M26.473 4.219A.527.527 0 0 0 27 3.69V.527A.527.527 0 0 0 26.473 0h-3.164a.527.527 0 0 0-.528.527v1.055H4.22V.527A.527.527 0 0 0 3.69 0H.527A.527.527 0 0 0 0 .527v3.164c0 .292.236.528.527.528h1.055V22.78H.527a.527.527 0 0 0-.527.53v3.164c0 .29.236.527.527.527h3.164a.527.527 0 0 0 .528-.527v-1.055H22.78v1.055c0 .29.236.527.527.527h3.165a.527.527 0 0 0 .527-.527V23.31a.527.527 0 0 0-.527-.528h-1.055V4.22h1.055Zm-2.637-3.164h2.11v2.11h-2.11v-2.11Zm-22.781 0h2.11v2.11h-2.11v-2.11Zm2.11 24.89h-2.11v-2.11h2.11v2.11Zm22.78 0h-2.11v-2.11h2.11v2.11Zm-1.582-19.3H9.281V5.59a.527.527 0 0 0-.527-.527H5.59a.527.527 0 0 0-.527.527v3.164c0 .291.236.527.527.527h1.055v5.168a.527.527 0 0 0 1.054 0V9.281h1.055a.527.527 0 0 0 .527-.527V7.699h15.082v15.082H23.31a.527.527 0 0 0-.528.528v1.054H7.7v-5.168a.527.527 0 1 0-1.054 0v5.168H4.219V23.31a.527.527 0 0 0-.528-.528H2.637V4.22H3.69a.527.527 0 0 0 .528-.528V2.637H22.78V3.69c0 .292.236.528.527.528h1.055v2.426ZM6.117 8.227v-2.11h2.11v2.11h-2.11Z\"/><path d=\"M10.59 12.978a.527.527 0 0 0 .527-.528v-.59l9.088 9.087h-.591a.527.527 0 1 0 0 1.055h1.864a.527.527 0 0 0 .527-.528V19.61a.527.527 0 0 0-1.054 0v.591l-9.088-9.088h.591a.527.527 0 0 0 0-1.054H10.59a.527.527 0 0 0-.527.527v1.864c0 .292.236.528.527.528Zm-3.422 4.37a.527.527 0 1 0 0-1.055.527.527 0 0 0 0 1.055Z\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h27v27H0z\"/></clipPath></defs></g>","width":27,"height":27}},"height":19}};

const defaultIconDimensions = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
);
const defaultIconTransformations = Object.freeze({
  rotate: 0,
  vFlip: false,
  hFlip: false
});
const defaultIconProps = Object.freeze({
  ...defaultIconDimensions,
  ...defaultIconTransformations
});
const defaultExtendedIconProps = Object.freeze({
  ...defaultIconProps,
  body: "",
  hidden: false
});

const defaultIconSizeCustomisations = Object.freeze({
  width: null,
  height: null
});
const defaultIconCustomisations = Object.freeze({
  // Dimensions
  ...defaultIconSizeCustomisations,
  // Transformations
  ...defaultIconTransformations
});

function mergeIconTransformations(obj1, obj2) {
  const result = {};
  if (!obj1.hFlip !== !obj2.hFlip) {
    result.hFlip = true;
  }
  if (!obj1.vFlip !== !obj2.vFlip) {
    result.vFlip = true;
  }
  const rotate = ((obj1.rotate || 0) + (obj2.rotate || 0)) % 4;
  if (rotate) {
    result.rotate = rotate;
  }
  return result;
}

function mergeIconData(parent, child) {
  const result = mergeIconTransformations(parent, child);
  for (const key in defaultExtendedIconProps) {
    if (key in defaultIconTransformations) {
      if (key in parent && !(key in result)) {
        result[key] = defaultIconTransformations[key];
      }
    } else if (key in child) {
      result[key] = child[key];
    } else if (key in parent) {
      result[key] = parent[key];
    }
  }
  return result;
}

function getIconsTree(data, names) {
  const icons = data.icons;
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  const resolved = /* @__PURE__ */ Object.create(null);
  function resolve(name) {
    if (icons[name]) {
      return resolved[name] = [];
    }
    if (!(name in resolved)) {
      resolved[name] = null;
      const parent = aliases[name] && aliases[name].parent;
      const value = parent && resolve(parent);
      if (value) {
        resolved[name] = [parent].concat(value);
      }
    }
    return resolved[name];
  }
  (names || Object.keys(icons).concat(Object.keys(aliases))).forEach(resolve);
  return resolved;
}

function internalGetIconData(data, name, tree) {
  const icons = data.icons;
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  let currentProps = {};
  function parse(name2) {
    currentProps = mergeIconData(
      icons[name2] || aliases[name2],
      currentProps
    );
  }
  parse(name);
  tree.forEach(parse);
  return mergeIconData(data, currentProps);
}
function getIconData(data, name) {
  if (data.icons[name]) {
    return internalGetIconData(data, name, []);
  }
  const tree = getIconsTree(data, [name])[name];
  return tree ? internalGetIconData(data, name, tree) : null;
}

const unitsSplit = /(-?[0-9.]*[0-9]+[0-9.]*)/g;
const unitsTest = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function calculateSize(size, ratio, precision) {
  if (ratio === 1) {
    return size;
  }
  precision = precision || 100;
  if (typeof size === "number") {
    return Math.ceil(size * ratio * precision) / precision;
  }
  if (typeof size !== "string") {
    return size;
  }
  const oldParts = size.split(unitsSplit);
  if (oldParts === null || !oldParts.length) {
    return size;
  }
  const newParts = [];
  let code = oldParts.shift();
  let isNumber = unitsTest.test(code);
  while (true) {
    if (isNumber) {
      const num = parseFloat(code);
      if (isNaN(num)) {
        newParts.push(code);
      } else {
        newParts.push(Math.ceil(num * ratio * precision) / precision);
      }
    } else {
      newParts.push(code);
    }
    code = oldParts.shift();
    if (code === void 0) {
      return newParts.join("");
    }
    isNumber = !isNumber;
  }
}

function splitSVGDefs(content, tag = "defs") {
  let defs = "";
  const index = content.indexOf("<" + tag);
  while (index >= 0) {
    const start = content.indexOf(">", index);
    const end = content.indexOf("</" + tag);
    if (start === -1 || end === -1) {
      break;
    }
    const endEnd = content.indexOf(">", end);
    if (endEnd === -1) {
      break;
    }
    defs += content.slice(start + 1, end).trim();
    content = content.slice(0, index).trim() + content.slice(endEnd + 1);
  }
  return {
    defs,
    content
  };
}
function mergeDefsAndContent(defs, content) {
  return defs ? "<defs>" + defs + "</defs>" + content : content;
}
function wrapSVGContent(body, start, end) {
  const split = splitSVGDefs(body);
  return mergeDefsAndContent(split.defs, start + split.content + end);
}

const isUnsetKeyword = (value) => value === "unset" || value === "undefined" || value === "none";
function iconToSVG(icon, customisations) {
  const fullIcon = {
    ...defaultIconProps,
    ...icon
  };
  const fullCustomisations = {
    ...defaultIconCustomisations,
    ...customisations
  };
  const box = {
    left: fullIcon.left,
    top: fullIcon.top,
    width: fullIcon.width,
    height: fullIcon.height
  };
  let body = fullIcon.body;
  [fullIcon, fullCustomisations].forEach((props) => {
    const transformations = [];
    const hFlip = props.hFlip;
    const vFlip = props.vFlip;
    let rotation = props.rotate;
    if (hFlip) {
      if (vFlip) {
        rotation += 2;
      } else {
        transformations.push(
          "translate(" + (box.width + box.left).toString() + " " + (0 - box.top).toString() + ")"
        );
        transformations.push("scale(-1 1)");
        box.top = box.left = 0;
      }
    } else if (vFlip) {
      transformations.push(
        "translate(" + (0 - box.left).toString() + " " + (box.height + box.top).toString() + ")"
      );
      transformations.push("scale(1 -1)");
      box.top = box.left = 0;
    }
    let tempValue;
    if (rotation < 0) {
      rotation -= Math.floor(rotation / 4) * 4;
    }
    rotation = rotation % 4;
    switch (rotation) {
      case 1:
        tempValue = box.height / 2 + box.top;
        transformations.unshift(
          "rotate(90 " + tempValue.toString() + " " + tempValue.toString() + ")"
        );
        break;
      case 2:
        transformations.unshift(
          "rotate(180 " + (box.width / 2 + box.left).toString() + " " + (box.height / 2 + box.top).toString() + ")"
        );
        break;
      case 3:
        tempValue = box.width / 2 + box.left;
        transformations.unshift(
          "rotate(-90 " + tempValue.toString() + " " + tempValue.toString() + ")"
        );
        break;
    }
    if (rotation % 2 === 1) {
      if (box.left !== box.top) {
        tempValue = box.left;
        box.left = box.top;
        box.top = tempValue;
      }
      if (box.width !== box.height) {
        tempValue = box.width;
        box.width = box.height;
        box.height = tempValue;
      }
    }
    if (transformations.length) {
      body = wrapSVGContent(
        body,
        '<g transform="' + transformations.join(" ") + '">',
        "</g>"
      );
    }
  });
  const customisationsWidth = fullCustomisations.width;
  const customisationsHeight = fullCustomisations.height;
  const boxWidth = box.width;
  const boxHeight = box.height;
  let width;
  let height;
  if (customisationsWidth === null) {
    height = customisationsHeight === null ? "1em" : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
    width = calculateSize(height, boxWidth / boxHeight);
  } else {
    width = customisationsWidth === "auto" ? boxWidth : customisationsWidth;
    height = customisationsHeight === null ? calculateSize(width, boxHeight / boxWidth) : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
  }
  const attributes = {};
  const setAttr = (prop, value) => {
    if (!isUnsetKeyword(value)) {
      attributes[prop] = value.toString();
    }
  };
  setAttr("width", width);
  setAttr("height", height);
  const viewBox = [box.left, box.top, boxWidth, boxHeight];
  attributes.viewBox = viewBox.join(" ");
  return {
    attributes,
    viewBox,
    body
  };
}

const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$f = createAstro();
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Icon;
  const req = Astro2.request;
  const { name = "", title, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new Error(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new Error('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new Error(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new Error(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new Error(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}>${unescapeHTML(normalizedBody)}</symbol>`} <use ${addAttribute(`#${id}`, "xlink:href")}></use> </svg>`;
}, "C:/Users/user/Documents/GitHub/vector-roof/node_modules/.pnpm/astro-icon@1.0.2/node_modules/astro-icon/components/Icon.astro", void 0);

const $$Astro$e = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="bg-[#2E3037] pt-12 lg:pt-24"> <div class="container"> <div class="flex flex-col lg:flex-row items-start justify-between gap-5 pb-10 lg:pb-20 border-b border-[#474951]"> <a href="/" class="flex shrink-0 items-center gap-3 z-[51] mb-10 lg:mb-0 relative"> ${renderComponent($$result, "Image", $$Image, { "src": import('../logo_devetpmk.mjs'), "quality": 100, "class": "size-9", "alt": "logo" })} <span class="text-sm text-[#F9F9F9] sm:text-[16px] font-extrabold leading-[18px] uppercase tracking-wide">Строительные <br> системы</span> </a> <div class="lg:self-center lg:mb-10"> <h3 class="text-white mb-3 lg:mb-6 text-sm">Услуги</h3> <ul class="grid lg:grid-cols-2 mb-7 lg:mb-10 gap-x-10 gap-y-3 text-[#A6B1B9] text-sm"> <li><a href="/projects/category/torch_applied_roofing" class="hover:text-primary transition-colors">Наплавляемая кровля</a></li> <li><a href="/projects/category/pvc_membrane_roofing" class="hover:text-primary transition-colors">Кровля из ПВХ мембраны</a></li> <li><a href="/projects/category/pitched_roofing" class="hover:text-primary transition-colors">Скатная кровля</a></li> <li><a href="/projects/category/metal_installation" class="hover:text-primary transition-colors">Монтаж металлоконструкций</a></li> <li><a href="/projects/category/engineering_waterproofing" class="hover:text-primary transition-colors">Гидроизоляция</a></li> <li><a href="/projects/category/facade_systems_installation" class="hover:text-primary transition-colors">Монтаж фасадных систем</a></li> </ul> <div class="flex gap-10 sm:gap-16 text-[#F9F9F9] text-sm"> <a href="/news" class="hover:text-primary transition-colors">Новости</a> <a href="/projects" class="hover:text-primary transition-colors">Проекты</a> <a href="/company" class="hover:text-primary transition-colors text-nowrap">О компании</a> </div> </div> <ul class="flex max-w-[191px] pt-10 flex-wrap lg:flex-col lg:flex-nowrap gap-5 text-[#F9F9F9] text-sm"> <li> <a href="tel:88002015566" class="flex items-center gap-2 hover:text-primary transition-colors"> ${renderComponent($$result, "Icon", $$Icon, { "name": "phone", "class": "size-6" })}
8 (800) 201 55 66
</a> </li> <li> <a href="tel:89029423732" class="flex items-center gap-2 hover:text-primary transition-colors"> ${renderComponent($$result, "Icon", $$Icon, { "name": "phone", "class": "size-6" })}
+7 (902) 942-37-32
</a> </li> <li> <a href="mailto:s.sistem.a@mail.ru" class="flex items-center gap-2 hover:text-primary transition-colors"> ${renderComponent($$result, "Icon", $$Icon, { "name": "email", "class": "size-6" })}
s.sistem.a@mail.ru
</a> </li> <li> <a href="https://yandex.ru/maps/62/krasnoyarsk/house/ulitsa_musorgskogo_3/bUsYfwVnT0YCQFtvfXV5cHVmbA==/?ll=92.927635%2C55.981958&z=17.08" target="_blank" class="flex items-center gap-2 hover:text-primary transition-colors"> ${renderComponent($$result, "Icon", $$Icon, { "name": "map", "class": "size-6" })}
г. Красноярск, Мусоргского, 3, оф. 302
</a> </li> </ul> </div> <div class="py-8 flex flex-col lg:flex-row items-start gap-5 text-[#9294A2] text-[12px]"> <div class="flex flex-col xs:flex-row items-start xs:items-center gap-[10px] pr-[60px]"> <a href="#">Разработка сайта</a> <span class="w-[1px] h-[12px] bg-[#9294A2] hidden xs:hidden"></span> <a href="#">Политика конфиденциальности</a> </div> <p class="mr-auto">© «Строительные системы», Кровельные и гидроизоляционные работы в Красноярском крае</p> <span>2024 г</span> </div> </div> </footer>`;
}, "C:/Users/user/Documents/GitHub/vector-roof/src/components/Footer.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$d = createAstro();
const $$Astronav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Astronav;
  const { closeOnClick = false } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", " <script>(function(){", '\n["DOMContentLoaded", "astro:after-swap"].forEach((event) => {\n  document.addEventListener(event, addListeners);\n});\n\n// Function to clone and replace elements\nfunction cloneAndReplace(element) {\n  const clone = element.cloneNode(true);\n  element.parentNode.replaceChild(clone, element);\n}\n\nfunction addListeners() {\n  // Clean up existing listeners\n  const oldMenuButton = document.getElementById("astronav-menu");\n  if (oldMenuButton) {\n    cloneAndReplace(oldMenuButton);\n  }\n\n  const oldDropdownMenus = document.querySelectorAll(".astronav-dropdown");\n  oldDropdownMenus.forEach((menu) => {\n    cloneAndReplace(menu);\n  });\n\n  // Mobile nav toggle\n  const menuButton = document.getElementById("astronav-menu");\n  menuButton && menuButton.addEventListener("click", toggleMobileNav);\n\n  // Dropdown menus\n  const dropdownMenus = document.querySelectorAll(".astronav-dropdown");\n  dropdownMenus.forEach((menu) => {\n    const button = menu.querySelector("button");\n    button &&\n      button.addEventListener("click", (event) =>\n        toggleDropdownMenu(event, menu, dropdownMenus)\n      );\n\n    // Handle Submenu Dropdowns\n    const dropDownSubmenus = menu.querySelectorAll(\n      ".astronav-dropdown-submenu"\n    );\n\n    dropDownSubmenus.forEach((submenu) => {\n      const submenuButton = submenu.querySelector("button");\n      submenuButton &&\n        submenuButton.addEventListener("click", (event) => {\n          event.stopImmediatePropagation();\n          toggleSubmenuDropdown(event, submenu);\n        });\n    });\n  });\n\n  // Clicking away from dropdown will remove the dropdown class\n  document.addEventListener("click", closeAllDropdowns);\n\n  if (closeOnClick) {\n    handleCloseOnClick();\n  }\n}\n\nfunction toggleMobileNav() {\n  [...document.querySelectorAll(".astronav-toggle")].forEach((el) => {\n    el.classList.toggle("hidden");\n  });\n}\n\nfunction toggleDropdownMenu(event, menu, dropdownMenus) {\n  toggleMenu(menu);\n\n  // Close one dropdown when selecting another\n  Array.from(dropdownMenus)\n    .filter((el) => el !== menu && !menu.contains(el))\n    .forEach(closeMenu);\n\n  event.stopPropagation();\n}\n\nfunction toggleSubmenuDropdown(event, submenu) {\n  event.stopPropagation();\n  toggleMenu(submenu);\n\n  // Close sibling submenus at the same nesting level\n  const siblingSubmenus = submenu\n    .closest(".astronav-dropdown")\n    .querySelectorAll(".astronav-dropdown-submenu");\n  Array.from(siblingSubmenus)\n    .filter((el) => el !== submenu && !submenu.contains(el))\n    .forEach(closeMenu);\n}\n\nfunction closeAllDropdowns(event) {\n  const dropdownMenus = document.querySelectorAll(".dropdown-toggle");\n  const dropdownParent = document.querySelectorAll(\n    ".astronav-dropdown, .astronav-dropdown-submenu"\n  );\n  const isButtonInsideDropdown = [\n    ...document.querySelectorAll(\n      ".astronav-dropdown button, .astronav-dropdown-submenu button, #astronav-menu"\n    ),\n  ].some((button) => button.contains(event.target));\n  if (!isButtonInsideDropdown) {\n    dropdownMenus.forEach((d) => {\n      // console.log("I ran", d);\n      // if (!d.contains(event.target)) {\n      d.classList.remove("open");\n      d.removeAttribute("open");\n      d.classList.add("hidden");\n      // }\n    });\n    dropdownParent.forEach((d) => {\n      d.classList.remove("open");\n      d.removeAttribute("open");\n      d.setAttribute("aria-expanded", "false");\n    });\n  }\n}\n\nfunction toggleMenu(menu) {\n  menu.classList.toggle("open");\n  const expanded = menu.getAttribute("aria-expanded") === "true";\n  menu.setAttribute("aria-expanded", expanded ? "false" : "true");\n  menu.hasAttribute("open")\n    ? menu.removeAttribute("open")\n    : menu.setAttribute("open", "");\n\n  const dropdownToggle = menu.querySelector(".dropdown-toggle");\n  const dropdownExpanded = dropdownToggle.getAttribute("aria-expanded");\n  dropdownToggle.classList.toggle("hidden");\n  dropdownToggle.setAttribute(\n    "aria-expanded",\n    dropdownExpanded === "true" ? "false" : "true"\n  );\n}\n\nfunction closeMenu(menu) {\n  // console.log("closing", menu);\n  menu.classList.remove("open");\n  menu.removeAttribute("open");\n  menu.setAttribute("aria-expanded", "false");\n  const dropdownToggles = menu.querySelectorAll(".dropdown-toggle");\n  dropdownToggles.forEach((toggle) => {\n    toggle.classList.add("hidden");\n    toggle.setAttribute("aria-expanded", "false");\n  });\n}\n\nfunction handleCloseOnClick() {\n  const navMenuItems = document.querySelector(".astronav-items");\n  const navToggle = document.getElementById("astronav-menu");\n  const navLink = navMenuItems && navMenuItems.querySelectorAll("a");\n\n  const MenuIcons = navToggle.querySelectorAll(".astronav-toggle");\n\n  navLink &&\n    navLink.forEach((item) => {\n      item.addEventListener("click", () => {\n        navMenuItems?.classList.add("hidden");\n        MenuIcons.forEach((el) => {\n          el.classList.toggle("hidden");\n        });\n      });\n    });\n}\n})();<\/script>'])), renderSlot($$result, $$slots["default"]), defineScriptVars({ closeOnClick }));
}, "C:/Users/user/Documents/GitHub/vector-roof/node_modules/.pnpm/astro-navbar@2.3.0/node_modules/astro-navbar/src/Astronav.astro", void 0);

const $$Astro$c = createAstro();
const $$MenuIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$MenuIcon;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button id="astronav-menu" aria-label="Toggle Menu"> ${renderSlot($$result, $$slots["default"], renderTemplate` <svg fill="currentColor"${addAttribute([className], "class:list")} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <title>Toggle Menu</title> <path class="astronav-close-icon astronav-toggle hidden" fill-rule="evenodd" clip-rule="evenodd" d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"></path> <path class="astronav-open-icon astronav-toggle" fill-rule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"></path> </svg> `)} </button>`;
}, "C:/Users/user/Documents/GitHub/vector-roof/node_modules/.pnpm/astro-navbar@2.3.0/node_modules/astro-navbar/src/components/MenuIcon.astro", void 0);

const $$Astro$b = createAstro();
const $$OpenIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$OpenIcon;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(["astronav-open-icon astronav-toggle", className], "class:list")}>${renderSlot($$result, $$slots["default"])}</span>`;
}, "C:/Users/user/Documents/GitHub/vector-roof/node_modules/.pnpm/astro-navbar@2.3.0/node_modules/astro-navbar/src/components/OpenIcon.astro", void 0);

const $$Astro$a = createAstro();
const $$CloseIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$CloseIcon;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(["astronav-close-icon astronav-toggle hidden", className], "class:list")}>${renderSlot($$result, $$slots["default"])}</span>`;
}, "C:/Users/user/Documents/GitHub/vector-roof/node_modules/.pnpm/astro-navbar@2.3.0/node_modules/astro-navbar/src/components/CloseIcon.astro", void 0);

const $$Astro$9 = createAstro();
const $$MenuItems = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$MenuItems;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav${addAttribute(["astronav-items astronav-toggle", className], "class:list")}> ${renderSlot($$result, $$slots["default"])} </nav>`;
}, "C:/Users/user/Documents/GitHub/vector-roof/node_modules/.pnpm/astro-navbar@2.3.0/node_modules/astro-navbar/src/components/MenuItems.astro", void 0);

const $$Astro$8 = createAstro();
const $$Dropdown = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Dropdown;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<menu${addAttribute(["astronav-dropdown", className], "class:list")} aria-expanded="false">${renderSlot($$result, $$slots["default"])}</menu>`;
}, "C:/Users/user/Documents/GitHub/vector-roof/node_modules/.pnpm/astro-navbar@2.3.0/node_modules/astro-navbar/src/components/Dropdown.astro", void 0);

const $$Astro$7 = createAstro();
const $$DropdownSubmenu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$DropdownSubmenu;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["astronav-dropdown-submenu", className], "class:list")} aria-expanded="false"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/user/Documents/GitHub/vector-roof/node_modules/.pnpm/astro-navbar@2.3.0/node_modules/astro-navbar/src/components/DropdownSubmenu.astro", void 0);

const $$Astro$6 = createAstro();
const $$DropdownItems = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$DropdownItems;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["astronav-dropdown dropdown-toggle hidden", className], "class:list")} aria-expanded="false"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/user/Documents/GitHub/vector-roof/node_modules/.pnpm/astro-navbar@2.3.0/node_modules/astro-navbar/src/components/DropdownItems.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$5 = createAstro();
const $$StickyHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$StickyHeader;
  const {
    scrollY = 100,
    defaultClass = "",
    activeClass = "",
    class: className = ""
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", "<header", "> ", " </header> <script>(function(){", '\nlet scrollPos = 0;\nlet ticking = false;\n\nfunction OnScroll(scrollPos) {\n  const headers = document.querySelectorAll(".astronav-sticky-header");\n  const classArray = activeClass.split(" ");\n  const replaceArray = defaultClass.split(" ");\n\n  headers.forEach((header) => {\n    if (scrollPos > scrollY) {\n      header.classList.remove(...replaceArray);\n      header.classList.add("is-active", ...classArray);\n      header.setAttribute("active", "");\n    }\n    //reduce the scrollY to avoid flickering when scrolling up\n    if (scrollPos < Math.max(scrollY - 20, 0)) {\n      header.classList.remove("is-active", ...classArray);\n      header.classList.add(...replaceArray);\n      header.removeAttribute("active");\n    }\n  });\n}\n\n// Scroll event throttling as per MDN\n// https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event\n\ndocument.addEventListener("scroll", (event) => {\n  scrollPos = window.scrollY;\n  if (!ticking) {\n    window.requestAnimationFrame(() => {\n      OnScroll(scrollPos);\n      ticking = false;\n    });\n\n    ticking = true;\n  }\n});\n})();<\/script>'])), maybeRenderHead(), addAttribute(["astronav-sticky-header", className, defaultClass], "class:list"), renderSlot($$result, $$slots["default"]), defineScriptVars({ scrollY, defaultClass, activeClass }));
}, "C:/Users/user/Documents/GitHub/vector-roof/node_modules/.pnpm/astro-navbar@2.3.0/node_modules/astro-navbar/src/components/StickyHeader.astro", void 0);

const SaleForm$1 = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset
  } = useForm();
  async function onSubmit(formData, e) {
    try {
      e.preventDefault();
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: "Подана заявка с формы"
        })
      });
      if (!res.ok) {
        toast.error("Упс, что-то пошло не так Попробуйте ещё раз", {
          duration: 3e3,
          position: "bottom-center"
        });
      } else {
        toast.success("Письмо успешно отправлено!", {
          duration: 3e3,
          position: "bottom-center"
        });
      }
    } catch (error) {
      console.log(error);
    }
    reset();
  }
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit(onSubmit), children: [
    /* @__PURE__ */ jsxs("fieldset", { className: "flex flex-col w-full gap-4 mb-5", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          required: true,
          type: "text",
          ...register("name", { required: true, maxLength: 30 }),
          placeholder: "Имя",
          className: "input h-[52px] lg:h-[44px] focus:ring-1 focus:ring-[#7AD9A0] rounded border-none w-full"
        }
      ),
      /* @__PURE__ */ jsx(
        "input",
        {
          required: true,
          type: "email",
          ...register("email", {
            required: true,
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format"
            }
          }),
          placeholder: "Email",
          className: "input h-[52px] lg:h-[44px] focus:ring-1 focus:ring-[#7AD9A0] rounded border-none w-full"
        }
      ),
      /* @__PURE__ */ jsx("button", { className: "button font-semibold  disabled:bg-gray-500 lg:py-2.5 lg:px-4 w-full lg:w-auto", disabled: isSubmitting, children: "Оставить заявку" })
    ] }),
    /* @__PURE__ */ jsxs("label", { className: "flex items-center text-[#2E3037] gap-2 cursor-pointer", children: [
      /* @__PURE__ */ jsx("input", { type: "checkbox", required: true, className: "form-checkbox rounded focus:ring-0 border-gray-300 text-primary" }),
      /* @__PURE__ */ jsx("span", { className: "text-[12px] sm:text-sm", children: "Я согласен с политикой конфиденциальности" })
    ] })
  ] });
};

function MyModal() {
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        onClick: openModal,
        className: "text-[#4D4E52] hidden sm:block hover:text-primary self-end border-b border-dashed border-[#4D4E52] text-sm",
        children: "Заказать звонок"
      }
    ),
    /* @__PURE__ */ jsx(Transition, { appear: true, show: isOpen, as: Fragment$1, children: /* @__PURE__ */ jsxs(Dialog, { as: "div", className: "relative z-50", onClose: closeModal, children: [
      /* @__PURE__ */ jsx(
        Transition.Child,
        {
          as: Fragment$1,
          enter: "ease-out duration-300",
          enterFrom: "opacity-0",
          enterTo: "opacity-100",
          leave: "ease-in duration-200",
          leaveFrom: "opacity-100",
          leaveTo: "opacity-0",
          children: /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-black/25" })
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "fixed inset-0 overflow-y-auto", children: /* @__PURE__ */ jsx("div", { className: "flex min-h-full items-center justify-center p-4 text-center", children: /* @__PURE__ */ jsx(
        Transition.Child,
        {
          as: Fragment$1,
          enter: "ease-out duration-300",
          enterFrom: "opacity-0 scale-95",
          enterTo: "opacity-100 scale-100",
          leave: "ease-in duration-200",
          leaveFrom: "opacity-100 scale-100",
          leaveTo: "opacity-0 scale-95",
          children: /* @__PURE__ */ jsxs(Dialog.Panel, { className: "w-full max-w-md transform pt-[80px] pb-[60px] px-[50px] relative overflow-hidden bg-[#F4F3F4] p-6 text-left align-middle shadow-xl transition-all", children: [
            /* @__PURE__ */ jsx(Dialog.Title, { as: "h3", className: "text-2xl lg:text-4xl  font-extrabold uppercase mb-1 text-center text-[#282E35]", children: "Заказать звонок" }),
            /* @__PURE__ */ jsxs("p", { className: "text-[#848896] lg:text-[18px] lg:leading-[21px] text-center mt-2 mb-5", children: [
              "Оставьте ваши контакты и мы ",
              /* @__PURE__ */ jsx("br", {}),
              " свяжемся с вами в ближайшее время"
            ] }),
            /* @__PURE__ */ jsx(SaleForm$1, {}),
            /* @__PURE__ */ jsx("button", { type: "button", className: "absolute right-5 top-5 hover:text-primary transition-colors ", onClick: closeModal, children: /* @__PURE__ */ jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { d: "M2 2L22 22M22 2L2 22", stroke: "currentColor", strokeWidth: "3" }) }) })
          ] })
        }
      ) }) })
    ] }) })
  ] });
}

const $$Astro$4 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Header;
  const menuLinks = [
    { label: "\u0423\u0441\u043B\u0443\u0433\u0438", href: "/#services" },
    { label: "\u041F\u0440\u043E\u0435\u043A\u0442\u044B", href: "/projects" },
    { label: "\u041A\u043B\u0438\u0435\u043D\u0442\u044B", href: "/#clients" },
    { label: "\u041D\u043E\u0432\u043E\u0441\u0442\u0438", href: "/news" }
  ];
  return renderTemplate`${renderComponent($$result, "StickyHeader", $$StickyHeader, { "class": "p-3 sticky bg-white z-30 top-0 transition-all w-full", "defaultClass": "p-3", "activeClass": "drop-shadow-md p-3" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container px-0"> ${renderComponent($$result2, "Astronav", $$Astronav, { "closeOnClick": true }, { "default": ($$result3) => renderTemplate` <div class="flex justify-between items-center w-full"> <a href="/" class="flex items-center gap-2 z-[51] relative"> ${renderComponent($$result3, "Image", $$Image, { "src": import('../logo_devetpmk.mjs'), "quality": 100, "class": "size-9 invert", "alt": "logo" })} <span class="text-[12px] sm:text-[16px] font-extrabold leading-[18px] uppercase tracking-wide">Строительные <br> системы</span> </a> ${renderComponent($$result3, "MenuItems", $$MenuItems, { "class": "hidden fixed z-2 top-0 left-0 z-50 bg-white w-full h-dvh lg:h-auto lg:relative lg:w-auto lg:flex flex-auto justify-start lg:pl-14" }, { "default": ($$result4) => renderTemplate` <ul class="w-full pt-32 justify-center text-center lg:w-aut lg:pt-0 gap-5 lg:justify-start flex flex-col lg:flex-row xl:gap-14"> ${menuLinks.map((item) => renderTemplate`<li class="text-xl lg:text-base font-bold hover:text-primary transition-colors"> <a${addAttribute(item.href, "href")}>${item.label}</a> </li>`)} </ul> ` })} <div class="header-contacts z-50 flex items-center sm:items-start gap-3 xl:gap-8"> <a href="tel:88002015566" class="hidden lg:flex items-center gap-2 hover:text-primary transition-colors"> <span class="grid w-6 h-6 rounded-full place-items-center place-content-center bg-[#2E3037] shrink-0"> ${renderComponent($$result3, "Icon", $$Icon, { "name": "phone", "class": "w-[18px] h-[18px] text-white" })} </span> <span class="font-bold">8 (800) 201 55 66</span> </a> <div class="flex flex-col"> <a href="tel:+79029423732" class="text-sm sm:text-base flex items-center gap-2 hover:text-primary transition-colors"> <span class="hidden sm:grid w-6 h-6 rounded-full place-items-center place-content-center bg-primary shrink-0"> ${renderComponent($$result3, "Icon", $$Icon, { "name": "phone", "class": "w-[18px] h-[18px] text-white" })} </span> <span class="font-bold">+7 (902) 942 37 32</span> </a> ${renderComponent($$result3, "Modal", MyModal, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/user/Documents/GitHub/vector-roof/src/components/Modal", "client:component-export": "default" })} </div> <div class="block lg:hidden"> ${renderComponent($$result3, "MenuIcon", $$MenuIcon, { "class": "size-7 text-[#2E3037]" })} </div> </div> </div> ` })} </div> ` })}`;
}, "C:/Users/user/Documents/GitHub/vector-roof/src/components/Header.astro", void 0);

const $$Astro$3 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="ru" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.ico"><meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}<title>${title}</title>${renderHead()}</head> <body class="bg-white text-secondary overflow-x-hidden relative"> <div class="wrapper overflow-clip min-h-screen flex flex-col"> ${renderComponent($$result, "Header", $$Header, {})} <main class="flex-auto"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </div> </body></html>`;
}, "C:/Users/user/Documents/GitHub/vector-roof/src/layouts/Layout.astro", void 0);

async function fetchAPI({ query, variables = {} }) {
  const headers = { "Content-Type": "application/json" };
  const res = await fetch("https://vektorb760-wordpress-tj3bk.tw1.ru/graphql", {
    method: "POST",
    headers,
    body: JSON.stringify({ query, variables })
  });
  const json = await res.json();
  if (json.errors) {
    console.log(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

const $$Astro$2 = createAstro();
const $$slug$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$slug$1;
  const customCrumbs = [
    { text: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F", href: "/" },
    { text: "\u041D\u043E\u0432\u043E\u0441\u0442\u0438", href: "/news" }
  ];
  const { slug } = Astro2.params;
  const data = await fetchAPI({
    query: `
  query posts {
    posts {
      nodes { slug title  content(format: RENDERED)  excerpt featuredImage {  node {  mediaItemUrl }  } }
    }
  } 
  `
  });
  const currentPost = data.posts.nodes.find((item) => item.slug === slug);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog post" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-[#F0F0F0] py-9"> <div class="container"> <div class="mb-10 sm:mb-24"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "crumbs": customCrumbs })} </div> <div class="flex-stack flex-col xs:flex-row items-start sm:items-center gap-3 mb-16"> <h2 class="section-title">Новости</h2> <span class="text-[#9EA1AB] -order-1 self-end xs:order-1 xs:self-center font-semibold text-nowrap shrink-0"> [ О самом важном ]
</span></div> <div class="flex flex-col lg:flex-row items-start gap-10"> <div class="sm:max-w-[290px] shrink-0"> ${renderComponent($$result2, "Image", $$Image, { "src": currentPost.featuredImage.node.mediaItemUrl, "width": 294, "height": 238, "class": "rounded-lg", "alt": "project" })} </div> <article class="prose prose-sm max-w-full"> <h1 class="text-xl uppercase">${currentPost.title}</h1> ${renderComponent($$result2, "Fragment", Fragment$2, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(currentPost.content)}` })} </article> </div> </div> </div> ` })}`;
}, "C:/Users/user/Documents/GitHub/vector-roof/src/pages/news/[slug].astro", void 0);

const $$file$1 = "C:/Users/user/Documents/GitHub/vector-roof/src/pages/news/[slug].astro";
const $$url$1 = "/news/[slug]";

const _slug_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const myBackground = new Proxy({"src":"/_astro/pricing-bg.AX-HZ06O.png","width":1400,"height":466,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Documents/GitHub/vector-roof/src/assets/pricing-bg.png";
							}
							
							return target[name];
						}
					});

const SaleForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);
  const [content, setContent] = useState(null);
  const [filename, setFilename] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors }
  } = useForm();
  async function onSubmit(formData, e) {
    try {
      let base64Content;
      e.preventDefault();
      if (content) {
        base64Content = content.split(",")[1];
      }
      const res = await fetch("/api/sendEmailFooter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          content: base64Content,
          filename
        })
      });
      if (!res.ok) {
        toast.error("Упс, что-то пошло не так Попробуйте ещё раз", {
          duration: 3e3,
          position: "bottom-center"
        });
      } else {
        toast.success("Письмо успешно отправлено!", {
          duration: 3e3,
          position: "bottom-center"
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
  const onAddFileAction = (e) => {
    const reader = new FileReader();
    const files = e.target.files;
    reader.onload = (r) => {
      setContent(r.target.result.toString());
      setFilename(files[0].name);
    };
    reader.readAsDataURL(files[0]);
    const file = e.target.files[0];
    setSelectedFile(file);
  };
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  return /* @__PURE__ */ jsxs("form", { className: " max-w-[750px]", onSubmit: handleSubmit(onSubmit), children: [
    /* @__PURE__ */ jsx("div", { className: "flex flex-col md:flex-row items-end gap-5", children: /* @__PURE__ */ jsxs("fieldset", { className: "w-full mb-1", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            required: true,
            ...register("name", { required: true, maxLength: 30 }),
            placeholder: "Имя",
            className: `input h-[52px] focus:ring-1 focus:ring-[#7AD9A0] lg:h-[44px] rounded border-none w-full ${errors.name && "ring-1 ring-primary"}`
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "email",
            required: true,
            ...register("email", {
              required: true,
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address"
              }
            }),
            placeholder: "Email",
            className: `input h-[52px] lg:h-[44px] focus:ring-[#7AD9A0] rounded border-none w-full 
              ${errors.email && "ring-1 ring-primary"}`
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "textarea",
        {
          placeholder: "Краткое описание задачи",
          ...register("message", { maxLength: 300 }),
          className: `input resize-none h-[80px] focus:ring-1 focus:ring-[#7AD9A0] rounded border-none w-full `
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex-stack flex-col xs:flex-row gap-2 items-start mb-2", children: [
      /* @__PURE__ */ jsxs(
        "label",
        {
          htmlFor: "file",
          onClick: handleButtonClick,
          className: `flex relative items-center cursor-pointer  hover:text-primary transition-colors gap-2 text-sm text-[#585A5F]`,
          children: [
            /* @__PURE__ */ jsx("svg", { width: "22", height: "22", viewBox: "0 0 22 22", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx(
              "path",
              {
                d: "M10.5132 18.7633L11.4854 19.7354L19.7354 11.4854C21.8982 9.32257 21.8982 5.8012 19.7354 3.63832C17.5711 1.47407 14.0525 1.47407 11.8882 3.63832L2.95074 12.5758C1.166 14.3606 1.166 17.2632 2.95074 19.0479C3.84174 19.9389 5.01462 20.3872 6.18749 20.3872C7.36037 20.3872 8.53187 19.9403 9.42424 19.0479L17.6742 10.7979C18.3549 10.1173 18.7289 9.21257 18.7289 8.25007C18.7289 7.28757 18.3549 6.38282 17.6729 5.70082C16.3116 4.33957 13.937 4.33957 12.5757 5.70082L5.01324 13.2633L5.98537 14.2354L13.5479 6.67295C14.388 5.83282 15.8606 5.83282 16.7007 6.67295C17.1215 7.0937 17.3539 7.65332 17.3539 8.25007C17.3539 8.84682 17.1215 9.40645 16.7007 9.82582L8.45074 18.0758C7.20224 19.3243 5.17137 19.3243 3.92287 18.0758C2.67437 16.8273 2.67437 14.7964 3.92287 13.5479L12.8604 4.61045C14.4884 2.98245 17.1352 2.98245 18.7632 4.61045C20.3912 6.23845 20.3912 8.88532 18.7632 10.5133L10.5132 18.7633Z",
                fill: "currentColor"
              }
            ) }),
            /* @__PURE__ */ jsx("span", { children: selectedFile ? selectedFile.name : "Прикрепить файл" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                id: "file",
                ref: fileInputRef,
                className: "opacity-0 absolute h-0 w-0",
                type: "file",
                ...register("file"),
                onChange: onAddFileAction,
                accept: "image/*"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          className: "button hover:bg-[#2E3037] disabled:bg-gray-500 w-full xs:w-auto px-2 sm:px-7 text-sm sm:text-base",
          disabled: isSubmitting,
          children: "Оставить заявку"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("label", { className: "flex items-center text-[#585A5F] lg:text-white gap-2 cursor-pointer", children: [
      /* @__PURE__ */ jsx("input", { type: "checkbox", required: true, className: "form-checkbox  rounded-sm border border-[#D5D5D5] text-primary" }),
      /* @__PURE__ */ jsx("span", { className: "text-[12px] text-[#585A5F]", children: "Я согласен с политикой конфиденциальности сайта" })
    ] }),
    /* @__PURE__ */ jsx(Toaster, {})
  ] });
};

const $$Astro$1 = createAstro();
const $$Pricing = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Pricing;
  const saleBG = await getImage({ src: myBackground, format: "webp", quality: 100 });
  return renderTemplate`${maybeRenderHead()}<div class="bg-cover sale-form relative bg-no-repeat bg-center min-h-[695px] sm:min-h-0"${addAttribute(`background-image: url(${saleBG.src});`, "style")}> <div class="container relative z-20"> <div class="py-14 lg:py-20"> <h2 class="section-title text-[#0A0B0F] mb-2">Хотите получить расчет стоимости?</h2> <p class="text-[#848896] text-lg mb-8 sm:mb-10">Оставьте чертеж или фото объекта и мы с вами свяжемся</p> ${renderComponent($$result, "PricingForm", SaleForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/user/Documents/GitHub/vector-roof/src/components/forms/PricingForm", "client:component-export": "default" })} </div> </div> ${renderComponent($$result, "Image", $$Image, { "src": import('../pricing-mask_kgp8ymha.mjs'), "class": "sm:hidden absolute bottom-0 left-0 w-full h-full z-0", "alt": "mask" })} </div>`;
}, "C:/Users/user/Documents/GitHub/vector-roof/src/components/Pricing.astro", void 0);

const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const data = await fetchAPI({
    query: `
  query projects {
    projects {
      nodes {
        id
        title slug excerpt
        featuredImage {
          node { mediaItemUrl }
        }
        object {
        projectName  videoreview review  place director description completeYear area
        gallery {
            galleryImage {
              node {  mediaItemUrl }
            }
          }
        }
      }
    }
  } 
  `
  });
  const { slug } = Astro2.params;
  const slugExists = data.projects.nodes.some((node) => node.slug === slug);
  if (!slugExists) {
    return new Response(null, {
      status: 404,
      statusText: "Not found"
    });
  }
  const currentObject = data.projects.nodes.filter((item) => item.slug === slug);
  const recentProjects = data.projects.nodes.filter((item) => item.slug !== slug);
  const customCrumbs = [
    { text: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F", href: "/" },
    { text: "\u041E\u0431\u044A\u0435\u043A\u0442\u044B", href: "/projects" },
    { text: currentObject[0].object.projectName }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Object", "data-astro-cid-ovxcmftc": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-[#F0F0F0] pt-9" data-astro-cid-ovxcmftc> <div class="container" data-astro-cid-ovxcmftc> <div class="mb-10 sm:mb-24" data-astro-cid-ovxcmftc> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "crumbs": customCrumbs, "data-astro-cid-ovxcmftc": true })} </div> <div class="flex flex-col lg:flex-row items-center lg:items-start gap-5 pb-14 sm:pb-32" data-astro-cid-ovxcmftc> <div class="embla relative" data-astro-cid-ovxcmftc> <div class="embla__viewport" data-astro-cid-ovxcmftc> <div class="embla__container lg:max-w-[610px]" data-astro-cid-ovxcmftc> ${currentObject[0].object.gallery && currentObject[0].object.gallery.map((image) => renderTemplate`<div class="embla__slide" data-astro-cid-ovxcmftc> ${renderComponent($$result2, "Image", $$Image, { "src": image.galleryImage.node.mediaItemUrl, "width": 100, "height": 475, "quality": 100, "alt": "\u041E\u0442\u0437\u044B\u0432", "class": "w-full object-cover", "data-astro-cid-ovxcmftc": true })} </div>`)} </div> <button class="embla__prev z-10 shrink-0 absolute left-5 top-1/2" data-astro-cid-ovxcmftc> <svg width="20" height="35" viewBox="0 0 20 35" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-ovxcmftc> <path d="M18.5 2L3 17.5L18.5 33" stroke="white" stroke-width="4" data-astro-cid-ovxcmftc></path> </svg> </button> <button class="embla__next z-10 shrink-0 absolute right-5 top-1/2" data-astro-cid-ovxcmftc> <svg width="20" height="35" viewBox="0 0 20 35" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-ovxcmftc> <path d="M1.5 2L17 17.5L1.5 33" stroke="white" stroke-width="4" data-astro-cid-ovxcmftc></path> </svg> </button> </div> </div> <div class="w-full lg:max-w-[610px]" data-astro-cid-ovxcmftc> <div class="rounded-lg p-5 sm:p-[30px] bg-white mb-7" data-astro-cid-ovxcmftc> <h1 class="section-title text-xl md:text-[28px] mb-8" data-astro-cid-ovxcmftc> ${currentObject[0].object.projectName} </h1> <div class="mb-7 sm:mb-12" data-astro-cid-ovxcmftc> <span class="text-[#56585E] block mb-1" data-astro-cid-ovxcmftc>Местоположение</span> <h2 class="text-sm sm:text-xl flex items-center gap-2 font-bold uppercase" data-astro-cid-ovxcmftc> ${renderComponent($$result2, "Icon", $$Icon, { "name": "map", "class": "text-primary size-5 sm:size-6", "data-astro-cid-ovxcmftc": true })} ${currentObject[0].object.place} </h2> </div> <div class="flex gap-5 pb-10 sm:pb-8 sm:border-b sm:border-[#D6D6D6]" data-astro-cid-ovxcmftc> <div class="border w-full sm:w-auto border-[#D6D6D6] rounded flex flex-col sm:flex-row items-start sm:items-center" data-astro-cid-ovxcmftc> <div class="p-6" data-astro-cid-ovxcmftc> ${renderComponent($$result2, "Icon", $$Icon, { "name": "square", "class": "size-8", "data-astro-cid-ovxcmftc": true })} </div> <div class="flex flex-col p-2 sm:p-4 sm:border-l sm:border-[#D6D6D6] font-semibold" data-astro-cid-ovxcmftc> <span class="text-[#848898]" data-astro-cid-ovxcmftc>Площадь объекта:</span> <span class="text-primary text-xl font-bold" data-astro-cid-ovxcmftc> ${currentObject[0].object.area}</span> </div> </div> <div class="border w-full sm:w-auto border-[#D6D6D6] rounded flex flex-col sm:flex-row items-start sm:items-cente" data-astro-cid-ovxcmftc> <div class="p-6" data-astro-cid-ovxcmftc> <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none" data-astro-cid-ovxcmftc> <g clip-path="url(#clip0_1_926)" data-astro-cid-ovxcmftc> <path d="M8.81098 12.1915C8.81098 11.939 8.60633 11.7344 8.35389 11.7344H5.06647C4.81403 11.7344 4.60938 11.939 4.60938 12.1915V15.4788C4.60938 15.7313 4.81403 15.9359 5.06647 15.9359H8.35389C8.60633 15.9359 8.81098 15.7313 8.81098 15.4788V12.1915ZM7.8968 15.0217H5.52356V12.6486H7.8968V15.0217Z" fill="#A8A8A8" data-astro-cid-ovxcmftc></path> <path d="M14.6704 12.1915C14.6704 11.939 14.4657 11.7344 14.2133 11.7344H10.9258C10.6734 11.7344 10.4688 11.939 10.4688 12.1915V15.4788C10.4688 15.7313 10.6734 15.9359 10.9258 15.9359H14.2133C14.4657 15.9359 14.6704 15.7313 14.6704 15.4788V12.1915ZM13.7562 15.0217H11.3829V12.6486H13.7562V15.0217Z" fill="#A8A8A8" data-astro-cid-ovxcmftc></path> <path d="M20.5297 12.1915C20.5297 11.939 20.3251 11.7344 20.0726 11.7344H16.7852C16.5327 11.7344 16.3281 11.939 16.3281 12.1915V15.4788C16.3281 15.7313 16.5327 15.9359 16.7852 15.9359H20.0726C20.3251 15.9359 20.5297 15.7313 20.5297 15.4788V12.1915ZM19.6155 15.0217H17.2423V12.6486H19.6155V15.0217Z" fill="#A8A8A8" data-astro-cid-ovxcmftc></path> <path d="M22.6446 15.9359H25.932C26.1845 15.9359 26.3891 15.7313 26.3891 15.4788V12.1915C26.3891 11.939 26.1845 11.7344 25.932 11.7344H22.6446C22.3921 11.7344 22.1875 11.939 22.1875 12.1915V15.4788C22.1875 15.7313 22.3921 15.9359 22.6446 15.9359ZM23.1017 12.6486H25.4749V15.0217H23.1017V12.6486Z" fill="#A8A8A8" data-astro-cid-ovxcmftc></path> <path d="M8.81098 18.1407C8.81098 17.8882 8.60633 17.6836 8.35389 17.6836H5.06647C4.81403 17.6836 4.60938 17.8882 4.60938 18.1407V21.428C4.60938 21.6805 4.81403 21.8851 5.06647 21.8851H8.35389C8.60633 21.8851 8.81098 21.6805 8.81098 21.428V18.1407ZM7.8968 20.971H5.52356V18.5978H7.8968V20.971Z" fill="#A8A8A8" data-astro-cid-ovxcmftc></path> <path d="M14.6704 18.1407C14.6704 17.8882 14.4657 17.6836 14.2133 17.6836H10.9258C10.6734 17.6836 10.4688 17.8882 10.4688 18.1407V21.428C10.4688 21.6805 10.6734 21.8851 10.9258 21.8851H14.2133C14.4657 21.8851 14.6704 21.6805 14.6704 21.428V18.1407ZM13.7562 20.971H11.3829V18.5978H13.7562V20.971Z" fill="#A8A8A8" data-astro-cid-ovxcmftc></path> <path d="M20.5297 18.1407C20.5297 17.8882 20.3251 17.6836 20.0726 17.6836H16.7852C16.5327 17.6836 16.3281 17.8882 16.3281 18.1407V21.428C16.3281 21.6805 16.5327 21.8851 16.7852 21.8851H20.0726C20.3251 21.8851 20.5297 21.6805 20.5297 21.428V18.1407ZM19.6155 20.971H17.2423V18.5978H19.6155V20.971Z" fill="#A8A8A8" data-astro-cid-ovxcmftc></path> <path d="M22.1875 21.428C22.1875 21.6805 22.3921 21.8851 22.6446 21.8851H25.932C26.1845 21.8851 26.3891 21.6805 26.3891 21.428V18.1407C26.3891 17.8882 26.1845 17.6836 25.932 17.6836H22.6446C22.3921 17.6836 22.1875 17.8882 22.1875 18.1407V21.428ZM23.1017 18.5978H25.4749V20.971H23.1017V18.5978Z" fill="#A8A8A8" data-astro-cid-ovxcmftc></path> <path d="M8.35389 23.6328H5.06647C4.81403 23.6328 4.60938 23.8374 4.60938 24.0899V27.3773C4.60938 27.6298 4.81403 27.8344 5.06647 27.8344H8.35389C8.60633 27.8344 8.81098 27.6298 8.81098 27.3773V24.0899C8.81098 23.8374 8.60633 23.6328 8.35389 23.6328ZM7.8968 26.9202H5.52356V24.547H7.8968V26.9202Z" fill="#A8A8A8" data-astro-cid-ovxcmftc></path> <path d="M14.2133 23.6328H10.9258C10.6734 23.6328 10.4688 23.8374 10.4688 24.0899V27.3773C10.4688 27.6298 10.6734 27.8344 10.9258 27.8344H14.2133C14.4657 27.8344 14.6704 27.6298 14.6704 27.3773V24.0899C14.6704 23.8374 14.4657 23.6328 14.2133 23.6328ZM13.7562 26.9202H11.3829V24.547H13.7562V26.9202Z" fill="#A8A8A8" data-astro-cid-ovxcmftc></path> <path d="M20.0726 23.6328H16.7852C16.5327 23.6328 16.3281 23.8374 16.3281 24.0899V27.3773C16.3281 27.6298 16.5327 27.8344 16.7852 27.8344H20.0726C20.3251 27.8344 20.5297 27.6298 20.5297 27.3773V24.0899C20.5297 23.8374 20.3251 23.6328 20.0726 23.6328ZM19.6155 26.9202H17.2423V24.547H19.6155V26.9202Z" fill="#A8A8A8" data-astro-cid-ovxcmftc></path> <path d="M22.1875 27.3773C22.1875 27.6298 22.3921 27.8344 22.6446 27.8344H25.932C26.1845 27.8344 26.3891 27.6298 26.3891 27.3773V24.0899C26.3891 23.8374 26.1845 23.6328 25.932 23.6328H22.6446C22.3921 23.6328 22.1875 23.8374 22.1875 24.0899V27.3773ZM23.1017 24.547H25.4749V26.9202H23.1017V24.547Z" fill="#A8A8A8" data-astro-cid-ovxcmftc></path> <path d="M28.3373 3.39286H27.7735V1.64414C27.7735 0.737567 27.0359 0 26.1294 0C25.2228 0 24.4852 0.737567 24.4852 1.64414V3.39286H22.4587V1.64414C22.4588 0.737567 21.7212 0 20.8146 0C19.9081 0 19.1705 0.737567 19.1705 1.64414V3.39286H17.1441V1.64414C17.1441 0.737567 16.4066 0 15.5 0C14.5934 0 13.8558 0.737567 13.8558 1.64414V3.39286H11.8293V1.64414C11.8294 0.737567 11.0918 0 10.1853 0C9.27869 0 8.54112 0.737567 8.54112 1.64414V3.39286H6.51461V1.64414C6.51467 0.737567 5.77717 0 4.8706 0C3.96403 0 3.22646 0.737567 3.22646 1.64414V3.39286H2.66265C1.62529 3.39286 0.78125 4.2369 0.78125 5.27426V29.1186C0.78125 30.156 1.62523 31 2.66265 31H20.1733C20.4258 31 20.6304 30.7953 20.6304 30.5429C20.6304 30.2904 20.4258 30.0858 20.1733 30.0858H2.66265C2.12937 30.0858 1.69544 29.6519 1.69544 29.1186V9.56564H7.53052C7.78296 9.56564 7.98761 9.36104 7.98761 9.10854C7.98761 8.85605 7.78296 8.65145 7.53052 8.65145H1.69544V5.27426C1.69544 4.74092 2.12931 4.30704 2.66265 4.30704H3.22646V4.98111C3.22646 5.88768 3.96403 6.62524 4.8706 6.62524C5.77717 6.62524 6.51473 5.88768 6.51473 4.98111V4.30704H8.54125V4.98111C8.54125 5.88768 9.27881 6.62524 10.1854 6.62524C11.092 6.62524 11.8295 5.88768 11.8295 4.98111V4.30704H13.856V4.98111C13.856 5.88768 14.5936 6.62524 15.5002 6.62524C16.4067 6.62524 17.1443 5.88768 17.1443 4.98111V4.30704H19.1708V4.98111C19.1708 5.88768 19.9083 6.62524 20.8149 6.62524C21.7215 6.62524 22.459 5.88768 22.459 4.98111V4.30704H24.4855V4.98111C24.4855 5.88768 25.2231 6.62524 26.1297 6.62524C27.0362 6.62524 27.7738 5.88768 27.7738 4.98111V4.30704H28.3376C28.871 4.30704 29.3048 4.74092 29.3048 5.27426V8.65145H9.35896C9.10652 8.65145 8.90186 8.85605 8.90186 9.10854C8.90186 9.36104 9.10652 9.56564 9.35896 9.56564H29.3046V29.1186C29.3046 29.6519 28.8707 30.0858 28.3374 30.0858H22.0017C21.7492 30.0858 21.5446 30.2904 21.5446 30.5429C21.5446 30.7953 21.7492 31 22.0017 31H28.3373C29.3747 31 30.2187 30.156 30.2187 29.1186V5.27426C30.2187 4.2369 29.3747 3.39286 28.3373 3.39286ZM5.60048 4.98111C5.60048 5.38359 5.27308 5.71106 4.87054 5.71106C4.46805 5.71106 4.14059 5.38359 4.14059 4.98111V1.64414C4.14065 1.24165 4.46811 0.914188 4.8706 0.914188C5.27308 0.914188 5.60055 1.24165 5.60055 1.64414L5.60048 4.98111ZM10.9152 4.98111C10.9152 5.38359 10.5877 5.71106 10.1853 5.71106C9.78277 5.71106 9.45531 5.38359 9.45531 4.98111V1.64414C9.45531 1.24165 9.78277 0.914188 10.1853 0.914188C10.5877 0.914188 10.9152 1.24165 10.9152 1.64414V4.98111ZM16.2299 4.98111C16.2299 5.38359 15.9025 5.71106 15.5 5.71106C15.0975 5.71106 14.77 5.38359 14.77 4.98111V1.64414C14.77 1.24165 15.0975 0.914188 15.5 0.914188C15.9025 0.914188 16.2299 1.24165 16.2299 1.64414V4.98111ZM21.5446 4.98111C21.5446 5.38359 21.2171 5.71106 20.8146 5.71106C20.4122 5.71106 20.0847 5.38359 20.0847 4.98111V1.64414C20.0847 1.24165 20.4122 0.914188 20.8146 0.914188C21.2171 0.914188 21.5446 1.24165 21.5446 1.64414V4.98111ZM26.8593 4.98111C26.8593 5.38359 26.5319 5.71106 26.1294 5.71106C25.7269 5.71106 25.3994 5.38359 25.3994 4.98111V1.64414C25.3994 1.24165 25.7269 0.914188 26.1294 0.914188C26.5319 0.914188 26.8593 1.24165 26.8593 1.64414V4.98111Z" fill="#A8A8A8" data-astro-cid-ovxcmftc></path> </g> <defs data-astro-cid-ovxcmftc> <clipPath id="clip0_1_926" data-astro-cid-ovxcmftc> <rect width="31" height="31" fill="white" data-astro-cid-ovxcmftc></rect> </clipPath> </defs> </svg> </div> <div class="flex flex-col p-2 sm:p-4 ыьЖborder-l border-[#D6D6D6] font-semibold" data-astro-cid-ovxcmftc> <span class="text-[#848898]" data-astro-cid-ovxcmftc>Год завершения:</span> <span class="text-primary text-xl font-bold" data-astro-cid-ovxcmftc> ${currentObject[0].object.completeYear}</span> </div> </div> </div> <div class="sm:pt-14 pb-8 border-b border-[#D6D6D6]" data-astro-cid-ovxcmftc> <span class="text-lg text-[#202228] block mb-[10px]" data-astro-cid-ovxcmftc>Описание</span> <p class="text-[#656A7C]" data-astro-cid-ovxcmftc> ${currentObject[0].object.description} </p> </div> <div class="pt-10 sm:pt-14 pb-8" data-astro-cid-ovxcmftc> <span class="text-lg text-[#202228] block mb-[10px]" data-astro-cid-ovxcmftc>Отзыв о строительсве</span> <p class="text-[#656A7C]" data-astro-cid-ovxcmftc> ${currentObject[0].object.review} </p> </div> <div class="flex sm:justify-end items-center" data-astro-cid-ovxcmftc> <span class="text-[#202228] font-semibold relative after:absolute after:top-1/2 after:ml-1 after:-translate-y-1/2 after:h-[14px] after:w-[1px]
               after:bg-[#202228] pr-1 mr-2" data-astro-cid-ovxcmftc> ${currentObject[0].object.director} </span> <span class="text-[#656A7C] text-sm" data-astro-cid-ovxcmftc>Директор компании</span> </div> </div> ${currentObject[0].object.videoreview && renderTemplate`<div class="rounded-lg p-[30px] bg-white" data-astro-cid-ovxcmftc> <div class="flex flex-col sm:flex-row justify-between gap-5" data-astro-cid-ovxcmftc> <div class="flex flex-col justify-between min-h-full sm:max-w-[230px]" data-astro-cid-ovxcmftc> <h2 class="section-title text-xl md:text-[28px] mb-2 sm:mb-8" data-astro-cid-ovxcmftc>Видеоотзыв клиента</h2> <div class="flex items-center mt-auto" data-astro-cid-ovxcmftc> <span class="text-[#202228]
                    font-semibold relative after:absolute after:top-1/2 after:ml-1 after:-translate-y-1/2 after:h-[14px] after:w-[1px]
                     after:bg-[#202228] pr-1 mr-2" data-astro-cid-ovxcmftc> ${currentObject[0].object.director} </span> <span class="text-[#656A7C] text-sm" data-astro-cid-ovxcmftc>Директор компании</span> </div> </div> <div class="sm:w-[265px] -order-1 sm:order-1 sm:h-[205px] rounded-lg" data-astro-cid-ovxcmftc> ${renderComponent($$result2, "VideoReview", null, { "url": currentObject[0].object.videoreview, "client:only": "react", "client:component-hydration": "only", "data-astro-cid-ovxcmftc": true, "client:component-path": "C:/Users/user/Documents/GitHub/vector-roof/src/components/VideoReview", "client:component-export": "default" })} </div> </div> </div>`} </div> </div> <div class="related mb-10 md:mb-28" data-astro-cid-ovxcmftc> <div class="flex-stack flex-col xs:flex-row items-start sm:items-center gap-3 mb-10" data-astro-cid-ovxcmftc> <h2 class="section-title" data-astro-cid-ovxcmftc>Похожие объекты</h2> <span class="text-[#9EA1AB] text-end -order-1 self-end xs:order-1 xs:self-center font-semibold text-nowrap shrink-0" data-astro-cid-ovxcmftc>[ Работы по всей <br data-astro-cid-ovxcmftc> России ]
</span></div> <ul class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8" data-astro-cid-ovxcmftc> ${recentProjects.map((project) => renderTemplate`<li class="flex flex-col items-center bg-white gap-5 p-5 rounded-lg" data-astro-cid-ovxcmftc> ${renderComponent($$result2, "Image", $$Image, { "src": project.featuredImage.node.mediaItemUrl, "width": 360, "height": 266, "alt": project.title, "data-astro-cid-ovxcmftc": true })} <span class="font-bold uppercase text-center" data-astro-cid-ovxcmftc>${project.title}</span> <div class="text-[#848898] text-center" data-astro-cid-ovxcmftc> ${renderComponent($$result2, "Fragment", Fragment$2, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(project.excerpt)}` })} </div> <a${addAttribute(`/projects/${project.slug}`, "href")} class="button text-[#1D1D21] hover:bg-primary mt-auto bg-[#F4F3F4] hover:text-white transition-colors" data-astro-cid-ovxcmftc>
подробнее
</a> </li>`)} </ul> <div class="text-end w-full sm:auto" data-astro-cid-ovxcmftc> <a href="#" class="button w-full sm:w-auto block sm:inline-flex text-center" data-astro-cid-ovxcmftc>Все объекты</a> </div> </div> </div> ${renderComponent($$result2, "Pricing", $$Pricing, { "data-astro-cid-ovxcmftc": true })} </div> ` })}  `;
}, "C:/Users/user/Documents/GitHub/vector-roof/src/pages/projects/[slug].astro", void 0);

const $$file = "C:/Users/user/Documents/GitHub/vector-roof/src/pages/projects/[slug].astro";
const $$url = "/projects/[slug]";

const _slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Breadcrumbs as $, SaleForm$1 as S, _slug_$1 as _, $$Image as a, $$Pricing as b, $$Layout as c, $$Icon as d, getImage as e, fetchAPI as f, getConfiguredImageService as g, _slug_ as h, imageConfig as i };
