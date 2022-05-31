function calcular(){
    var cerv = document.getElementById('quantc').value
    var pes = document.getElementById('quantp').value
    var tipo = document.getElementsByName('tipo')
    var res = document.getElementById('res')
    if(tipo[0].checked){
        //litrão
        cal = 1000 * cerv
        cal2 = cal / pes
        calfinal = cal2.toFixed(0)
        if (cal2 > 1000){
            callitro = cal2 / 1000
            litro = callitro.toFixed(0)
            calml1 = cal2 % 100
            calml = calml1.toFixed(0)
            res.innerHTML = `RESULTADO: <br> Cervejas:${cerv}; pessoas:${pes}; tipo: garrafa(600ml) <br><br> <strong> Cada pessoa consumiu: ${litro} litros e ${calml} ml `
        } else {
        res.innerHTML =  `RESULTADO: <br> Cervejas:${cerv}; pessoas:${pes}; tipo: Litrão <br><br> <strong>${calfinal} ml</strong> cada pessoa consumiu!`}

    } else if (tipo[1].checked){
        //600
        cal = 600 * cerv
        cal2 = cal / pes
        calfinal = cal2.toFixed(0)
        if (cal2 > 1000){
            callitro = cal2 / 1000
            litro = callitro.toFixed(0)
            calml1 = cal2 % 1000
            calml = calml1.toFixed(0)
            res.innerHTML = `RESULTADO: <br> Cervejas:${cerv}; pessoas:${pes}; tipo: garrafa(600ml) <br><br> <strong> Cada pessoa consumiu: ${litro} litros e ${calml} ml `
        } else {res.innerHTML = `RESULTADO: <br> Cervejas:${cerv}; pessoas:${pes}; tipo: Garrafa(600ml) <br><br> <strong>${calfinal} ml</strong> cada pessoa consumiu!`}

    } else if (tipo[2].checked) {
        //lata
        cal = 350 * cerv
        cal2 = cal / pes
        calfinal = cal2.toFixed(0)
        if (cal2 > 1000){
            callitro = cal2 / 1000
            litro = callitro.toFixed(0)
            calml1 = cal2 % 1000
            calml = calml1.toFixed(0)
            res.innerHTML = `RESULTADO: <br> Cervejas:${cerv}; pessoas:${pes}; tipo: Lata(600ml) <br><br> <strong> Cada pessoa consumiu: ${litro} litros e ${calml} ml `
        } else {res.innerHTML = `RESULTADO: <br> Cervejas:${cerv}; pessoas:${pes}; tipo: lata <br><br> <strong>${calfinal} ml</strong> cada pessoa consumiu!`}
    }






}