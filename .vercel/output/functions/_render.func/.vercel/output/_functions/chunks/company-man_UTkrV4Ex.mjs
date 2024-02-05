const companyMan = new Proxy({"src":"/_astro/company-man.-iH3s5uL.png","width":203,"height":206,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Documents/GitHub/vector-roof/src/assets/company-man.png";
							}
							
							return target[name];
						}
					});

export { companyMan as default };
