const logo = new Proxy({"src":"/_astro/logo.QbhwYj0G.png","width":49,"height":55,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Documents/GitHub/vector-roof/src/assets/logo.png";
							}
							
							return target[name];
						}
					});

export { logo as default };
