
let table = JSON.parse(sessionStorage.getItem("tableau"));
var tab=document.getElementById('tab')

for(let i=0;i<table.length;i++)
{
    let ligne=document.createElement('tr')
    ligne.innerHTML+='<td>'+table[i].code+'</td><td>'+table[i].nom+'</td><td>'+table[i].prenom+'</td><td>'+table[i].semestre+'</td><td>'+table[i].filiere+'</td>'
    ligne.addEventListener('click',classN)
    tab.appendChild(ligne)
}

function classN()
{
    if(this.className=='notselected')
    {
        this.className='selected'
    }
    else
    {
        this.className='notselected'
    }
}

function supp()
{ 
    let ta=document.getElementById('tab')
    var l=document.querySelectorAll('.selected')
    l.forEach(e=>
    {
    ta.removeChild(e)
    let code=e.cells[0].innerText
    for(x of table)
    {
        if(x.code==code)
        table.shift(table.indexOf(x))
    }
    })
    sessionStorage.setItem("tableau", JSON.stringify(table));
}
