import CardService from "./components/ui/CardService"
import { FaGlobe,FaDesktop } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { FaMagnifyingGlass, FaQ } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";

import { TbApi } from "react-icons/tb";
import SwiperProjetos from "./components/swiper/SwiperProjetos";
import FAQ from "./components/block/Faq";
import Depoimentos from "./components/block/Depoimentos";
import Skills from "./components/swiper/skills";
import ContactForm from "./components/block/Form";
import Footer from "./components/block/Footer";
import Navbar from "./components/block/Navbar";
import Foto from './assets/ddw.png'



export default ()=>{
  return(
    <main className="absolute top-0 z-[-2]  w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#000_1px)] bg-[size:20px_20px]">
      <div className=" p-10">
      <Navbar/>

      </div>
     <section id="inicio" className=" grid place-items-center py-20 gap-5">
      <p className="  text-xl lg:text-2xl  capitalize p-2 rounded-lg bg-lime-300 text-black font-semibold text-center">software developer      </p>
      <h2 className=" text-4xl lg:text-7xl capitalize text-white font-bold text-center font-prime">o desenvolvedor que esta  <br className=" hidden lg:flex"/>faltando no <span className=" text-lime-300">seu business  </span> </h2>
      <p className=" text-sm  lg:text-xl text-white  text-center font-semibold px-5 lg:px-28 font-prime">
      Está pronto para transformar suas ideias em softwares que geram lucro e dão superpoderes reais ao seu negócio? Vamos criar soluções que fazem você crescer de verdade.


      </p>
      <a className=" capitalize  text-lg lg:text-2xl text-black bg-white p-2 rounded-lg font-semibold hover:bg-lime-300" href="https://cal.com/roger-silva-r432f5/reuni-o-com-roger-silva">agendar agora</a>
     </section>
 
     <section id="servicos" className="grid px-2 lg:px-20 gap-5" >
       <h2 className=" text-3xl lg:text-5xl text-white text-center font-bold capitalize font-prime ">O Que Posso Criar <span className=" text-lime-300" > Para Você</span></h2>
       <p className=" text-white font-prime text-lg  lg:text-xl font-semibold px-2 lg:px-20 text-center">De sites estratégicos a sistemas personalizados, conheça as soluções que posso desenvolver para transformar sua presença digital e acelerar seus resultados.</p>
        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-5">
          <CardService 
                className='hover:bg-white'
           Icon={<FaGlobe/>}
           Titulo={'Criação de Sites Profissionais'}
           Texto='Sites modernos, responsivos e otimizados para conversão e velocidade.'
          />
           <CardService 
               className='hover:bg-lime-300'
           Icon={<FaDesktop/>}
           Titulo={' Criação de Sistemas Personalizados'}
           Texto='Ferramentas e plataformas sob medida para automatizar processos e escalar operações.'
          />
           <CardService 
                 className='hover:bg-white'
           Icon={<FaMagnifyingGlass/>}
           Titulo={'Otimização de Performance e SEO '}
           Texto='Sites mais rápidos, com melhor ranqueamento no Google e mais tráfego orgânico.'
          />
           <CardService 
               className='hover:bg-lime-300'
           Icon={<IoSettingsSharp/>}
           Titulo={'Manutenção e Suporte Contínuo'}
           Texto='Atualizações técnicas, melhorias e monitoramento para manter seu projeto saudável.'
          />
           <CardService 
                 className='hover:bg-white'
           Icon={<TbApi/>}
           Titulo={'Integração com APIs e Plataformas '}
           Texto='Conecte seu site a sistemas externos para ampliar funcionalidades.'
          />
           <CardService 
               className='hover:bg-lime-300'
           Icon={<MdOutlineSecurity/>}
           Titulo={'Segurança e Blindagem de Sites'}
           Texto='Proteção contra invasões, malwares e vazamento de dados sensíveis.'
          />
        </div>
     </section>
      
     <section id="projetos" className="  py-10 gap-5 grid">
      <h2 className=" text-3xl lg:text-5xl font-semibold font-prime capitalize text-white text-center  "> <span className=" text-lime-300">Portfólio</span> de Soluções Digitais</h2>
      <p className=" text-white text-center text-lg lg:text-xl px-2  lg:px-28 font-prime">
      Conheça alguns dos projetos que desenvolvi para transformar ideias em soluções reais, com foco em performance, design e resultados concretos.
      </p>

     <SwiperProjetos/>
     </section>
     
     <section className=" grid gap-5 px-2 lg:px-20">
       <h2 className=" text-white text-center font-semibold  text-3xl lg:text-5xl font-prime">Vantagens de <span className=" text-lime-300">Trabalhar Comigo </span> </h2>
       <p className=" text-white text-lg lg:text-xl font-semibold text-center px-0 lg:px-20 font-prime">Conheça os diferenciais que fazem cada projeto ser único, eficiente e focado em gerar resultados reais para o seu negócio.</p>
       <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5">
          <CardService 
          className='hover:bg-white'
           Icon={<FaGlobe/>}
           Titulo={'Soluções Sob Medida para o Seu Negócio'}
           Texto='Nada de templates genéricos — cada projeto é pensado para seu público, seu mercado e seus objetivos.'
          />
           <CardService 
             className='hover:bg-lime-300'
           Icon={<FaDesktop/>}
           Titulo={' Performance e Otimização de Verdade'}
           Texto='Sites rápidos, leves e preparados para ranquear no Google e converter visitantes em clientes.'
          />
           <CardService 
                className='hover:bg-lime-300'
           Icon={<FaMagnifyingGlass/>}
           Titulo={'Segurança em Primeiro Lugar'}
           Texto='Aplicações blindadas contra invasões, vazamentos e falhas críticas — sua presença digital protegida.'
          />
           <CardService 
              className='hover:bg-white'
           Icon={<IoSettingsSharp/>}
           Titulo={'Design Moderno com Foco em Conversão'}
           Texto='Estética alinhada com estratégia: visual bonito, profissional e que gera resultados.'
          />
      
        </div>
     </section>
   
     <section id="faq" className=" px-2  lg:px-20 py-20">
      <h2 className=" text-3xl lg:text-5xl text-center text-white font-semibold">Respondendo o Que <span className=" text-lime-300">Mais Me Perguntam</span> </h2>
      <FAQ/>
     </section>

     <section className="  flex  flex-col gap-5 place-items-center">
      <h2 className=" text-white text-3xl lg:text-5xl  text-center font-semibold">O Que Meus <span className=" text-lime-300">Clientes Dizem</span> </h2>
      <p className=" text-white text-lg lg:text-xl max-w-4xl text-center font-semibold">Conheça a experiência de quem confiou no meu trabalho e colheu resultados reais com soluções digitais sob medida.</p>
    
     <div className=" w-full">
      <Depoimentos/>
     </div>
     </section>
    

     <section className=" flex flex-row gap-5 py-10 px-4 lg:px-20">
      <div className=" w-full lg:w-3/5 grid gap-3">
        <h2 className=" text-2xl lg:text-4xl text-white  font-semibold">Quem Está por Trás dos Projetos</h2>
        <p className="  text-white text-sm lg:text-lg font-medium">
        Muito prazer, sou Roger Silva, desenvolvedor apaixonado por transformar ideias em soluções digitais que geram resultados reais. Acredito que tecnologia só faz sentido quando aproxima pessoas, resolve problemas e impulsiona negócios. Por isso, cada projeto que assumo é tratado com dedicação, estratégia e foco no que realmente importa: crescimento, segurança e experiência do usuário.
         <br/> <br/>
         Mais do que escrever código, eu me envolvo com os objetivos do cliente, proponho soluções inteligentes e acompanho de perto cada etapa — do planejamento ao suporte pós-lançamento. Se você procura alguém que fale a sua língua, entenda seu desafio e entregue mais do que o combinado, estou pronto para construir algo incrível com você.


        </p>
      </div>
      <div className="w-2/5 hidden lg:flex  place-content-center">
      <span className=" w-80 border-2 border-lime-300 rounded-lg">

       <img className=" rounded-lg" src={Foto} alt="" />
      </span>
      

      
      </div>
     </section>
      

     <section className=" flex flex-col gap-5">
      <h2 className=" text-white text-3xl lg:text-5xl text-center font-semibold capitalize">Minhas  <span className=" text-lime-300">Habilidades</span> Técnicas</h2>
      <p className=" text-white text-center text-lg lg:text-xl font-semibold px-2 lg:px-40"> Domínio das principais tecnologias e ferramentas do mercado para desenvolver soluções modernas, seguras e pensadas para performance e escalabilidade.</p>
      <Skills/>
     </section>

     <section id='contato' className=" py-10 px-2 lg:px-20 flex flex-col gap-10">
      <h2 className=" text-white font-semibold text-3xl lg:text-5xl text-center">Vamos Conversar?</h2>
      <p className=" text-center text-white font-semibold text-lg lg:text-xl px-10">Entre em contato para tirar dúvidas, solicitar um orçamento ou dar o primeiro passo rumo ao seu próximo projeto digital. Respondo rápido e com total transparência.</p>
      <div>

      <ContactForm/>
      </div>

     </section>
      
     <Footer/>
a
    </main>
  )
}