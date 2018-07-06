interface Person {
    name: string;
    age: number;
}

//新建出来的实例多一个接口少一个接口都不可以
let tom: Person = {
    name: 'Tom',
    age: 25
};
