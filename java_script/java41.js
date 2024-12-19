
const div_table = document.getElementById('table');
const dialog1 = document.getElementById("validationForm");
const dialog2 = document.getElementById("favDialog");
const form3 = document.getElementById("upform");
const body = document.getElementById("cotainer")
form3.hidden = true

const regexNom = new RegExp('[a-z0-9]+[a-z]+\.[a-z]{2,3}')

const table = document.createElement("table");
table.innerHTML = '<table class"table table-hover"><tr><th>Name</th><th>Age</th><th>Pays</th><th>Sexe</th><th>Action</th></tr>';

let data_general = [];

function ajouter()
{
    dialog1.showModal()
    const nam = document.getElementById('name');
    const age = document.getElementById('age');
    const pays = document.getElementById('pays');
    const sexe = document.querySelector('input[name="sexe"]:checked')
    
    const data = [nam.value,age.value,pays.value,sexe.value];
    console.log(data)
    nam.innerText = "hello"
    data_general.push(data);

    const ligne = document.createElement("tr");

    for(var i=0 ; i<=data.length ; i++)
    {
        if(i==data.length)
        {
            var cellAction = document.createElement('td')
            cellAction.innerHTML = `<td><button class="btn btn-success" onclick="update(this)">Update</button><button class="btn btn-danger" onclick="suprimer(this)">Delete</button></td>`;
            ligne.appendChild(cellAction);
        }
        else{
            const cell = document.createElement('td');
            cell.innerText = data[i];
            ligne.appendChild(cell);
        };
    };
   
    table.appendChild(ligne);
    div_table.appendChild(table);
};


function suprimer(btn)
{
    var i =9;
    dialog2.showModal();
    let x= setInterval(()=>
    {
        document.getElementById("compteur").innerText = `${i.toString().padStart(2,0)}s`;
        i--;
    },1000)
    let y = setTimeout(()=>
    {
        dialog2.close();
        clearInterval(x);
        clearTimeout(y);
    },11000)
    document.getElementById("confirmer").onclick = function()
        {
            let row = btn.parentNode.parentNode;
            data_general.splice(row.rowIndex-1,1)
            table.deleteRow(row.rowIndex);
            document.getElementById("compteur").innerText = `10s`;
            console.log(data_general)
            clearInterval(x);
            clearTimeout(y);
        }
    document.getElementById("cancel").onclick = function()
        {
            dialog2.close();
            clearInterval(x);
            clearTimeout(y);
            document.getElementById("compteur").innerText = `10s`;
        }
};

function update(btn)
{
    form3.hidden = false;
    body.hidden = true;

    var ligne_edit=btn.parentNode.parentNode;

    document.getElementById('name_edit').value=ligne_edit.cells[0].innerText;

    document.getElementById('age_edit').value=ligne_edit.cells[1].innerText;

    document.getElementById('pays_edit').value=ligne_edit.cells[2].innerText;

    let rad=document.querySelector(`#upform input[value='${ligne_edit.cells[3].innerText}']`);
    document.querySelector(`#upform input[value='${rad.value}']`).checked;
    

    document.getElementById('edit').onclick = function()
    {
        form3.hidden = true;
        body.hidden = false;
        dialog1.showModal()

        let name_edit = document.getElementById('name_edit');
        let age_edit = document.getElementById('age_edit');
        let pays_edit = document.getElementById('pays_edit');
        let sexe_edit = document.querySelector('input[name="sexe_edit"]:checked');
        
        ligne_edit.cells[0].innerHTML = name_edit.value;
        ligne_edit.cells[1].innerText = age_edit.value;
        ligne_edit.cells[2].innerText = pays_edit.value;
        ligne_edit.cells[3].innerText = sexe_edit.value;
    }
};


