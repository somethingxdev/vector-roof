const danone = new Proxy({"src":"/_astro/danone.ConznPfF.png","width":193,"height":110,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Documents/GitHub/vector-roof/src/assets/partners/danone.png";
							}
							
							return target[name];
						}
					});

export { danone as default };
