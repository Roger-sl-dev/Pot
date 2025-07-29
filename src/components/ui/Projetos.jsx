

import {Tooltip } from 'react-tippy';
  
import 'react-tippy/dist/tippy.css';
export default({Foto,Title})=>{
    return(
        <>
           <Tooltip
                title={Title}
                position="bottom"
                animation="scale"
                inertia="scale"
                 followCursor ="true"
                 size='regular'
        
            
                >

        <div className='  cursor-pointer  transition-all duration-700 border border-white rounded-lg hover:border-lime-300  hover:border-2  w-[450px]'>
            <img className=' rounded-lg' src={Foto} alt="" />
            <p></p>
        </div>
                </Tooltip>
        </>
    )
}
