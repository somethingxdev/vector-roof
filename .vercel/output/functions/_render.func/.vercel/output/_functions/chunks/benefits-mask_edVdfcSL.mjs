const benefitsMask = new Proxy({"src":"/_astro/benefits-mask.DZO9vgnP.png","width":1156,"height":367,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Documents/GitHub/vector-roof/src/assets/benefits-mask.png";
							}
							
							return target[name];
						}
					});

export { benefitsMask as default };
