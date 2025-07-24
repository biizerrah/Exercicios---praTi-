/*. Validação de Datas 
Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores 
formarem  uma  data  real  (meses  de  28–31  dias,  ano  bissexto  para 
fevereiro) e false caso contrário*/

function ehDataValida(dia, mes, ano){

    if(mes === 2){
        if(ano % 4 === 0 && ano % 100 !== 0 || ano % 400 === 0){
            dia <= 29
            return true
        }else{
            dia <= 28
            return true
        }
    }else if(mes === 4 || mes === 6 || mes === 9 || mes === 11){
        dia <= 30
        return true
    } else{
        dia <= 31
        return true
    }

    return false
}

console.log(ehDataValida(28,2,2020))
