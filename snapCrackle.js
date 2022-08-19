function snapCrackle(maxValue){
    let lista = [];
    for(let i = 1; i <= maxValue; i++){
        if(i % 5 == 0 && i % 2 != 0){
            lista.push(" SnapCrackle")
        }else
        if(i % 5 == 0){
            lista.push(" Crackle");
        }else
            if(i % 2 == 1){
                lista.push(" Snap");
            }else
                if(i % 2 == 0){
                    lista.push(" " + i);
                }
    }
    return lista.join(',');
}

let resultado = snapCrackle(50);
console.log(resultado);