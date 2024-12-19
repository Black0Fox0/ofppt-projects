
let pos = document.querySelector('#pos');
let inp = document.querySelector('input[type="text"]');

pos.addEventListener('mousemove', (e) => 
{
    let affichage = document.querySelector('#affichage');
    affichage.innerText = `Screen X/Y: (${e.screenX}, ${e.screenY}) Client X/Y: (${e.clientX}, ${e.clientY})`
}
);

inp.addEventListener("keydown", (event) => {
    if (event.keyCode==13)
    alert(`key=${event.key},code=${event.code},keyCode=${event.keyCode}`)
});
inp.addEventListener("keypress", (event) => {
    inp.style.background = "red"
});
inp.addEventListener("keyup", (event) => {
    inp.style.background = "white"
});



function ajouterVille(){
    var img = document.getElementById('ff');
    var divImg = document.getElementById('img');
    console.log(img.value)
    divImg.innerHTML = `<img src="${img.value}" alt="ff">`;

    var liste = document.querySelector("#liste");
    var li = document.createElement('li');
    li.className="unselected";
    li.innerHTML=document.querySelector("#ville").value;
    li.addEventListener("click",changerCouleur);
    liste.appendChild(li);
    }
    function changerCouleur()
    {
    const c=this.className;
    if (c=="unselected")
    {
    this.className="selected";
    this.style.background = "blue";
    }
    else
    {
    // event.target
    this.className="unselected";
    this.style.background = "white";
    };


    }

function supprimerVille()
{
const listeElements=document.querySelectorAll("#liste > li");
const liste=document.querySelector("#liste");
//Expression lambda
listeElements.forEach(e=>{
if (e.className=="selected"){
liste.removeChild(e);
}
});
}