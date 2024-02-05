const saleMask = new Proxy({"src":"/_astro/sale-mask.jnKkvivB.png","width":780,"height":1392,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Documents/GitHub/vector-roof/src/assets/sale-mask.png";
							}
							
							return target[name];
						}
					});

export { saleMask as default };
