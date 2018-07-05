// TypeScript 编译的时候即使报错了，还是会生成编译结果，我们仍然可以使用这个编译之后的文件。
function sayHello(person) {
    return 'Hello, ' + person;
}
// let user = 'Tom';
var user = [0, 1, 2];
console.log(sayHello(user));
