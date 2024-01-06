import { useEffect, useState } from 'react';
import * as S from './style';


import Item from '../AllTypes/Index'




const Index = () => {
  const [data, setData] = useState<Item[]>([]);

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

  return (
    <S.Container>
      <S.Header>
        <h1>Mercado Livre</h1>
      </S.Header>
      <S.Body>
      {data.map((item) => (
        <div key={item.id}>
          <img src={item.thumbnail} alt='fotos' />
          {item.title}
          </div>
      ))}
      </S.Body>
      
    </S.Container>
  );
};

export default Index;
