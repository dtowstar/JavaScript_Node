const d = new Date();
const ts = d.valueOf();
//x++ ++x的使用
let x = 2;
let y = 2;
const r1 = x++ + x++;
//延後遞增
//(2+(x++))
//(2+3)
//x = 4
const r2 = ++x + ++x;
//預先遞增
//x = 11
console.log(r1)
console.log(r2)
console.log(typeof (x))

// \的encode
const roomTempC = 21.5;
let currntTempC = 19.5;
const message = `currntTempC is ` + `${currntTempC - roomTempC}\u00b0C`;
console.log(message)

//var是全域變數，let是區域變數
let hatPrice = 100;
console.log(`Hat price: ${hatPrice}`);
let bootsPrice = "100";
console.log(`Boots price: ${bootsPrice}`);

//javascript 功能變數指定法和簡寫法
function sumPrices(...numbers) {
    return numbers.reduce(
        function (total, val) {
            // return total + val;
            console.log(`${total} , ${val}`);
            return total +
                (Number.isNaN(Number(val)) ? 0 : Number(val));
        }
    );
}

/*
function sumPrices(...numbers) {
    return numbers.reduce(
        (total, val) => 
            total + (Number.isNaN(Number(val)) ? 0 : Number(val)));
}

let sumPrices = (...numbers) =>
    numbers.reduce(
        (total, val) =>
            total + (Number.isNaN(Number(val)) ? 0 : Number(val))
    );

let totalPrice = sumPrices(hatPrice, bootsPrice);
console.log(`Total: ${totalPrice}, ${typeof totalPrice}`);
totalPrice = sumPrices(100, 200);
console.log(`Total: ${totalPrice}, ${typeof totalPrice}`);
totalPrice = sumPrices(100, 200, undefined, false, "hello");
console.log(`Total: ${totalPrice}, ${typeof totalPrice}`);*/
totalPrice = sumPrices(100, 200, 300);


// 無限自我呼叫
const g = function f(stop) {
    if (stop) console.log("f stopped");
    f(true);
};

//call的第一個引數就是this所綁定的值 this = bruce
const bruce = { name: 'Ken' }
function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}
update.call(bruce, 1998, 'enginner')
console.log(bruce)

// var 全域定義函數
var block = 5;
if (block === 5) {
    var block = 4
    console.log(block)
}
console.log(block)

// fill宣告陣列全部都填充數字1
const CopyArrElement = new Array(5).fill(1)
console.log(CopyArrElement)
// 回傳陣列位置
const arr = [{ id: 1, name: "kendy" }, { id: 2, name: "tom" }]
console.log(arr.findIndex(o => o.id === 1))
// 回傳值
console.log(arr.find(o => o.id === 1))
//取出轉換值
const id = arr.map(x => x.id);
console.log(id)

const team = ["t1", "rng"]
const win = [3, 2]
const fin = team.map((x, i) => ({ name: x, win: win[i] }))
console.log(fin[0])
//陣列前後增減函式
const arrtest = [1, 2, 3]
arrtest.push(4)
console.log(arrtest)
arrtest.pop()
console.log(arrtest)
arrtest.unshift(0)
console.log(arrtest)
arrtest.shift()
console.log(arrtest)
//陣列反轉和排列
arrtest.reverse()
console.log(arrtest)
arrtest.sort()
console.log(arrtest)
// x是元數本身 i是索引開始尋找的位置
const arrFindSqrt = [1, 17, 16, 5, 10, 49];
let arrFindSqrtE = arrFindSqrt.find((x, i) => i > 2 && Number.isInteger(Math.sqrt(x)));
console.log(arrFindSqrtE)
//陣列數字相加
const ReduceArr = [5, 7, 2, 4]
const sumE = ReduceArr.reduce((a, x) => a += x, 0)
console.log(sumE)

//map和filter函式使用
//1、map方法返回的新数组是原数组的映射，何为映射？就是和原数组的长度相同，数值做相应处理。
//2、filter方法返回的值是过滤原数组后的新数组，和原数组长度不同，数值不变。
const cart = [{ name: "Kem", prive: "75" }, { name: "Kefsfem", prive: "755" }]
const namest = cart.map(x => x.name)
console.log(namest)

let array = [1, 2, 4, 6]
let newArray = array.filter(item => item > 2)
console.log(newArray)

//reduce 使用 acc為初始值 

const arrre = [1, 2, 3]
const sum = arrre.reduce((acc, x) => acc + x, 0)
console.log(sum)

//MAP取出使用
const userRole = new Map([
    ['u1', 'user1'],
    ['u2', 'user2'],
    ['u3', 'user3'],
    ['u4', 'user4'],
]);

console.log(userRole.get('u3'))
console.log(userRole.size)

for (let u of userRole.keys()) {
    console.log(u);
}
for (let r of userRole.values()) {
    console.log(r);
}
for (let [u, r] of userRole.entries()) {
    console.log(`${u}:${r}`);
}

// Set陣列的值不會重複
const roles = new Set()
roles.add('User')
roles.add('User')

for (let u of roles.keys()) {
    console.log(u);
}
console.log(roles.size);

//產生器
function* rainbow() {
    yield 'res';
    yield 'rds';
    yield 'ressdf';
}

for (let color of rainbow()) {
    console.log(color);
}

//json(javascript object notation)strigify 格式的字串呼叫
let otherHat = { ...hat };
console.log(`OtherHat: ${otherHat.name}, ${otherHat.price}`);

let additionalProperties = { ...hat, discounted: true };
console.log(`Additional: ${JSON.stringify(additionalProperties)}`);
let replacedProperties = { ...hat, price: 10 };
console.log(`Replaced: ${JSON.stringify(replacedProperties)}`);
let { price, ...someProperties } = hat;
console.log(`Selected: ${JSON.stringify(someProperties)}`);


function writeMessage(message) {
    console.log(`${this.greeting}, ${message}`);
}
greeting = "Hello";
let testmessage = inp => console.log(`${this.greeting}, ${inp}`);

writeMessage("It is sunny today");
testmessage("It is rain today")