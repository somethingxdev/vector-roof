const map = new Proxy({"src":"/_astro/map.D7gaRja2.png","width":1881,"height":951,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Documents/GitHub/vector-roof/src/assets/map.png";
							}
							
							return target[name];
						}
					});

export { map as default };
