function dot_product(tab1, tab2) {
  var result = prod(tab1, tab2);

  if (result == 0) {
    return true;
  }
  return false;
}

var tab1 = [3, 4, -5];
var tab2 = [3, 4, 5];

console.log(dot_product(tab1, tab2));

function prod(tab1, tab2) {
  var x = 0;
  for (let i = 0; i < tab1.length; i++) {
    tab1[i] = tab1[i] * tab2[i];
    x = x + tab1[i];
  }
  return x;
}
