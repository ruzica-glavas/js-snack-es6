/*Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.*/


const bici= [
    { nome: "Speedster", peso: 7.5 },
    { nome: "RoadMaster", peso: 6.8 },
    { nome: "TurboLight", peso: 8.2 },
    { nome: "Cyclone", peso: 7.1 },
    { nome: "RacerX", peso: 6.5 }
];

console.log(bici);

const risultato= document.getElementById(`risultato`)

let biciLeggera=bici[0]

for(let i=0; i<bici.length; i++){
  let elemento=bici[i]
    if(bici[i].peso<biciLeggera.peso){
        biciLeggera=elemento
    }
}

risultato.innerHTML= `La bici più leggera è: ${biciLeggera.nome}. Il suo peso é di: ${biciLeggera.peso}`



/*Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/

const squadreCalcio = [
    { nome: "Juventus", punti: 0, falliSubiti: 0 },
    { nome: "Milan", punti: 0, falliSubiti: 0 },
    { nome: "Inter", punti: 0, falliSubiti: 0 },
    { nome: "Roma", punti: 0, falliSubiti: 0 },
    { nome: "Napoli", punti: 0, falliSubiti: 0 }
  ];

  console.log("Squadre con tutte le informazioni", squadreCalcio)

  for(let i=0; i<squadreCalcio.length; i++){
    squadreCalcio[i].punti= Math.floor(Math.random() * 100);
    squadreCalcio[i].falliSubiti= Math.floor(Math.random() * 100)
    
  }

  const nomiEFalli=[]
  
  for(let i=0; i<squadreCalcio.length; i++){

    nomiEFalli.push({

        nome: squadreCalcio[i].nome,
        falliSubiti: squadreCalcio[i].falliSubiti
    
    })
  }

  console.log("Squadre con solo il nome e il falli subiti", nomiEFalli)



/*Snack 3 (Bonus)
Scrivere una funzione che accetti tre argomenti, un array 
( esempio: ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'] )e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con li elementi estratti dall'array di partenza che hanno la posizione compresa 
tra i due numeri (a e b).*/