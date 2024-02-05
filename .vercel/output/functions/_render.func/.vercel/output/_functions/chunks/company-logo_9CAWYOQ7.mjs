const companyLogo = new Proxy({"src":"/_astro/company-logo.Dz4BTbxK.svg","width":121,"height":38,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Documents/GitHub/vector-roof/src/assets/company-logo.svg";
							}
							
							return target[name];
						}
					});

export { companyLogo as default };
