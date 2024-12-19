
alert('Guess number between 1 and 1000');

const max = 1000;
const min = 1;

const random =  Math.floor(Math.random() * (max - min)) + min ;

document.querySelector('#show').addEventListener('click', run);

var i = 1;

function run()
{
    const num1 = parseInt(document.querySelector('#guess').value);

    if (isNaN(num1)) {
        alert('Please input valid numbers.');
        return;
    };

    if(num1 == random)
    {
        alert(`Correct in ${i} fois`);
    }
    else if(num1 > random)
    {
        alert('Guess Heigher');
        i++;
    }
    else if(num1 < random)
    {
        alert('Guess Lower');
        i++;
    };
};


const display = document.getElementById('display');

function surface()
{
    var rayon = parseInt(prompt('Entrer rayon '));
    if (isNaN(rayon)) {
        alert('Please input valid numbers.');
        return;
    };

    var surface = Math.PI * (rayon ** 2);
    display.innerText = surface;
};


const heur = document.getElementById('h');
const meni = document.getElementById('m');
const second = document.getElementById('s');
let timer = null;

let H = 0;
let M = 0;
let S = 0;

let play_stop = 1;
let time = 1000;

// FIXME: Clock Time
function play()
{
    play_stop += 1;
    
    timer = setInterval(
        function()
        {
            if(play_stop%2 == 0)
            {
                S += 1;

                if(S==60)
                {
                    M += 1;
                    S = 0;
                    if(M == 60)
                    {
                        H += 1;
                        M=0;
                        S = 0;
                        heur.innerHTML = H.toString().padStart(2,0);
                    };
                    meni.innerHTML = M.toString().padStart(2,0);
                };

                second.innerHTML = S.toString().padStart(2,0);
            }
        },time
    );
};


function stop()
{
    play_stop += 1;
    clearInterval(timer);
};

// TODO: Replay
function replay()
{
    S = 0;
    M = 0;
    H = 0;
    second.innerHTML = S.toString().padStart(2,0);
    meni.innerHTML = M.toString().padStart(2,0);
    heur.innerHTML = H.toString().padStart(2,0);
};




function calculerSurface(dim1, dim2) 
{
    if (isNaN(dim1) || isNaN(dim2)) 
    {
    throw 'Please input valid numbers.';
    }
    document.querySelector("#cal").innerHTML = ("Surface est : "+dim1*dim2);
}
function  calcul()
{
    
    let x = parseInt(prompt("Enter longeur"));
    let y = parseInt(prompt("Enter largeur"));
    try
    {
        calculerSurface(x,y);
    } 
    catch (e) 
    {
        alert(e);
    }
}

function affiche()
{
    let x = parseInt(prompt("Saisie une note entre 20 et 0"));

    if(isNaN(x) || x>20 || x<0)
    {
        throw "Note hors intervalle"
    };
    alert('OK! valur est bien');
};
try
{
    affiche()
}
catch(e)
{
    alert(e);
}

