//!! - !! - !! - !! - !! - !! - !! - !! - !! - !! - !! - !! - !!  PROBLEMAS  !! - !! - !! - !! - !! - !! - !! - !! - !! - !! - !! - !! - !! - !!

// *else* nas funções *selectcharacter()* e *selectrival()* está causando loop mesmo quando a resposta é dada corretamente.
// Deveria repetir a janela somente quando você coloca-se um nome errado e não quando você coloca "arthur", "sleveen" ou "wanda".







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

let arthur = new character("Arthur",40,30,20,10,"Sword","Chains","Shield","Helmet");
let sleveen = new character("Sleveen",30,15,30,15,"Crossbow","Goggles","Poison Bug","Gloves");
let wanda = new character("Wanda",15,20,15,40,"Wand","Vitality Potion","Amulet of Karma","Bracelet");

// - // - // - // - // - // - // - // - // - // - // - // - //  Aviso do Devtools  \\ - \\ - \\ - \\ - \\ - \\ - \\ - \\ - \\ - \\ - \\ - \\ - \\ - \\
alert("Aperte o botão Fn12 ou o combo de teclas Fn + F12 para acessar o Devtools.\nIsso irá mostrar os status dos personagems.")

// - // - // - // - // - // - // - // - // - // - // - // - //  Character Selection  \\ - \\ - \\ - \\ - \\ - \\ - \\ - \\ - \\ - \\ - \\ - \\ - \\ - \\
let chara

function selectcharacter() {         //  *Let chara* não pode estar dentro de uma *function* pois o *chara.verifystatus()* não vai conseguir ler o *Let*
    var choosecharacter
    choosecharacter = window.prompt("Selecione o seu personagem \nArthur o Cavaleiro | Sleveen o Arqueiro | Wanda a Maga\n(Somente digite o primeiro nome em MINUSCULO)")

    if (choosecharacter == "arthur") {
        chara = arthur
    }
    if (choosecharacter == "sleveen") {
        chara = sleveen
    }
    if (choosecharacter == "wanda") {
        chara = wanda
    }
    //else {                            !!!
    //    selectcharacter();            !!!
    //}                                 !!!
}
selectcharacter();
chara.verifystatus();

// - // - // - // - // - // - // - // - // - // - // - // - //  Rival Selection  \\ - \\ - \\ - \\ - \\ - \\ - \\ - \\ - \\ - \\ - \\ - \\ - \\ - \\
let rival

function selectrival() {
    var chooserival
    
    if (chara == arthur) {
    chooserival = window.prompt("Selecione o seu rival \nSleveen o Arqueiro | Wanda a Maga\n(Somente digite o primeiro nome em MINUSCULO)")
    
    if (chooserival == "sleveen") {
        rival = sleveen
    }
    if (chooserival == "wanda") {
        rival = wanda
    }
    //else {                            !!!
    //    selectrival();                !!!
    //}                                 !!!
  }
    if (chara == sleveen) {
    chooserival = window.prompt("Selecione o seu rival \nArthur o Cavaleiro | Wanda a Maga\n(Somente digite o primeiro nome em MINUSCULO)")

    if (chooserival == "arthur") {
        rival = arthur
    }
    if (chooserival == "wanda") {
        rival = wanda
    }
    //else {                            !!!
    //    selectrival();                !!!
    //}                                 !!!
  }
    if (chara == wanda) {
    chooserival = window.prompt("Selecione o seu rival \nArthur o Cavaleiro | Sleveen o Arqueiro\n(Somente digite o primeiro nome em MINUSCULO)")

    if (chooserival == "arthur") {
        rival = arthur
    }
    if (chooserival == "sleveen") {
        rival = sleveen
    }
  }
}
selectrival();
console.log("==========================================================") //Barra só para separar os status do jogador do rival.
rival.verifystatus();
