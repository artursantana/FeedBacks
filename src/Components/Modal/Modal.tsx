
import * as S from './Style'

type ModalProps = {
    isOpen: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  };

import Comments from './Comments/Index'



const Modal: React.FC<ModalProps> = ({ isOpen, setOpen }) => {

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
