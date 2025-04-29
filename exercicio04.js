const futuramento ={
    primeiroTrimestre:10.650,
    segundoTrimestre :20.000,
    terceiroTrimestre :35.000
}
 const mediaFaturamento = ((faturamento.primeiroTrimestre +segundoTrimestre + terceiroTrimestre) /3).toFixed(2)

 console.log(`a media do faturamento é ${mediaFaturamento}`)

 if(mediaFaturamento >= 25000){
    console.log('média esperada')
 } else{
    console.log("media ABIXO do esperado ")
 }

    