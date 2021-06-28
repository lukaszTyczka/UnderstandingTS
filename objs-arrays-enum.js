"use strict";
// const person: {
//     name: string;
//     age: number;
// } = {
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: 'Lukasz',
//     age: 28,
//     hobbies: ['Sports', 'Reading'],
//     role: [2, 'author'],
// };
// const Admin = 0;
// const Read_Only = 1;
// const Author = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'Lukasz',
    age: 28,
    hobbies: ['Sports', 'Reading'],
    role: Role.ADMIN,
};
//person.role.push('admin'); exception !
// person.role[1] = 10;
//person.role = [0, 'admin', 'user'];
var favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (person.role === Role.ADMIN) {
    console.log('is an Admin');
}
