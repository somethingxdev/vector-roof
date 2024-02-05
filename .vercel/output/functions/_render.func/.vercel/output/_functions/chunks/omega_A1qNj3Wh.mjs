const omega = new Proxy({"src":"/_astro/omega.Grr7rhoM.png","width":193,"height":58,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Documents/GitHub/vector-roof/src/assets/partners/omega.png";
							}
							
							return target[name];
						}
					});

export { omega as default };
