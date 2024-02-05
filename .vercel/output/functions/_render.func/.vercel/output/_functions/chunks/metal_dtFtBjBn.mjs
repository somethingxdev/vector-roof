const metal = new Proxy({"src":"/_astro/metal.CyqZP3lL.png","width":600,"height":426,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Documents/GitHub/vector-roof/src/assets/services/metal.png";
							}
							
							return target[name];
						}
					});

export { metal as default };
