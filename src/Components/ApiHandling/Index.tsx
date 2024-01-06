


import * as S from './Style'
import { useEffect, useState } from 'react';




import Item from '../AllTypes/Index'



const Index = () => {

    const [data, setData] = useState<Item[]>([]);

    useEffect(() => {
      fetch('https://api.mercadolibre.com/sites/MLB/search?q=celular')
        .then((res) => res.json())
        .then((newData) => {
          if (!newData || !newData.results || !Array.isArray(newData.results)) {
            throw new Error('Dados da API estão em um formato inesperado.');
          }
          setData(newData.results);
        })
        .catch((error) => {
          console.error('Erro na solicitação:', error);
        });
    }, []);

  
  return (
    <S.Body>
         
      {data.map((item) => (
        <div key={item.id}>
          <img src={item.thumbnail} alt='fotos' />
          {item.title}

          <button className='ButtonValue' onClick={()=>console.log('aaaa')}>Leave your feedBaak</button>

          
          
          </div>
          
         
      ))}
      </S.Body>
  )
}

export default Index
