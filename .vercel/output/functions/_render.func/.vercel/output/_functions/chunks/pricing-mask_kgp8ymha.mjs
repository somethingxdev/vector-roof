const pricingMask = new Proxy({"src":"/_astro/pricing-mask.hH97UENA.png","width":585,"height":1044,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Documents/GitHub/vector-roof/src/assets/pricing-mask.png";
							}
							
							return target[name];
						}
					});

export { pricingMask as default };
