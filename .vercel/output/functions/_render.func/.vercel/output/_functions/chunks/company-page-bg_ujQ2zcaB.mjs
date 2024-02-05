const companyPageBg = new Proxy({"src":"/_astro/company-page-bg.3gl4BAL2.png","width":1933,"height":920,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Documents/GitHub/vector-roof/src/assets/company-page-bg.png";
							}
							
							return target[name];
						}
					});

export { companyPageBg as default };
