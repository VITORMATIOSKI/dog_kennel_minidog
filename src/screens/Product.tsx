import { MdLoyalty, MdPets, MdSavings} from 'react-icons/md';

import banho from "../assets/banhoetosa.jpg"
import dogFood from "../assets/dog-food.jpeg"


export function Products(){
     return(
          <section className="flex justify-center items-center flex-col">
               <div className="flex items-center justify-center flex-row w-[80%]">
                    <div>
                         <img src={banho} alt="" className="w-[500px] h-[300px] rounded" />
                    </div>
                    <div>
                         <h1 className="text-center uppercase font-extrabold text-2xl mb-10">Banho e Tosa</h1>
                         <p className="text-center uppercase font-semibold ml-10">Trabalhamos com banho e tosa de raças de pequeno e médio porte , com horário marcado e conforme disponibilidade de horarios</p>
                         <div className='mt-10'>
                              <div className='flex items-center justify-center flex-row mt-3'>
                                   <MdLoyalty size={30}/>
                                   <p className='ml-5 text-center font-semibold text-xl'>Tratamento diferenciado</p>
                              </div>
                              <div className='flex items-center justify-center flex-row mt-3'>
                                   <MdPets size={30}/>
                                   <p className='ml-5 text-center font-semibold text-xl'>Trabalhamos com amor e cuidado</p>
                              </div>
                              <div className='flex items-center justify-center flex-row mt-3'>
                                   <MdSavings size={30}/>
                                   <p className='ml-5 text-center font-semibold text-xl'>Melhor preço da região</p>
                              </div>

                         </div>
                    </div>
               </div>
               <div className="flex items-center justify-center flex-row w-[80%] mt-32">
                    <div>
                         <h1 className="text-center uppercase font-extrabold text-2xl mb-10">As melhores marcas de ração para seu cãozinho</h1>
                         <p className="text-center uppercase font-semibold mr-10">Trabalhamos com banho e tosa de raças de pequeno e médio porte , com horário marcado e conforme disponibilidade de horarios</p>
                         <div className='mt-10'>
                              <div className='flex items-center justify-center flex-row mt-3'>
                                   <MdLoyalty size={30}/>
                                   <p className='ml-5 text-center font-semibold text-xl'>mudar texto</p>
                              </div>
                              <div className='flex items-center justify-center flex-row mt-3'>
                                   <MdPets size={30}/>
                                   <p className='ml-5 text-center font-semibold text-xl'>Mudar texto</p>
                              </div>
                              <div className='flex items-center justify-center flex-row mt-3'>
                                   <MdSavings size={30}/>
                                   <p className='ml-5 text-center font-semibold text-xl'>Mudar texto</p>
                              </div>

                         </div>
                    </div>
                    <div>
                         <img src={dogFood} alt="" className="w-[500px] h-[300px] rounded" />
                    </div>
               </div>
               ]
          </section>
     )
}