const user = {
  name: "Raja raja",
  age: 24,
  "Greeting Done": "Hey",
};
// console.log(user["Greeting Done"]);
// to iterate through an object
for (key in user) {
  console.log(user[key]);
}
