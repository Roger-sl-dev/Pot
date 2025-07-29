
import Marquee from "react-fast-marquee";
import Projetos from "../ui/Projetos";

import Img from '../../assets/foto.png'
import Img2 from '../../assets/foto2.png'
import Img3 from '../../assets/foto3.png'
import Img4 from '../../assets/foto4.png'
import Img5 from '../../assets/foto5.png'
import Img6 from '../../assets/foto6.png'









export default()=>{
  return(
    <>
    <Marquee className=" flex gap-5" pauseOnHover={true}>
      <div className=" mx-2">
      <Projetos Foto={Img} Title={'Academia'}/>
      </div>
      <div className=" mx-2">
      <Projetos Foto={Img2} Title={'Agencia de MTK'}/>
      </div> 
      <div className=" mx-2">
      <Projetos Foto={Img3} Title={'Frelahub'}/>

      </div> 
      <div className=" mx-2">
      <Projetos Foto={Img4} Title={'Oficinas'}/>

      </div>
      <div className=" mx-2">
      <Projetos Foto={Img5} Title={'Eventos'}/>

      </div>
      <div className=" mx-2">
      <Projetos Foto={Img6} Title={'Delivery'}/>

      </div>
      
      
   

    </Marquee>
    </>
  )
}