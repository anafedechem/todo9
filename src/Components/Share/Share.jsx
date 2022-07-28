import Botao from "../Botao/Botao"
import styles from "./Share.module.css"

function Share(){
    return(
        <div className={styles.Share}>
            <h3>Compartilhe a novidade</h3>
            <br />
            <p>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p><br />

            <div className={styles.ShareInputs}>
                <label>Nome do seu amigo:
                    <input type="text"/>
                </label>
                <label>Email:
                    <input type="text"/>
                </label>
            </div>
            <br /><br />
            
            <Botao text={'Enviar agora'}/>
        </div>
    )
}

export default Share