

import { FaInstagram, FaFacebookSquare } from 'react-icons/fa'

import logo from '../assets/Logo.png'

export default function Footer() {
  return (
    <footer className="flex justify-center items-center flex-col ">
      <div className="flex items-center justify-evenly mt-4 w-full">
        <img
          src={logo}
          alt=""
          className="rounded-full mt-2 w-[100px] h-[100px]"
        />
        <div className="flex items-center justify-between flex-row">
          <a href="" className="mr-5">
            <FaInstagram size={40} />
          </a>
          <a href="">
            <FaFacebookSquare size={40} />
          </a>
        </div>
      </div>
      <h1> &copy; Todos os direitos reservados - Vitor Matheus Matioski</h1>
    </footer>
  )
}