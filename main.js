//Questão 1
function ehArray(array){
    (typeof(array) === 'object') ? console.log("É array") : console.log("Não é array")
}

//Questão 2
function clonarArray(array){
    let arrayClonado = array.slice()
    console.log(arrayClonado)
}

//Questão 3
function primerioElemento(array, n){
    (n === undefined) ? console.log(array[0]) : console.log(array.slice(0, n))
}

//Questão 4
function ultimoElemento(array, n){
    (n === undefined) ? console.log(array[array.length-1]) : console.log(array.slice(n+1, array.length))
}

//Questão 5
function unirElementos(array){
    console.log(array.join(''))
}

//Questão 6
function tracoEntrePares(n){
    let nString = n.toString()
    let newString = ''
    for(let i = 0; i < nString.length; i++){
        if(nString[i] % 2 === 0 && nString[i + 1] % 2 === 0){
            newString += `${nString[i]}-${nString[i+1]}`
        }else if(nString[i] % 2 === 1){
            newString += nString[i]
        }
    }
    console.log(newString)
}

//Questão 7
function elemetoFrequente(array){
    let elemento = 0
    let vezesDoMaior = -1

    for (let i = 0; i < array.length; i++) {
        let vezes = 1
        for (let j = i+1; j < array.length; j++){
            if (array[i] == array[j])
            vezes++
        }
    
        if (vezes > vezesDoMaior) {
            elemento = array[i]
            vezesDoMaior = vezes;
        }
    }
    
    console.log(elemento)
}

//Questão 8
function removeDuplicados(array){
    arrayUnico = array.filter(function(atual, pos) {
        return array.indexOf(atual) == pos;
    })
    
    console.log(arrayUnico)
}

//Questão 9
function somaIndiceArrays(array1, array2){
    let arraySoma = []
    for(let i = 0; i < array1.length; i++){
        arraySoma.push(array1[i] + array2[i])
    }

    console.log(arraySoma)
}

//Questão10
function adicionaNoArray(arrayPilha, arrayAdiciona){
    let vetorPilha = arrayPilha
    for(let i = 0; i < arrayAdiciona.length; i++){
        vetorPilha.push(arrayAdiciona[i])
        console.log(vetorPilha)
    }
}

//ehArray([2,3,4])
//clonarArray(['ab','bc','cd'])
//primeiroElemento([4,2,1,3,4,5,6,7,8], 4)
//ultimoElemento([4,2,1,3,4,5,6,7,8], 4)
//unirElementos(['aab','bc','cdd'])
//tracoEntrePares(12435687902)
//elemetoFrequente([1, 2, 3, 4, 5, 5, 5, 5])
//removeDuplicados([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 5, 5])
//somaIndiceArrays([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])
//adicionaNoArray([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])