const metalHover = new Proxy({"src":"/_astro/metal-hover.WjEPNuoV.png","width":401,"height":284,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Documents/GitHub/vector-roof/src/assets/services/metal-hover.png";
							}
							
							return target[name];
						}
					});

export { metalHover as default };
