
// let form =document.querySelector('form');
// form.addEventListener('submit',handleSubmit);

// function convertToJSON() {}
//     // const fullName = document.getElementById('fullName').value;
//     // const email = document.getElementById('email').value;
//     // const password = document.getElementById('password').value;
// function handleSubmit(event){
//     event.preventDefault();

//     let formData = new FormData(form);

//     // const userObject = {
//     //     full_name: fullName,
//     //     email: email,
//     //     password: password
//     // };

//     let userObject = Object.fromEntries(formData);

//     let jsonUser = JSON.stringify(userObject);
//     console.log(jsonUser);

//     // const obj = JSON.parse(jsonUser)
//     // console.log(obj.full_name)
// }

// var JsonObject = '[{nom:"Ali", age:22}, {nom:"Ahmed", age:20}]';

// var obj = JSON.parse(JsonObject);

// console.log(obj[0].nom)

const nom = document.getElementById('fullName');
const email = document.getElementById('email');
const password = document.getElementById('password');

let list = []

function convertToJSON()
{
const personne =    {nom: nom.value,
                    email: email.value,
                    password: password.value}
list.push(personne)

sessionStorage.setItem("data", JSON.stringify(personne));
}
