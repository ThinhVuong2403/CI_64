let btnSubmit = document.getElementById("submit");
let column = document.getElementById("column");
let row = document.getElementById("row");

function createTable(a, b){
    let output = "";
    for (let i = 0; i < a; i++) {
        output += '<tr>';
        for (let j = 0; j < b; j++) {
            output += '<td><input type="text" size="10px"></td>';
        }
        output += '</tr>';
    }
    return output;
}

btnSubmit.addEventListener( 'click', () => {
    document.getElementById('result').innerHTML = createTable( Number(row.value), Number(column.value));
});