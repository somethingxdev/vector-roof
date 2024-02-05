const smsity = new Proxy({"src":"/_astro/smsity.JfALhJaf.png","width":173,"height":121,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Documents/GitHub/vector-roof/src/assets/partners/smsity.png";
							}
							
							return target[name];
						}
					});

export { smsity as default };
