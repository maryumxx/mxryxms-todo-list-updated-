#! /usr/bin/env node
import inquirer from "inquirer";
import * as readlineSync from 'readline-sync';
let todo = [];
let condition = true;
while (condition) {
    let questions = await inquirer.prompt([
        {
            name: 'ToDos',
            message: 'Enter your ToDos',
            type: 'input',
            validate: (input) => {
                // condition given below is just checking empty value,it simpliy bypassed by a single whitespace, may use 
                // let cleanInput = input.trim();
                // if(cleanInput==''){ //while adding new element in todo array also use trim mehod as commented there
                if (input == '') {
                    return 'Please enter a valid todo';
                }
                return true;
            }
        },
        {
            name: 'moreToDos',
            message: 'Would you like to add more todos?',
            type: 'confirm',
            default: true
        }
    ]);
    todo.push(questions.ToDos);
    // todo.push(questions.ToDos.trim())
    console.log(todo);
    condition = questions.moreToDos;
    //for printing tasks in newline
    for (let element of todo) {
        console.log(element);
    }
}
let updateList = await inquirer.prompt([
    {
        name: 'update',
        message: 'Would you like to replace or delete a task?',
        type: 'list',
        choices: ['Replace', 'Delete', 'No Thanks']
    }
]);
if (updateList.update == 'Replace') {
    // let index = readlineSync.questionInt('Enter the index of the task you want to update: ');
    // upper line gives you default limit message if you dont "press enter then give index number in new blank line then press enter"
    // to get better information about pressing enter two times I suggest to go through package readme file
    let index = readlineSync.questionInt('Enter the index of the task you want to update: ', { limitMessage: 'Asad sets own limit message' });
    // upper line gives limitMessage till it gets right value
    let newTask = readlineSync.question('Enter the new task: ');
    if (index >= 0 && index < todo.length) {
        todo[index] = newTask;
        console.log('Updated List: ', todo);
    }
    else {
        console.log('Invalid index or input');
    }
}
else if (updateList.update == 'Delete') {
    let index = readlineSync.questionInt('Enter the index of the task you want to delete: ');
    if (index >= 0 && index < todo.length) {
        todo.splice(index, 1);
        console.log('Updated List: ', todo);
    }
    else {
        console.log('Invalid index');
    }
}
else if (updateList.update == 'No Thanks') {
    console.log('Updated List: ', todo);
}
