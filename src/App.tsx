"use client"

import { ChevronLeft, ChevronRight, Search, ShoppingCart, User, Menu, X, Truck } from "lucide-react"
import { useEffect, useState } from "react"
import MesaCapa from "./assets/MesaCapa.jpg"
import CadeiraCapa from "./assets/cadeiraCapa.jpeg"
import MonitorCapa from "./assets/MonitorCapa.webp"
import { CadeiraAlphaGamer, CadeiraDXRACERPretaBranca, CadeiraGamerMaxRacer, CadeiraRazerErgonomica, CadeiraTitanPretaBranca, CadeiraMX7PretaGold } from "./imagens";

const images = [CadeiraCapa, MesaCapa, MonitorCapa]

function MenuBar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)
  return (
    <div className="relative bg-blue-950 text-sm text-white">

      <div className="flex w-full items-center justify-start px-4 py-1 ">
       
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X className="w-6 h-6 " /> : <Menu className="w-6 h-6 animate-pulse" />}
        </button>
      </div>

      <div
        className={`
          ${isOpen ? "flex" : "hidden"}
          absolute left-0 top-14 z-50 w-full flex-col bg-blue-950 px-4 py-4
          md:static md:flex md:flex-row md:w-auto md:bg-transparent md:py-0 md:px-0 gap-4 md:ml-4
        `}
      >
        <a href="" className="font-medium hover:underline py-1">
          Quem somos
        </a>
        <a href="#" className="font-medium hover:underline py-1">
          Como Comprar
        </a>
        <a href="#" className="font-medium hover:underline py-1">
          Trocas e devoluções
        </a>
        <a href="#" className="font-medium hover:underline py-1">
          Perguntas Frequentes
        </a>
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

      <div className="border-b border-gray-200 px-4 py-3">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-6">
            <a href="/" className="font-bold text-xl uppercase tracking-wider">
              Web vendas
            </a>
            <nav className="hidden md:flex gap-4 flex-wrap">
              <a href="#" className="hover:text-blue-600">
                Últimos artigos em estoque!
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
            </nav>
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
      </div>

      <div className="bg-blue-950 px-4 py-4 text-center text-white">

      </div>

      <div className="relative flex flex-col md:flex-row">
       
        <div className="bg-blue-950 px-8 py-16 md:w-1/2 text-white">
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
        <h2 className="text-2xl font-bold text-center mb-8">NOSSAS CADEIRAS</h2>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
   
          <div className="relative group">
            <div className="absolute top-4 left-4 bg-purple-600 text-white px-2 py-1 text-xs">Frete grátis</div>

            <div className="relative bg-gray-100 p-8 flex items-center justify-center h-64 mb-4 overflow-hidden">
              <img src={CadeiraDXRACERPretaBranca} alt="Cadeira Mateo" className="max-h-full" />

              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-center text-sm px-4">
                  Cadeira ergonômica com estrutura reforçada, ideal para longas horas de uso.
                </p>
              </div>
            </div>

            <h3 className="font-medium">Cadeira DXRACER</h3>
            <p className="font-bold text-lg">R$800,00</p>
            <p className="text-sm text-gray-600">12 x de R$77,36</p>
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
            <h3 className="font-medium">Cadeira Alpha Gamer</h3>
            <p className="font-bold text-lg">R$700,00</p>
            <p className="text-sm text-gray-600">12 x de R$67,69</p>
          </div>

          <div className="relative group">

            <div className="absolute top-4 left-4 bg-purple-600 text-white px-2 py-1 text-xs z-10">
              Frete grátis
            </div>

            <div className="relative bg-gray-100 p-8 flex items-center justify-center h-64 mb-4 overflow-hidden">
              <img src={CadeiraGamerMaxRacer} alt="Cadeira Yute" className="max-h-full" />

              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-center text-sm px-4">
                  Cadeira ergonômica com estrutura reforçada, ideal para longas horas de uso.
                </p>
              </div>
            </div>

            <h3 className="font-medium">Cadeira Gamer MaxRacer</h3>
            <p className="font-bold text-lg">R$500,00</p>
            <p className="text-sm text-gray-600">12 x de R$48,35</p>
          </div>

          <div className="relative group">
            <div className="absolute top-4 left-4 bg-purple-600 text-white px-2 py-1 text-xs">Frete grátis</div>
            <div className=" relative bg-gray-100 p-8 flex items-center justify-center h-64 mb-4">
              <img src={CadeiraRazerErgonomica} alt="Cadeira de escritório Drago" className="max-h-full" />
        
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-center text-sm px-4">
                  Cadeira ergonômica com estrutura reforçada, ideal para longas horas de uso.
                </p>
              </div>
            </div>

            <h3 className="font-medium">Cadeira Gamer Razer</h3>
            <p className="font-bold text-lg">R$700,00</p>
            <p className="text-sm text-gray-600">12 x de R$67,69</p>
          </div>

          <div className="relative group">
            <div className="relative bg-gray-100 p-8 flex items-center justify-center h-64 mb-4">
              <img src={CadeiraMX7PretaGold} alt="Banqueta Galo" className="max-h-full" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-center text-sm px-4">
                  Cadeira ergonômica com estrutura reforçada, ideal para longas horas de uso.
                </p>
              </div>
            </div>

            <h3 className="font-medium">Cadeira MX7 </h3>
            <p className="font-bold text-lg">R$500,00</p>
            <p className="text-sm text-gray-600">12 x de R$48,35</p>
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
            <h3 className="font-medium">Cadeira Titan</h3>
            <p className="font-bold text-lg">R$540,00</p>
            <p className="text-sm text-gray-600">12 x de R$52,22</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 bg-blue-400 p-8 flex flex-col justify-center">
            <h3 className="text-lg font-medium">TODO O MÊS</h3>
            <h2 className="text-4xl font-bold my-4">2X1 / 3X2</h2>
            <p className="text-xl mb-6">em selecionados</p>
            <div className="flex items-center">
              <div className="w-24 h-0.5 bg-black"></div>
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

      {showCookieBanner && (
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
      )}

    </div>
  )
}

export default App
