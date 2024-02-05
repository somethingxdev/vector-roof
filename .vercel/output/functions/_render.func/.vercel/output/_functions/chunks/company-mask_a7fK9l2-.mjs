const companyMask = new Proxy({"src":"/_astro/company-mask.qcyLJf4X.svg","width":339,"height":182,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Documents/GitHub/vector-roof/src/assets/company-mask.svg";
							}
							
							return target[name];
						}
					});

export { companyMask as default };
