import { getAll } from "./db.js";
import { remove } from "./db.js";
const table = document.querySelector('table.table');

const generateTable = (tableRows = [])=>{
    const keys = Object.keys(tableRows[0]);

    //console.log(tableRows);
    const thead = document.createElement('thead');
    table.appendChild(thead);

    const tr = document.createElement('tr')
    thead.appendChild(tr);
    keys.forEach( k=>{
        const th = document.createElement('th');
        tr.appendChild(th);
        th.innerText = k;
    });

    const th = document.createElement('th');
        tr.appendChild(th);
        th.innerText = k;

    const tbody = document.createElement('tbody');
    table.appendChild(tbody);

    tableRows.forEach( row =>{
        const tr = document.createElement('tr');
        tbody.appendChild(tr);

        keys.forEach( k => {
            const td = document.createElement('td');
            tr.appendChild(td);
            td.innerText = row[k];
        });
    });
};

getAll().then( data => generateTable(data));