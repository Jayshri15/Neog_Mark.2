const chalk = require("chalk");
var color=require("chalk")
console.log(chalk.redBright("-------WEL-TO MY FIRST PROJECT-------"));
console.log("       ~~~~~~~~~~~~     ")
var con = require("readline-sync")
var question = con.question(chalk.yellow("What is your name..?  "));
var score = 0;
console.log("     ^~~~~~~~~~~~~~~~~^      ");
console.log(chalk.blue("Welcome " + question + " do you know Jayshri."));
console.log("    ______****______    ");

function play(question,answer){
    var nav = con.question(question);
    if (nav === answer){
        console.log(chalk.yellow("right!!"));
        score = score + 1;
    }else{
        console.log(chalk.redBright("wrong"));
    }
    console.log(chalk.green("current score",score));
    console.log("^-^-^-^-^-^-^-^-^-")
}
var some_question =[{
    question : "My favorite color is...?___",
    answer : "Purple"
},{
    question : "My village name is...?___",
    answer : "Palkhed"
},{
    question : "My name is...?___",
    answer : "Jayu"
},{
    question : "Where are you from...?___",
    answer : "Maharashtra"
},{
    question : "What is your qualification...?___",
    answer : "12-passout"
},{
    question : "Who is prime menister in india?___",
    answer : "Narendra Modi"
}]
for (var i=0;i<some_question.length;i++){
    var rom = some_question[i];
    play(rom.question,rom.answer)
}
console.log("    *~~~~~~  ~~~~~~*   ");
console.log(chalk.bgBlack("Total score  ",score));