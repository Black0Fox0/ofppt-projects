
function annuler()
{
// let form1=document.forms['frm1']
// form1.style.visibility='hidden'
$("form").toggle()
}
var liste=new Array()
    
if(JSON.parse(sessionStorage.getItem("tableau"))!=null)
liste=JSON.parse(sessionStorage.getItem("tableau"))

function ajouter()
   {
    let code=document.getElementById('code').value
    let nom=document.getElementById('nom').value
    let prenom=document.getElementById('prenom').value
    let semestre=document.getElementById('semestre').value
    let filiere=document.getElementById('filiere').value
    let obj={"code":code,"nom":nom,"prenom":prenom,"semestre":semestre,"filiere":filiere}
    
    liste.push(obj)
    sessionStorage.setItem("tableau", JSON.stringify(liste));
   }