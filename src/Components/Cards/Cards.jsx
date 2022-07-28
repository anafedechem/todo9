import styles from "./Cards.module.css"
import React from 'react'

const Cards = ({p}) => {
  return(
    <div className={styles.Card}>
      <img src={p.image} alt="" width="100%" height="150" />
        <p>{p.name}</p>
        <p>{p.description}</p>
        <p>De: R${p.oldPrice}</p>
        <p><b>Por: R${p.price}</b></p>
        <p>Ou: {p.installments.count}x de {p.installments.value}</p>
        <button>Comprar</button>
    </div>
  )
}

export default Cards