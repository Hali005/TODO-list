#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = 'true';
while (condition) {
    let addtask = await inquirer.prompt([
        {
            name: "todo",
            message: "What you want to add in todo list?",
            type: "input"
        },
        {
            name: "addmore",
            message: "Do you want to add more?",
            type: "confirm",
            default: "false"
        }
    ]);
    todos.push(addtask.todo);
    condition = addtask.addmore;
    console.log(todos);
}
