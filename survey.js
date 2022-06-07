const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (name) => {
  console.log(`I will call you as: ${name} now.`);

  rl.question(`${name}, what are some of your hobbies? `, (hobbies) => {
    console.log(`${hobbies} are some nice hobbies, ${name}.`);

    rl.question(`${name}, do you have a favourite genre of music? `, (favMusicGenre) => {
      console.log(`${favMusicGenre} is a solid choice, ${name}.`);

      rl.question(`${name}, what's your favourite thing to eat for a meal? `, (favFood) => {
        console.log(`${favFood} is tasty.`);

        rl.question(`${name}, Do you have a favourite sport? `, (favSport) => {
          console.log(`${favSport} is so fun.`);

          process.stdout.write(`${name} you like ${hobbies} and your fav music genre is ${favMusicGenre}, your fav food is ${favFood} and you like ${favSport}`);
          process.stdout.write(`\n`);

          rl.close();
        });
      });
    });
  });
});


