// Створіть функцію, яка буде додавати об'єкт в localStorage. 
//  Назва об'єкту має бути ключем, а сам об'єкт - значенням.
const user = {
    login: "olha",
    password: 123 
};

const friends = ["Olha", "Tima", "Vaguuus"];
localStorage.setItem("friendsInfo", JSON.stringify(friends));

function addUserToLocalStorage(userData, key) {
// const archiveData = JSON.stringify(userData);
// console.log(typeof archiveData);
// localStorage.setItem("userInfo", archiveData);
localStorage.setItem("userInfo", JSON.stringify(userData));
};
addUserToLocalStorage(friends, "friendsInfo");
addUserToLocalStorage(user, "uerInfo");

//-----------------------------------------

// Створіть функцію, яка буде отримувати об'єкт з localStorage. 
// Назва об'єкту має бути ключем, а сам об'єкт - значенням.
function getFromLocalStorage(userData) {
   const dataFromLocalStorage =  localStorage.getItem(userData);
  const parseData = JSON.parse(dataFromLocalStorage)
   return parseData
}
console.log(getFromLocalStorage("friendsInfo"));
console.log(getFromLocalStorage("userInfo"));

//---------------------------------------------
// Створіть функцію, яка буде видаляти значення з localStorage за ключем.
function removeLocalStorage(key) {
    localStorage.removeItem(key)
}

removeLocalStorage("vacuum_email")

//-----------------------------------------------
// Створіть функцію, яка буде видаляти всі значення з localStorage.
function delAllFromLocalStorage() {
    localStorage.clear()
}
delAllFromLocalStorage()
// видаляє всі ключі з локал стореджа , чистить повністю сховище