//importing packages
const readlinesync = require('readline-sync');
const chalk = require('chalk');
const figlet = require('figlet');



//chalk colors
const error = chalk.bold.red;
const correct = chalk.green;
const orange = chalk.rgb(255, 136, 0).bold;
const bg = chalk.bgMagenta
const cyan = chalk.cyan;



const questions =[
  {
    question:'How do you see me?',
    options:['strong','weak'],
    answer:"strong",
    },
  {
    question:'Am i the:',
    options:['overpowered protagonist','underdog'],
    answer:"overpowered protagonist",
    },
  {
    question:'Am I wicked?',
    options:['brave','cunning'],
    answer:"cunning",
    },
  ];

// const characters =[
//   {name:'goku',traits:['strong','overpowered','brave']},
//   {name:'vegeta',traits:['strong','underdog','brave']},
//   {name:'frieza',traits:['strong','underdog','cunning']},
//   ];

// let random ={};

// for (i=0;i<questions.length;i++)
// {
//       let hey = readlinesync.keyInSelect(questions.options,questions.question);
//       if(questions.answer === questions.options[hey]){
//         console.log(correct("RIGHT"))
        
//         let c =characters;
//         if(hey === c.traits){
//         random[c.name] =+1;
//         }
// }
// }
// let useranswers = ['strong','underdog','cunning'];
// function comparetraits(arrayofanswers){
//   let ch  = [];
//   let pch ={};
//   for(i=0;i<characters.length;i++){
//    ch.push(characters[i].name);
//   }
//   for(i=0;i<arrayofanswers.length;i++){
//     if(useranswers[i] === characters[0].traits[i]){
//       // ch.splice(i, 1); 
//       // console.log(ch);
// pch[characters[0].name[i]] =+ i || 1;
//        console.log(pch);
//     }
//   }
//   console.log(ch);
// };


// if(greeting){
//   readlinesync.keyInPause();
//   console.log('--------------------------')
//   for(i=0;i<questions.length;i++){
//     let temp = readlinesync.keyInSelect(questions[i].options,questions[i].question);
//     let useranswer = questions[i].options[temp];
//     useranswers.push(useranswer);
//     console.log('\n' + useranswer)
//   }
//   comparetraits(useranswers)
// }


// else{
//   console.log('see ya later,bubyue!!')
// }



// 1 2 3 Lets go

let name = readlinesync.question(orange("Hey Lostsoul, enter your name: "));
let greeting = readlinesync.keyInYNStrict(orange(`Hello ${name}! Are you ready to go`,));


if(greeting)
{
  readlinesync.keyInPause();
  console.log(bg('------------------------------------------------'));

    let score = 0;
    for(i=0;i<questions.length;i++)
    {
      let q = questions[i];
      let hey = readlinesync.keyInSelect(q.options,q.question);
      if(q.answer === q.options[hey]){
        console.log(correct("RIGHT"))
        score++;
      console.log(`Your score is : ${cyan(score)}`);
          
    });

      }
      else{
        console.log(error("WRONG"));
        console.log(`Your score is : ${cyan(score)}`);

      }
    }
    users.score = score;


}
else
{
  console.log('see ya later,bubyue!!');
};
figlet(`Your score is : ${cyan(score)}`, function(err, data) {
        if (err) {
            console.log('Something went wrong with figlet...');
            console.dir(err)
            console.log(data);
        }

// console.log(users) // need to get file access or something related to sytem.io