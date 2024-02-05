const facade = new Proxy({"src":"/_astro/facade.H6hDZya-.png","width":600,"height":426,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Documents/GitHub/vector-roof/src/assets/services/facade.png";
							}
							
							return target[name];
						}
					});

export { facade as default };
