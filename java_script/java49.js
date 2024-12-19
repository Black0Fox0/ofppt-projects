const rangeInput = document.getElementById("quantité");
const rangeValue = document.getElementById("quantité-value");
rangeInput.addEventListener("input", (e) => {
  rangeValue.textContent = e.target.value;
});

let table = $("table");
table.hide();
let tbody = document.querySelector("#commandes");
let totalHT = $("#totalHT");
let totalTTC = $("#totalTTC");

let jsonConsoles = {
  consoles: [
    {
      ref: "nintendo switch",
      prix: 4500,
      manattes: 2,
      image: "images/nintendo switch.jpeg",
    },
    {
      ref: "playstation 5",
      prix: 8500,
      manattes: 1,
      image: "images/playstation 5.jpeg",
    },
    { ref: "xbox x", prix: 4600, manattes: 2, image: "images/xbox x.jpeg" },
    {
      ref: "laptop gaming",
      prix: 9000,
      manattes: 1,
      image: "images/laptop gaming.jpeg",
    },
  ],
};

let jsonCommandes = {
  consoles: [],
};
if (JSON.parse(sessionStorage.getItem("data")) != null) {
  jsonCommandes = JSON.parse(sessionStorage.getItem("data"));
  charge();
}

function addConsoleToCart()
{
  if (valideForm()) {
    let console = document.querySelector("#console");
    let quantité = document.querySelector("#quantité");

    let commande = {
      code: console.value,
      qte: quantité.value,
    };

    jsonCommandes.consoles.push(commande);
    charge();
  } else {
    alert("Veuillez selectionner une console et une quantité supérieure à 0");
  }
}

function charge() {
  table.show();
  let tableCommande = document.getElementById("commandes");
  tableCommande.innerHTML = "";
  let commandes = jsonCommandes.consoles;
  for (let commande of commandes) {
    let row = document.createElement("tr");
    let cell = document.createElement("td");
    cell.innerText = commande.code;
    row.appendChild(cell);
    cell = document.createElement("td");
    cell.innerText = commande.qte;
    row.appendChild(cell);

    let consoles = jsonConsoles.consoles;
    for (let x of consoles) {
      if (x.ref == commande.code) {
        cell = document.createElement("td");
        cell.innerHTML = `<img src="${x.image}" alt="">`;
        row.appendChild(cell);
      }
    }

    cell = document.createElement("td");
    cell.innerHTML =
      "<button class='btn btn-danger' onclick='deleteConsoleFormCart(this)'>Supprimer</button>";
    row.appendChild(cell);

    tbody.appendChild(row);
  }
  CalculerPrixHT();
  CalculerPrixTTC();
  JsonSeriallzer();
}

function Commander() {}

function deleteConsoleFormCart(ee) {
  let row = ee.parentNode.parentNode;
  let commande = jsonCommandes.consoles;
  commande.splice(row.rowIndex - 1, 1);
  charge();
}

function valideForm() {
  let console = document.querySelector("#console");
  let quantité = document.querySelector("#quantité");
  if (console.value != "none" && quantité.value > 0) {
    return true;
  } else {
    return false;
  }
}

function JsonSeriallzer() {
  console.log(jsonCommandes);
  sessionStorage.setItem("data", JSON.stringify(jsonCommandes));
}

function remplirConsole() {
  let console = document.querySelector("#console");
  let consoles = jsonConsoles.consoles;
  for (let x of consoles) {
    console.innerHTML += `<option value='${x.ref}'>${x.ref}</option>`;
  }
}
remplirConsole();

function CalculerPrixHT() {
  let ht = document.getElementById("totalHT");
  let prixTotal = 0;
  let prixHT = 0;
  let remise = 0.9;

  let commandes = jsonCommandes.consoles;
  for (let commande of commandes) {
    let consoles = jsonConsoles.consoles;
    for (let x of consoles) {
      if (x.ref == commande.code) {
        prixTotal += x.prix;
      }
    }
  }
  prixHT = prixTotal * remise;
  ht.innerText = prixHT + "DHs";
  return prixHT;
}

function CalculerPrixTTC() {
  let ttc = document.getElementById("totalTTC");
  let prixTTC = 0;
  let prixHT = CalculerPrixHT();
  let tva = 0.2;
  prixTTC = prixHT + prixHT * tva;
  ttc.innerText = prixTTC + "DHs";
  return prixTTC;
}
