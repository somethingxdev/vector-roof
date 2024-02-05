const cult = new Proxy({"src":"/_astro/cult.tBweXF1y.png","width":206,"height":136,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Documents/GitHub/vector-roof/src/assets/partners/cult.png";
							}
							
							return target[name];
						}
					});

export { cult as default };
