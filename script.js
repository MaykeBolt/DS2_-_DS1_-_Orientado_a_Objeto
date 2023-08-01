//!! - !! - !! - !! - !! - !! - !! - !! - !! - !! - !! - !! - !!  PROBLEMAS  !! - !! - !! - !! - !! - !! - !! - !! - !! - !! - !! - !! - !! - !!

// Wanda's chara.mana "undefined" thingy on the attackscenario()
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

        if (choosecharacter == "arthur" || choosecharacter == "a") {
            chara = arthur
            playerdmgnumber = 9
        }
        else if (choosecharacter == "sleveen" || choosecharacter == "s") {
            chara = sleveen
            playerdmgnumber = 6
        }
        else if (choosecharacter == "wanda" || choosecharacter == "w") {
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
        
            if (chooserival == "sleveen" || chooserival == "s") {
                rival = sleveen
                rivaldmgnumber = 6
            }
            else if (chooserival == "wanda" || chooserival == "w") {
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
            if (chooserival == "arthur" || chooserival == "a") {
                rival = arthur
                rivaldmgnumber = 9
            }
            else if (chooserival == "wanda" || chooserival == "w") {
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
            if (chooserival == "arthur" || chooserival == "a") {
                rival = arthur
                rivaldmgnumber = 9
            }
            else if (chooserival == "sleveen" || chooserival == "s") {
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

// - // - // - // - // - // - // - // - // - //  Battle Menu  \\ - \\ - \\ - \\ - \\ - \\ - \\ - \\ - \\ - \\ - \\

class combatmenu {
    mainmenu() {
        combatchoice = window.prompt("Escolha uma ação\nAtacar | Defender | Itens | Correr")

        if (combatchoice == "itens") {
            battlemenu.itemmenu();
        }
        if (combatchoice == "atacar")  {
            battlemenu.attackscenario();
        }
        if (combatchoice == "defender") {
            battlemenu.blockscenario();
        }
        if (combatchoice == "correr" || chara.health <= 0) {
            battlemenu.endgame();
        }
    }
//============//============//
    endgame() {
        if (combatchoice == "correr") {
            alert("Cagão sem excessão.")
        }
        else if (chara.health <= 0) {
            alert("GAME OVER")
        }
        else {
            alert("You Win!")
        }
    }
//============//============//
    itemmenu() {
        chooseitem = window.prompt("Escolha um item para equipar\n"+chara.item1+" | "+chara.item2+" | "+chara.item3)

        if (chooseitem == "correntes" || chooseitem == "luneta" || chooseitem == "poção de vitalidade") {
            itemselected = 1
            battlemenu.mainmenu();
        }
        else if (chooseitem == "escudo" || chooseitem == "mosquito venenoso" || chooseitem == "amuleto de karma") {
            itemselected = 2
            battlemenu.mainmenu();
        }
        else if (chooseitem == "capacete" || chooseitem == "luvas" || chooseitem == "bracelete") {
            itemselected = 3
            battlemenu.mainmenu();
        }
        else if (chooseitem === null) {
            battlemenu.mainmenu();
        }
        else {
            battlemenu.itemmenu();
        }
    }
//============//============//
    blockscenario() {
        if (chooseitem == "escudo") {
            blockcondition = 0.5;
            alert("Você bloqueou com seu escudo!\n Todo dano de "+rival.name+" será cortado pela metade!")
        }

        else if (chooseitem == "capacete") {
            alert("Você bloqueou com seus braços.\n Seu capacete irá te proteger de 25% de dano.")
            blockcondition = 0.25;
        }

        else if (chooseitem == "mosquito venenoso") {
            alert("Você bloqueou com seus braços.\n O mosquito em suas mãos irá causar envenenamento ao inimigo que te acertar.")
        }

        else if (chooseitem == "amuleto de karma") {
            alert("Você bloqueou com seus braços.\n O amuleto em seu pescoço irá refletir metade do dano a "+rival.name+".")
        }
        else {
            alert("Você bloqueou com seus braços.")
        }
    }
//============//============//
    attackscenario() {
        if (chara == arthur) {
            if (itemselected == 1) {
                alert("Você puxou "+rival.name+" com suas Correntes e desferiu sua espada sobre ele!\n"+rival.name+" perdeu 12 de vida!")
                rival.health = rival.health - (playerdmgnumber + 3)
            }
            else {
            alert("Você cortou "+rival.name+" com sua espada.\n"+rival.name+" perdeu 9 de vida!")
            rival.health = rival.health - playerdmgnumber
            }
        }


        if (chara == sleveen) {
            if (playerluck >= 5) {

            if (itemselected == 1) {
                alert("Sua luneta permite ver os pontos fracos de "+rival.name+" com mais clareza.\n"+rival.name+" perdeu 9 de vida!")
                rival.health = rival.health - (playerdmgnumber + 3)
            }
            else if (itemselected == 2) {
                alert("Você rasteja um dos mosquitos em sua flecha, a cobrindo de seu sangue venenoso.\n"+rival.name+" perdeu 6 de vida!\n"+rival.name+" está envenenado por três rodadas!")
                
            }
            else {
                alert("Você acertou "+rival.name+" com uma flecha.\n"+rival.name+" perdeu 6 de vida!")
                rival.health = rival.health - playerdmgnumber
            }
        }
        else {
            alert("Você errou o alvo!\nRodada passada para "+rival.name+"!");
        }


        if (chara == wanda) {
            if (totalmana >= 1) {
                alert("Você atirou uma bola de fogo a "+rival.name+"!\n"+rival.name+" perdeu 12 de vida!");
                rival.health = rival.health - playerdmgnumber;
                totalmana = chara.mana - manacost;
                chara.mana = totalmana
            }
            else {
                alert("Você não possui mais mana para atacar o inimigo!\n No entanto, "+rival.name+" levou um belo murro.\n"+rival.name+" perdeu 6 de vida!");
                rival.health = rival.health - (playerdmgnumber - 6);
                totalmana = chara.mana + 5;
            }
        }
        }
}
}

let battlemenu = new combatmenu();
let combatchoice
let chooseitem
let itemselected
let blockcondition
battlemenu.mainmenu();