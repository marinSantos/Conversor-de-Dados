

let dado = prompt('Que tipo de dado deseja converter ? \n1-Byte (8 bits) \n2-Kilobyte (KB) \n 3-Megabyte (MB) \n 4-Gigabyte (GB) \n 5-Terabyte (TB) \n 6-Petabyte(PB) \n 7-Exabyte (EB) \n 8-Zettabyte (ZB) \n 9-Yottabyte (YB) \n 0-Sair')

let numero = prompt('Qual o valor do tipo de dado que você deseja converter ? : ')



let dadoConvertido = prompt('Por qual tipo de dado você deseja converter ? \n 1-Byte (8 bits) \n2-Kilobyte (KB) \n 3-Megabyte (MB) \n 4-Gigabyte (GB) \n 5-Terabyte (TB) \n 6-Petabyte(PB) \n 7-Exabyte (EB) \n 8-Zettabyte (ZB) \n 9-Yottabyte (YB) ')

let tipoDeDado
let tipoDeDadoConvertido
let resultado


if (dado == 1) {
    switch (dadoConvertido) {
        case '1': tipoDeDadoConvertido = ' Bytes'
            tipoDeDado = ' Bytes'
            resultado = numero
            break
        case '2': tipoDeDadoConvertido = ' KiloBytes'
            tipoDeDado = ' Bytes'
            if (numero < 1024) {
                resultado = 1 / numero
            } else if (numero >= 1024) {
                resultado = numero / 1024
            } else { resultado }
            break

        case '3': tipoDeDadoConvertido = ' MegaBytes'
            tipoDeDado = ' Bytes'
            if (numero < 1024 * 1024) {
                resultado = 1 / numero
            } else if (numero >= 1024 * 1024) {
                resultado = numero / Math.pow(1024, 2)
            } else { resultado }
            break

        case '4': tipoDeDadoConvertido = ' GigaBytes'
            tipoDeDado = ' Bytes'
            if (numero < 1024 * 1024 * 1024) {
                resultado = 1 / numero
            } else if (numero >= 1024 * 1024 * 1024) {
                resultado = numero / Math.pow(1024, 3)
            } else { resultado }
            break
        case '5': tipoDeDadoConvertido = ' TeraBytes'
            tipoDeDado = ' Bytes'
            if (numero < Math.pow(1024, 4)) {
                resultado = 1 / numero
            } else if (numero >= Math.pow(1024, 4)) {
                resultado = numero / Math.pow(1024, 4)
            } else { resultado }
            break
        case '6': tipoDeDadoConvertido = ' PetaBytes'
            tipoDeDado = ' Bytes'
            if (numero < Math.pow(1024, 5)) {
                resultado = 1 / numero
            } else if (numero >= Math.pow(1024, 5)) {
                numero / Math.pow(1024, 5)
            } else { resultado }
            break
        case '7': tipoDeDadoConvertido = ' ExaBytes'
            tipoDeDado = ' Bytes'
            if (numero < Math.pow(1024, 6)) {
                resultado = 1 / numero
            } else if (numero >= Math.pow(1024, 6)) {
                numero / Math.pow(1024, 6)
            } else { resultado }
            break
        case '8': tipoDeDadoConvertido = ' ZettaBytes'
            tipoDeDado = ' Bytes'
            if (numero < Math.pow(1024, 7)) {
                resultado = 1 / numero
            } else if (numero >= Math.pow(1024, 7)) {
                numero / Math.pow(1024, 7)
            } else { resultado }
            break
        case '9': tipoDeDadoConvertido = ' YottaBytes'
            tipoDeDado = ' Bytes'
            if (numero < Math.pow(1024, 8)) {
                resultado = 1 / numero
            } else if (numero >= Math.pow(1024, 8)) {
                numero / Math.pow(1024, 8)
            } else { resultado }
            break
        default: tipoDeDadoConvertido = 'Não informado'
        alert('Saindo do programa...')
            tipoDeDado = ' Bytes'
            break
    }
}
else if (dado == 2) {
    switch (dadoConvertido) {
        case '1': tipoDeDadoConvertido = 'Bytes'
            tipoDeDado = ' KiloBytes'
            if (numero <= 1) {
                resultado = 1024
            }
            else if (numero > 1) {
                resultado = numero * 1024
            } else { resultado }
            break
        case '2': tipoDeDadoConvertido = ' KiloBytes'
            tipoDeDado = ' KiloBytes'
            resultado = numero
            break

        case '3': tipoDeDadoConvertido = ' MegaBytes'
            tipoDeDado = ' KiloBytes'
            if (numero < 1024) {
                resultado = 1 / numero
            } else if (numero >= 1024) {
                resultado = numero / 1024
            } else { resultado }
            break

        case '4': tipoDeDadoConvertido = ' GigaBytes'
            tipoDeDado = ' KiloBytes'
            if (numero < Math.pow(1024, 2)) {
                resultado = 1 / numero
            } else if (numero >= Math.pow(1024, 2)) {
                resultado = numero / Math.pow(1024, 2)
            } else { resultado }
            break

        case '5': tipoDeDadoConvertido = ' TeraBytes'
            tipoDeDado = ' KiloBytes'
            if (numero < Math.pow(1024, 3)) {
                resultado = 1 / numero
            } else if (numero >= Math.pow(1024, 3)) {
                resultado = numero / Math.pow(1024, 3)
            } else { resultado }
            break
        case '6': tipoDeDadoConvertido = ' PetaBytes'
            tipoDeDado = ' KiloBytes'
            if (numero < Math.pow(1024, 4)) {
                resultado = 1 / numero
            } else if (numero >= Math.pow(1024, 4)) {
                resultado = numero / Math.pow(1024, 4)
            } else { resultado }
            break
        case '7': tipoDeDadoConvertido = ' ExaBytes'
            tipoDeDado = ' KiloBytes'
            if (numero < Math.pow(1024, 5)) {
                resultado = 1 / numero
            } else if (numero >= Math.pow(1024, 5)) {
                resultado = numero / Math.pow(1024, 5)
            } else { resultado }
            break
        case '8': tipoDeDadoConvertido = ' ZettaBytes'
            tipoDeDado = ' KiloBytes'
            if (numero < Math.pow(1024, 6)) {
                resultado = 1 / numero
            } else if (numero >= Math.pow(1024, 6)) {
                resultado = numero / Math.pow(1024, 6)
            } else { resultado }
            break
        case '9': tipoDeDadoConvertido = ' YottaBytes'
            tipoDeDado = ' KiloBytes'
            if (numero < Math.pow(1024, 7)) {
                resultado = 1 / numero
            } else if (numero >= Math.pow(1024, 7)) {
                resultado = numero / Math.pow(1024, 7)
            } else { resultado }
            break
        default: tipoDeDadoConvertido = 'Não informado'
        alert('Saindo do programa...')
            tipoDeDado = ' KiloBytes'
            break
    }
}
else if (dado == 3) {
    switch (dadoConvertido) {
        case '1': tipoDeDadoConvertido = ' Bytes'
            tipoDeDado = ' MegaBytes'
            if (numero <= 1) {
                resultado = Math.pow(1024, 2)
            } else if (numero > 1) {
                resultado = numero * Math.pow(1024, 2)
            } else { resultado }
            break
        case '2': tipoDeDadoConvertido = ' KiloBytes'
            tipoDeDado = ' MegaBytes'
            if (numero <= 1) {
                resultado = 1024
            } else if (numero > 1) {
                resultado = numero * 1024
            } else { resultado }
            break

        case '3': tipoDeDadoConvertido = ' MegaBytes'
            tipoDeDado = ' MegaBytes'
            resultado = numero
            break

        case '4': tipoDeDadoConvertido = ' GigaBytes'
            tipoDeDado = ' MegaBytes'
            if (numero < 1024) {
                resultado = 1 / numero
            } else if (numero >= 1024) {
                resultado = numero / 1024
            } else { resultado }
            break

        case '5': tipoDeDadoConvertido = ' TeraBytes'
            tipoDeDado = ' MegaBytes'
            if (numero < Math.pow(1024, 2)) {
                resultado = 1 / numero
            } else if (numero >= Math.pow(1024, 2)) {
                resultado = numero / Math.pow(1024, 2)
            } else { resultado }
            break
        case '6': tipoDeDadoConvertido = ' PetaBytes'
            tipoDeDado = ' MegaBytes'
            if (numero < Math.pow(1024, 4)) {
                resultado = 1 / numero
            } else if (numero >= Math.pow(1024, 4)) {
                resultado = numero / Math.pow(1024, 4)
            } else { resultado }
            break
        case '7': tipoDeDadoConvertido = ' ExaBytes'
            tipoDeDado = ' MegaBytes'
            if (numero < Math.pow(1024, 4)) {
                resultado = 1 / numero
            } else if (numero >= Math.pow(1024, 4)) {
                resultado = numero / Math.pow(1024, 4)
            } else { resultado }
            break
        case '8': tipoDeDadoConvertido = ' ZettaBytes'
            tipoDeDado = ' MegaBytes'
            if (numero < Math.pow(1024, 5)) {
                resultado = 1 / numero
            } else if (numero >= Math.pow(1024, 5)) {
                resultado = numero / Math.pow(1024, 5)
            } else { resultado }
            break
        case '9': tipoDeDadoConvertido = ' YottaBytes'
            tipoDeDado = ' MegaBytes'
            if (numero < Math.pow(1024, 6)) {
                resultado = 1 / numero
            } else if (numero >= Math.pow(1024, 6)) {
                resultado = numero / Math.pow(1024, 6)
            } else { resultado }
            break
        default: tipoDeDadoConvertido = 'Não informado'
        alert('Saindo do programa...')
            tipoDeDado = ' MegaBytes'
            break
    }
}
else if (dado == 4) {
    switch (dadoConvertido) {
        case '1': tipoDeDadoConvertido = ' Bytes'
            tipoDeDado = ' GigaBytes'
            if (numero <= 1) {
                resultado = Math.pow(1024, 3)
            } else if (numero > 1) {
                resultado = numero * Math.pow(1024, 3)
            } else { resultado }
            break
        case '2': tipoDeDadoConvertido = ' KiloBytes'
            tipoDeDado = ' GigaBytes'
            if (numero <= 1) {
                resultado = Math.pow(1024, 2)
            } else if (numero > 1) {
                resultado = numero * Math.pow(1024, 2)
            } else { resultado }
            break

        case '3': tipoDeDadoConvertido = ' MegaBytes'
            tipoDeDado = ' GigaBytes'
            if (numero <= 1) {
                resultado = 1024
            } else if (numero > 1) {
                resultado = numero * 1024
            } else { resultado }
            break

        case '4': tipoDeDadoConvertido = ' GigaBytes'
            tipoDeDado = ' GigaBytes'
            resultado = numero
            break

        case '5': tipoDeDadoConvertido = ' TeraBytes'
            tipoDeDado = ' GigaBytes'
            if (numero < 1024) {
                resultado = 1 / numero
            } else if (numero >= 1024) {
                resultado = numero / 1024
            } else { resultado }
            break
        case '6': tipoDeDadoConvertido = ' PetaBytes'
            tipoDeDado = ' GigaBytes'
            if (numero < Math.pow(1024, 2)) {
                resultado = 1 / numero
            } else if (numero >= Math.pow(1024, 2)) {
                resultado = numero / Math.pow(1024, 2)
            } else { resultado }
            break
        case '7': tipoDeDadoConvertido = ' ExaBytes'
            tipoDeDado = ' GigaBytes'
            if (numero < Math.pow(1024, 3)) {
                resultado = 1 / numero
            } else if (numero >= Math.pow(1024, 3)) {
                resultado = numero / Math.pow(1024, 3)
            } else { resultado }
            break
        case '8': tipoDeDadoConvertido = ' ZettaBytes'
            tipoDeDado = ' GigaBytes'
            if (numero < Math.pow(1024, 4)) {
                resultado = 1 / numero
            } else if (numero >= Math.pow(1024, 4)) {
                resultado = numero / Math.pow(1024, 4)
            } else { resultado }
            break
        case '9': tipoDeDadoConvertido = ' YottaBytes'
            tipoDeDado = ' GigaBytes'
            if (numero < Math.pow(1024, 5)) {
                resultado = 1 / numero
            } else if (numero >= Math.pow(1024, 5)) {
                resultado = numero / Math.pow(1024, 5)
            } else { resultado }
            break
        default: tipoDeDado = 'Não informado'
        alert('Saindo do programa...')
            tipoDeDado = ' GigaBytes'
            break
    }
}
else if (dado == 5) {
    switch (dadoConvertido) {
        case '1': tipoDeDadoConvertido = ' Bytes'
            tipoDeDado = ' TeraBytes'
            if (numero <= 1) {
                resultado = Math.pow(1024, 4)
            } else if (numero > 1) {
                resultado = numero * Math.pow(1024, 4)
            } else { resultado }
            break
        case '2': tipoDeDadoConvertido = ' KiloBytes'
            tipoDeDado = ' TeraBytes'
            if (numero <= 1) {
                resultado = Math.pow(1024, 3)
            } else if (numero > 1) {
                resultado = numero * Math.pow(1024, 3)
            } else { resultado }
            break

        case '3': tipoDeDadoConvertido = ' MegaBytes'
            tipoDeDado = ' TeraBytes'
            if (numero <= 1) {
                resultado = Math.pow(1024, 2)
            } else if (numero > 1) {
                resultado = numero * Math.pow(1024, 2)
            } else { resultado }
            break

        case '4': tipoDeDadoConvertido = ' GigaBytes'
            tipoDeDado = ' TeraBytes'
            if (numero <= 1) {
                resultado = 1024
            } else if (numero > 1) {
                resultado = numero * 1024
            } else { resultado }
            break

        case '5': tipoDeDadoConvertido = ' TeraBytes'
            tipoDeDado = ' TeraBytes'
            resultado = numero

            break
        case '6': tipoDeDadoConvertido = ' PetaBytes'
            tipoDeDado = ' TeraBytes'
            if (numero < 1024) {
                resultado = 1 / numero
            } else if (numero >= 1024) {
                resultado = numero / 1024
            } else { resultado }
            break
        case '7': tipoDeDadoConvertido = ' ExaBytes'
            tipoDeDado = ' TeraBytes'
            if (numero < Math.pow(1024, 2)) {
                resultado = 1 / numero
            } else if (numero >= Math.pow(1024, 2)) {
                resultado = numero / Math.pow(1024, 2)
            } else { resultado }
            break
        case '8': tipoDeDadoConvertido = ' ZettaBytes'
            tipoDeDado = ' TeraBytes'
            if (numero < Math.pow(1024, 3)) {
                resultado = 1 / numero
            } else if (numero >= Math.pow(1024, 3)) {
                resultado = numero / Math.pow(1024, 3)
            } else { resultado }
            break
        case '9': tipoDeDadoConvertido = ' YottaBytes'
            tipoDeDado = ' TeraBytes'
            if (numero < Math.pow(1024, 4)) {
                resultado = 1 / numero
            } else if (numero >= Math.pow(1024, 4)) {
                resultado = numero / Math.pow(1024, 4)
            } else { resultado }
            break
        default: tipoDeDadoConvertido = 'Não informado'
        alert('Saindo do programa...')
            break
    }
}
else if (dado == 6) {
    switch (dadoConvertido) {
        case '1': tipoDeDadoConvertido = 'Bytes'
            tipoDeDado = ' PetaBytes'
            if (numero <= 1) {
                resultado = math.pow(1024, 5)
            }
            else if (numero > 1) {
                resultado = numero * math.pow(1024, 5)
            }
            else { resultado }
            break
        case '2': tipoDeDadoConvertido = 'KiloBytes'
            tipoDeDado = ' PetaBytes'
            if (numero <= 1) {
                resultado = math.pow(1024, 4)
            }
            else if (resultado > 1) {
                resultado = numero * math.pow(1024, 4)
            }
            else { resultado }
            break
        case '3': tipoDeDadoConvertido = ' MegaBytes'
            tipoDeDado = ' PetaBytes'
            if (numero <= 1) {
                resultado = math.pow(1024, 3)
            }
            else if (numero > 1) {
                resultado = numero * math.pow(1021, 3)
            }
            else { resultado }
            break
        case '4': tipoDeDadoConvertido = ' GigaBytes'
            tipoDeDado = ' PetaBytes'
            if (numero <= 1) {
                resultado = math.pow(1024, 2)
            }
            else if (numero > 1) {
                resultado = numero * math.pow(1024, 2)
            }
            else { resultado }
            break
        case '5': tipoDeDadoConvertido = ' TeraBytes'
            tipoDeDado = ' PetaBytes'
            if (numero <= 1) {
                resultado = 1024
            }
            else if (numero > 1) {
                resultado = numero * 1024
            }
            else { resultado }
            break
        case '6': tipoDeDadoConvertido = ' PetaBytes'
            tipoDeDado = ' PetaBytes'
            resultado = numero
            break
        case '7': tipoDeDadoConvertido = ' ExaBytes'
            tipoDeDado = ' PetaBytes'
            if (numero < 1024) {
                resultado = 1 / numero
            }
            else if (numeo >= 1024) {
                resultado = numero / 1024
            }
            else { resultado }
            break
        case '8': tipoDeDadoConvertido = ' ZettaBytes'
            tipoDeDado = ' PetaBytes'
            if (numero < math.pow(1024, 2)) {
                resultado = 1 / numero
            }
            else if (numeo >= math.pow(1024, 2)) {
                resultado = math.pow(1024, 2)
            }
            else { resultado }
            break
        case '9': tipoDeDadoConvertido = ' YottaBytes'
            tipoDeDado = ' PetaBytes'
            if (numero < math.pow(1024, 3)) {
                resultado = 1 / numero
            }
            else if (numeo >= math.pow(1024, 3)) {
                resultado = math.pow(1024, 3)
            }
            else { resultado }
            break
        default: tipoDeDadoConvertido = 'Não informado'
        alert('Saindo do programa...')
            break
    }
}
else if (dado == 7) {
    switch (dadoConvertido) {
        case '1': tipoDeDadoConvertido = ' Bytes'
            tipoDeDado = ' ExaBytes'
            if (numero <= 1) {
                resultado = math.pow(1024, 6)
            }
            else if (numero > 1) {
                resultado = numero * math.pow(1024, 6)
            }
            else { resultado }
            break
        case '2': tipoDeDadoConvertido = 'KiloBytes'
            tipoDeDado = ' ExaBytes'
            if (numero <= math.pow(1024, 5)) {
                resultado = math.pow(1024, 5)
            }
            else if (numero > 1) {
                resultado = numero * math.pow(1024, 5)
            }
            else { resultado }
            break
        case '3': tipoDeDadoConvertido = ' MegaBytes'
            tipoDeDado = ' ExaBytes'
            if (numero <= 1) {
                resultado = math.pow(1024, 4)
            }
            else if (resultado > 1) {
                resultado = numero * math.pow(1024, 4)
            }
            else { resultado }
            break
        case '4': tipoDeDadoConvertido = ' GigaBytes'
            tipoDeDado = ' ExaBytes'
            if (numero >= 1) {
                resultado = math.pow(1024, 3)
            }
            else if (numero > 1) {
                resultado = numero * math.pow(1021, 3)
            }
            else { resultado }
            break
        case '5': tipoDeDadoConvertido = ' TeraBytes'
            tipoDeDado = ' ExaBytes'
            if (numero <= 1) {
                resultado = math.pow(1024, 2)
            }
            else if (numero > 1) {
                resultado = numero * math.po2(1024, 2)
            }
            else { resultado }
            break
        case '6': tipoDeDadoConvertido = ' PetaBytes'
            tipoDeDado = ' ExaBytes'
            if (numero <= 1) {
                resultado = 1024
            }
            else if (numero > 1) {
                resultado = numero * 1024
            }
            else { resultado }
            break
        case '7': tipoDeDadoConvertido = ' ExaBytes'
            tipoDeDado = ' ExaBytes'
            resultado = numero
            break
        case '8': tipoDeDadoConvertido = ' ZettaBytes'
            tipoDeDado = ' ExaBytes'
            if (numero < 1024) {
                resultado = 1 / numero
            }
            else if (numeo >= 1024) {
                resultado = numero / 1024
            }
            else { resultado }
            break
        case '9': tipoDeDadoConvertido = ' YottaBytes'
            tipoDeDado = ' ExaBytes'
            if (numero < math.pow(1024, 2)) {
                resultado = 1 / numero
            }
            else if (numeo >= math.pow(1024, 2)) {
                resultado = numero / math.pow(1024, 2)
            }
            else { resultado }
            break
        default: tipoDeDadoConvertido = 'Não informado'
        alert('Saindo do programa...')
            break
    }
}
else if (dado == 8) {
    switch (dadoConvertido) {
        case '1': tipoDeDadoConvertido = ' Bytes'
            tipoDeDado = ' ZettaBytes'
            if (numero <= 1) {
                resultado = math.pow(1024, 7)
            }
            else if (numero <= 1) {
                resultado = numero * math.pow(1024, 7)
            }
            else { resultado }
            break
        case '2': tipoDeDadoConvertido = 'KiloBytes'
            tipoDeDado = ' ZettaBytes'
            if (numero <= 1) {
                resultado = math.pow(1024, 6)
            }
            else if (numero <= 1) {
                resultado = numero * math.pow(1024, 6)
            }
            else { resultado }
            break
        case '3': tipoDeDadoConvertido = ' MegaBytes'
            tipoDeDado = ' ZettaBytes'
            if (numero <= 1) {
                resultado = math.pow(1024, 5)
            }
            else if (numero > 1) {
                resultado = numero * math.pow(1024, 5)
            }
            else { resultado }
            break
        case '4': tipoDeDadoConvertido = ' GigaBytes'
            tipoDeDado = ' ZettaBytes'
            if (numero <= 1) {
                resultado = math.pow(1024, 4)
            }
            else if (resultado > 1) {
                resultado = numero * math.pow(1024, 4)
            }
            else { resultado }
            break
        case '5': tipoDeDadoConvertido = ' TeraBytes'
            tipoDeDado = ' ZettaBytes'
            if (numero >= 1) {
                resultado = math.pow(1024, 3)
            }
            else if (numero > 1) {
                resultado = numero * math.pow(1021, 3)
            }
            else { resultado }
            break
        case '6': tipoDeDadoConvertido = ' PetaBytes'
            tipoDeDado = ' ZettaBytes'
            if (numero <= 1) {
                resultado = math.pow(1024, 2)
            }
            else if (numero > 1) {
                resultado = numero * math.pow(1024, 1)
            }
            else { resultado }
            break
        case '7': tipoDeDadoConvertido = ' ExaBytes'
            tipoDeDado = ' ZettaBytes'
            if (numero <= 1) {
                resultado = 1024
            }
            else if (numero > 1) {
                resultado = numero * 1024
            }
            else { resultado }
            break
        case '8': tipoDeDadoConvertido = ' ZettaBytes'
            tipoDeDado = ' ZettaBytes'
            resultado = numero
            break
        case '9': tipoDeDadoConvertido = ' Bytes'
            tipoDeDado = ' ZettaBytes'
            if (numero < 1024) {
                resultado = 1 / numero
            }
            else if (numeo >= 1024) {
                resultado = numero / 1024
            }
            else { resultado }
            break
        default: tipoDeDadoConvertido = 'Não informado'
        alert('Saindo do programa...')
            break
    }
}
else if (dado == 9) {
    switch (dadoConvertido) {
        case '1': tipoDeDadoConvertido = ' Bytes'
            tipoDeDado = ' YottaBytes'
            if (numero <= 1) {
                resultado = resultado = numero * math.pow(1024, 8)
            }
            else if (numero <= 1) {
                resultado = numero * math.pow(1024, 8)
            }
            else { resultado }
            break
        case '2': tipoDeDadoConvertido = 'KiloBytes'
            tipoDeDado = ' YottaBytes'
            if (numero <= 1) {
                resultado = resultado = numero * math.pow(1024, 7)
            }
            else if (numero > 1) {
                resultado = numero * math.pow(1024, 7)
            }
            else { resultado }
            break
        case '3': tipoDeDadoConvertido = ' MegaBytes'
            tipoDeDado = ' YottaBytes'
            if (numero <= 1) {
                resultado = resultado = numero * math.pow(1024, 6)
            }
            else if (numero > 1) {
                resultado = numero * math.pow(1024, 6)
            }
            else { resultado }
            break
        case '4': tipoDeDadoConvertido = ' GigaBytes'
            tipoDeDado = ' YottaBytes'
            if (numero <= 1) {
                resultado = math.pow(1024, 5)
            }
            else if (numero > 1) {
                resultado = numero * math.pow(1024, 5)
            }
            else { resultado }
            break
        case '5': tipoDeDadoConvertido = ' TeraBytes'
            tipoDeDado = ' YottaBytes'
            if (numero <= 1) {
                resultado = math.pow(1024, 4)
            }
            else if (resultado > 1) {
                resultado = numero * math.pow(1024, 4)
            }
            else { resultado }
            break
        case '6': tipoDeDadoConvertido = ' PetaBytes'
            tipoDeDado = ' YottaBytes'
            if (numero >= 1) {
                resultado = math.pow(1024, 3)
            }
            else if (numero > 1) {
                resultado * math.pow(1021, 3)
            }
            else { resultado }
            break
        case '7': tipoDeDadoConvertido = ' ExaBytes'
            tipoDeDado = ' YottaBytes'
            if (numero <= 1) {
                resultado = math.pow(1024, 2)
            }
            else if (numero > 1) {
                resultado * numero / math.pow(1024, 2)
            }
            else { resultado }
            break
        case '8': tipoDeDadoConvertido = ' ZettaBytes'
            tipoDeDado = ' YottaBytes'
            if (numero <= 1) {
                resultado = 1024
            }
            else if (numero > 1) {
                resultado = numero * 1024
            }
            else { resultado }
            break
        case '9': tipoDeDadoConvertido = ' YottaBytes'
            tipoDeDado = ' YottaBytes'
            resultado = numero
            break
        default: tipoDeDadoConvertido = 'Não informado'
        alert('Saindo do programa...')
            break
    }

}

else { resultado = 'Nenhum valor digitado' }

alert('Valor e tipo de dado a converter:' + numero + tipoDeDado + '\nValor e tipo de dado convertido: ' + resultado + tipoDeDadoConvertido)




