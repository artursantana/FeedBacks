import * as S from './Style';
import { useEffect, useState } from 'react';
import Item from '../AllTypes/Index';
import Modal from '../Modal/Modal';
import FeedValue from './FeedValue';




const Index = () => {
  const [data, setData] = useState<Item[]>([]);
  const [open, setOpen] = useState(false);

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
        console.error(error);
      });
  }, []);


  
  return (
      <S.Body>

        {
          data.length == 0 && (
            <div>Carregando Dados...</div>
          )
        }


        
        {data && (data.map((item) => (
          <div className='divMap' key={item.id}>
            <div><img src={item.thumbnail} alt='fotos' /></div>
            <div className='divTitle'>
              <h4>{item.title}</h4>
              <h1> € {item.installments.amount}</h1>
            </div>
            <div className='divButton'>
              <button className='ButtonValue' onClick={() => {                setOpen(!open);
              }}>
                  <FeedValue />
              </button>
            
            </div>
            <Modal isOpen={open} setOpen={setOpen} />
          </div>)
        ))}
      </S.Body>
  );
};

export default Index;

