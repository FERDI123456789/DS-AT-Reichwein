const flaggen = new Proxy({"src":"/_astro/Flaggen_1170.7a7y-5mj.jpg","width":1170,"height":500,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ferdi/r-ds-at/src/assets/Flaggen_1170.jpg";
							}
							
							return target[name];
						}
					});

export { flaggen as f };
