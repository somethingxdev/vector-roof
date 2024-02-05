const waterproofing = new Proxy({"src":"/_astro/waterproofing.7-CZUQx1.png","width":600,"height":426,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Documents/GitHub/vector-roof/src/assets/services/waterproofing.png";
							}
							
							return target[name];
						}
					});

export { waterproofing as default };
