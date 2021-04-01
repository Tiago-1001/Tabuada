function Contar() {
    var num = document.querySelector('input#txtn')
    var res = document.querySelector('select#restab')

    if (num.value.length == 0) {
        alert ('[ERRO] Insira um número!!!')
    }

    else {
        var n = Number(num.value)
        res.innerHTML = ''
        
        for (c = 1; c <= 10; c++) {
        var item = document.createElement('option')
        item.text = `${c} x ${n} = ${c * n}`
        res.appendChild(item)
        }
    }
    
}