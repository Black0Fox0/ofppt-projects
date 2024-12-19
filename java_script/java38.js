


document.querySelector('#show').addEventListener('click', showTable);

function showTable() {
    const num1 = parseInt(document.querySelector('#num1').value);
    const num2 = parseInt(document.querySelector('#num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Please input valid numbers.');
        return;
    };

    const table = document.createElement('table');

    table.setAttribute('border', '1');

    for (let i = 0; i <= num1; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j <= num2; j++){
            const cell = document.createElement('td');
            if(i==0 && j==0)
            {
                cell.textContent = "×";
                cell.style.fontSize = '1.3em';
                cell.style.fontWeight = 'bold';
                cell.style.background = "red";
            }
            else if(i==0)
            {
                cell.textContent = j;
                cell.style.fontSize = '1.3em';
                cell.style.fontWeight = 'bold';
                cell.style.background = "blue";
            }
            else if(j==0)
            {
                cell.textContent = i;
                cell.style.fontSize = '1.3em';
                cell.style.fontWeight = 'bold';
                cell.style.background = "green";
            }
            else{
                cell.textContent = i * j;
            };

            row.appendChild(cell);
        };

        table.appendChild(row);
    };
    
    document.getElementById('tablez').innerHTML = ''; 
    document.getElementById('tablez').appendChild(table);

}
