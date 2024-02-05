const facadeHover = new Proxy({"src":"/_astro/facade-hover.RVvr61mq.png","width":401,"height":285,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Documents/GitHub/vector-roof/src/assets/services/facade-hover.png";
							}
							
							return target[name];
						}
					});

export { facadeHover as default };
