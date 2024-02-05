const membran = new Proxy({"src":"/_astro/membran.0zNOkSOM.png","width":600,"height":426,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Documents/GitHub/vector-roof/src/assets/services/membran.png";
							}
							
							return target[name];
						}
					});

export { membran as default };
