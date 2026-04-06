function pythagore() {
    var AB, AC, BC;

    AB = parseFloat(document.getElementById('AB').value);
    AC = parseFloat(document.getElementById('AC').value);
    BC = parseFloat(document.getElementById('BC').value);

    if (AB**2 == AC**2 + BC**2) {
        document.getElementById('reponse').innerHTML = "Le triangle est rectangle en C";
    } 
    else if (AC**2 == AB**2 + BC**2) {
        document.getElementById('reponse').innerHTML = "Le triangle est rectangle en B";
    } 
    else if (BC**2 == AB**2 + AC**2) {
        document.getElementById('reponse').innerHTML = "Le triangle est rectangle en A";
    } 
    else {
        document.getElementById('reponse').innerHTML = "Le triangle n'est pas rectangle";
    }
}

function hypothenuse() {
    var AB, AC, BC;
    
    AB = parseFloat(document.getElementById('AB2').value);
    AC = parseFloat(document.getElementById('AC2').value);
    
    BC = Math.sqrt(AB**2 + AC**2);
    document.getElementById('reponse2').innerHTML = "La longueur de l hypotenuse est : " + BC.toFixed(2) + "km";
}

