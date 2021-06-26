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

enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR,
}

const person = {
    name: 'Lukasz',
    age: 28,
    hobbies: ['Sports', 'Reading'],
    role: Role.ADMIN,
};

//person.role.push('admin'); exception !
// person.role[1] = 10;

//person.role = [0, 'admin', 'user'];

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
    console.log('is an Admin');
}
