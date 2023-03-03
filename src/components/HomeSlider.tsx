interface HomeSldierProps {
     src: string
     title: string
     text: string
     height: string
     weight: string
     expectation: string
   }

   export default function HomeSlider({
     src,
     title,
     text,
     height,
     weight,
     expectation,
   }: HomeSldierProps) {
     return (
       <div className="flex justify-center items-center flex-row w-full">
         <div className="w-[50%] flex justify-center items-center">
           <a href="">
             <img src={src} alt="" className="rounded w-[600px] h-[400px]" />
           </a>
         </div>
         <div className="w-[35%] flex items-center justify-start flex-col ">
           <h1 className="uppercase text-5xl font-black text-center mb-4 ">
             {title}
           </h1>
           <p className="text-center text-base font-normal ">{text}</p>
           <span className="uppercase font-bold">
             Altura: <span className="font-normal">{height} </span>
           </span>
           <span className="uppercase font-bold">
             Peso: <span className="font-normal">{weight} </span>
           </span>
           <span className="uppercase font-bold">
             Expectativa de vida:
             <span className="font-normal">{expectation}</span>
           </span>
         </div>
       </div>
     )
   }
