import { FaPlus } from "react-icons/fa";
import { GiSleevelessTop } from "react-icons/gi";




import * as S from './Style'
import { useEffect, useState } from 'react';



import Item from '../AllTypes/Index'



const Index = () => {

    const [data, setData] = useState<Item[]>([]);
    const [cart, setCart] = useState<Item[]>([])

    useEffect(() => {
      fetch('https://api.mercadolibre.com/sites/MLB/search?q=celular')
        .then((res) => res.json())
        .then((newData) => {
          // Verifica se os dados da API estão no formato esperado
          if (!newData || !newData.results || !Array.isArray(newData.results)) {
            throw new Error('Dados da API estão em um formato inesperado.');
          }
  
          console.log(newData.results); // Verifica os dados recebidos no console
  
          // Atualiza o estado local com os dados da API
          setData(newData.results);
        })
        .catch((error) => {
          console.error('Erro na solicitação:', error);
        });
    }, []);



    const handleClickCar = (item) => {
        // Toggle the item in and out of the cart
        if (cart.some((itemCart) => itemCart.id === item.id)) {
          const updatedCart = cart.filter((itemCart) => itemCart.id !== item.id);
          setCart(updatedCart);
        } else {
          setCart([...cart, item]);
        }
      };
  
  return (
    <S.Body>
      {data.map((item) => (
        <div key={item.id}>
          <img src={item.thumbnail} alt='fotos' />
          {item.title}
          <div className='ButtonValue'><button>Buy</button> <p>{`€ ${item.installments.amount}`}</p></div>
          <button onClick={() => handleClickCar(item)}>{
            cart.some((itemCart)=> itemCart.id == item.id) ? (
                <FaPlus />
            ) : (  <GiSleevelessTop /> )
          }</button>
          
          
          </div>
          
          
      ))}
      </S.Body>
  )
}

export default Index
