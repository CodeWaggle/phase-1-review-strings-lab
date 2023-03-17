// Write your code in this file!
const currentUser = "Grace Hopper";

let welcomeMessage = `Welcome to Flatbook, ` + currentUser + "!";

welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

let excitedWelcomeMessage = `WELCOME TO FLATBOOK, ${currentUser.toUpperCase()}!`

excitedWelcomeMessage = welcomeMessage.toUpperCase();

let shortGreeting = `Welcome, ${currentUser[0]}!`;

shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;