const syberia = new Proxy({"src":"/_astro/syberia.VWX8A0eU.png","width":230,"height":73,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Documents/GitHub/vector-roof/src/assets/partners/syberia.png";
							}
							
							return target[name];
						}
					});

export { syberia as default };
