let numero = prompt('Digite o valor que deseja converter : ')

let dado = prompt('Que tipo de dado é este valor ? \n1-Byte (8 bits) \n2-Kilobyte (KB) \n 3-Megabyte (MB) \n 4-Gigabyte (GB) \n 5-Terabyte (TB)  ')

let dadoConvertido =  prompt('Por qual tipo de dado você deseja converter ? \n1-Byte (8 bits) \n2-Kilobyte (KB) \n 3-Megabyte (MB) \n 4-Gigabyte (GB) \n 5-Terabyte (TB)  ')

let tipoDeDado
let tipoDeDadoConvertido
let resultado


if(dado == 1){
    switch(dadoConvertido){
        case '1' : tipoDeDadoConvertido =' Bytes'
        tipoDeDado = ' Bytes'
            resultado = numero
        break
        case '2' : tipoDeDadoConvertido =' KiloBytes'
        tipoDeDado = ' Bytes'
        if(numero < 1024){
               resultado = 1 / numero
        } else if(numero >= 1024){
            resultado = numero / 1024 
        } else {resultado}
        break
    
        case '3' : tipoDeDadoConvertido =' MegaBytes'
        tipoDeDado = ' Bytes'
        if(numero < 1024 * 1024){
            resultado = 1 / numero
     } else if(numero >= 1024 * 1024){
         resultado = numero / Math.pow(1024, 2) 
     } else {resultado}
        break
    
        case '4' : tipoDeDadoConvertido =' GigaBytes'
        tipoDeDado = ' Bytes'
        if(numero < 1024* 1024 * 1024){
            resultado = 1 / numero
     } else if(numero >= 1024 * 1024 * 1024){
         resultado = numero / Math.pow(1024, 3) 
     } else {resultado}
        break
    
        case '5' : tipoDeDadoConvertido =' TeraBytes'
        tipoDeDado = ' Bytes'
        if(numero < 1024 * 1024 * 1024 * 1024){
            resultado = 1 / numero
     } else if(numero >= 1024 * 1024 * 1024 * 1024){
         resultado = numero / Math.pow(1024, 4) 
     } else {resultado}
        break
       default: tipoDeDadoConvertido = 'Não informado'
       tipoDeDado = ' Bytes'
        break }
}
else if(dado == 2){
    switch(dadoConvertido){
        case '1' : tipoDeDadoConvertido ='Bytes'
                tipoDeDado = ' KiloBytes'
            if( numero <=1 ){
            resultado = 1024
            }
            else if(numero >1){
            resultado=  numero * 1024
            } else{resultado}
        break
        case '2' : tipoDeDadoConvertido =' KiloBytes'
                tipoDeDado = ' KiloBytes'
            resultado = numero 
        break
    
        case '3' : tipoDeDadoConvertido =' MegaBytes'
                tipoDeDado = ' KiloBytes'
        if(numero < 1024){
            resultado = 1 / numero
     } else if(numero >= 1024 ){
         resultado = numero / 1024 
     } else {resultado}
        break
    
        case '4' : tipoDeDadoConvertido =' GigaBytes'
                tipoDeDado = ' KiloBytes'
        if(numero <Math.pow(1024, 2) ){
            resultado = 1 / numero
     } else if(numero >= Math.pow(1024, 2)){
         resultado = numero / Math.pow(1024, 2) 
     } else {resultado}
        break
    
        case '5' : tipoDeDadoConvertido =' TeraBytes'
                tipoDeDado = ' KiloBytes'
        if(numero < Math.pow(1024, 3) ){
            resultado = 1 / numero
     } else if(numero >= Math.pow(1024, 3)){
         resultado = numero / Math.pow(1024, 3)
     } else {resultado}
        break
       default: tipoDeDadoConvertido = 'Não informado'
                tipoDeDado = ' KiloBytes'
        break
    }
}
else if(dado == 3){
    switch(dadoConvertido){
        case '1' : tipoDeDadoConvertido =' Bytes'
        tipoDeDado = ' MegaBytes'
            if(numero <= 1){
              resultado = Math.pow(1024,2)
            } else if(numero > 1){
               resultado = numero * Math.pow(1024,2)
            } else {resultado}
        break
        case '2' : tipoDeDadoConvertido =' KiloBytes'
        tipoDeDado = ' MegaBytes'
        if(numero <= 1){
               resultado = 1024
        } else if(numero > 1){
            resultado = numero * 1024 
        } else {resultado}
        break
    
        case '3' : tipoDeDadoConvertido =' MegaBytes'
        tipoDeDado = ' MegaBytes'
          resultado = numero
        break
    
        case '4' : tipoDeDadoConvertido =' GigaBytes'
        tipoDeDado = ' MegaBytes'
        if(numero < 1024){
            resultado = 1 / numero
     } else if(numero >= 1024) {
         resultado = numero / 1024              
     } else {resultado}
        break
    
        case '5' : tipoDeDadoConvertido =' TeraBytes'
        tipoDeDado = ' MegaBytes'
        if(numero < Math.pow(1024, 2)){
            resultado = 1 / numero
     } else if(numero >= Math.pow(1024, 2)){
         resultado = numero / Math.pow(1024, 2) 
     } else {resultado}
        break
       default: tipoDeDadoConvertido = 'Não informado'
       tipoDeDado = ' MegaBytes'
        break
    }
}
else if(dado == 4){
    switch(dadoConvertido){
        case '1' : tipoDeDadoConvertido =' Bytes'
        tipoDeDado = ' GigaBytes'
            if(numero <= 1){
              resultado = Math.pow(1024,3)
            } else if(numero > 1){
               resultado = numero * Math.pow(1024,3)
            } else {resultado}
        break
        case '2' : tipoDeDadoConvertido =' KiloBytes'
        tipoDeDado = ' GigaBytes'
        if(numero <= 1){
               resultado = Math.pow(1024,2)
        } else if(numero > 1){
            resultado = numero * Math.pow(1024,2)
        } else {resultado}
        break
    
        case '3' : tipoDeDadoConvertido =' MegaBytes'
        tipoDeDado = ' GigaBytes'
         if(numero <= 1){
            resultado = 1024
       } else if(numero > 1){
         resultado = numero * 1024
       } else {resultado}
        break
    
        case '4' : tipoDeDadoConvertido =' GigaBytes'
        tipoDeDado = ' GigaBytes'
        resultado = numero
        break
    
        case '5' : tipoDeDadoConvertido =' TeraBytes'
        tipoDeDado = ' GigaBytes'
        if(numero < 1024){
            resultado = 1 / numero
     } else if(numero >= 1024){
         resultado = numero / 1024 
     } else {resultado}
        break
       default: tipoDeDado = 'Não informado'
       tipoDeDado = ' GigaBytes'
        break
    }
}
else if(dado == 5){
    switch(dadoConvertido){
        case '1' : tipoDeDadoConvertido =' Bytes'
        tipoDeDado = ' TeraBytes'
            if(numero <= 1){
              resultado = Math.pow(1024,4)
            } else if(numero > 1){
               resultado = numero * Math.pow(1024,4)
            } else {resultado}
        break
        case '2' : tipoDeDadoConvertido =' KiloBytes'
        tipoDeDado = ' TeraBytes'
        if(numero <= 1){
               resultado = Math.pow(1024,3)
        } else if(numero > 1){
            resultado = numero * Math.pow(1024,3)
        } else {resultado}
        break
    
        case '3' : tipoDeDadoConvertido =' MegaBytes'
        tipoDeDado = ' TeraBytes'
         if(numero <= 1){
            resultado = Math.pow(1024,2)
       } else if(numero > 1){
         resultado = numero * Math.pow(1024,2)
       } else {resultado}
        break
    
        case '4' : tipoDeDadoConvertido =' GigaBytes'
        tipoDeDado = ' TeraBytes'
        if(numero <= 1){
            resultado = 1024
       } else if(numero > 1){
         resultado = numero * 1024
       } else {resultado}
        break
    
        case '5' : tipoDeDadoConvertido =' TeraBytes'
        tipoDeDado = ' TeraBytes'
        if(numero < 1024){
           resultado = numero
        }
        break
       default: tipoDeDadoConvertido = 'Não informado'
        break
    }
} else{resultado = 'Nenhum valor digitado'}

alert('Valor e tipo de dado a converter:' + numero + tipoDeDado +'\nValor e tipo de dado convertido: '+ resultado + tipoDeDadoConvertido  )

