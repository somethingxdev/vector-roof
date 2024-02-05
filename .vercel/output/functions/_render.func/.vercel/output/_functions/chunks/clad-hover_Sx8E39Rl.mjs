const cladHover = new Proxy({"src":"/_astro/clad-hover.ZvOa5Wi4.png","width":401,"height":284,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Documents/GitHub/vector-roof/src/assets/services/clad-hover.png";
							}
							
							return target[name];
						}
					});

export { cladHover as default };
