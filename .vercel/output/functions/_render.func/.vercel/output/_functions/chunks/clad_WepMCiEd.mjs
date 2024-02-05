const clad = new Proxy({"src":"/_astro/clad.pw3tRLYO.png","width":600,"height":425,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Documents/GitHub/vector-roof/src/assets/services/clad.png";
							}
							
							return target[name];
						}
					});

export { clad as default };
