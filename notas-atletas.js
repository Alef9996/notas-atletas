let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
   ];      
   
   function Media(notas){                         //Função da média de notas, recebe a matriz de notas
   let notasValidas = 0;
   notas.sort((a, b) => a - b);
   for (let i = 0; i < notas.length; i++){        //executa o comando enquanto i for menor que o tamanho do array
   if ((i !== 0) && (i !== (notas.length - 1))){
   notasValidas = notasValidas + notas[i];        //elimina a maior e a menor nota (primeira e a última do array)
   }                                              //e soma os demais em uma variável
   }
   let media = 0
   media = (notasValidas/(notas.length-2));   //retorna o valor da média das notas somadas sobre o número de notas somadas
   return media;
   }
   function exibir(atletas){
   atletas.forEach(function(atleta){
   console.log(`Atleta: ${atleta.nome}
   Notas: ${atleta.notas}
   Média Válida: ${Media(atleta.notas)}`)
   })
   }
   
   exibir(atletas)  //esta chamada convoca uma função de exibição, exibir(), para executar todos os console.log do array de objetos.
   
