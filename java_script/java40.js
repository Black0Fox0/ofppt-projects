
/*
function  Personne(nom,age)
{
    this.nom = nom;
    this.age = age;

    this.Décrire = function()
    {
        alert(`${this.nom}, ${this.age} ans`);
    };
};


var p1 = new Personne("Ali",20);
var p2 = new Personne("Ayoub",22);

p1.Décrire();
p2.Décrire();
*/
/*
var Vehicul = function(){};
Vehicul.prototype.initialize = function(matricul, poids,nbr_rous,marque,modele)
{
    this.matricul = matricul;
    this.poids = poids;
    this.nbr_rous = nbr_rous;
    this.marque = marque;
    this.modele= modele;
};


var Voiture = function(nb_chevaux,capacite) 
{
    this.nb_chevaux = nb_chevaux;
    this.capacite = capacite;
    this.affiche = function()
    {
        console.log(`${this.matricul},${this.poids},${this.nb_chevaux},${this.marque},${this.modele}`)
    };
};

Voiture.prototype = new Vehicul();

var v1 = new Voiture("ZZ","RR");
v1.initialize("AA","BB","CC","FF","EE");
v1.affiche()
*/

var colors = "1234567890ABCDEF";
const min = 0;
const max = 16;

setInterval(
    function ()
    {
    var bg = "";
    for(var i = 0; i<6; i++)
    {
        var random = Math.floor(Math.random() * (max - min)) + min;
        bg += colors[random];
    };
    document.querySelector("title").innerHTML = `#${bg}`;
    document.querySelector('body').style.backgroundColor = `#${bg}`;

    },1000
);
setInterval(
    function ()
    {
    var bg = "";
    for(var i = 0; i<6; i++)
    {
        var random = Math.floor(Math.random() * (max - min)) + min;
        bg += colors[random];
    };
    document.querySelector('.container').style.backgroundColor = `#${bg}`;

    },1000
);
setInterval(
    function ()
    {
    var bg = "";
    for(var i = 0; i<6; i++)
    {
        var random = Math.floor(Math.random() * (max - min)) + min;
        bg += colors[random];
    };
    document.querySelector('.btn').style.backgroundColor = `#${bg}`;

    },1000
);

var over = document.getElementById('over')
over.style.backgroundColor = 'blue'
over.style.padding = "2px"
over.style.marginLeft = "5px"
over.addEventListener('mouseover',x=()=>
{
	over.style.backgroundColor = 'red'
	over.style.padding = "5px"
})
over.addEventListener('mouseout',y=()=>
{
	over.style.backgroundColor = 'blue'
	over.style.padding = "2px"
})
function supprimer()
{
	over.removeEventListener('mouseover',x)
}




