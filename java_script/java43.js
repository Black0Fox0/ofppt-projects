// dialogs in html
const dialog_ajouter = document.getElementById("ajouter_ligne");
const dialog_validation_ajouter = document.getElementById('validationForm');
const dialog_validation_supprimer = document.getElementById('falidSupprimer');
const dialog_modifier_ligne = document.getElementById('modifier_ligne');

//json
if(JSON.parse(sessionStorage.getItem("tableau"))!=null)
{
    var data=JSON.parse(sessionStorage.getItem("tableau"))
    charge()
}
else{
// tableau d' objet 
var data = 
[
    {
        name : "Ayoub",
        age : 19,
        country : "Maroc",
        sex : "Man"
    },
    {
        name : "Ali",
        age : 22,
        country : "France",
        sex : "Man"
    },
    {
        name : "Aya",
        age : 32,
        country : "USA",
        sex : "Woman"
    },
    {
        name : "Yaso",
        age : 17,
        country : "Japan",
        sex : "Man"
    }
];
charge();
}
// affichage de tableau html
function charge(table_filter = data)
{   
    var table = document.querySelector('tbody');
    table.innerHTML = "";
    // complete chaque ligne
    for (x of table_filter)
    {
        let ligne = document.createElement('tr');

        let cell_name = document.createElement('td');
        let cell_age = document.createElement('td');
        let cell_country = document.createElement('td');
        let cell_sex = document.createElement('td');

        cell_name.innerText = x.name;
        cell_age.innerText = x.age;
        cell_country.innerText = x.country;
        cell_sex.innerText = x.sex;

        ligne.appendChild(cell_name);
        ligne.appendChild(cell_age);
        ligne.appendChild(cell_country);
        ligne.appendChild(cell_sex);

        ligne.innerHTML += `<td><button id='btn' class="btn btn-outline-success mx-sm-2" onclick="update(this)">Update</button><button id='btn' class="btn btn-outline-danger mx-sm-2" onclick="suprimer(this)">Delete</button></td>`;

        table.appendChild(ligne);
    };
    console.log(data);
}


function ajouter()
{
    // afficher dialog
    dialog_ajouter.showModal()
};

// function ajouter ligne en tableau 
function ajouter_confirme()
{
    const ajouter_name = document.getElementById('name');
    const ajouter_age = document.getElementById("age");
    const ajouter_country = document.getElementById('country');
    const ajouter_sex = document.querySelector('input[name="sex"]:checked');

    // nouvelle object
    let ajouter_data = {}
    ajouter_data.name = ajouter_name.value;
    ajouter_data.age = ajouter_age.value;
    ajouter_data.country = ajouter_country.value;
    ajouter_data.sex = ajouter_sex.value;

    // ajouter nouvelle object en tableau d'objets
    data.push(ajouter_data);
    sessionStorage.setItem("tableau", JSON.stringify(data));
    dialog_validation_ajouter.showModal()
    document.getElementById('Validation').innerText = `${ajouter_data.name} est ajoute`;
    charge()

    ajouter_name.value = "";
    ajouter_age.value = "";
    ajouter_country.value = "Maroc";
    document.querySelector(`input[value="Man"]`).checked = true;
};

function suprimer(btn)
{
    var i =9;
    // afficher dialog validation
    dialog_validation_supprimer.showModal();
    let x= setInterval(()=>
    {
        document.getElementById("compteur").innerText = `${i.toString().padStart(2,0)}s`;
        i--;
    },1000)
    let y = setTimeout(()=>
    {
        dialog_validation_supprimer.close();
        clearInterval(x);
        clearTimeout(y);
        document.getElementById("compteur").innerText = `10s`
    },11000)
    // pour supprimer un ligne 
    document.getElementById("confirmer_supprimer").onclick = function()
        {
            let row = btn.parentNode.parentNode;
            data.splice(row.rowIndex-1,1);
            sessionStorage.setItem("tableau", JSON.stringify(data));
            document.getElementById("compteur").innerText = `10s`;
            clearInterval(x);
            clearTimeout(y);
            charge();
        }
    document.getElementById("cancel").onclick = function()
        {
            dialog_validation_supprimer.close();
            clearInterval(x);
            clearTimeout(y);
            document.getElementById("compteur").innerText = `10s`;
        }
};

function update(btt)
{

    var ligne_edit=btt.parentNode.parentNode;

    //ajouter les informations de tableau dans les inputs
    document.getElementById('name_edit').value=ligne_edit.cells[0].innerText;
    document.getElementById('age_edit').value=ligne_edit.cells[1].innerText;
    document.getElementById('country_edit').value=ligne_edit.cells[2].innerText;
    let radio_checked=document.querySelector(`.radio_edit input[value='${ligne_edit.cells[3].innerText}']`);
    radio_checked.checked = true;

    dialog_modifier_ligne.showModal();

    // modifier les valeur d'objet de tableau
    document.getElementById('modifier_confirme').onclick = function()
    {

        let name_edit = document.getElementById('name_edit');
        let age_edit = document.getElementById('age_edit');
        let country_edit = document.getElementById('country_edit');
        let sex_edit = document.querySelector('input[name="sex_edit"]:checked');

        data[ligne_edit.rowIndex-1].name = name_edit.value;
        data[ligne_edit.rowIndex-1].age = age_edit.value;
        data[ligne_edit.rowIndex-1].country = country_edit.value;
        data[ligne_edit.rowIndex-1].sex = sex_edit.value;
        sessionStorage.setItem("tableau", JSON.stringify(data));
        charge();
    }
};

var rechercher = document.getElementById('search');
// input rachercher au tableau
rechercher.addEventListener("input",(ev)=>
{
    var valeur = ev.target.value
    var data_filtre = data.filter(x=>x.name.toLocaleLowerCase().includes(valeur.toLocaleLowerCase()))
    charge(data_filtre)
})
