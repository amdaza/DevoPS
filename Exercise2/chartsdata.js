fetch('http://s3.amazonaws.com/logtrust-static/test/test/data1.json').then(function(response) {
  return response.json();
}).then(function(json) {
  products = json;
  console.log(products);
  initialize();
}).catch(function(err) {
  console.log('Fetch problem: ' + err.message);
});
