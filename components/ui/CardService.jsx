
export default(props)=>{
    return(<>
<div className={` ${props.className} + duration-700 transition-all  group  grid gap-3 border border-white backdrop-blur-sm border-solid rounded-lg p-2 place-items-center ` }>
      <p className="  text-lime-300 text-6xl group-hover:text-black   ">{props.Icon}</p>
      <p className=" text-white group-hover:text-black text-xl  lg:text-2xl font-semibold text-center font-prime">{props.Titulo}</p>
      <p className=" text-white font-medium text-center font-prime text-sm lg:text-lg group-hover:text-black">{props.Texto}</p>

    </div>
    
    </>)
}