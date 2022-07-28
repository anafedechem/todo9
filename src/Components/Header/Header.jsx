import styles from './Header.module.css'
import Botao from '../Botao/Botao'

function Header(){
    return(
        <div className={styles.Header}>
            <h4>uma seleção de produtos</h4>
            <br />
            <h1>especial para você</h1>
            <br />
            <h3>Todos os produtos dessa lista foram selecionados a partir da sua navegação. Aproveite!</h3>  
            <br/>
            <div className={styles.BtnHeader}>
                <Botao text='Conheça a Linx'/>   
                <Botao text='Ajude o algoritmo'/>   
                <Botao text='Seus produtos'/>   
                <Botao text='Compartilhe'/>
            </div>    
        </div>
    )
}

export default Header