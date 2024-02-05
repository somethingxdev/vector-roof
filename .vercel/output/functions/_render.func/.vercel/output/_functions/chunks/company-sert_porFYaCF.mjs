const companySert = new Proxy({"src":"/_astro/company-sert.udMdEDwg.png","width":267,"height":301,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Documents/GitHub/vector-roof/src/assets/company-sert.png";
							}
							
							return target[name];
						}
					});

export { companySert as default };
