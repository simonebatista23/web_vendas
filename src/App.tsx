"use client"

import { ChevronLeft, ChevronRight, Search, ShoppingCart, User, Menu, X, Truck } from "lucide-react"
import { useEffect, useState } from "react"
import MesaCapa from "./assets/MesaCapa.jpg"
import CadeiraCapa from "./assets/cadeiraCapa.jpeg"
import MonitorCapa from "./assets/MonitorCapa.webp"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode } from "swiper/modules";


import {
  CadeiraAlphaGamer,
  CadeiraDXRACERPretaBranca,
  CadeiraGamerMaxRacer,
  CadeiraRazerErgonomica,
  CadeiraTitanPretaBranca,
  CadeiraMX7PretaGold,
  MesaStone,
  MesaMelaminaRojo,
  MesaBranca9409,
  MesaCantoGaveta,
  MesaGamerNT2065,
  MesaPreta9409
} from "./imagens";


const images = [CadeiraCapa, MesaCapa, MonitorCapa]
function MenuBar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className="relative bg-black text-sm text-white">
      <div className="flex w-full items-center justify-between px-4 py-1">
        <div className="flex items-center gap-6">
          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 animate-pulse" />}
          </button>
          <a href="/" className="font-bold text-xl uppercase tracking-wider">
            Web vendas
          </a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="hover:text-blue-600">
            Últimas unidades em estoque!
          </a>
          <a href="#" className="hover:text-blue-600">
            Cadeiras
          </a>
          <a href="#" className="hover:text-blue-600">
            Mesas
          </a>
          <a href="#" className="hover:text-blue-600">
            Monitores
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button>
            <Search className="h-5 w-5" />
          </button>
          <button>
            <User className="h-5 w-5" />
          </button>
          <button className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-950 text-xs font-bold text-white">
              0
            </span>
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <div
        className={
          `${isOpen ? "flex" : "hidden"}
          fixed left-0 top-0 z-50 h-full w-full flex-col bg-blue-950 px-4 py-6
          md:hidden transition-transform duration-300 ease-in-out transform ${isOpen ? "translate-x-0" : "-translate-x-full"}`
        }
      >
        <div className="flex justify-end">
          <button onClick={toggleMenu} className="text-white">
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col gap-6 mt-10">
          <a href="#" className="text-white text-lg hover:text-blue-300">
            Últimas unidades em estoque!
          </a>
          <a href="#" className="text-white text-lg hover:text-blue-300">
            Cadeiras
          </a>
          <a href="#" className="text-white text-lg hover:text-blue-300">
            Mesas
          </a>
          <a href="#" className="text-white text-lg hover:text-blue-300">
            Monitores
          </a>
        </nav>
      </div>
    </div>
  )
}

function App() {
  const [activeCategory, setActiveCategory] = useState("Cadeiras")
  const [showCookieBanner, setShowCookieBanner] = useState(true)

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="flex min-h-screen flex-col">
      <MenuBar />


      <div className="bg-blue-600 px-4 py-4 text-center text-white">

      </div>

      <div className="relative flex flex-col md:flex-row">

        <div className="bg-blue-600  px-8 py-16 md:w-1/2 text-white">
          <div className="mx-auto max-w-md text-center md:text-left">
            <p className="mb-8 text-sm font-medium uppercase tracking-wider">OFERTAS EXCLUSIVAS</p>
            <h1 className="mb-8 text-4xl sm:text-6xl font-bold leading-none tracking-tight">
              Seu Setup,<span className="relative inline-block"> Seu Estilo</span>
            </h1>
            <p className="text-lg">Tudo para montar seu espaço com estilo e performance.</p>
          </div>
        </div>

        <div className="md:w-1/2 relative md:h-auto">
          <img
            src={images[currentIndex] || "/placeholder.svg"}
            alt={`Slide ${currentIndex + 1}`}
            className="h-full w-full object-cover transition-all duration-300"
          />

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all ${i === currentIndex ? "w-8 bg-black" : "w-2 bg-gray-400"}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-center mb-8">ÚTIMAS UNIDADES EM ESTOQUE!</h2>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">

          <div className="relative group">
            <div className="absolute top-4 left-4 bg-purple-600 text-white px-2 py-1 text-xs z-10">Frete grátis</div>

            <div className="relative bg-gray-100 p-8 flex items-center justify-center h-64 mb-4 overflow-hidden">
              <img src={CadeiraDXRACERPretaBranca} alt="Cadeira Mateo" className="max-h-full" />

              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-center text-sm px-4">
                  Cadeira ergonômica com estrutura reforçada, ideal para longas horas de uso.
                </p>
              </div>
            </div>
            <div className="bg-gray-400 to-purple-800 text-white rounded-lg p-3 text-center shadow-lg mt-2">
              <h3 className="font-medium">Cadeira DXRACER</h3>
              <p className="font-bold text-lg">R$800,00</p>
              <p className="text-sm text-white-600">12 x de R$77,36</p>
            </div>
          </div>

          <div className="relative group">
            <div className="bg-gray-100 p-8 flex items-center justify-center h-64 mb-4 relative overflow-hidden">
              <img src={CadeiraAlphaGamer} alt="Cadeira Dilan" className="max-h-full" />

              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-center text-sm px-4 ">
                  Cadeira ergonômica com estrutura reforçada, ideal para longas horas de uso.
                </p>
              </div>
            </div>
            <div className="bg-gray-400 to-purple-800 text-white rounded-lg p-3 text-center shadow-lg mt-2">
              <h3 className="font-medium">Cadeira Alpha</h3>
              <p className="font-bold text-lg">R$700,00</p>
              <p className="text-sm text-white-600">12 x de R$67,69</p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute top-4 left-4 bg-purple-600 text-white px-2 py-1 text-xs">Frete grátis</div>
            <div className=" relative bg-gray-100 p-8 flex items-center justify-center h-64 mb-4">
              <img src={CadeiraTitanPretaBranca} alt="Cadeira Giorgio" className="max-h-full" />

              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-center text-sm px-4">
                  Cadeira ergonômica com estrutura reforçada, ideal para longas horas de uso.
                </p>
              </div>
            </div>
            <div className="bg-gray-400 to-purple-800 text-white rounded-lg p-3 text-center shadow-lg mt-2">
              <h3 className="font-medium">Cadeira Titan</h3>
              <p className="font-bold text-lg">R$540,00</p>
              <p className="text-sm text-white-600">12 x de R$52,22</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-center mb-8">NOSSAS CADEIRAS</h2>


<Swiper
  slidesPerView={4}
  spaceBetween={20}
  loop={true}
  navigation={true}
  speed={600}
  grabCursor={true}
  modules={[Navigation]}
  className="pb-4"
>
  <SwiperSlide className="!w-[300px]">
    <div className="relative group">
      <div className="absolute top-4 left-4 bg-blue-600 text-white px-2 py-1 text-xs z-10">Frete grátis</div>
      <div className="relative p-8 flex items-center justify-center h-64 mb-4 overflow-hidden">
        <img src={CadeiraDXRACERPretaBranca} alt="Cadeira DXRACER" className="max-h-full" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-center text-sm px-4">
            Cadeira ergonômica com estrutura reforçada, ideal para longas horas de uso.
          </p>
        </div>
      </div>
      <div className="rounded-lg p-3 text-center shadow-lg mt-2">
        <h3 className="font-medium">Cadeira DXRACER</h3>
        <p className="font-bold text-lg">R$800,00</p>
        <p className="text-sm text-white">12 x de R$77,36</p>
      </div>
    </div>
  </SwiperSlide>

  <SwiperSlide className="!w-[300px]">
    <div className="relative group">
      <div className="relative p-8 flex items-center justify-center h-64 mb-4 overflow-hidden">
        <img src={CadeiraAlphaGamer} alt="Cadeira Alpha" className="max-h-full" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-center text-sm px-4">
            Cadeira ergonômica com estrutura reforçada, ideal para longas horas de uso.
          </p>
        </div>
      </div>
      <div className="rounded-lg p-3 text-center shadow-lg mt-2">
        <h3 className="font-medium">Cadeira Alpha</h3>
        <p className="font-bold text-lg">R$700,00</p>
        <p className="text-sm text-white">12 x de R$67,69</p>
      </div>
    </div>
  </SwiperSlide>

  <SwiperSlide className="!w-[300px]">
    <div className="relative group">
      <div className="absolute top-4 left-4 bg-blue-600 text-white px-2 py-1 text-xs z-10">Frete grátis</div>
      <div className="relative p-8 flex items-center justify-center h-64 mb-4 overflow-hidden">
        <img src={CadeiraGamerMaxRacer} alt="Cadeira MaxRacer" className="max-h-full" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-center text-sm px-4">
            Cadeira ergonômica com estrutura reforçada, ideal para longas horas de uso.
          </p>
        </div>
      </div>
      <div className="rounded-lg p-3 text-center shadow-lg mt-2">
        <h3 className="font-medium">Cadeira MaxRacer</h3>
        <p className="font-bold text-lg">R$500,00</p>
        <p className="text-sm text-white">12 x de R$48,35</p>
      </div>
    </div>
  </SwiperSlide>

  <SwiperSlide className="!w-[300px]">
    <div className="relative group">
      <div className="absolute top-4 left-4 bg-blue-600 text-white px-2 py-1 text-xs z-10">Frete grátis</div>
      <div className="relative p-8 flex items-center justify-center h-64 mb-4 overflow-hidden">
        <img src={CadeiraRazerErgonomica} alt="Cadeira Razer" className="max-h-full" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-center text-sm px-4">
            Cadeira ergonômica com estrutura reforçada, ideal para longas horas de uso.
          </p>
        </div>
      </div>
      <div className="rounded-lg p-3 text-center shadow-lg mt-2">
        <h3 className="font-medium">Cadeira Razer</h3>
        <p className="font-bold text-lg">R$700,00</p>
        <p className="text-sm text-white">12 x de R$67,69</p>
      </div>
    </div>
  </SwiperSlide>

  <SwiperSlide className="!w-[300px]">
    <div className="relative group">
      <div className="relative p-8 flex items-center justify-center h-64 mb-4 overflow-hidden">
        <img src={CadeiraMX7PretaGold} alt="Cadeira MX7" className="max-h-full" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-center text-sm px-4">
            Cadeira ergonômica com estrutura reforçada, ideal para longas horas de uso.
          </p>
        </div>
      </div>
      <div className="rounded-lg p-3 text-center shadow-lg mt-2">
        <h3 className="font-medium">Cadeira MX7</h3>
        <p className="font-bold text-lg">R$500,00</p>
        <p className="text-sm text-white">12 x de R$48,35</p>
      </div>
    </div>
  </SwiperSlide>

  <SwiperSlide className="!w-[300px]">
    <div className="relative group">
      <div className="absolute top-4 left-4 bg-blue-600 text-white px-2 py-1 text-xs z-10">Frete grátis</div>
      <div className="relative p-8 flex items-center justify-center h-64 mb-4 overflow-hidden">
        <img src={CadeiraTitanPretaBranca} alt="Cadeira Titan" className="max-h-full" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-center text-sm px-4">
            Cadeira ergonômica com estrutura reforçada, ideal para longas horas de uso.
          </p>
        </div>
      </div>
      <div className="rounded-lg p-3 text-center shadow-lg mt-2">
        <h3 className="font-medium">Cadeira Titan</h3>
        <p className="font-bold text-lg">R$540,00</p>
        <p className="text-sm text-white">12 x de R$52,22</p>
      </div>
    </div>
  </SwiperSlide>
</Swiper>

      </div>
      <div className="container mx-auto px-4 py-8">
  <h2 className="text-2xl font-bold text-center mb-8">NOSSAS MESAS</h2>

  <Swiper
    slidesPerView={4}
    spaceBetween={20}
    loop={true}
    navigation={true}
    speed={600}
    grabCursor={true}
    modules={[Navigation]}
    className="pb-4"
  >
 
    <SwiperSlide className="!w-[300px]">
      <div className="relative group">
        <div className="relative p-8 flex items-center justify-center h-64 mb-4 overflow-hidden">
          <img src={MesaStone} alt="Mesa Stone" className="max-h-full" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-center text-sm px-4">
              Mesa Gamer Stone Ideal Para 2 Monitores Preto/vermelho
            </p>
          </div>
        </div>
        <div className="rounded-lg p-3 text-center shadow-lg mt-2">
          <h3 className="font-medium">Mesa Stone</h3>
          <p className="font-bold text-lg">R$322,90</p>
          <p className="text-sm text-white">3x de R$ 107,63</p>
        </div>
      </div>
    </SwiperSlide>

    <SwiperSlide className="!w-[300px]">
      <div className="relative group">
        <div className=" p-8 flex items-center justify-center h-64 mb-4 relative overflow-hidden">
          <img src={MesaMelaminaRojo} alt="Mesa Melamina" className="max-h-full" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-center text-sm px-4">
              Mesa Gamer Melamina Negro - Rojo 150x83x53 814644
            </p>
          </div>
        </div>
        <div className=" rounded-lg p-3 text-center shadow-lg mt-2">
          <h3 className="font-medium">Mesa Melamina</h3>
          <p className="font-bold text-lg">R$700,00</p>
          <p className="text-sm text-white">12 x de R$67,69</p>
        </div>
      </div>
    </SwiperSlide>


    <SwiperSlide className="!w-[300px]">
      <div className="relative group">
        <div className="absolute top-4 left-4 bg-blue-600 text-white px-2 py-1 text-xs z-10">Frete grátis</div>
        <div className="relative p-8 flex items-center justify-center h-64 mb-4 overflow-hidden">
          <img src={MesaBranca9409} alt="Mesa Branca" className="max-h-full" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-center text-sm px-4">
              Mesa para Computador Gamer Escrivaninha 9409 Madesa Branco Cor:Branco
            </p>
          </div>
        </div>
        <div className="rounded-lg p-3 text-center shadow-lg mt-2">
          <h3 className="font-medium">Mesa Branca</h3>
          <p className="font-bold text-lg">R$500,00</p>
          <p className="text-sm text-white">12 x de R$48,35</p>
        </div>
      </div>
    </SwiperSlide>

    <SwiperSlide className="!w-[300px]">
      <div className="relative group">
        <div className="absolute top-4 left-4 bg-blue-600 text-white px-2 py-1 text-xs z-10">Frete grátis</div>
        <div className="relative p-8 flex items-center justify-center h-64 mb-4">
          <img src={MesaCantoGaveta} alt="Mesa Canto Gaveta" className="max-h-full" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-center text-sm px-4">
              Mesa Gamer de Canto com Gaveta Wayra Preto Amarelo
            </p>
          </div>
        </div>
        <div className="rounded-lg p-3 text-center shadow-lg mt-2">
          <h3 className="font-medium">Mesa Gamer</h3>
          <p className="font-bold text-lg">R$700,00</p>
          <p className="text-sm text-white">12 x de R$67,69</p>
        </div>
      </div>
    </SwiperSlide>

    <SwiperSlide className="!w-[300px]">
      <div className="relative group">
        <div className="relative  p-8 flex items-center justify-center h-64 mb-4">
          <img src={MesaPreta9409} alt="Mesa Preta" className="max-h-full" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-center text-sm px-4">
              Mesa Madesa 9409, Para Computador Gamer, Preto
            </p>
          </div>
        </div>
        <div className="rounded-lg p-3 text-center shadow-lg mt-2">
          <h3 className="font-medium">Mesa Preta</h3>
          <p className="font-bold text-lg">R$329,99</p>
          <p className="text-sm text-white">10x de R$32,99</p>
        </div>
      </div>
    </SwiperSlide>


    <SwiperSlide className="!w-[300px]">
      <div className="relative group">
        <div className="absolute top-4 left-4 bg-blue-600 text-white px-2 py-1 text-xs z-10">Frete grátis</div>
        <div className="relative  p-8 flex items-center justify-center h-64 mb-4">
          <img src={MesaGamerNT2065} alt="Mesa Gamer NT2065" className="max-h-full" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-center text-sm px-4">
              Mesa Gamer NT2065 Preta/Vermelha - Notavel
            </p>
          </div>
        </div>
        <div className="rounded-lg p-3 text-center shadow-lg mt-2">
          <h3 className="font-medium">Mesa NT2065</h3>
          <p className="font-bold text-lg">R$540,00</p>
          <p className="text-sm text-white">12 x de R$52,22</p>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</div>


    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 bg-blue-600 p-8 flex flex-col justify-center text-white">
          <h3 className="text-lg font-medium">TODO O MÊS</h3>
          <h2 className="text-4xl font-bold my-4">2X1 / 3X2</h2>
          <p className="text-xl mb-6">em selecionados</p>
          <div className="flex items-center">
            <div className="w-24 h-0.5 bg-white"></div>
            <div className="ml-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right"
              >

                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-gray-200 p-8 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-megaphone"
          >
            <path d="m3 11 18-5v12L3 13" />
            <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
          </svg>
        </div>
      </div>
    </div>

  {
    showCookieBanner && (
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex justify-between items-center z-50">
        <p className="text-sm">
          Ao navegar por este site você aceita o uso de cookies para agilizar a sua experiência de compra.
        </p>
        <button
          className="text-sm font-medium underline"
          onClick={() => setShowCookieBanner(false)}
        >
          Entendi
        </button>
      </div>
    )
  }

    </div >
  )
}

export default App
