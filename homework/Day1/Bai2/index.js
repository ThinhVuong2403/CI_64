let btnSubmit = document.getElementById("submit");
let a = document.getElementById("numberA");
let b = document.getElementById("numberB");

function checkNT (a) {
    if ( a < 2) return false;
    for ( let i = 2; i <= Math.sqrt(a); i++) {
        if ( a % i == 0) return false;
    }
    return true;
}

const soNguyenTo = (a, b) => {
    const arrNT = [];
    for (let i = a; i <= b; i++) {
        if ( checkNT (i)) arrNT.push(i);
    }
    return arrNT;
}

btnSubmit.addEventListener('click',() => {
    document.getElementById("result").innerHTML = `các số nguyên tố là: ${soNguyenTo(Number(a.value), Number(b.value))}`;
});

