const convert = document.getElementById('convertLabel')
const input = document.getElementById('number')
const inputResult = document.getElementById('result')
const main = document.querySelector('main')
let dadoConverter = ''
let dadoConvertido = ''
const converter = document.querySelectorAll('.converter')
const convertido = document.querySelectorAll('.convertido')


document.getElementById('convert').addEventListener('click', function (ev) {
    ev.preventDefault()
    const numero = input.value
    
    //Byte
    if (dadoConverter === 'Byte' && dadoConvertido === 'Byte') {
        inputResult.value = numero + ' ' + dadoConvertido+"'s'"
    }
    else if (dadoConverter === 'Byte' && dadoConvertido === 'KiloByte') {
        if (input.value < 1024) {
            inputResult.value = 1 / numero + ' ' + dadoConvertido+"'s'"
        } else if (numero >= 1024) {
            inputResult.value = numero / 1024 + ' ' + dadoConvertido+"'s'" 
        } else { "Erro" }
    }
    else if (dadoConverter === 'Byte' && dadoConvertido === 'MegaByte') {
        if (numero < Math.pow(1024, 2)) {
            inputResult.value = 1 / numero + ' ' + dadoConvertido+"'s'"
        } else if (numero >= Math.pow(1024, 2)) {
            inputResult.value = numero / Math.pow(1024, 2) + ' ' + dadoConvertido+"'s'"
        } else { "Erro" }
    }
    else if (dadoConverter === 'Byte' && dadoConvertido === 'GigaByte') {
        if (numero < Math.pow(1024, 3)) {
            inputResult.value = 1 / numero + ' ' + dadoConvertido+"'s'"
        } else if (numero >= Math.pow(1024, 3)) {
            inputResult.value = numero / Math.pow(1024, 3) + ' ' + dadoConvertido+"'s'"
        } else { "Erro" }
    }
    else if (dadoConverter === 'Byte' && dadoConvertido === 'TeraByte') {
        if (numero < Math.pow(1024, 4)) {
            inputResult.value = 1 / numero + ' ' + dadoConvertido+"'s'"
        } else if (numero >= Math.pow(1024, 4)) {
            inputResult.value = numero / Math.pow(1024, 4) + ' ' + dadoConvertido+"'s'"
        } else { "Erro" }

    }
    else if (dadoConverter === 'Byte' && dadoConvertido === 'PettaByte') {
        if (numero < Math.pow(1024, 5)) {
            inputResult.value = 1 / numero + ' ' + dadoConvertido+"'s'"
        } else if (numero >= Math.pow(1024, 5)) {
            numero / Math.pow(1024, 5) + ' ' + dadoConvertido+"'s'"
        } else { "Erro" }

    }
    else if (dadoConverter === 'KiloByte' && dadoConvertido === 'ExaByte') {
        if (numero < Math.pow(1024, 6)) {
            inputResult.value = 1 / numero + ' ' + dadoConvertido+"'s'"
        } else if (numero >= Math.pow(1024, 6)) {
            numero / Math.pow(1024, 6) + ' ' + dadoConvertido+"'s'"
        } else { "Erro" }

    }
    else if (dadoConverter === 'Byte' && dadoConvertido === 'ZettaByte') {
        if (numero < Math.pow(1024, 7)) {
            inputResult.value = 1 / numero + ' ' + dadoConvertido+"'s'"
        } else if (numero >= Math.pow(1024, 7)) {
            numero / Math.pow(1024, 7) + ' ' + dadoConvertido+"'s'"
        } else { "Erro" }
    }
    else if (dadoConverter === 'Byte' && dadoConvertido === 'YottaByte') {
        if (numero < Math.pow(1024, 8)) {
            inputResult.value = 1 / numero + ' ' + dadoConvertido+"'s'"
        } else if (numero >= Math.pow(1024, 8)) {
            numero / Math.pow(1024, 8) + ' ' + dadoConvertido+"'s'"
        } else { "Erro" }
    }
    //KiloByte
    if (dadoConverter === 'KiloByte' && dadoConvertido === 'Byte') {
        if (numero <= 1) {
            inputResult.value = 1024+ ' ' + dadoConvertido+"'s'"
        }
        else if (numero > 1) {
            inputResult.value = numero * 1024 + ' ' + dadoConvertido+"'s'"
        } else { "Erro" }
    }
    else if (dadoConverter === 'KiloByte' && dadoConvertido === 'KiloByte') {
        inputResult.value = numero + ' ' + dadoConvertido+"'s'"
    }
    else if (dadoConverter === 'KiloByte' && dadoConvertido === 'MegaByte') {
        if (numero < 1024) {
            inputResult.value = 1 / numero + ' ' + dadoConvertido+"'s'"
        } else if (numero >= 1024) {
            inputResult.value = numero / 1024
        } else { "Erro" }

    }
    else if (dadoConverter === 'KiloByte' && dadoConvertido === 'GigaByte') {
        if (numero < Math.pow(1024, 2)) {
            inputResult.value = 1 / numero + ' ' + dadoConvertido+"'s'"
        } else if (numero >= Math.pow(1024, 2)) {
            inputResult.value = numero / Math.pow(1024, 2) + ' ' + dadoConvertido+"'s'"
        } else { "Erro" }

    }
    else if (dadoConverter === 'KiloByte' && dadoConvertido === 'TeraByte') {
        if (numero < Math.pow(1024, 3)) {
            inputResult.value = 1 / numero + ' ' + dadoConvertido+"'s'"
        } else if (numero >= Math.pow(1024, 3)) {
            inputResult.value = numero / Math.pow(1024, 3) + ' ' + dadoConvertido+"'s'"
        } else { "Erro" }

    }
    else if (dadoConverter === 'KiloByte' && dadoConvertido === 'PettaByte') {
        if (numero < Math.pow(1024, 4)) {
            inputResult.value = 1 / numero + ' ' + dadoConvertido+"'s'"
        } else if (numero >= Math.pow(1024, 4)) {
            inputResult.value = numero / Math.pow(1024, 4) + ' ' + dadoConvertido+"'s'"
        } else { "Erro" }
    }
    else if (dadoConverter === 'KiloByte' && dadoConvertido === 'ExaByte') {
        if (numero < Math.pow(1024, 5)) {
            inputResult.value = 1 / numero + ' ' + dadoConvertido+"'s'"
        } else if (numero >= Math.pow(1024, 5)) {
            inputResult.value = numero / Math.pow(1024, 5) + ' ' + dadoConvertido+"'s'"
        } else { "Erro" }
    }
    else if (dadoConverter === 'KiloByte' && dadoConvertido === 'ZettaByte') {
        if (numero < Math.pow(1024, 6)) {
            inputResult.value = 1 / numero + ' ' + dadoConvertido+"'s'"
        } else if (numero >= Math.pow(1024, 6)) {
            inputResult.value = numero / Math.pow(1024, 6) + ' ' + dadoConvertido+"'s'"
        } else { "Erro" }
    }
    else if (dadoConverter === 'KiloByte' && dadoConvertido === 'YottaByte') {
        if (numero < Math.pow(1024, 7)) {
            inputResult.value = 1 /  + ' ' + dadoConvertido+"'s'"
        } else if (numero >= Math.pow(1024, 7)) {
            inputResult.value = numero / Math.pow(1024, 7) + ' ' + dadoConvertido+"'s'"
        } else { "Erro" }
    }
    //MegaByte
    if (dadoConverter === 'MegaByte' && dadoConvertido === 'Byte') {
        if (numero <= 1) {
            inputResult.value = Math.pow(1024, 2)+ ' ' + dadoConvertido+"'s'"
        } else if (numero > 1) {
            inputResult.value = numero * Math.pow(1024, 2) + ' ' + dadoConvertido+"'s'"
        } else { "Erro" }
    }
    else if (dadoConverter === 'MegaByte' && dadoConvertido === 'KiloByte') {
        if (numero <= 1) {
            inputResult.value = 1024 + ' ' + dadoConvertido+"'s'"
        } else if (numero > 1) {
            inputResult.value = numero * 1024 + ' ' + dadoConvertido+"'s'"
        } else { "Erro" }
    }
    else if (dadoConverter === 'MegaByte' && dadoConvertido === 'MegaByte') {
        inputResult.value = numero + ' ' + dadoConvertido+"'s'"
    }
    else if (dadoConverter === 'MegaByte' && dadoConvertido === 'GigaByte') {

        if (numero < 1024) {
            inputResult.value = 1 / numero + ' ' + dadoConvertido+"'s'"
        } else if (numero >= 1024) {
            inputResult.value = numero / 1024 + ' ' + dadoConvertido+"'s'"
        } else { "Erro" }
    }
    else if (dadoConverter === 'MegaByte' && dadoConvertido === 'TeraByte') {
        if (numero < Math.pow(1024, 2)) {
            inputResult.value = 1 / numero + ' ' + dadoConvertido+"'s'"
        } else if (numero >= Math.pow(1024, 2)) {
            inputResult.value = numero / Math.pow(1024, 2) + ' ' + dadoConvertido+"'s'"
        } else { "Erro" }
    }
    else if (dadoConverter === 'MegaByte' && dadoConvertido === 'PettaByte') {
        if (numero < Math.pow(1024, 4)) {
            inputResult.value = 1 / numero + ' ' + dadoConvertido+"'s'"
        } else if (numero >= Math.pow(1024, 4)) {
            inputResult.value = numero / Math.pow(1024, 4) + ' ' + dadoConvertido+"'s'"
        } else { "Erro" }
    }
    else if (dadoConverter === 'MegaByte' && dadoConvertido === 'ExaByte') {
        if (numero < Math.pow(1024, 4)) {
            inputResult.value = 1 / numero + ' ' + dadoConvertido+"'s'"
        } else if (numero >= Math.pow(1024, 4)) {
            inputResult.value = numero / Math.pow(1024, 4) + ' ' + dadoConvertido+"'s'"
        } else { "Erro" }
    }
    else if (dadoConverter === 'MegaByte' && dadoConvertido === 'ZettaByte') {
        if (numero < Math.pow(1024, 5)) {
            inputResult.value = 1 / numero + ' ' + dadoConvertido+"'s'"
        } else if (numero >= Math.pow(1024, 5)) {
            inputResult.value = numero / Math.pow(1024, 5) + ' ' + dadoConvertido+"'s'"
        } else { "Erro" }
    }
    else if (dadoConverter === 'MegaByte' && dadoConvertido === 'YottaByte') {
        if (numero < Math.pow(1024, 6)) {
            inputResult.value = 1 /  + ' ' + dadoConvertido+"'s'"
        } else if (numero >= Math.pow(1024, 6)) {
            inputResult.value = numero / Math.pow(1024, 6) + ' ' + dadoConvertido+"'s'" + ' ' + dadoConvertido+"'s'"
        } else { "Erro" }
    }
    //GigaByte
    if (dadoConverter === 'GigaByte' && dadoConvertido === 'Byte') {
        if (numero <= 1) {
            inputResult.value = Math.pow(1024, 3) + ' ' + dadoConvertido+"'s'"
        } else if (numero > 1) {
            inputResult.value = numero * Math.pow(1024, 3) + ' ' + dadoConvertido+"'s'"
        } else { "Erro" }

    }
    else if (dadoConverter === 'GigaByte' && dadoConvertido === 'KiloByte') {
        if (numero <= 1) {
            inputResult.value = Math.pow(1024, 2) + ' ' + dadoConvertido+"'s'"
        } else if (numero > 1) {
            inputResult.value = numero * Math.pow(1024, 2) + ' ' + dadoConvertido+"'s'"
        } else { "Erro" }
    }
    else if (dadoConverter === 'GigaByte' && dadoConvertido === 'MegaByte') {
        if (numero <= 1) {
            inputResult.value = 1024 + ' ' + dadoConvertido+"'s'"
        } else if (numero > 1) {
            inputResult.value = numero * 1024 + ' ' + dadoConvertido+"'s'"
        } else { "Erro" }

    }
    else if (dadoConverter === 'GigaByte' && dadoConvertido === 'GigaByte') {
        inputResult.value = numero
    }
    else if (dadoConverter === 'GigaByte' && dadoConvertido === 'TeraByte') {
        if (numero < 1024) {
            inputResult.value = 1 / numero + ' ' + dadoConvertido+"'s'"
        } else if (numero >= 1024) {
            inputResult.value = numero / 1024 + ' ' + dadoConvertido+"'s'"
        } else { "Erro" }
    }
    else if (dadoConverter === 'GigaByte' && dadoConvertido === 'PettaByte') {
        if (numero < Math.pow(1024, 2)) {
            inputResult.value = 1 / numero + ' ' + dadoConvertido+"'s'"
        } else if (numero >= Math.pow(1024, 2)) {
            inputResult.value = numero / Math.pow(1024, 2) + ' ' + dadoConvertido+"'s'"
        } else { "Erro" }
    }
    else if (dadoConverter === 'GigaByte' && dadoConvertido === 'ExaByte') {
        if (numero < Math.pow(1024, 3)) {
            inputResult.value = 1 / numero + ' ' + dadoConvertido+"'s'"
        } else if (numero >= Math.pow(1024, 3)) {
            inputResult.value = numero / Math.pow(1024, 3) + ' ' + dadoConvertido+"'s'"
        } else { "Erro" }
    }
    else if (dadoConverter === 'GigaByte' && dadoConvertido === 'ZettaByte') {
        if (numero < Math.pow(1024, 4)) {
            inputResult.value = 1 / numero + ' ' + dadoConvertido+"'s'"
        } else if (numero >= Math.pow(1024, 4)) {
            inputResult.value = numero / Math.pow(1024, 4) + ' ' + dadoConvertido+"'s'"
        } else { "Erro" }
    }
    else if (dadoConverter === 'GigaByte' && dadoConvertido === 'YottaByte') {
        if (numero < Math.pow(1024, 5)) {
            inputResult.value = 1 /  + ' ' + dadoConvertido+"'s'"
        } else if (numero >= Math.pow(1024, 5)) {
            inputResult.value = numero / Math.pow(1024, 5) + ' ' + dadoConvertido+"'s'" + ' ' + dadoConvertido+"'s'"
        } else { "Erro" }

    }
    //TeraByte
    if (dadoConverter === 'TeraByte' && dadoConvertido === 'Byte') {
        if (numero <= 1) {
            inputResult.value = Math.pow(1024, 4) + ' ' + dadoConvertido+"'s'"
        } else if (numero > 1) {
            inputResult.value = numero * Math.pow(1024, 4) + ' ' + dadoConvertido+"'s'"
        } else { "Erro" }

    }
    else if (dadoConverter === 'TeraByte' && dadoConvertido === 'KiloByte') {
        if (numero <= 1) {
            inputResult.value = Math.pow(1024, 3) + ' ' + dadoConvertido+"'s'"
        } else if (numero > 1) {
            inputResult.value = numero * Math.pow(1024, 3) + ' ' + dadoConvertido+"'s'"
        } else { "Erro" }
    }
    else if (dadoConverter === 'TeraByte' && dadoConvertido === 'MegaByte') {
        if (numero <= 1) {
            inputResult.value = Math.pow(1024, 2) + ' ' + dadoConvertido+"'s'"
        } else if (numero > 1) {
            inputResult.value = numero * Math.pow(1024, 2) + ' ' + dadoConvertido+"'s'"
        } else { "Erro" }
    }
    else if (dadoConverter === 'TeraByte' && dadoConvertido === 'GigaByte') {
        if (numero <= 1) {
            inputResult.value = 1024 + ' ' + dadoConvertido+"'s'"
        } else if (numero > 1) {
            inputResult.value = numero * 1024 + ' ' + dadoConvertido+"'s'"
        } else { "Erro" }
    }
    else if (dadoConverter === 'TeraByte' && dadoConvertido === 'TeraByte') {
        inputResult.value = numero
    }
    else if (dadoConverter === 'TeraByte' && dadoConvertido === 'PettaByte') {
        if (numero < 1024) {
            inputResult.value = 1 / numero + ' ' + dadoConvertido+"'s'"
        } else if (numero >= 1024) {
            inputResult.value = numero / 1024 + ' ' + dadoConvertido+"'s'"
        } else { "Erro" }
    }
    else if (dadoConverter === 'TeraByte' && dadoConvertido === 'ExaByte') {
        if (numero < Math.pow(1024, 2)) {
            inputResult.value = 1 / numero + ' ' + dadoConvertido+"'s'"
        } else if (numero >= Math.pow(1024, 2)) {
            inputResult.value = numero / Math.pow(1024, 2) + ' ' + dadoConvertido+"'s'"
        } else { "Erro" }

    }
    else if (dadoConverter === 'TeraByte' && dadoConvertido === 'ZettaByte') {
        if (numero < Math.pow(1024, 3)) {
            inputResult.value = 1 / numero + ' ' + dadoConvertido+"'s'"
        } else if (numero >= Math.pow(1024, 3)) {
            inputResult.value = numero / Math.pow(1024, 3) + ' ' + dadoConvertido+"'s'"
        } else { "Erro" }
    }
    else if (dadoConverter === 'TeraByte' && dadoConvertido === 'YottaByte') {
        if (numero < Math.pow(1024, 4)) {
            inputResult.value = 1 /  + ' ' + dadoConvertido+"'s'"
        } else if (numero >= Math.pow(1024, 4)) {
            inputResult.value = numero / Math.pow(1024, 4)  + ' ' + dadoConvertido+"'s'"
        } else { "Erro" }
    }
    //PettaByte
    if (dadoConverter === 'PettaByte' && dadoConvertido === 'Byte') {

        if (numero <= 1) {
            inputResult.value = math.pow(1024, 3) + ' ' + dadoConvertido+"'s'"
        }
        else if (numero > 1) {
            inputResult.value = numero * math.pow(1021, 3) + ' ' + dadoConvertido+"'s'"
        }
        else { "Erro" }

    }
    else if (dadoConverter === 'PettaByte' && dadoConvertido === 'KiloByte') {
        if (numero <= 1) {
            inputResult.value = math.pow(1024, 2) + ' ' + dadoConvertido+"'s'"
        }
        else if (numero > 1) {
            inputResult.value = numero * math.pow(1024, 2) + ' ' + dadoConvertido+"'s'"
        }
        else { "Erro" }
    }
    else if (dadoConverter === 'PettaByte' && dadoConvertido === 'MegaByte') {
        if (numero <= 1) {
            inputResult.value = math.pow(1024, 3) + ' ' + dadoConvertido+"'s'"
        }
        else if (numero > 1) {
            inputResult.value = numero * math.pow(1021, 3) + ' ' + dadoConvertido+"'s'"
        }
        else { "Erro" }
    }
    else if (dadoConverter === 'PettaByte' && dadoConvertido === 'GigaByte') {

        if (numero <= 1) {
            inputResult.value = math.pow(1024, 2) + ' ' + dadoConvertido+"'s'"
        }
        else if (numero > 1) {
            inputResult.value = numero * math.pow(1024, 2) + ' ' + dadoConvertido+"'s'"
        }
        else { "Erro" }
    }
    else if (dadoConverter === 'PettaByte' && dadoConvertido === 'TeraByte') {
        if (numero <= 1) {
            inputResult.value = 1024 + ' ' + dadoConvertido+"'s'"
        }
        else if (numero > 1) {
            inputResult.value = numero * 1024 + ' ' + dadoConvertido+"'s'"
        }
        else { "Erro" }
    }
    else if (dadoConverter === 'PettaByte' && dadoConvertido === 'PettaByte') {
        inputResult.value = numero
    }
    else if (dadoConverter === 'PettaByte' && dadoConvertido === 'ExaByte') {
        if (numero < 1024) {
            inputResult.value = 1 / numero + ' ' + dadoConvertido+"'s'"
        }
        else if (numeo >= 1024) {
            inputResult.value = numero / 1024 + ' ' + dadoConvertido+"'s'"
        }
        else { "Erro" }
    }
    else if (dadoConverter === 'PettaByte' && dadoConvertido === 'ZettaByte') {
        if (numero < math.pow(1024, 2)) {
            inputResult.value = 1 / numero + ' ' + dadoConvertido+"'s'"
        }
        else if (numeo >= math.pow(1024, 2)) {
            inputResult.value = math.pow(1024, 2) + ' ' + dadoConvertido+"'s'"
        }
        else { "Erro" }
    }
    else if (dadoConverter === 'PettaByte' && dadoConvertido === 'YottaByte') {
        if (numero < math.pow(1024, 3)) {
            inputResult.value = 1 /  + ' ' + dadoConvertido+"'s'"
        }
        else if (numeo >= math.pow(1024, 3)) {
            inputResult.value = math.pow(1024, 3)  + ' ' + dadoConvertido+"'s'"
        }
        else { "Erro" }
    }
    //ExaByte
    if (dadoConverter === 'ExaByte' && dadoConvertido === 'Byte') {
        if (numero <= 1) {
            inputResult.value = math.pow(1024, 6) + ' ' + dadoConvertido+"'s'"
        }
        else if (numero > 1) {
            inputResult.value = numero * math.pow(1024, 6) + ' ' + dadoConvertido+"'s'"
        }
        else { "Erro" }
    }
    else if (dadoConverter === 'ExaByte' && dadoConvertido === 'KiloByte') {
        if (numero <= math.pow(1024, 5)) {
            inputResult.value = math.pow(1024, 5) + ' ' + dadoConvertido+"'s'"
        }
        else if (numero > 1) {
            inputResult.value = numero * math.pow(1024, 5) + ' ' + dadoConvertido+"'s'"
        }
        else { "Erro" }
    }
    else if (dadoConverter === 'ExaByte' && dadoConvertido === 'MegaByte') {
        if (numero <= 1) {
            inputResult.value = math.pow(1024, 4) + ' ' + dadoConvertido+"'s'"
        }
        else if (inputResult.value > 1) {
            inputResult.value = numero * math.pow(1024, 4) + ' ' + dadoConvertido+"'s'"
        }
        else { "Erro" }
    }
    else if (dadoConverter === 'ExaByte' && dadoConvertido === 'GigaByte') {
        if (numero <= 1) {
            inputResult.value = math.pow(1024, 3) + ' ' + dadoConvertido+"'s'"
        }
        else if (inputResult.value > 1) {
            inputResult.value = numero * math.pow(1024, 3) + ' ' + dadoConvertido+"'s'"
        }
        else { "Erro" }
    }
    else if (dadoConverter === 'ExaByte' && dadoConvertido === 'TeraByte') {
        if (numero <= 1) {
            inputResult.value = math.pow(1024, 2) + ' ' + dadoConvertido+"'s'"
        }
        else if (numero > 1) {
            inputResult.value = numero * math.pow(1024, 2) + ' ' + dadoConvertido+"'s'"
        }
        else { "Erro" }
    }
    else if (dadoConverter === 'ExaByte' && dadoConvertido === 'PettaByte') {

        if (numero <= 1) {
            inputResult.value = 1024 + ' ' + dadoConvertido+"'s'"
        }
        else if (numero > 1) {
            inputResult.value = numero * 1024 + ' ' + dadoConvertido+"'s'"
        }
        else { "Erro" }
    }
    else if (dadoConverter === 'ExaByte' && dadoConvertido === 'ExaByte') {
        inputResult.value = numero
    }
    else if (dadoConverter === 'ExaByte' && dadoConvertido === 'ZettaByte') {
        if (numero < 1024) {
            inputResult.value = 1 / numero + ' ' + dadoConvertido+"'s'"
        }
        else if (numeo >= 1024) {
            inputResult.value = numero / 1024 + ' ' + dadoConvertido+"'s'"
        }
        else { "Erro" }

    }
    else if (dadoConverter === 'ExaByte' && dadoConvertido === 'YottaByte') {
        if (numero < math.pow(1024, 2)) {
            inputResult.value = 1 /  + ' ' + dadoConvertido+"'s'"
        }
        else if (numeo >= math.pow(1024, 2)) {
            inputResult.value = numero / math.pow(1024, 2)  + ' ' + dadoConvertido+"'s'"
        }
        else { "Erro" }
    }
    //ZettaByte
    if (dadoConverter === 'ZettaByte' && dadoConvertido === 'Byte') {
        if (numero <= 1) {
            inputResult.value = math.pow(1024, 7) + ' ' + dadoConvertido+"'s'"
        }
        else if (numero <= 1) {
            inputResult.value = numero * math.pow(1024, 7) + ' ' + dadoConvertido+"'s'"
        }
        else{"Erro"}
    }
    else if (dadoConverter === 'ZettaByte' && dadoConvertido === 'KiloByte') {
        if (numero <= 1) {
            inputResult.value = math.pow(1024, 6) + ' ' + dadoConvertido+"'s'"
        }
        else if (numero <= 1) {
            inputResult.value = numero * math.pow(1024, 6) + ' ' + dadoConvertido+"'s'"
        }
        else{"Erro"}
    }
    else if (dadoConverter === 'ZettaByte' && dadoConvertido === 'MegaByte') {
        if (numero <= 1) {
            inputResult.value = math.pow(1024, 5) + ' ' + dadoConvertido+"'s'"
        }
        else if (numero > 1) {
            inputResult.value = numero * math.pow(1024, 5) + ' ' + dadoConvertido+"'s'"
        }
        else{"Erro"}
    }
    else if (dadoConverter === 'ZettaByte' && dadoConvertido === 'GigaByte') {
        if (numero <= 1) {
            inputResult.value = math.pow(1024, 4) + ' ' + dadoConvertido+"'s'"
        }
        else if (inputResult.value > 1) {
            inputResult.value = numero * math.pow(1024, 4) + ' ' + dadoConvertido+"'s'"
        }
        else{"Erro"}
    }
    else if (dadoConverter === 'ZettaByte' && dadoConvertido === 'TeraByte') {
        if (numero >= 1) {
            inputResult.value = math.pow(1024, 3) + ' ' + dadoConvertido+"'s'"
        }
        else if (numero > 1) {
            inputResult.value = numero * math.pow(1021, 3) + ' ' + dadoConvertido+"'s'"
        }
        else{"Erro"}
    }
    else if (dadoConverter === 'ZettaByte' && dadoConvertido === 'PettaByte') {
        if (numero <= 1) {
            inputResult.value = math.pow(1024, 2) + ' ' + dadoConvertido+"'s'"
        }
        else if (numero > 1) {
            inputResult.value = numero * math.pow(1024, 1) + ' ' + dadoConvertido+"'s'"
        }
        else{"Erro"}
    }
    else if (dadoConverter === 'ZettaByte' && dadoConvertido === 'ExaByte') {
        if (numero <= 1) {
            inputResult.value = 1024 + ' ' + dadoConvertido+"'s'"
        }
        else if (numero > 1) {
            inputResult.value = numero * 1024 + ' ' + dadoConvertido+"'s'"
        }
        else{"Erro"}
    }
    else if (dadoConverter === 'ZettaByte' && dadoConvertido === 'ZettaByte') {
        inputResult.value = numero + ' ' + dadoConvertido+"'s'"
    }
    else if (dadoConverter === 'ZettaByte' && dadoConvertido === 'YottaByte') {
        if (numero < 1024) {
            inputResult.value = 1 / numero + ' ' + dadoConvertido+"'s'"
        }
        else if (numeo >= 1024) {
            inputResult.value = numero / 1024  + ' ' + dadoConvertido+"'s'"
        }
        else{"Erro"}
    }
    //YottaByte
    if (dadoConverter === 'YottaByte' && dadoConvertido === 'Byte') {
        if (numero <= 1) {
            inputResult.value = math.pow(1024, 8) + ' ' + dadoConvertido+"'s'"
        }
        else if (numero <= 1) {
            inputResult.value = numero * math.pow(1024, 8) + ' ' + dadoConvertido+"'s'"
        }
        else { "Erro" }
    }
    else if (dadoConverter === 'YottaByte' && dadoConvertido === 'KiloByte') {
        if (numero <= 1) {
            inputResult.value = math.pow(1024, 7) + ' ' + dadoConvertido+"'s'"
        }
        else if (numero > 1) {
            inputResult.value = numero * math.pow(1024, 7) + ' ' + dadoConvertido+"'s'"
        }
        else { "Erro" }
    }
    else if (dadoConverter === 'YottaByte' && dadoConvertido === 'MegaByte') {
        if (numero <= 1) {
            inputResult.value =  math.pow(1024, 6) + ' ' + dadoConvertido+"'s'"
        }
        else if (numero > 1) {
            inputResult.value = numero * math.pow(1024, 6) + ' ' + dadoConvertido+"'s'"
        }
        else { "Erro" }

    }
    else if (dadoConverter === 'YottaByte' && dadoConvertido === 'GigaByte') {
        if (numero <= 1) {
            inputResult.value = math.pow(1024, 5) + ' ' + dadoConvertido+"'s'"
        }
        else if (numero > 1) {
            inputResult.value = numero * math.pow(1024, 5) + ' ' + dadoConvertido+"'s'"
        }
        else { "Erro" }
    }
    else if (dadoConverter === 'YottaByte' && dadoConvertido === 'TeraByte') {
        if (numero <= 1) {
            inputResult.value = math.pow(1024, 4) + ' ' + dadoConvertido+"'s'"
        }
        else if (inputResult.value > 1) {
            inputResult.value = numero * math.pow(1024, 4) + ' ' + dadoConvertido+"'s'"
        }
        else { "Erro" }
    }
    else if (dadoConverter === 'YottaByte' && dadoConvertido === 'PettaByte') {
        if (numero >= 1) {
            inputResult.value = math.pow(1024, 3) + ' ' + dadoConvertido+"'s'"
        }
        else if (numero > 1) {
            inputResult.value * math.pow(1021, 3) + ' ' + dadoConvertido+"'s'"
        }
        else { "Erro" }
    }
    else if (dadoConverter === 'YottaByte' && dadoConvertido === 'ExaByte') {
        if (numero <= 1) {
            inputResult.value = math.pow(1024, 2) + ' ' + dadoConvertido+"'s'"
        }
        else if (numero > 1) {
            inputResult.value * numero / math.pow(1024, 2) + ' ' + dadoConvertido+"'s'"
        }
        else { 'Erro' }
    }
    else if (dadoConverter === 'YottaByte' && dadoConvertido === 'ZettaByte') {
        if (numero <= 1) {
            inputResult.value = 1024 + ' ' + dadoConvertido+"'s'"
        }
        else if (numero > 1) {
            inputResult.value = numero * 1024 + ' ' + dadoConvertido+"'s'"
        }
        else { "Erro" }


    }
    else if (dadoConverter === 'YottaByte' && dadoConvertido === 'YottaByte') {
        inputResult.value =  + ' ' + dadoConvertido+"'s'"
    }
})

converter.forEach(function (item) {
    item.addEventListener('click', function (ev) {
        ev.preventDefault()
        dadoConverter = this.id
        console.log(dadoConverter)
        inputResult.value = dadoConverter + ' >>> ' + dadoConvertido
    })
})

convertido.forEach(function (item) {
    item.addEventListener('click', function (ev) {
        ev.preventDefault()
        dadoConvertido = this.name
        console.log(dadoConvertido)
        inputResult.value = dadoConverter + ' >>> ' + dadoConvertido
    })
})


