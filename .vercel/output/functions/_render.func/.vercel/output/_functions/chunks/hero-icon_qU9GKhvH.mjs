const heroIcon = new Proxy({"src":"/_astro/hero-icon.12x-nEXn.svg","width":56,"height":40,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Documents/GitHub/vector-roof/src/assets/hero-icon.svg";
							}
							
							return target[name];
						}
					});

export { heroIcon as default };
