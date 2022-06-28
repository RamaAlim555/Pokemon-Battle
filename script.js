//Player Stats
var pATKstat = 30,
    pHPstat  =90,
    pMaxHPstat  = 100,
    pDEFstat = 2,
    pSPDstat = 10.000,
    pRGNstat = 40,
    pDamageDealt;

//Bot Stats
var comATKstat = 30,
    comHPstat  = 100,
    comDEFstat = 2,
    comSPDstat = 10.000,
    comMaxHPstat = 100,
    comRGNstat = 40,
    comDamageDealt;

//HP Bar
function ShowHP()
{
/*Player HP Bar*/
    if (pHPstat> pMaxHPstat/2)
    { 
        document.getElementById("pHealthBar").classList.remove("lowHP")
        document.getElementById("pHealthBar").classList.remove("mediumHP")
        document.getElementById("pHealthBar").classList.add('highHP');
    
    }
    else if (pHPstat<= pMaxHPstat/2 && pHPstat >pMaxHPstat/5)
    {
        document.getElementById("pHealthBar").classList.remove("lowHP");
        document.getElementById("pHealthBar").classList.remove('highHP');
        document.getElementById("pHealthBar").classList.add("mediumHP");
    }
    else
    {
        document.getElementById("pHealthBar").classList.remove('highHP');
        document.getElementById("pHealthBar").classList.remove("mediumHP");
        document.getElementById("pHealthBar").classList.add("lowHP");
    }
if (pHPstat>=pMaxHPstat)
    {
        pHPstat=pMaxHPstat
    }
else
{}
/*Computer HP Bar*/
    if (comHPstat> comMaxHPstat/2)
    { 
        document.getElementById("comHealthBar").classList.remove("lowHP")
        document.getElementById("comHealthBar").classList.remove("mediumHP")
        document.getElementById("comHealthBar").classList.add('highHP');

    }
    else if(comHPstat<= comMaxHPstat/2 && comHPstat >comMaxHPstat/5)
    {
        document.getElementById("comHealthBar").classList.remove("lowHP");
        document.getElementById("comHealthBar").classList.remove('highHP');
        document.getElementById("comHealthBar").classList.add("mediumHP");
    }
    else
    {
        document.getElementById("comHealthBar").classList.remove('highHP');
        document.getElementById("comHealthBar").classList.remove("mediumHP");
        document.getElementById("comHealthBar").classList.add("lowHP");
    }

if (comHPstat>=comMaxHPstat)
    {
        comHPstat=comMaxHPstat
    }
else
    {}
/*HP String*/
document.getElementById("HP").innerHTML = (pHPstat + "/" + pMaxHPstat);
document.getElementById("pHealthBar").value = (pHPstat/pMaxHPstat);
document.getElementById("comHealthBar").value = (comHPstat/comMaxHPstat);
return;
}

//DeathCondition
function deathDetector()
{
    if (pHPstat<=0)
    {
        alert("~~~~~ YOU LOSE!!! ~~~~~~");
        console.log("~~~~~ YOU LOSE!!! ~~~~~~")
        alert("Refresh this page to play again");
    }
    else if (comHPstat<=0)
    {
        alert("~~~~~ You Win!!! ~~~~~");
        console.log("~~~~~ You Win!!! ~~~~~")
        alert("Refresh this page to play again");
    }
    else{}
}

//Computer Move Randomizer
function comheal()
{
    comDamageDealt = 0;
    comHPstat += comRGNstat;
    comSPDstat +=2 ;
    console.log("Bot use heal");
    console.log("Bot get some HP and +2 Speed");
}
function comfly()
{
    comDamageDealt=10;
    console.log("Bot use Fly");
    console.log("Your SPD "+pSPDstat+" VS Bot Speed "+comSPDstat)
        if (pSPDstat != comSPDstat)
        {
            if (pSPDstat>comSPDstat)
            {
                console.log("Bot failed use fly");
            }
            else
            {
                pDamageDealt =0
                console.log("Bot success use fly, and not take damage");
            }
        }
        else
        {
            if (0.5>=Math.random())
            {
                    pDamageDealt=0
                    console.log("Same Speed 50% rate. Success Bot not take damage");
            }
            else
            {
                    console.log("Same Speed 50% rate. Bot Failed");
            }
        }
    comSPDstat-=1;
    console.log("Bot Speed -1");
}

function comflamethrower()
{
    comDamageDealt=pATKstat
    console.log("Bot Use Flamethrower")
}

function comfireBlast()
{
    if(Math.random()>0.5)
    {
    comDamageDealt=pATKstat * 2
    console.log("Bot Use Fire Blast Critical")
    }
    else
    comDamageDealt=pATKstat/2
    console.log("Bot use Fire Blast")
}
function comMove(pSPDstat,comSPDstat)
{
    if (Math.random()>0.75)
    {
        comheal();
    }
    else if (Math.random()>0.5)
    {
        comfly();
    }
    else if (Math.random()>0.25)
    {
        comflamethrower();
    }
    else if (Math.random()>=0)
    {
        comfireBlast();
    }
}

//Player Move
//--Speed-Battle--
function attack()
{
    console.log("Your SPD "+pSPDstat+" VS Bot Speed "+comSPDstat)
    if (pSPDstat=comSPDstat)
    {
        if (0.5>=Math.random())
        {
            comHPstat-=pDamageDealt;
            console.log("You deal "+pDamageDealt+" damage");
            deathDetector();
            pHPstat-=comDamageDealt;
            console.log("Bot deal "+comDamageDealt+" damage");
            deathDetector();
        }
        else
        {
            pHPstat-=comDamageDealt;
            console.log("Bot deal "+comDamageDealt+" damage");
            deathDetector();
            comHPstat-=pDamageDealt;
            console.log("You deal "+pDamageDealt+" damage");
            deathDetector();
        }
    }
    else if (pSPDstat>comSPDstat)
    {
        comHPstat-=pDamageDealt;
        console.log("You deal "+pDamageDealt+" damage");
        deathDetector();
        pHPstat-=comDamageDealt;
        console.log("Bot deal "+comDamageDealt+" damage");
        deathDetector();
    }
    else
    {
        pHPstat-=comDamageDealt;
        console.log("Bot deal "+comDamageDealt+" damage");
        deathDetector();
        comHPstat-=pDamageDealt;
        console.log("You deal "+pDamageDealt+" damage");
        deathDetector();
    }
ShowHP();
}

//RECOVERY (Heal)//
function heal()
{
        pDamageDealt=0;
        comMove();
        attack();
        pHPstat += pRGNstat;
        pSPDstat += 2
        console.log("You use recovery. Your speed +2 and your HP +"+pRGNstat)
        ShowHP();
        return;
}

//Fly Low Damage Gacha Immune 100% Immune klo menang speed (setelah dipakai speed-1)

function fly()
{
    
        pDamageDealt=10;
        console.log("You use fly")
        comMove();
        if (pSPDstat != comSPDstat)
        {
            if (pSPDstat>comSPDstat)
            {
                console.log("Your SPD "+pSPDstat+" VS Bot Speed "+comSPDstat)
                console.log("You success use fly and not take damage");
                comHPstat-= pDamageDealt;
                console.log("You deal "+pDamageDealt+" damage");
                deathDetector();
                comDamageDealt=0;
                console.log("Bot deal "+comDamageDealt+" damage");
            }
        else
            {
                console.log("You failed use fly");
                pHPstat-= comDamageDealt;
                console.log("Bot deal "+comDamageDealt+" damage");
                deathDetector();
                comHPstat-= pDamageDealt;
                deathDetector();
                console.log("You deal "+pDamageDealt+" damage");
            }
        }
        else
        {
            if (0.5>=Math.random())
            {
                    comHPstat-=pDamageDealt ;
                    comDamageDealt=0;
                    console.log("Same Speed 50% rate. Success You not take damage");
                    console.log("You deal "+pDamageDealt+" damage")
                    deathDetector();
                    console.log("Bot deal "+comDamageDealt+" damage")
            }
            else
            {
                    console.log("Same Speed 50% rate. You failed");
                    pHPstat-=comDamageDealt;
                    console.log("Bot deal "+comDamageDealt+" damage");
                    deathDetector();
                    comHPstat-=pDamageDealt;
                    console.log("You deal "+pDamageDealt+" damage");
                    deathDetector();
            }
        }
        if (pSPDstat>comSPDstat)
            {
                console.log("You success use fly and not take damage");
                comHPstat-= pDamageDealt;
                console.log("You deal "+pDamageDealt+" damage");
                deathDetector();
                comDamageDealt=0;
                console.log("Bot deal "+comDamageDealt+" damage");
            }
        else
            {
                console.log("You failed use fly");
                pHPstat-= comDamageDealt;
                console.log("Bot deal "+comDamageDealt+" damage");
                deathDetector();
                comHPstat-= pDamageDealt;
                deathDetector();
                console.log("You deal "+pDamageDealt+" damage");
            }
        ShowHP();
        pSPDstat-=1;
        console.log("Player Speed -1")
}

//Flamethrower Damage = Atk Stat
function flamethrower()
{
    pDamageDealt=pATKstat;
    console.log("You use Flamethrower")
    comMove();
    attack();

}
