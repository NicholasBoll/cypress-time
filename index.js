Cypress.Commands.add('time', name => {
  performance.mark(`${name}_start`);
  cy.state(name, performance.now());
  Cypress.log({
    name: 'time',
  }).end();
  return null;
});

Cypress.Commands.add('timeEnd', name => {
  performance.mark(`${name}_end`);
  performance.measure(name, `${name}_start`, `${name}_end`)
  const data = performance.getEntriesByName(name)[0]
  console.log(data)
  Cypress.log({
    name: 'timeEnd',
    message: [name, `${data.duration.toFixed(2)}ms`],
  });
  return data;
});
