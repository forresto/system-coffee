System.import('./test.coffee!')
  .then(function (test) {
    var t = new test('Test');
    document.body.append(t.message(3));
  })
  .catch(function (err) {
    console.log('ERROR: ', err);
  });
