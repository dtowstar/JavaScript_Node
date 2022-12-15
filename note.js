const d = new Date();
const ts = d.valueOf();
let x = 2;
let y = 2;
const r1 = x++ + x++;
const r2 = ++x + ++x;
const r3 = x++ + ++x;
const r4 = ++x + x++;
const r5 = y++;
console.log(r1)
console.log(r2)
console.log(r3)
console.log(r4)
console.log(r5)
console.log(typeof (x))
//x++ 先後計算
const roomTempC = 21.5;
let currntTempC = 19.5;
const message = `currntTempC is ` + `${currntTempC - roomTempC}\u00b0C`;
console.log(message)
// \的encode

let hatPrice = 100;
console.log(`Hat price: ${hatPrice}`);
let bootsPrice = "100";
console.log(`Boots price: ${bootsPrice}`);

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
//console.log(`Total: ${totalPrice}, ${typeof totalPrice}`);
//javascript 功能變數指定法和簡寫法


const g = function f(stop) {
    if (stop) console.log("f stopped");
    f(true);
};

// 無限自我呼叫
const bruce = { name: 'Ken' }
function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}
update.call(bruce, 1998, 'enginner')
console.log(bruce)
// this 使用 bruce新增

var block = 5;
if (block === 5) {
    var block = 4
    console.log(block)
}
console.log(block)
// var 全域定義函數
const CopyArrElement = new Array(5).fill(1)
console.log(CopyArrElement)
// fill宣告陣列全部都填充數字1
const arr = [{ id: 1, name: "kendy" }, { id: 2, name: "tom" }]
console.log(arr.findIndex(o => o.id === 1))
// 回傳陣列位置
console.log(arr.find(o => o.id === 1))
// 回傳值
const id = arr.map(x => x.id);
console.log(id)
//取出轉換值
const team = ["t1", "rng"]
const win = [3, 2]
const fin = team.map((x, i) => ({ name: x, win: win[i] }))
console.log(fin[0])
//兩陣列結合
const arrFindSqrt = [1, 17, 16, 5, 4, 16, 10, 49];
let arrFindSqrtE = arrFindSqrt.find((x, i) => i > 2 && Number.isInteger(Math.sqrt(x)));
console.log(arrFindSqrtE)
// x是元數本身 i是索引起始位置

const ReduceArr = [5, 7, 2, 4]
const sumE = ReduceArr.reduce((a, x) => a += x, 0)
console.log(sumE)
//陣列數字相加
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
//MAP取出使用
const roles = new Set()
roles.add('User')
roles.add('User')

for (let u of roles.keys()) {
    console.log(u);
}
console.log(roles.size);
// Set陣列的值不會重複

let hat = {
    name: "Hat",
    price: 100,
};

let otherHat = { ...hat };
console.log(`OtherHat: ${otherHat.name}, ${otherHat.price}`);

let additionalProperties = { ...hat, discounted: true };
console.log(`Additional: ${JSON.stringify(additionalProperties)}`);
let replacedProperties = { ...hat, price: 10 };
console.log(`Replaced: ${JSON.stringify(replacedProperties)}`);
let { price, ...someProperties } = hat;
console.log(`Selected: ${JSON.stringify(someProperties)}`);
//json(javascript object notation)strigify 格式的字串呼叫

function writeMessage(message) {
    console.log(`${this.greeting}, ${message}`);
}
greeting = "Hello";
let testmessage = inp => console.log(`${this.greeting}, ${inp}`);

writeMessage("It is sunny today");
testmessage("It is rain today")

//沒用 let,const,var等關鍵字設定，this 在function中是全域物件

//測試上傳

