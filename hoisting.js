// 1
console.log(hello);
var hello = 'world';
// =====================================================
var hello = 'world';
console.log('hello');


// 2
var needle = 'haystack';
test();
function test() {
    var needle = 'magnet';
    console.log(needle);
}
// =====================================================
var needle = 'haystack';
var needle = 'magnet';
function test() {
    console.log(needle);
}
test();

// 3
var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// =====================================================

var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan)
}
print();

// 4
var food = 'chicken';
console.log(food);
eat();
function eat() {
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// =====================================================
var food = 'chicken';
function eat() {
    var food = 'half-chicken';
    let food = 'gone';
    console.log(food);
}
eat();

// 5
mean();
console.log(food);
var mean = function () {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// =====================================================

var mean = function () {
    var food = "chicken";
    let food = "fish";
    console.log(food);
}
console.log(food)
mean();

// 6

// =====================================================

// 7

// =====================================================

// 8

// =====================================================

// 9