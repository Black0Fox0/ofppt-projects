// function fechJson()
// {
// fetch("./products.json")
// .then((response) => response.json())
// .then((products)=>
// {
//     let placeholder = document.querySelector("#data-output");
//     let out = "";
//     for(let product of products)
//     {
//         out += `
//                 <tr>
//                     <td><img src="${product.image}" alt=""></td>
//                     <td>${product.name}</td>
//                     <td>${product.price}</td>
//                     <td>${product.inventory}</td>
//                     <td>${product.productCode}</td>
//                 </tr>
//                 `
//     }
//     placeholder.innerHTML = out;
// })
// }
// fechJson()
// import data from './products.json' assert {type: 'json'};
// console.log(data)


let valeur = sessionStorage.getItem('data')

let newValeur = JSON.parse(valeur)

console.log(newValeur.nom)

let placeholder = document.querySelector("#data-output");
let out = ""

out += `
                <tr>
                   <td>${valeur.nom}</td>
                   <td>${valeur.email}</td>
                   <td>${valeur.password}</td>
               </tr>
`
placeholder.innerHTML = out



