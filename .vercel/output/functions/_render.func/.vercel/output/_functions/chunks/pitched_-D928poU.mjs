const pitched = new Proxy({"src":"/_astro/pitched.eAhu4FxL.png","width":600,"height":426,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Documents/GitHub/vector-roof/src/assets/services/pitched.png";
							}
							
							return target[name];
						}
					});

export { pitched as default };
