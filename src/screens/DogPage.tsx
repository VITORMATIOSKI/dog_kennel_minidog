import ShowDogStand from "../components/ShowDogStand"

import Teste1 from '../assets/images/dogslider02.jpeg'
import Teste2 from '../assets/images/dogslider03.jpeg'
import Teste3 from '../assets/images/dogslider04.jpeg'
import WaitingDogsCard from "../components/WaitingDog"

const yorkInfo = [
     {
       id: 1,
       src: Teste1,
       name: 'KIKI',
       price: 1000,
     },
     {
       id: 2,
       src: Teste2,
       name: 'KIKA',
       price: 1000,
     },
     {
       id: 3,
       src: Teste3,
       name: 'MEG',
       price: 1000,
     },
   ]

   export default function DogPage () {
     return (
       <section>
         <div id="YorkshireTerrier" className="mb-10">
           <h1 className="uppercase font-extrabold text-xl text-center mb-10 ">
             Yorkshire Terrier
           </h1>

           <div className="grid grid-cols-3 gap-4">
             {yorkInfo.map((yorkInfo) => (
               <div key={yorkInfo.id} className="flex items-center justify-center">
                 <ShowDogStand
                   src={yorkInfo.src}
                   name={yorkInfo.name}
                   price={yorkInfo.price}
                 />
               </div>
             ))}
              {/* <div>
                <WaitingDogsCard/>
              </div>
              <div>
                <WaitingDogsCard/>
              </div>
              <div>
                <WaitingDogsCard/>
              </div> */}
            </div>
         </div>

         <div id="">
           <h1 className="uppercase font-extrabold text-xl text-center mb-10 ">
             Shih Tzu
           </h1>

           <div className="grid grid-cols-3 gap-4">
             {/* {yorkInfo.map((yorkInfo) => (
               <div key={yorkInfo.id} className="flex items-center justify-center">
                 <ShowDogStand
                   src={yorkInfo.src}
                   name={yorkInfo.name}
                   price={yorkInfo.price}
                 />
               </div>
             ))} */}
             <div>
              <WaitingDogsCard/>
             </div>
             <div>
              <WaitingDogsCard/>
             </div>
             <div>
              <WaitingDogsCard/>
             </div>
           </div>
         </div>

         <div className="mb-14 mt-10">
           <h1 className="uppercase font-extrabold text-xl text-center mb-10 ">
             Lhasa Apso
           </h1>
           <div className="grid grid-cols-3 gap-4">
             {/* {yorkInfo.map((yorkInfo) => (
               <div key={yorkInfo.id} className="flex items-center justify-center">
                 <ShowDogStand
                   src={yorkInfo.src}
                   name={yorkInfo.name}
                   price={yorkInfo.price}
                 />
               </div>
             ))} */}
              <div>
              <WaitingDogsCard/>
             </div>
             <div>
              <WaitingDogsCard/>
             </div>
             <div>
              <WaitingDogsCard/>
             </div>
           </div>
         </div>
          </section>

)
   }
