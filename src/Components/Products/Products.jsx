import styles from "./Products.module.css"
import Cards from "../Cards/Cards"
import Botao from "../Botao/Botao"
import React, {useState, useEffect} from 'react';

function Products() {
    const [contador, setContador] = useState(1)
    const [products, setProducts] = useState([]);
    useEffect(() => {
      handleRequisition();
    }, [])
  
    function handleCount(){
      setContador(contador + 1)
    }
    async function handleRequisition() {
      // o numero depois de page tem q contar a cada clique
      const url = `https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${contador}`;
      const requisition = await fetch(url);
      const json = await requisition.json();
      const results = json.products;
      setProducts(results);
      handleCount();
    }

    return(
        <div className={styles.ProductsSession}>
            <h3>Sua seleção especial:</h3>
            <br />
            <div className={styles.CardsContainer}>  
            {
              !!products && products.map((product, index)=>{
                return (<Cards p={product} key={index}/>)
              })
            }
                
                
            </div>
            <div className={styles.BotaoMaisProdutos}>
                <Botao e={handleRequisition} text="Ainda mais produtos aqui!"/>
            </div>
        </div>
    )
}

export default Products