let height = 180;
{
    let weight = 70;
    console.log(height); // -> 180
    console.log(weight); // -> 70
}
console.log(height); // -> 180
console.log(weight); // -> Uncaught ReferenceError: weight is not defined


var height1 = 180;
{
    var weight1 = 70;
    console.log(height1); // -> 180
    console.log(weight1); // -> 70
}
console.log(height1); // -> 180
console.log(weight1); // -> 70