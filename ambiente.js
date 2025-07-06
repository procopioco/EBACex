function calcular(){
let n1 = Number(document.getElementById('na1').value)
let n2 = Number(document.getElementById('nb2').value)
if (n2 > n1 ){
    window.alert('PARABÉNS!! O campo B é maior que o campo A!')
} else {
    window.alert('Infelizmente, o campo B é menor que o campo A')
}
}