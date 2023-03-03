import { Link } from 'react-router-dom'

import { BsInstagram, BsWhatsapp } from 'react-icons/bs'

import logo from '../assets/Logo.png'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-center w-full h-48 ">
      <img src={logo} alt="" className='rounded-full w-28 h-28 mr-36' />
      <ul className=" flex items-center justify-center flex-row ">
        <li>
          <Link
            to="/"
            className="text-center text-xl uppercase font-extrabold text-gray-900 p-2 m-2 hover:text-red-800 hover:scale-125 "
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/DogPage"
            className="text-center text-xl uppercase font-extrabold text-gray-900 p-2 m-2  hover:text-red-800 hover:scale-125   "
          >
            Doguinhos
          </Link>
        </li>
        <li>
          <Link
            to="/Products"
            className="text-center text-xl uppercase font-extrabold text-gray-900 p-2 m-2  hover:text-red-800 hover:scale-125   "
          >
            Produtos
          </Link>
        </li>
      </ul>
      <div className="ml-48 flex flex-row items-center justify-center flex-wrap">
        <a href="" className="mr-6">
          <BsInstagram width={50} />
        </a>
        <a href="">
          <BsWhatsapp width={50} />
        </a>
      </div>
    </nav>
  )
}