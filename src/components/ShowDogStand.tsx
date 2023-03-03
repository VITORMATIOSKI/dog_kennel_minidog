
import { motion } from 'framer-motion'

import { FaWhatsappSquare } from 'react-icons/fa'

interface DogPageProps {
  src: string
  name: string
  price: number
}

export default function ShowDogStand({ src, name, price }: DogPageProps) {
  return (
    <div className="flex items-center justify-center flex-col ">
      <img
        src={src}
        className="h-[400] w-[400px] rounded"
      />

      <h2 className="text-center text-lg  font-semibold mb-2 flex justify-center items-center flex-col">
        <span className="font-medium ">Meu nome provisório é :</span>
        {name}
      </h2>

      <span className="font-medium text-lg">
        <strong className="font-extrabold text-lg">R$</strong>
        {price}
      </span>
      <a href="" className="mt-3">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700-700 hover:border-green-500 rounded flex items-center justify-center flex-row uppercase "
        >
          tenho interesse
          <FaWhatsappSquare size={20} className="ml-2" />
        </motion.button>
      </a>
    </div>
  )
}