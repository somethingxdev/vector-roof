const membranHover = new Proxy({"src":"/_astro/membran-hover.pt4-Vd_i.png","width":801,"height":569,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Documents/GitHub/vector-roof/src/assets/services/membran-hover.png";
							}
							
							return target[name];
						}
					});

export { membranHover as default };
