const companyPoster = new Proxy({"src":"/_astro/company-poster.mug2wEnw.png","width":820,"height":462,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Documents/GitHub/vector-roof/src/assets/company-poster.png";
							}
							
							return target[name];
						}
					});

export { companyPoster as default };
