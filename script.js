//!! - !! - !! - !! - !! - !! - !! - !! - !! - !! - !! - !! - !!  PROBLEMAS  !! - !! - !! - !! - !! - !! - !! - !! - !! - !! - !! - !! - !! - !!

// All clear
// 







// - // - // - // - // - // - // - // - // - // - // - // - //  ABSTRATISMO  \\ - \\ - \\ - \\ - \\ - \\ - \\ - \\ - \\ - \\ - \\ - \\ - \\ - \\
class character { // Status dos personagems)
    constructor(nm, hp, ap, spd, m, wep, it1, it2, it3) {
        this.name = nm;
        this.health = hp;
        this.armor = ap;
        this.speed = spd;
        this.mana = m;
        this.weapon = wep;
        this.item1 = it1;
        this.item2 = it2;
        this.item3 = it3;
    }
    verifystatus() { // Menu no console.log para verificar os status.)
        console.log("Name: "+this.name);
        console.log("Health: "+this.health);
        console.log("Armor: "+this.armor);
        console.log("Speed: "+this.speed);
        console.log("Mana: "+this.mana);
        console.log("Weapon: "+this.weapon);
        console.log("1st Item: "+this.item1);
        console.log("2nd Item: "+this.item2);
        console.log("3rd Item: "+this.item3);
    }
}
// - // - // - // - // - // - // - // - // - // - // - // - //  REALISMO  \\ - \\ - \\ - \\ - \\ - \\ - \\ - \\ - \\ - \\ - \\ - \\ - \\ - \\

let arthur = new character("Arthur",40,30,20,10,"Espada","Correntes","Escudo","Capacete");
let sleveen = new character("Sleveen",30,15,30,15,"Besta","Luneta","Mosquito Venenoso","Luvas");
let wanda = new character("Wanda",15,20,15,40,"Varinha","Poção de Vitalidade","Amuleto de Karma","Bracelete");
let playerdmgnumber // número de dano da arma principal
let rivaldmgnumber
let playerluck // Sorte do Sleveen
let manacost // Gasto de Mana por ataque de Wanda

// - // - // - // - // - // - // - // - // - // - // - // - //  Aviso do Devtools  \\ - \\ - \\ - \\ - \\ - \\ - \\ - \\ - \\ - \\ - \\ - \\ - \\ - \\
alert("Aperte o botão Fn12 ou o combo de teclas Fn + F12 para acessar o Devtools.\nIsso irá mostrar os status dos personagems.")

// - // - // - // - // - // - // - // - // - // - // - // - //  Character Selection  \\ - \\ - \\ - \\ - \\ - \\ - \\ - \\ - \\ - \\ - \\ - \\ - \\ - \\
let chara
let rival

class characterselection {
    
    selectcharacter() {
        let choosecharacter
        choosecharacter = window.prompt("Selecione o seu personagem \nArthur o Cavaleiro | Sleveen o Arqueiro | Wanda a Maga\n(Somente digite o primeiro nome em MINUSCULO)")

        if (choosecharacter == "arthur") {
            chara = arthur
            playerdmgnumber = 9
        }
        else if (choosecharacter == "sleveen") {
            chara = sleveen
            playerdmgnumber = 6
        }
        else if (choosecharacter == "wanda") {
            chara = wanda
            playerdmgnumber = 12
            manacost = 10
        }
        else {
            characterchoose.selectcharacter();
        }    
    }

    selectrival() {
        let chooserival
        
        if (chara == arthur) {
        chooserival = window.prompt("Selecione o seu rival \nSleveen o Arqueiro | Wanda a Maga\n(Somente digite o primeiro nome em MINUSCULO)")
        
            if (chooserival == "sleveen") {
                rival = sleveen
                rivaldmgnumber = 6
            }
            else if (chooserival == "wanda") {
                rival = wanda
                rivaldmgnumber = 12
                manacost = 10
            }
            else {
                characterchoose.selectrival();
            }
        }

        else if (chara == sleveen) {
            chooserival = window.prompt("Selecione o seu rival \nArthur o Cavaleiro | Wanda a Maga\n(Somente digite o primeiro nome em MINUSCULO)")
            if (chooserival == "arthur") {
                rival = arthur
                rivaldmgnumber = 9
            }
            else if (chooserival == "wanda") {
                rival = wanda
                rivaldmgnumber = 12
                manacost = 10
            }
            else {
                characterchoose.selectrival();
            }
        }

        else {
            chooserival = window.prompt("Selecione o seu rival \nArthur o Cavaleiro | Sleveen o Arqueiro\n(Somente digite o primeiro nome em MINUSCULO)")
            if (chooserival == "arthur") {
                rival = arthur
                rivaldmgnumber = 9
            }
            else if (chooserival == "sleveen") {
                rival = sleveen
                rivaldmgnumber = 6
            }
            else {
                characterchoose.selectrival();
            }
        }
    }

}

let characterchoose = new characterselection();
characterchoose.selectcharacter();
chara.verifystatus();
characterchoose.selectrival();
console.log("==========================================================");
rival.verifystatus();