import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { motion } from 'framer-motion'

import HomeSlider from '../components/HomeSlider'

// FOTOS

import Slider01 from '../assets/images/yorkshire.jpg'
import Slider02 from '../assets/images/shihtzu.jpg'
import Slider03 from '../assets/images/lhasa.jpg'
import Slider04 from '../assets/images/pug.jpg'

import aboutDog from '../assets/images/dogslider02.jpeg'



import PawsAnimation from '../components/Animations/PawsAnimation'
import { Link } from 'react-router-dom'

const slide = [
  {
    id: 1,
    src: Slider01,
    title: 'Yorkshire Terrier',
    text: 'O yorkshire terrier, também conhecido como york ou yorkie, é um lindo  cão de companhia, muito inteligente e dócil. Suas dimensões reduzidas (os cachorros da raça têm menos de 20 cm!) e fácil adaptação o tornam  ideal tanto para tutores que moram sozinhos, como para lares com grandes famílias e crianças. Esperto e brincalhão, o yorkshire também atua como cão de guarda, alertando sobre presenças e barulhos estranhos.',
    height: '18-20 cm',
    weight: '2-3 kg',
    expectation: '12-15 anos',
  },
  {
    id: 2,
    src: Slider02,
    title: 'Shih Tzu',
    text: 'Tutores que procuram por um novo amigo de quatro patas vão amar ter um cachorro Shih Tzu como companhia. Famoso pela fofura e pela beleza dos pelos alongados, ele se adapta muito bem à família humana, já que gosta de dar e receber carinho e é muito animado. Esse cãozinho não precisa de muito espaço, portanto, pode viver tranquilamente em lares menores, como apartamentos. Isso não impede que ele possa ser criado em casas grandes, com quintais, por exemplo. A versatilidade e o fato de ser um bichinho que se acostuma facilmente a diferentes tipos de ambientes, faz desta raça uma das mais queridas!',
    height: '20-30 cm',
    weight: '9-10 kg',
    expectation: '13 anos',
  },
  {
    id: 3,
    src: Slider03,
    title: 'Maltese dog (Maltês)',
    text: 'O Maltês é facilmente reconhecido pelo seu pequeno porte e por conta da pelagem branca super macia. Mas esses não são os únicos atributos que fazem da raça uma das preferidas por vários tutores em todo o mundo .Trata-se de um cão inteligente, esperto, dócil e brincalhão. Com muita gentileza e aparência delicada, ele pode enganar muita gente. Isso porque, é um peludinho cheio de energia e, não à toa, é comumente utilizado para outras funções além de companhia. Ele se destaca como pet de terapia e concorre em competições de agility, tracking e obediência.',
    height: '20-23 cm',
    weight: '3-4 kg',
    expectation: '12-15 anos',
  },
  {
    id: 4,
    src: Slider04,
    title: 'Pug',
    text: 'O Pug é um cachorro extremamente amigável, convivendo muito bem com crianças e outros animais de estimação. Muito amoroso e apegado aos tutores, ele se contenta apenas com o fato de ser parte de uma família!. Além disso, a aparência excêntrica o torna único. Seja pelo focinho achatado, seja pela cauda enroladinha, o Pug chama atenção de qualquer apaixonado por pet com facilidade. A seguir, você confere mais curiosidades sobre esse peludo!',
    height: '30 cm',
    weight: '10 kg',
    expectation: '13 anos',
  },
]

export default function Home() {
  return (
    <>
      <section className="flex justify-center items-center w-full">
        <Swiper
          slidesPerView={1}
          navigation={true}
          modules={[Navigation, Autoplay]}
          loop={true}
          autoplay={{
            delay: 2000,
          }}
          className="flex items-center justify-center w-full"
        >
          {slide.map((slide) => (
            <SwiperSlide
              className="flex items-center justify-center"
              key={slide.id}
            >
              <HomeSlider
                src={slide.src}
                title={slide.title}
                text={slide.text}
                height={slide.height}
                weight={slide.weight}
                expectation={slide.expectation}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section
        className="flex items-center justify-center flex-col w-full h-max mt-10 mb-16"
        id="about"
      >
        <h1 className="text-2xl uppercase font-extrabold mb-5">Sobre nós</h1>
        <div className="flex items-center justify-center flex-row">
          <p className="text-lg font-medium text-center  max-w-6xl mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ab
            pariatur maxime dicta laboriosam vitae maiores nam ipsa, nesciunt
            aliquam quis magni reiciendis, illum accusamus vero, dolore quae
            temporibus consequatur.Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Laborum ab pariatur maxime dicta laboriosam vitae
            maiores nam ipsa, nesciunt aliquam quis magni reiciendis, illum
            accusamus vero, dolore quae temporibus consequatur.
          </p>
          <PawsAnimation />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={aboutDog}
            alt="Logo"
            width={500}
            height={500}
            className="rounded-lg "
          />
        </motion.div>

        <p className="text-lg font-medium text-center  max-w-6xl mt-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est vel
          veritatis, delectus placeat fugit tempora nesciunt? Odit quos
          voluptatum, aspernatur perspiciatis nostrum eligendi. Nobis voluptas
          odit inventore ullam quisquam! Atque!
        </p>

        <div className="flex flex-col mt-10">
          <Link  to="/DogPage">
          <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-stone-500 hover:bg-stone-400 text-white font-bold py-2 px-4 border-b-4 border-stone-700 hover:border-stone-500 rounded"
            >
              Conheça nossos doguinhos
            </motion.button>
          </Link>
        </div>
      </section>

      <section className="flex justify-center items-center flex-row mb-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14321.422956797898!2d-50.3641495!3d-26.1851037!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e712bf504b5851%3A0xf81d0210f086f97f!2sCanil%20Recanto%20Mini%20Dogs!5e0!3m2!1sen!2sbr!4v1676313104742!5m2!1sen!2sbr"
          width="600"
          height="300"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded"
        ></iframe>
      </section>
    </>
  )
}