function snapCrackle(maxValue){
    let lista = [];
    for(let i = 1; i <= maxValue; i++){
        if(i % 5 == 0){
            lista.push(" Crackle")
        }
        if(i % 5 == 0 && i % 3 == 0){
            lista.push(" SnapCrackle");
        }else
            if(i % 2 == 1){
                lista.push(" Snap");
            }else
                if(i % 2 == 0){
                    lista.push(" " + i);
                }
    }
    return lista;
}

let resultado = snapCrackle(35);
console.log(resultado.toString());