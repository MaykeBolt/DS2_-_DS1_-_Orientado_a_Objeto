//!! - !! - !! - !! - !! - !! - !! - !! - !! - !! - !! - !! - !!  PROBLEMAS  !! - !! - !! - !! - !! - !! - !! - !! - !! - !! - !! - !! - !! - !!

// Problema de lógica com o Karma da Wanda
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

let arthur = new character("Arthur",40,30,20,0,"Espada","Correntes","Escudo","Capacete");
let sleveen = new character("Sleveen",30,15,30,0,"Besta","Luneta","Mosquito Venenoso","Luvas");
let wanda = new character("Wanda",15,20,15,40,"Varinha","Poção de Vitalidade","Amuleto de Karma","Bracelete");
let playerdmgnumber // número de dano da arma principal
let rivaldmgnumber
let playerluck // Sorte do Sleveen
let manacost // Gasto de Mana por ataque de Wanda
let charapoisoncheck //Envenenamento causado pelo Player
let rivalpoisoncheck //Envenenamento causado pelo Rival
let rivalpoisoncounter = 0 //Contador de Envenenamento do Rival
let charapoisoncounter = 0 //Contador de Envenenamento do Player
let rivalpoisondmg //Dano de Poison para o Rival
let charapoisondmg //Dano de Poison para o Player
let karmacheck
let rivalkarmareflect
let charakarmareflect

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
    poisoncheckverify() { //Firstly this when starting the poisoning | Thirdly after the poison started
        if (charapoisoncheck == 1 && rivalpoisoncounter <= 0) {
            rivalpoisoncounter = 3;
        }
        else if (rivalpoisoncheck == 1 && charapoisoncounter <= 0) {
            charapoisoncounter = 3;
        }
    }

    charapoisoncounterverify() { //Secondly this when starting the poisoning | Firstly after the poison started
        if (rivalpoisoncounter > 0) {
            rivalpoisondmg = 2
        }
        else {
            rivalpoisondmg = 0
            charapoisoncheck = 0
        }
    }
    rivalpoisoncounterverify(){
        if (charapoisoncounter > 0) {
           charapoisondmg = 2 
        }
        else {
            charapoisondmg = 0
            rivalpoisoncheck = 0
        }
    }
    

    charapoisonmessage() { //Always Secondly after the poison started
        if (rivalpoisoncounter > 0 && chara == sleveen) {
            alert(rival.name+" perdeu +2 de vida por envenenamento.")
        }
    }

    rivalpoisonmessage() {
        if (charapoisoncounter > 0 && rival == sleveen) {
            alert(chara.name+" perdeu +2 de vida por envenenamento.")
        }
    }

    karmaverify() {
        if (charakarmacheck == 1) {
            rivalkarmareflect = 0.5
        }
        else {
            rivalkarmareflect = 0
        }
    }

    luckcheck(min, max) {
        min = Math.ceil(1);
        max = Math.floor(10);
        playerluck = Math.floor(Math.random() * (max - min + 1) ) + min;
    }







    mainmenu() {
        combatchoice = window.prompt("Escolha uma ação\nAtacar | Defender | Itens | Correr")
        battlemenu.luckcheck();

        if (combatchoice == "itens" || combatchoice == "3") {
            battlemenu.itemmenu();
        }
        if (combatchoice == "atacar" || combatchoice == "1")  {
            battlemenu.attackscenario();
        }
        if (combatchoice == "defender" || combatchoice == "2") {
            battlemenu.blockscenario();
        }
        if (combatchoice == "correr" || chara.health <= 0 || rival.health <= 0 || combatchoice == "4") {
            battlemenu.endgame();
        }
    }
//============//============//
    endgame() {
        if (combatchoice == "correr" || combatchoice == "4") {
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

        if (chooseitem == "correntes" || chooseitem == "luneta") {
            charaitemselected = 1
            battlemenu.mainmenu();
        }
        else if (chooseitem == "poção de vitalidade" || chooseitem == "poção" || chooseitem == "poçao de vitalidade" || chooseitem == "poçao" || chooseitem == "pocao de vitalidade" || chooseitem == "pocao") {
            if (chara.health <= 5) {   //Restaura +10hp
                chara.health = chara.health + 10;
                alert("Está poção te recuperou "+chara.health+" de vida.");
                //
                console.clear();
                chara.verifystatus();
                console.log("==========================================================");
                rival.verifystatus();
                battlemenu.mainmenu();
            }
            else {  //Overheal de até 20hp 
                chara.health = chara.health + 10;
                    if (chara.health > 20) {
                        chara.health = 20;
                        alert("Está poção te recuperou "+chara.health+" de vida.");
                        //
                        console.clear();
                        chara.verifystatus();
                        console.log("==========================================================");
                        rival.verifystatus();
                        battlemenu.mainmenu();
                    }
                    else {
                        alert("Está poção te recuperou "+chara.health+" de vida.");
                        //
                        console.clear();
                        chara.verifystatus();
                        console.log("==========================================================");
                        rival.verifystatus();
                        battlemenu.mainmenu();
                    }
            }
        }
        else if (chooseitem == "escudo" || chooseitem == "mosquito venenoso" || chooseitem == "amuleto de karma") {
            charaitemselected = 2
            battlemenu.mainmenu();
        }
        else if (chooseitem == "capacete" || chooseitem == "luvas" || chooseitem == "bracelete") {
            charaitemselected = 3
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
            blockcondition = 0.15;
            charapoisoncheck = 1;
            battlemenu.poisoncheckverify();
            battlemenu.charapoisoncounterverify();
        }

        else if (chooseitem == "amuleto de karma") {
            alert("Você bloqueou com seus braços.\n O amuleto em seu pescoço irá refletir metade do dano a "+rival.name+".")
            blockcondition = 0.5;
            karmacheck = 1;
            battlemenu.karmaverify();
        }
        else if (chara == wanda) {
            alert("Você bloqueou com seus braços.")
            chara.mana = chara.mana + 5
            blockcondition = 0.15;
        }
        else {
            alert("Você bloqueou com seus braços.")
            blockcondition = 0.15;
        }
    }
//============//============//
    attackscenario() {
        if (chara == arthur) {
            if (charaitemselected == 1) {
                alert("Você puxou "+rival.name+" com suas Correntes e desferiu sua espada sobre ele!\n"+rival.name+" perdeu 12 de vida!")
                rival.health = rival.health - (playerdmgnumber + 3)
            }
            else {
            alert("Você cortou "+rival.name+" com sua espada.\n"+rival.name+" perdeu 9 de vida!")
            rival.health = rival.health - playerdmgnumber
            }
        }


        else if (chara == sleveen) {
            if (playerluck >= 5) {

            if (charaitemselected == 1) {
                alert("Sua luneta permite ver os pontos fracos de "+rival.name+" com mais clareza.\n"+rival.name+" perdeu 9 de vida!")
                rival.health = rival.health - (playerdmgnumber + 3 + rivalpoisondmg)
                poisoncounter = poisoncounter - 1
                battlemenu.charapoisoncounterverify();
                battlemenu.charapoisonmessage()
                battlemenu.poisoncheckverify();
            }
            else if (charaitemselected == 2) {
                alert("Você rasteja um dos mosquitos em sua flecha, a cobrindo de seu sangue venenoso.\n"+rival.name+" perdeu 6 de vida!\n"+rival.name+" está envenenado por três rodadas!")
                rival.health = rival.health - playerdmgnumber
                charapoisoncheck = 1;
                battlemenu.poisoncheckverify();
                battlemenu.charapoisoncounterverify();
            }
            else {
                alert("Você acertou "+rival.name+" com uma flecha.\n"+rival.name+" perdeu 6 de vida!")
                rival.health = rival.health - (playerdmgnumber + rivalpoisondmg)
                poisoncounter = poisoncounter - 1
                battlemenu.charapoisoncounterverify();
                battlemenu.charapoisonmessage()
                battlemenu.poisoncheckverify();
            }
        }
        else {
            alert("Você errou o alvo!\nRodada passada para "+rival.name+"!");
        }
    }

        else if (chara == wanda) {
            if (chara.mana >= 1) {
                alert("Você atirou uma bola de fogo a "+rival.name+"!\n"+rival.name+" perdeu 12 de vida!");
                rival.health = rival.health - playerdmgnumber;
                chara.mana = chara.mana - manacost
            }
            else {
                alert("Você não possui mais mana para atacar o inimigo!\n No entanto, "+rival.name+" levou um belo murro.\n"+rival.name+" perdeu 6 de vida!");
                rival.health = rival.health - (playerdmgnumber - 6);
                chara.mana = chara.mana + 5;
            }
        }    //Olhe sempre as chaves que pode esta travando o codigo
            //Também cuidado com o if, else if, else
}
}

let battlemenu = new combatmenu();
let combatchoice
let chooseitem
let charaitemselected
let blockcondition
battlemenu.mainmenu();





// - // - // - // - // - // - // - // - // - //  Rival Response  \\ - \\ - \\ - \\ - \\ - \\ - \\ - \\ - \\ - \\ - \\
class rivalresponse {
    rivalchoice(min, max) {
        min = Math.ceil(1);
        max = Math.floor(8);
        rivalchooses = Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    rivalmove() {
        if (rival == arthur) {
            if (rivalchooses == 1) {
                alert(rival.name+" cortou "+chara.name+" com sua espada.\n"+chara.name+" perdeu 9 de vida!")
                chara.health = chara.health - rivaldmgnumber   
            }
            else if (rivalchooses == 2) {
                alert(rival.name+" bloqueou com seus braços.")
            }
        }
    }
}

let rivalaction = new rivalresponse();
let rivalchooses;
rivalaction.rivalchoice()