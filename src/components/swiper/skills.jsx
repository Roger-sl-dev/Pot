import Marquee from "react-fast-marquee"
import { FaGithub, FaNode, FaReact } from "react-icons/fa";
import { IoLogoIonic } from "react-icons/io5";
import { MdJavascript } from "react-icons/md";
import { TbBrandAlpineJs, TbBrandAstro, TbBrandNextjs, TbBrandReactNative } from "react-icons/tb";
import { SiDocker, SiFirebase, SiLaravel, SiLivewire, SiMongodb, SiNestjs, SiPhp, SiPostgresql, SiRuby, SiRubyonrails, SiStimulus, SiTurbo, SiVercel } from "react-icons/si";

import {Tooltip } from 'react-tippy';
  
import 'react-tippy/dist/tippy.css';
import { FaAws, FaCloudflare } from "react-icons/fa6";


export default ()=>{
    return(
        <>
       <div className="  flex flex-col gap-5">
        <span>
            <Marquee pauseOnHover={true}>
                <CardIcon Title='Javascript' Icon={<MdJavascript/>}/>
                <CardIcon Title='React.js' Icon={<FaReact/>}/>
                <CardIcon Title='Alpine.js' Icon={<TbBrandAlpineJs/>}/>
                <CardIcon Title='Next.js' Icon={<TbBrandNextjs/>}/>
                <CardIcon Title='Astro.js' Icon={<TbBrandAstro/>}/>
                <CardIcon Title='React Native' Icon={<TbBrandReactNative/>}/>
                <CardIcon Title='Ionic' Icon={<IoLogoIonic />}/>
                <CardIcon Title='Turbo.js' Icon={<SiTurbo/>}/>
                <CardIcon Title='Sistimulus' Icon={<SiStimulus />}/>
                <CardIcon Title='Livewire' Icon={<SiLivewire/>}/>
                <CardIcon Title='Github' Icon={<FaGithub/>}/>
                <CardIcon Title='Vercel' Icon={<SiVercel/>}/>
           
           


            </Marquee>
        </span>
        <span>
            <Marquee direction="right" pauseOnHover={true}>
                <CardIcon Title='Node.js' Icon={<FaNode/>}/>
                <CardIcon Title='Nest' Icon={<SiNestjs/>}/>
                <CardIcon Title='PHP' Icon={<SiPhp/>}/>
                <CardIcon Title='Laravel' Icon={<SiLaravel/>}/>
                <CardIcon Title='Ruby' Icon={<SiRuby/>}/>
                <CardIcon Title='Ruby on Rails' Icon={<SiRubyonrails/>}/>
                <CardIcon Title='Postgresql' Icon={<SiPostgresql/>}/>
                <CardIcon Title='MongoDB' Icon={<SiMongodb/>}/>
                <CardIcon Title='Docker' Icon={<SiDocker/>}/>
                <CardIcon Title='AWS' Icon={<FaAws/>}/>
                <CardIcon Title='Cloudflare' Icon={<FaCloudflare/>}/>
                <CardIcon Title='Firebase' Icon={<SiFirebase/>}/>
           
           


            </Marquee>
        </span>
    
       </div>
        </>
    )
}

const CardIcon =(props)=>{
    return (
        <>
        <Tooltip
        title={props.Title}
        position="bottom"
        animation="scale"
        inertia="scale"
         followCursor ="true"
         size='regular'

    
        >

        <div className=' mx-2 group hover:bg-lime-300 transition-colors duration-500 flex flex-col gap-3 border  border-white rounded-lg p-3 backdrop-blur-lg'>
            <span className='   flex justify-center text-7xl text-white group-hover:text-black'>
              {props.Icon}
            </span>
        </div>
        </Tooltip>
        </>
    )
}