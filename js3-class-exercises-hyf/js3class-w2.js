//ex-1---  Using async await
async function getAnswer() {
  const response = await fetch("https://yesno.wtf/api");
  const data = await response.json();
  console.log("async", data);
  return data;
}
getAnswer();

//ex-2----Using promises
fetch("https://yesno.wtf/api")
  .then((res) => res.json())
  .then((data) => console.log("promise", data));
async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function getName() {
  return "braedon";
}

async function getAnswer() {
  try {
    const data = await fetchData("https://yesno.wtf/api");
    const name = await getName();
  } catch (error) {
    console.log(error);
  }
}
//ex-3
function getMessage() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("rejected");
    }, 4000);
  });
}
getMessage().catch((error) => {
  console.log(error);
});

async function resolved() {
  try {
    const message = await resolved;
    console.log("try", message);
  } catch (error) {
    console.log(error);
  }
}
resolved();

const resolvedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hello");
  }, 4000);
});

resolvedPromise.then((data) => console.log(data));

//ex-4
function getLoggedInUsers() {
  const randomNumber = Math.floor(Math.random() * Math.floor(2));
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (randomNumber) {
        resolve(["benna", "magdy", "carolina"]);
      } else {
        reject("error!");
      }
    }, 5000);
  });
}
getLoggedInUsers()
  .then((users) => {
    console.log(users);
  })
  .catch((error) => {
    console.log(error);
  });

async function loggedInUsers() {
  try {
    const user = await getLoggedInUsers();
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}
loggedInUsers();

//ex-5
async function getAstronautsAndMovies() {
  try {
    const responseAstronauts = await fetch(
      "http://api.open-notify.org/astros.json"
    );
    const dataAstronauts = await responseAstronauts.json();

    const responseMovies = await fetch(
      "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
    );
    const dataMovies = await responseMovies.json();

    console.log("astros", dataAstronauts);

    console.log(dataMovies.map((movie) => movie.title));
  } catch (error) {
    alert(error);
  }
}
getAstronautsAndMovies();

//ex-6
const dataAstronauts = fetch("http://api.open-notify.org/astros.json")
  .then((response) => response.json())
  .then((data) => data.people.map((person) => person.name));

const dataMovies = fetch(
  "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
)
  .then((response) => response.json())
  .then((data) => data.map((movie) => movie.title));

Promise.all([dataAstronauts, dataMovies]).then((values) => {
  console.log("all", values);
});
