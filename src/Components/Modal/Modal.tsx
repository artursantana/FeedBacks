
import * as S from './Style'

import Item from'../AllTypes/Index'

const Modal: React.FC<Item> = ({ isOpen, setOpen, ItemTitle }) => {

    if(isOpen){
        return (
            <S.Container>
                <S.SubConatiner>

                
                 <p> Esse é o : {ItemTitle}</p>

                <S.ButtonModal onClick={()=>setOpen(!isOpen)}>Close</S.ButtonModal>
                </S.SubConatiner>
            </S.Container>
          )

    }
   

  
}

export default Modal
