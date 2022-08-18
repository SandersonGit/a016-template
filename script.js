

/* const resultado1 = [4, 45, 52, 23, 31, 30]
const resultado2 = [55, 21, 8, 6, 45, 89]
const resultado3 = [89, 45, 74, 12, 4, 63]
const resultado4 = [98, 41, 65, 6, 7, 23]

const megaSena = [resultado1, resultado2, resultado3, resultado4]

console.table(megaSena)

console.log("X".repeat(50));

if(megaSena.length === 4){
  
  for(let i = 0; i <megaSena.length; i++){
    for(let a = 0; a < megaSena[i].length; a++){
         console.log(`Sorteio ${i+1}; ${megaSena[i]}`); 
      
      }
  }    


}else{
  console.log(`Necessário aumentar o número deitens do Array`);
}

console.log("X".repeat(30));

if(megaSena.length === 4){
  
  for(let i in megaSena){

    for(let a = 0; a < megaSena[i].length; a++){
      console.log(`Sorteio ${i}; ${megaSena[i]}`); 
      
      }
  }    


}else{
  console.log(`Necessário aumentar o número deitens do Array`);
}

console.log("X".repeat(30))

if(megaSena.length === 4){
  
  for(let i in megaSena){

    for(let z of megaSena[i]){
      console.log(`Sorteio ${i}: ${megaSena[i]}`); 
      
      }
  }    


}else{
  console.log(`Necessário aumentar o número deitens do Array`);
} */

const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
]

// escreva seu código abaixo 👇🏻

for(let i in filmes){
  console.log(`${filmes[i].titulo}, ${filmes[i].ano}, dirigido por ${filmes[i].diretor}`)

    /* console.log(`${filmes[i].titulo}, ${filmes[i].ano}, dirigido por ${filmes[i].diretor}`)
    } */
    
}
