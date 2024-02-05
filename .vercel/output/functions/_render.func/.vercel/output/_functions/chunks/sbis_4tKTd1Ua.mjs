const sbis = new Proxy({"src":"/_astro/sbis.HvJPlrXe.svg","width":115,"height":43,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Documents/GitHub/vector-roof/src/assets/partners/sbis.svg";
							}
							
							return target[name];
						}
					});

export { sbis as default };
