let res = document.getElementById('res')

let pais = ['Chile','Bolívia','Brasil','Argentina','Paraguai']
let cidades = new Array('Tijucas','Irajaí')

// console.log(pais[2])
// console.log(cidades[1])
pais.push('Uruguai')
pais.unshift('Colômbia')
console.log(pais)
console.log(cidades)
pais.pop()
pais.shift()
console.log(pais)
console.log(cidades)

function inserir(){

    pais.pop()
    pais.shift()

    res.innerHTML += pais + '<br>'
    res.innerHTML += cidades + '<br>'
}