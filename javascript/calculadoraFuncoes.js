function calcular(action, valor) {
   

    if (action === 'action') {
        if (valor === 'c') {
            document.getElementById("resultado").value = '';
        }

        if (valor === '+' || valor === '-' || valor === '/' || valor === '*') { 
           document.getElementById("resultado").value +=valor;
        }

        if(valor === '='){
          document.getElementById("resultado").value =  eval(document.getElementById("resultado").value);
         
        }

    } else if (action === 'valor') {
        document.getElementById("resultado").value += valor;
    }

}