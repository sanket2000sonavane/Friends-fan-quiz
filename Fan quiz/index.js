const chalk = require('chalk')
const log = console.log
var score = 0
var readlineSync = require('readline-sync')
log('Welcome to Ultimate Friends Fan Quiz 😍')
var userName = readlineSync.question('May I have Your name? ')
log('Hello 👋 ' + ' ' + userName.toUpperCase(userName) + ' Lets check your Friends Fan level ')

function checker(question, answer) {
  var userAns = readlineSync.question(question)
  if (userAns === answer) {
    log(chalk.bgGreenBright('Correct 👍'))
    score++;
  }
  else {
    log(chalk.bgRedBright('wrong 👎'))
  }
log('-----------------------------------------------------------------')
}

var questionList = [{
  question: 'Who lives across the hall from Monica and Rachel?\n a.Ross and Joey\n b.Joey and Chandler\n c.Phoebe and Chandler\n',
  answer: 'b'
},
{
  question: 'What is the name of the cafe that the friends are always hanging out at?\n a.Central Perk\n b.New York Coffee\n c.Perk Up\n',
  answer: 'a'
},
{
  question: 'How do Monica and Rachel know each other?\n a.They grew up together\n b.They went to college together\n c.They met because Ross and Rachel were dating\n',
  answer: 'a'
},
{
  question: 'Who is the manager at Central Perk?\n a.Robert\n b.Grant\n c.Gunther\n',
  answer: 'c'
},
 {
  question: 'What is Joey job?\n a.Engineer\n b.Actor\n c.Chef\n',
  answer: 'b'
},
{
  question: 'What is the relationship between Ross and Monica?\n a.cousins\n b.Siblings\n c.Friends\n',
  answer: 'b'
},
{
  question: 'What is Janice catchphrase?\n a.Oh my god.\n b.I know!\n c.My hair!\n',
  answer: 'a'
},
 {
  question: 'What is Monicas job?\na.Doctor\n b.Dancer\n c.Chef\n',
  answer: 'c'
},
{
  question: 'What is the name of Phoebes most iconic song?\n a.Stinky Shoes\n b.Smelly Cats\n c.Ugly Socks\n',
  answer: 'b'
},
 {
  question: 'What does Ross say whenever he is accused of cheating on Rachel?\n a.WE WERE ON A BREAK\n b.I DIDNT\n c.SHE SAID I COULD!\n',
  answer: 'a'
}
]


for (var i = 0; i < questionList.length; i++) {
  var current = questionList[i]
  checker(current.question, current.answer)
  
}
log('Your Final Score '+score)

if(score<8){
  log(chalk.bgCyanBright('You need to watch Friends again😕'))
}else if(score>=9){
  log(chalk.bgRedBright("Congrats! 😎You are The Ultimate Friends Fan"))
}


log(
'Correct answers\n 1.Ross and Joey\n 2.Central Perk\n 3.They grew up together\n 4.Gunther\n 5.Actor\n 6.siblings\n 7.Oh my god\n 8.Chef\n 9.Smelly Cats\n 10.WE WERE ON A BREAK\n'
)