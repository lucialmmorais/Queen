function validar(formulario){
    
    if ((formulario.nome.value.length==0)) {
        alert ("O campos nome é obrigatório");
        return false;
    }

    alert ('Formulário correto')

    formulario.submit();
}