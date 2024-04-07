// #! /usr/bin/env node
export {};
// import inquirer from "inquirer";
// import * as readlineSync from 'readline-sync';
// let todo = []
// let condition = true;
// while(condition){
// let questions = await inquirer.prompt(
//     [
//         {
//             name: 'ToDos',
//             message: 'Enter your ToDos',
//             type: 'input',
//             validate: (input) => {
//                 if (input == '') {
//                     return 'Please enter a valid todo'
//                 }
//                 return true;
//             }
//         },
//         {
//             name: 'moreToDos',
//             message: 'Would you like to add more todos?',
//             type: 'confirm',
//             default: true
//         }
//     ]
// );
// todo.push(questions.ToDos)
// console.log(todo)
// condition = questions.moreToDos;
// //for printing tasks in newline
// for(let element of todo){
//     console.log(element)
// }
// }
// let updateList = await inquirer.prompt(
//     [
//         {
//             name: 'update',
//             message: 'Would you like to replace or delete a task?',
//             type: 'list',
//             choices: ['Replace', 'Delete', 'No Thanks']
//         }
//     ]
// );
// if (updateList.update == 'Replace'){
//     let index = readlineSync.questionInt('Enter the index of the task you want to update: ');
//     let newTask = readlineSync.question('Enter the new task: ');
//     if (index >= 0 && index < todo.length){
//         todo[index] = newTask;
//         console.log('Updated List: ', todo);
//     }
//     else {
//         console.log('Invalid index');
//     }
// }
// else if (updateList.update == 'Delete'){
//     let index = readlineSync.questionInt('Enter the index of the task you want to delete: ');
//     if (index >= 0 && index < todo.length){
//         todo.splice(index, 1);
//         console.log('Updated List: ', todo);
//     }
//     else {
//         console.log('Invalid index');
//     }
// }
// else if (updateList.update == 'No Thanks'){
//     console.log('Updated List: ', todo);
// }
