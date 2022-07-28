import styles from './Form.module.css'
import React from 'react'

function Form() {
    let cpf = React.createRef();
    function enviarFormulario(e){
        e.preventDefault();        
        let cpfValue = cpf.current.value;
        if (testaCPF(cpfValue)) {
            alert("CPF VÁLIDO.")
            cpf.current.classList.remove(styles.NotValidField);
        } else {
            alert("CPF INVÁLIDO.")
            cpf.current.classList.add(styles.NotValidField);
        }
    }

    function testaCPF(strCPF) {
        let Soma;
        let Resto;
        Soma = 0;
        if (strCPF == "00000000000") return false;
        for (let i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;
        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;
    
        Soma = 0;
        for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;
    
        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
        return true;
    }

    return (
        
        <div className={styles.Form}>
            <form onSubmit={enviarFormulario}>
                <div>
                    <label>Seu nome</label><br />
                    <input type="text" placeholder="Digite seu nome" id="nome"/><br/><br />
                    
                    <label>Email</label><br />
                    <input type="email" placeholder="Digite seu email" /><br/><br />

                    <label>CPF</label><br />
                    <input ref={cpf} type="text" placeholder="CPF sem pontos ou traços"/><br/>
                </div>
                    <input type="radio" name="sexo"/>Masculino
                    <input type="radio" name="sexo"/>Feminino
                <div>
                    <input id={styles.btnEnviar} type="submit" value="Enviar" />
                </div>
            </form>
        </div>

    )
}

export default Form