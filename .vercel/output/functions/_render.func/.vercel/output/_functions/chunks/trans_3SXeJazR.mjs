const trans = new Proxy({"src":"/_astro/trans.xLBNSkc1.png","width":210,"height":80,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Documents/GitHub/vector-roof/src/assets/partners/trans.png";
							}
							
							return target[name];
						}
					});

export { trans as default };
