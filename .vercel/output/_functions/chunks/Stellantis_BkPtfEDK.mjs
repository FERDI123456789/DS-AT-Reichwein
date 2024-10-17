const stellantis = new Proxy({"src":"/_astro/Stellantis.gqBoalgE.png","width":320,"height":68,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ferdi/r-ds-at/src/assets/Stellantis.png";
							}
							
							return target[name];
						}
					});

export { stellantis as s };
