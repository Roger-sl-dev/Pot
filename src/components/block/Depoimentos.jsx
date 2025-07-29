import Marquee from "react-fast-marquee"

import { FaStar } from "react-icons/fa";




export default ()=>{
    return(
        <>
        <Marquee>
          <Card
           Name='Juliana.M'
           Text='Trabalhar com o Roger foi uma das decisões mais acertadas que tomamos. Ele entendeu exatamente o que precisávamos, entregou antes do prazo e ainda sugeriu melhorias que fizeram toda a diferença. Hoje, nosso sistema é mais estável e rápido.'
            className="hover:bg-white"/>
          <Card
           Name='Carlos.A'
           Text='Profissional extremamente comprometido. Desde o início mostrou domínio técnico e preocupação em entregar algo além do esperado. Recomendo de olhos fechados, principalmente para projetos que exigem responsabilidade e segurança.'
          className="hover:bg-lime-300"/>
          <Card
          Name='Marina.T'
          Text='Nosso site estava cheio de problemas de performance e segurança. O Roger não só resolveu tudo, como também nos orientou sobre como manter o sistema seguro no dia a dia. Profissional confiável e transparente.'
           className="hover:bg-white"/>
          <Card
          Name='Bruno.R'
          Text='O diferencial do Roger foi o cuidado com os detalhes. Ele não apenas codifica, mas pensa na experiência do usuário, na performance e na escalabilidade do projeto. Um verdadeiro parceiro de tecnologia.'
           className="hover:bg-lime-300"/>
          <Card
          Name=' Lívia.F'
          Text='Já trabalhei com vários freelancers, mas o Roger foi o mais profissional de todos. Sempre disponível para tirar dúvidas, entregas pontuais e um código limpo e bem documentado. Resultado: projeto aprovado sem retrabalho.'
          className="hover:bg-white"/>
          <Card
          Name='Eduardo.N'
          Text='Contratei o Roger para criar um painel de gestão completo para minha pizzaria, e ele superou todas as expectativas. O sistema é rápido, intuitivo e 100% funcional. Hoje faço tudo pelo sistema e ganhei muito mais tempo e controle.'
          className="hover:bg-lime-300"/>
      

        </Marquee>


        </>
    )
}

let Card =(props)=>{
    return(
        <div className={` ${props.className} p-2 border  transition-all duration-500 border-white rounded-lg mx-2 w-[400px] min-h-80 grid gap-1 group backdrop-blur-sm  `}>
            <p className=" text-white text-lg group-hover:text-black "> {props.Text} </p>
             <span className=" flex flex-row gap-1">
                <FaStar className=" text-yellow-500 text-xl"/>
                <FaStar className=" text-yellow-500 text-xl"/>
                <FaStar className=" text-yellow-500 text-xl"/>
                <FaStar className=" text-yellow-500 text-xl"/>
                <FaStar className=" text-yellow-500 text-xl"/>
             </span>
            <p className=" text-white text-xl font-semibold group-hover:text-black">{props.Name}</p>
        </div>
    )
}