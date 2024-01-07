
import * as S from './Style'

import Item from'../AllTypes/Index'

import Comments from './Comments/Index'

const Modal = ({ isOpen, setOpen }: Item) => {

    if(isOpen){
        return (
            <S.Container>
                <S.SubConatiner>

                
                < Comments />

                <S.ButtonModal onClick={()=>setOpen(!isOpen)}>Close</S.ButtonModal>
                </S.SubConatiner>
            </S.Container>
          )

    }
   

  
}

export default Modal
