import React from 'react'
import styles from './Botao.module.css'

const Botao = ({text, e}) => {
    return (
      <button type='text' className={styles.Btns} onClick={e}>{text}</button>
    )
  }
  
  export default Botao