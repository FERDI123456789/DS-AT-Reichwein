const auto = new Proxy({"src":"/_astro/shutterstock_591685676.zLJYN6Ij.jpg","width":5999,"height":3377,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ferdi/r-ds-at/src/assets/shutterstock_591685676.jpg";
							}
							
							return target[name];
						}
					});

export { auto as a };
