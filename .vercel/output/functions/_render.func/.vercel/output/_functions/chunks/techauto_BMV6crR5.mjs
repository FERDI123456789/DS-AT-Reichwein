const car = new Proxy({"src":"/_astro/techauto.CUs4T1Ir.png","width":1579,"height":884,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ferdi/r-ds-at/src/assets/techauto.png";
							}
							
							return target[name];
						}
					});

export { car as c };
