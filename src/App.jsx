import React from 'react'
import './App.css'
import Avatar from '../assets/avatar.jpg'
import Css3 from '../assets/css3.png'
import Html from '../assets/html.png'
import Javascript from '../assets/javascript.png'
import ReactLogo from '../assets/react.png'
import Tailwind from '../assets/tailwind.png'
import { FaCode, FaLink, FaLinkedin, FaInstagramSquare, FaGithubSquare } from 'react-icons/fa'

function App() {

  return (
    <div className='bg-green-200'>
      <header className='flex bg-lime-950 p-4 text-green-300 w-auto'>
        <h1 className='flex items-center font-light text-2xl ml-20 gap-2 p-2'><FaCode className='w-10' />OrlandoJR</h1>
        <nav className='flex flex-row gap-12 w-full justify-end text-2xl mr-20 p-2 align-center'>
          <a className='hover:text-lime-100 hover:underline ease-in duration-300 ' href="#">Home</a>
          <a className='hover:text-lime-100 hover:underline ease-in duration-300 ' href="#skills">Skills</a>
          <a className='hover:text-lime-100 hover:underline ease-in duration-300 ' href="#projetos">Projetos</a>
          <a className='hover:text-lime-100 hover:underline ease-in duration-300 ' href="#">Contato</a>
        </nav>
      </header>
      <main className='flex w-auto justify-center items-center mt-16'>
        <section>
          <p className='text-4xl mt-12 justify-normal'>Transparência, comunicação e <br /> colaboração são a chave <br /> do meu processo.</p>
          <p className='mt-2 text-2xl font-extralight'>A tecnologia nos conecta com o mundo, <br /> mas a imaginação nos leva além! </p>
        </section>
        <section>
          <img className='w-80 h-80 rounded-full mt-6 shadow-2xl ml-20' src={Avatar} alt="" />
        </section>
      </main>
      <div id='skills'></div>
      <section className='redes grid grid-rows-2 w-auto h-40 mt-56'>
        <div className='flex flex-col justify-center'>
          <div className='flex flex-row w-40 h-40 gap-6 mb-10'>
            <img src={Html} alt="Html logo" />
            <img src={Css3} alt=" Css3 logo" />
            <img src={Javascript} alt="Javascript logo" />
            <img src={ReactLogo} alt="React Logo" />
          </div>
          <div className='w-96 ml-40'>
            <img src={Tailwind} alt="" />
          </div>
        </div>
      </section>
      <div>
        <h3 id='projetos' className='text-center text-5xl mt-40 mb-24 font-bold bg-gradient-to-r py-2 from-green-400 to-transparent'>Alguns projetos</h3>
      </div>
      <section className='grid grid-row-4 w-full lg:grid-cols-4 justify-items-center mt-14 pb-14 gap-6 ' >
        <div className='card-skills hover:cursor-pointer'>
          <p className='card-text'>Jogo Jokenpo desenvolvido com a tríade HTML, CSS e JavaScript</p>

          <a className=' flex justify-center text-xl hover:underline hover:text-green-950 mb-5 font-semibold hover:underline-offset-1 my-5'
            href="https://orlandopdj.github.io/jokempo/"
            target='_blank'>
            <FaLink className='flex mr-2 justify-items-center my-auto' /> LINK</a>

          <a className=' flex justify-center text-xl hover:underline hover:text-green-950 font-semibold hover:underline-offset-1'
            href="https://github.com/orlandopdj/jokempo">
            <FaCode className='flex mr-2 justify-items-center my-auto' /> CODE</a>
        </div>

        <div className='card-skills hover:cursor-pointer'>
          <p className='card-text'>Jogo da velha, desenvolvido com HTML, CSS e JavaScript</p>
          <a className=' flex justify-center text-xl hover:underline hover:text-green-950 mb-5 font-semibold hover:underline-offset-1 my-9'
            href="https://orlandopdj.github.io/jogo-da-velha/"
            target='_blank'>
            <FaLink className='flex mr-2 justify-items-center my-auto' /> LINK</a>
          <a className=' flex justify-center text-xl hover:underline hover:text-green-950 font-semibold hover:underline-offset-1'
            href="https://github.com/orlandopdj/jogo-da-velha">
            <FaCode className='flex mr-2 justify-items-center my-auto' /> CODE</a>
        </div>

        <div className='card-skills hover:cursor-pointer'>
          <p className='card-text'>Consumindo a API PokeAPI, desenvolvido com HTML,CSS e JavaScript</p>
          <a className=' flex justify-center text-xl hover:underline hover:text-green-950 mb-5 font-semibold hover:underline-offset-1 my-9'
            href="https://pokedex-brown-eta.vercel.app/"
            target='_blank'>
            <FaLink className='flex mr-2 justify-items-center my-auto' /> LINK</a>
          <a className=' flex justify-center text-xl hover:underline hover:text-green-950 font-semibold hover:underline-offset-1'
            href="https://github.com/orlandopdj/pokedex">
            <FaCode className='flex mr-2 justify-items-center my-auto' /> CODE</a>
        </div>

        <div className='card-skills hover:cursor-pointer'>
          <p className='card-text'>Jogo da memória, Rick and Morty</p>
          <a className=' flex justify-center text-xl hover:underline hover:text-green-950 mb-5 font-semibold hover:underline-offset-1 my-9'
            href="https://jogo-da-memoria-delta.vercel.app/"
            target='_blank'>
            <FaLink className='flex mr-2 justify-items-center my-auto' /> LINK</a>
          <a className=' flex justify-center text-xl hover:underline hover:text-green-950 font-semibold hover:underline-offset-1'
            href="https://github.com/orlandopdj/jogo_da_memoria">
            <FaCode className='flex mr-2 justify-items-center my-auto' /> CODE</a>
        </div>
      </section>
      <footer className='flex flex-row w-full justify-around bg-gradient-to-r py-2 from-green-400 to-transparent'>
        <p className='flex text-2xl mx-auto font-semibold items-center'>Site desenvolvido por Orlando Junior <FaCode className='ml-2' /></p>
        <div className='flex gap-10 cursor-pointer items-center pr-10'>
          <a href="https://www.linkedin.com/in/orlandopdj/" target='_blank'><FaLinkedin className='text-3xl fill-green-900' /></a>
          <a href="https://www.instagram.com/orlandopdj/" target='_blank'><FaInstagramSquare className='text-3xl fill-green-900' /></a>
          <a href="https://github.com/orlandopdj" target='_blank'><FaGithubSquare className='text-3xl fill-green-900' /></a>
        </div>
      </footer>
    </div>
  )
}

export default App
