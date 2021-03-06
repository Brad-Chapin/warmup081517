function deepEqual (x, y) {
  if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) {
    if (Object.keys(x).length != Object.keys(y).length)
    return false;

    for (var p in x){
      if (y.hasOwnProperty(p)) {
        if (! deepEqual (x[p], y[p]))
        return false;
        }
        else
        return false;
      }
      return true;
    }
    else if (x != y)
    return false;
    else {
      return true;
    }
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
