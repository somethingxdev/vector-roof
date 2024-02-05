const rusal = new Proxy({"src":"/_astro/rusal.AgHAH334.png","width":196,"height":113,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Documents/GitHub/vector-roof/src/assets/partners/rusal.png";
							}
							
							return target[name];
						}
					});

export { rusal as default };
