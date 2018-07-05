# typescript

### 什么是 TypeScript
> 首先，我对 TypeScript 的理解如下：
TypeScript 是 JavaScript 的一个超集，主要提供了类型系统和对 ES6 的支持，它由 Microsoft 开发，代码开源于 GitHub 上。

### 为什么选择 TypeScript

### TypeScript 增加了代码的可读性和可维护性
* 类型系统实际上是最好的文档，大部分函数看类型定义就知道如何去使用
* 可以在编译阶段发现错误，这样比在运行的时候发现要好
* 增强了编辑器和IDE的功能，包括代码补全，接口提示，跳转到定义，重构等。

### TypeScript 包容
* TypeScript 是 JavaScript 的超集，.js 文件可以直接重命名为 .ts 即可
* 即使不显示的定义类型，也够自动做出类型推论
* 可以定义从简单到复杂的一切类型
* 即使 TypeScript 编译报错，也可以生成 Javascript
* 兼容第三方库，即使第三方库不是用TypeScript 写的，也可以编写单独的类型文件供 Typescript读取

### TypeScript 拥有活跃社区



# 原始数据类型
> JavaScript 的类型分为两种：原始数据类型（Primitive data types）和对象类型（Object types）。原始数据类型包括：布尔值、数值、字符串、null、undefined 以及 ES6 中的新类型 Symbol。本节主要介绍前五种原始数据类型在 TypeScript 中的应用。

## 布尔值
布尔值是最基础的数据类型，在TypeScript，使用 boolean 定义布尔值类型：  
```javascript
let isDone:bool = false;
//编译通过
//后面约定，未强调编译错误的代码片段，默认编译通过
```
注意，使用构造函数 Boolean 创造的对象不是布尔值:  

```javascript
let createdByNewBoolean: boolean = new Boolean(1);
```

事实上 new Boolean() 返回的是一个 Boolean(1);  

```javascript
let createdByNewBoolean: Boolean = new Boolean(1);
```

直接调用 Boolean 也可以返回一个 boolean 类型：  

```javascript
let createdByBoolean: boolean = Boolean(1);
```
在 TypeScript 中，boolean 是 JavaScript 中的基本类型，而 Boolean 是 JavaScript 中的构造函数。其他基本类型（除了 null 和 undefined）一样  


## 数值
使用 number 定义数值类型：

```javascript
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;
```
编译结果：  

```javascript
var decLiteral = 6;
var hexLiteral = 0xf00d;
// ES6 中的二进制表示法
var binaryLiteral = 10;
// ES6 中的八进制表示法
var octalLiteral = 484;
var notANumber = NaN;
var infinityNumber = Infinity;
```

其中 0b1010 和 0o744 是 ES6 中的二进制和八进制表示法，它们会被编译为十进制数字。  
## 字符串
使用 string 定义字符串类型：  
```javascript
let myName: string = 'Tom';
let myAge: number = 25;
// 模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;
```
编译结果：  
```javascript
var myName = 'Tom';
var myAge = 25;
// 模板字符串
var sentence = "Hello, my name is " + myName + ".\nI'll be " + (myAge + 1) + " years old next month.";
```
其中 ` 用来定义 ES6 中的模板字符串，${expr} 用来在模板字符串中嵌入表达式。

## 空值
JavaScript 没有空值（Void）的概念，在 TypeScirpt 中，可以用 void 表示没有任何返回值的函数：  

```javascript
function alertName(): void {
    alert('My name is Tom');
}
```

声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null：  
```javascript
let unusable: void = undefined;
```

## Null 和 Undefined
在 TypeScript 中，可以使用 null 和 undefined 来定义这两个原始数据类型：  
```javascript
let u: undefined = undefined;
let n: null = null;
```
undefined 类型的变量只能被赋值为 undefined，null 类型的变量只能被赋值为 null。 
与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：  
```javascript
// 这样不会报错
let num: number = undefined;

// 这样也不会报错
let u: undefined;
let num: number = u;
```

而 void 类型的变量不能赋值给 number 类型的变量：  
```javascript
let u: void;
let num: number = u;
// index.ts(2,5): error TS2322: Type 'void' is not assignable to type 'number'.
```

## 任意值

任意值（Any）用来表示允许赋值为任意类型。  

### 什么是任意值类型

如果是一个普通类型，在赋值过程中改变类型是不被允许的：  

```javascript
let myFavoriteNumber: string = 'seven';
myFavoriteNumber = 7;
// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
```

但如果是 any 类型，则允许被赋值为任意类型。  

```javascript
let myFavoriteNumber: any = 'seven';
myFavoriteNumber = 7;
```

### 任意值的属性和方法
在任意值上访问任何属性都是允许的：  
```javascript
let anyThing: any = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);
```
也允许调用任何方法：  
```javascript
let anyThing: any = 'Tom';
anyThing.setName('Jerry');
anyThing.setName('Jerry').sayHello();
anyThing.myName.setFirstName('Cat');
```
可以认为，声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值。 

### 未声明类型的变量

变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：  
```javascript
let something;
something = 'seven';
something = 7;

something.setName('Tom');
```
等价于  
```javascript
let something: any;
something = 'seven';
something = 7;

something.setName('Tom');
```