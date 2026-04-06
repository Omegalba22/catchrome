
var mystere = Math.floor(Math.random() * 100) + 1; 

function plus() {
    var prop;
    prop = document.getElementById('plusoumoins').value;
    
    prop = parseInt(prop);

    if (prop > mystere) {
        document.getElementById('reponse').innerHTML = 'Trop grand';
    } 
    else if (prop < mystere) {
        document.getElementById('reponse').innerHTML = 'Trop petit';
    } 
    else if (prop === mystere) {
        document.getElementById('reponse').innerHTML = 'Bravo tu as trouvé le nombre mystere !';
    }
    else {
        document.getElementById('reponse').innerHTML = 'Veuillez entrer un nombre valide';
    }
}