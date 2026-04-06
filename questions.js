var score = 0;
var dejaQ1 = 0;
var dejaQ2 = 0;
var dejaQ3 = 0;
var dejaQ4 = 0;

function valider1() {
    var rep = document.getElementById('choix1').value;
    if (dejaQ1 == 0) {
        if (rep == 'coure') {
            score++;
            alert("Oui, un chat peut courir jusqu'à 48 km/h.");
        } else {
            alert("Non, il est meilleur à la course !");
        }
        dejaQ1 = 1;
        document.getElementById('score').innerHTML = score;
    }
}

function valider2() {
    var rep = document.getElementById('choix2').value.replace(',', '.'); 
    if (dejaQ2 == 0) {
        if (rep == '43.4') {
            score++;
            alert("Oui, C'est la taille de savannah.");
        } else {
            alert("Non ! La réponse était 43,4 cm.");
        }
        dejaQ2 = 1;
        document.getElementById('score').innerHTML = score;
    }
}

function valider3(choix) {
    if (dejaQ3 == 0) {
        if (choix == 'vrai') {
            score++;
            alert("Oui, le chocolat est mortel pour les chats.");
        } else {
            alert("Non, ton chat ne sera pas très performant à la course.");
        }
        dejaQ3 = 1;
        document.getElementById('score').innerHTML = score;
    }
}

function valider4(choix) {
    if (dejaQ4 == 0) {
        if (choix == 'vrai') {
            score++;
            alert("Gagné, il en a besoin pour faire du sport.");
        } else {
            alert("Perdu, ton chat a besoin d'eau pour s'hydraté.");
        }
        dejaQ4 = 1;
        document.getElementById('score').innerHTML = score;
    }
}