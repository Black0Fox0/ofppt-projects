
class Véhicule
{
    constructor (marque, modéle, prix, location)
    {
        this.marque = marque;
        this.modéle = modéle;
        this.prix = prix;
        this.location = location;
    }

    afficher() 
    {
        return `${this.marque}, ${this.modéle}, ${this.prix}, ${this.location}`;
    }

}

class Voiture extends Véhicule
{
    static nbr = 0
    constructor (marque, modéle, prix, location, couleur)
    {
        super(marque, modéle, prix, location);
        this.couleur = couleur;
        Voiture.nbr++;
    }
    afficher()
    {
        return `${this.marque}, ${this.modéle}, ${this.prix}, ${this.location}, ${this.couleur}`;
    }
    static nbr_voiture()
    {
        return "Nombre voiture : "+Voiture.nbr ;
    }
}



let v1 = new Voiture("GHJ", "L2CZP", 7292, "gvcjiuzb ei_ cz", "red");
let v2 = new Voiture("GHJ", "L2CZP", 7292, "gvcjiuzb ei_ cz","blue");

console.log(Voiture.nbr_voiture())

// Crud

let nom = document.querySelector('#nom');
let prénom = document.querySelector('#prénom');
let age = document.querySelector('#age');
let sexe = document.querySelector('input[name="sexe"]:checked');
let pays = document.querySelector('#pays');
//let disciplines = document.querySelector('input[name="discipline"]:checked');
let discipline = [];
let Marathon = document.querySelector('#Marathon');
let Natation = document.querySelector('#Natation');
let Sprint = document.querySelector('#Sprint');
let Saut = document.querySelector('#Saut');

let table = $('#users');
table.hide();

let allUsers = [];
if(JSON.parse(sessionStorage.getItem('data')) != null)
{
    allUsers = JSON.parse(sessionStorage.getItem('data'));
    charge(allUsers);
    table.show()
}


function valideForm()
{

    const regex = /^[A-Z][a-zA-Z]+$/
    if(nom.value == "" || prénom.value == "" || age.value == "" || regex.test(nom.value)==false || regex.test(prénom.value)==false || sexe.value == "" || pays.value == "" || discipline == [])
        return false
    else
        return true
}


function enregistrer()
{
    discipline = [];
    if(Marathon.checked)
        discipline.push(Marathon.value);
    if(Natation.checked)
        discipline.push(Natation.value);
    if(Sprint.checked)
        discipline.push(Sprint.value);
    if(Saut.checked)
        discipline.push(Saut.value);

    if(valideForm())
        {

            let user = {
                nom: nom.value,
                prénom: prénom.value,
                age : age.value,
                sexe: sexe.value,
                pays: pays.value,
                discipline: discipline
            }
            allUsers.push(user)
            charge(allUsers)
            table.show();
        }
   else
   alert("Erreur dans le formulaire");
}

function editer(ee)
{
    let row = $(ee).closest('tr');
    let cells = row.find('td');
    nom.value = cells.eq(0).text();
    prénom.value = cells.eq(1).text();
    age.value = cells.eq(2).text();
    document.querySelector(`input[value="${cells.eq(3).text()}"]`).checked =true;
    document.querySelector(`onption[value="${cells.eq(4).text()}"]`).checked =true;

}

function supprimer(ee)
{
    let row = ee.parentNode.parentNode;
    allUsers.splice(row.rowIndex-1,1);

    charge(allUsers)
    
}

function charge(allUsers)
{
    $("#table").html("");
    for(let use of allUsers)
        {
            let row = $('<tr></tr>');
            let cell = $('<td></td>');
            cell.text(use.nom);
            row.append(cell);
            cell = $('<td></td>');
            cell.text(use.prénom);
            row.append(cell);
            cell = $('<td></td>');
            cell.text(use.age);
            row.append(cell);
            cell = $('<td></td>');
            cell.text(use.sexe);
            row.append(cell);
            cell = $('<td></td>');
            cell.text(use.pays);
            row.append(cell);
            cell = $('<td></td>');
            cell.text(use.discipline);
            row.append(cell);
            cell = $('<td><button class="btn btn-success" onclick="editer(this)">Modifier</button><button class="btn btn-danger" onclick="supprimer(this)">Supprimer</button></td>');
            row.append(cell);
            $("#table").append(row);
        }

    sessionStorage.setItem('data', JSON.stringify(allUsers));
}

function exporter()
{}


