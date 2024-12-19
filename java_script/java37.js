
// 1
let display = document.getElementById("ex1");

for(let i=20;i>=0;i-=2)
{
    display.innerHTML += `, ${i} `
};

// 2
var n1 = prompt("Enter number 1"); 
var n2 = prompt("Enter number 2"); 
var n3 = prompt("Enter number 3"); 

let eql = document.getElementById('ex2');

if(n1 == n2 && n2 == n3)
{
    eql.innerText += "Les trois variables sont identiques.";
}
else if(n1 == n2 || n1 == n3 || n2 == n3)
{
    eql.innerText += "Deux des variables sont de valeurs égales.";
}
else
{
    eql.innerText += "Les trois variables sont différentes.";
};

// 3
let etoiles = document.getElementById('ex3');


for(i=0;i<10;i++)
{
    for(j=0;j<i;j++)
        etoiles.innerHTML += ('*');
    etoiles.innerHTML += ('<br>');
};

// 4
let Saisir = document.getElementById('ex4');
var note = parseFloat(prompt("Saisir une note comprise entre 0 et 20; "));


while(note >20 || note <0) 
note = parseFloat(prompt("Saisir une note comprise entre 0 et 20; "));

Saisir.innerHTML  += (`Merci ${note}`);


