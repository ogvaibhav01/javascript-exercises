const birthYear = 2007;
const thisYear = 2025;
const firstName = "Vaibhav";
const lastName = "Bharwdaj";

const greeting = "Hello! My name is " + firstName + " " + lastName + " and I am " + (thisYear - birthYear) + " years old.";

console.log(greeting);

module.exports = {
  greeting,
  birthYear,
  thisYear,
  firstName,
  lastName
}
