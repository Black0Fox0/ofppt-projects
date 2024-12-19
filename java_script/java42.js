const dialog1 = document.getElementById("validationForm");
// lecture des données formulaire
var
 nom=null,email=null,loisir=null,sexe=null,infoSupp=null
null
function
 valider()
{
 nom=document.getElementsByName('field1')[0].value
 
 email=document.getElementsByName('field2')[0].value
 
 apropos=document.getElementsByName('field3')[0].value
 
 loisir=document.getElementsByName('field4')[0].value
sexe=document.querySelector('input[type="radio"]:checked')
infoSupp=document.getElementsByName('field6')[0].value
 
var regexNom=/^[A-Z][A-Za-z]{3,}$/
if(!regexNom.test(nom))
{
document.getElementById('erreurValidation').innerText='Le nom doit contenir au moins 4 lettres, 1 ere lettre majuscule'
dialog1.showModal()
return
false
}
if(nom==''||email==''||apropos=='')
{
document.getElementById('erreurValidation').innerText='Veuillez remplir svp tous les champs obligatoire'
dialog1.showModal()
return
false
}
document.getElementById('erreurValidation').innerText='Felicitations Candidat Ajouté avec succés'
dialog1.style.color='green'
dialog1.showModal()
return
true
}
var
 ajout=document.getElementById('ajouter')
ajout.addEventListener("click",ajouter=()=>
{
 
if(valider())
 {
 nom=document.getElementsByName('field1')[0].value
 
 email=document.getElementsByName('field2')[0].value
 
 apropos=document.getElementsByName('field3')[0].value
 
 loisir=document.getElementsByName('field4')[0].value
sexe=document.querySelector('input[type="radio"]:checked')
infoSupp=document.getElementsByName('field6')[0].value
// creation ligne table html
var
 ligne=document.createElement("tr")
var
 data=[nom,email,apropos,loisir,sexe]
for(v
of data)
{
 
let col=document.createElement('td')
 col.classList.add('p-3')
 col.innerText=v
 ligne.appendChild(col)
}
let
 actions=document.createElement('td')
actions.innerHTML='<button class="del1 mx-1 btn bg-danger" onclick="supprimer(this)">Supprimer</button><button class="edt1 mx-1 btn bg-primary" onclick="editer(this)">Editer</button>'
ligne.appendChild(actions)
var
 tab=document.getElementById('tb')
tab.appendChild(ligne)
 }
})
var
 val=null
var
 x=null,y=null
var
 dialog = document.getElementById("favDialog");
function
 supprimer(btt)
{ 
 val=10
 document.getElementById('compteur').innerText=10+"seconds"
 dialog.showModal()
x=setInterval(()=>{
 val-=1; document.getElementById('compteur').innerText = "seconds..."
},1000)
 //let
 conf=document.getElementById('confirmer')
 let
 conf=dialog.children[0].children[2].children[1]
 let
 canc=dialog.children[0].children[2].children[0]
 y=setTimeout(()=>{
 dialog.close()
 clearInterval(x)
 },10000)
 let
 tab=document.getElementById('tb')
 conf.addEventListener("click",vv=()=>{
 clearInterval(x)
 clearTimeout(y)
 val=10
 document.getElementById('compteur').innerText=10+"seconds"
 
let ligne=btt.parentNode.parentNode
 ligne.remove()
 tab=document.getElementById('tb')
 conf.removeEventListener('click',vv)

 })
 canc.addEventListener("click",()=>{
 clearInterval(x)
 clearTimeout(y)
 conf.removeEventListener('click',vv)
 val=10
 })
 
 
}
function
 editer(btt)
{
 ajout.removeEventListener("click",ajouter)
var ligne=btt.parentNode.parentNode
 document.getElementsByName('field1')[0].value=ligne.cells[0].innerText
 
document.getElementsByName('field2')[0].value=ligne.cells[1].innerText
 
 document.getElementsByName('field3')[0].value=ligne.cells[2].innerText
 
 document.getElementsByName('field4')[0].value=ligne.cells[3].innerText
var
 rad=document.querySelector('input[value='+ligne.cells[4].innerText+']')
rad.checked=true
ajout.addEventListener("click",edi=()=>{
if(valider())
 {
 nom=document.getElementsByName('field1')[0].value
 
 email=document.getElementsByName('field2')[0].value
 
 apropos=document.getElementsByName('field3')[0].value
 
 loisir=document.getElementsByName('field4')[0].value
sexe=document.querySelector('input[type="radio"]:checked').value
infoSupp=document.getElementsByName('field6')[0].value

// creation ligne table html
var
 lig=document.createElement("tr")
var
 data=[nom,email,apropos,loisir,sexe]
for(v
of data)
{
 
let col=document.createElement('td')
 col.classList.add('p-3')
 col.innerText=v
 lig.appendChild(col)
}
let
 actions=document.createElement('td')
actions.innerHTML='<button class="del1 mx-1 btn bg-danger" onclick="supprimer(this)">Supprimer</button><button class="edt1 mx-1 btn bg-primary" onclick="editer(this)">Editer</button>'
lig.appendChild(actions)
var
 tab=document.getElementById('tb')
tab.replaceChild(lig,ligne)
ajout.removeEventListener("click",edi)
ajout.addEventListener("click",ajouter)
 }
})
}
