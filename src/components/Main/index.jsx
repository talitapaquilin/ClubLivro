import Card from "../Card/index.jsx";

import { useEffect, useState } from 'react';

import './styles.css'

import Atencao from '../../assets/atencao.jpeg'
import Colecionador from '../../assets/Colecionador.jpeg'
import Crepusculo from '../../assets/crespusculo.jpeg'
import Detento from '../../assets/detento.jpeg'
import GarotaExemplar from '../../assets/garota.jpeg'
import Inferno from '../../assets/inferno.jpeg'
import Lista from '../../assets/lista.jpeg'
import Morro from '../../assets/Morro.jpg'
import SeteMarido from '../../assets/marido.jpg'
import Paciente from '../../assets/paciente.jpeg'
import PoderAgora from '../../assets/poder.jpeg'
import Teto from '../../assets/Teto.jpeg'
import { ModalContainer } from "../Modal/index.jsx";


export function Main() {
  const [isOpen, setIsOpen] = useState(false);
  const [flagImages, setFlagImages] = useState('');
  const [flagText, setFlagText] = useState('');

  function HandleImage(img){
    if(img == Colecionador) {
      setFlagImages(Colecionador)
      setFlagText('Nick Dunne, desaparece de sua casa às margens do Rio Mississippi. Aparentemente trata-se de um crime violento, e passagens do diário de Amy revelam uma garota perfeccionista que seria capaz de levar qualquer um ao limite. Pressionado pela polícia e pela opinião pública – e também pelos ferozmente amorosos pais de Amy –, Nick desfia uma série interminável de mentiras, meias verdades e comportamentos inapropriados. Sim, ele parece estranhamente evasivo, e sem dúvida amargo, mas seria um assassino? Com sua irmã gêmea Margo a seu lado, Nick afirma inocência. O problema é: se não foi Nick, onde está Amy? E por que todas as pistas apontam para ele?')

    } else if(img === Lista) {
      setFlagImages(Lista)
      setFlagText(' No final de 1994, Jocenir é preso em meio a uma situação obscura e confusa. Analisando hoje, percebo quanta estupidez e arbitrariedade cometeram contra mim. Obrigado a conviver com a massa carcerária da cadeia pública de Barueri, começa, segundo ele, uma caminhada de sofrimento, terror, angústia, e também aprendizado, descoberta, amor e ódio.E é assim cada uma das páginas que compõe este livro quase todo escrito nos anos em que o autor cumpriu pena. Homem de sensibilidade aguçada, encontrou na privação da liberdade espaço para escrever. No começo foram cartas, suas e de seus companheiros.')

    } else if(img === Paciente) {
      setFlagImages(Paciente)
      setFlagText(' No final de 1994, Jocenir é preso em meio a uma situação obscura e confusa. Analisando hoje, percebo quanta estupidez e arbitrariedade cometeram contra mim. Obrigado a conviver com a massa carcerária da cadeia pública de Barueri, começa, segundo ele, uma caminhada de sofrimento, terror, angústia, e também aprendizado, descoberta, amor e ódio.E é assim cada uma das páginas que compõe este livro quase todo escrito nos anos em que o autor cumpriu pena. Homem de sensibilidade aguçada, encontrou na privação da liberdade espaço para escrever. No começo foram cartas, suas e de seus companheiros.')

    }else if(img === Crepusculo) {
      setFlagImages(Crepusculo)
      setFlagText(' No final de 1994, Jocenir é preso em meio a uma situação obscura e confusa. Analisando hoje, percebo quanta estupidez e arbitrariedade cometeram contra mim. Obrigado a conviver com a massa carcerária da cadeia pública de Barueri, começa, segundo ele, uma caminhada de sofrimento, terror, angústia, e também aprendizado, descoberta, amor e ódio.E é assim cada uma das páginas que compõe este livro quase todo escrito nos anos em que o autor cumpriu pena. Homem de sensibilidade aguçada, encontrou na privação da liberdade espaço para escrever. No começo foram cartas, suas e de seus companheiros.')

    }else if(img === Teto) {
      setFlagImages(Teto)
      setFlagText(' No final de 1994, Jocenir é preso em meio a uma situação obscura e confusa. Analisando hoje, percebo quanta estupidez e arbitrariedade cometeram contra mim. Obrigado a conviver com a massa carcerária da cadeia pública de Barueri, começa, segundo ele, uma caminhada de sofrimento, terror, angústia, e também aprendizado, descoberta, amor e ódio.E é assim cada uma das páginas que compõe este livro quase todo escrito nos anos em que o autor cumpriu pena. Homem de sensibilidade aguçada, encontrou na privação da liberdade espaço para escrever. No começo foram cartas, suas e de seus companheiros.')

    }else if(img === SeteMarido) {
      setFlagImages(SeteMarido)
      setFlagText(' amor e ódio.E é assim cada uma das páginas que compõe este livro quase todo escrito nos anos em que o autor cumpriu pena. Homem de sensibilidade aguçada, encontrou na privação da liberdade espaço para escrever. No começo foram cartas, suas e de seus companheiros.')

    }else if(img === Morro) {
      setFlagImages(Morro)
      setFlagText(' No final de 1994, Jocenir é preso em meio a uma situação obscura e confusa. Analisando hoje, percebo quanta estupidez e arbitrariedade cometeram contra mim. Obrigado a conviver com a massa carcerária da cadeia pública de Barueri, começa, segundo ele, uma caminhada de sofrimento, terror, angústia, e também aprendizado, descoberta, amor e ódio.E é assim cada uma das páginas que compõe este livro quase todo escrito nos anos em que o autor cumpriu pena. Homem de sensibilidade aguçada, encontrou na privação da liberdade espaço para escrever. No começo foram cartas, suas e de seus companheiros.')

    }else if(img === Atencao) {
      setFlagImages(Atencao)
      setFlagText(' amor e ódio.E é assim cada uma das páginas que compõe este livro quase todo escrito nos anos em que o autor cumpriu pena. Homem de sensibilidade aguçada, encontrou na privação da liberdade espaço para escrever. No começo foram cartas, suas e de seus companheiros.')

    }else if(img === Detento) {
      setFlagImages(Detento)
      setFlagText(' amor e ódio.E é assim cada uma das páginas que compõe este livro quase todo escrito nos anos em que o autor cumpriu pena. Homem de sensibilidade aguçada, encontrou na privação da liberdade espaço para escrever. No começo foram cartas, suas e de seus companheiros.')

    }else if(img === Inferno) {
      setFlagImages(Inferno)
      setFlagText(' amor e ódio.E é assim cada uma das páginas que compõe este livro quase todo escrito nos anos em que o autor cumpriu pena. Homem de sensibilidade aguçada, encontrou na privação da liberdade espaço para escrever. No começo foram cartas, suas e de seus companheiros.')

    }else if(img === PoderAgora) {
      setFlagImages(PoderAgora)
      setFlagText(' amor e ódio.E é assim cada uma das páginas que compõe este livro quase todo escrito nos anos em que o autor cumpriu pena. Homem de sensibilidade aguçada, encontrou na privação da liberdade espaço para escrever. No começo foram cartas, suas e de seus companheiros.')

    }
  
  }

  return(
    <div className="main">
       <div className="card-container">
        <Card img={Colecionador}/>
        <button onClick={() => {HandleImage(Colecionador); setIsOpen(true)}}>Saiba mais</button>
      </div>
      <div className="card-container">
        <Card img={GarotaExemplar}/>
        <button onClick={() => {HandleImage(GarotaExemplar); setIsOpen(true)}}>Saiba mais</button>
      </div>
      <div className="card-container">
        <Card img={Lista}/>
        <button onClick={() => {HandleImage(Lista); setIsOpen(true)}}>Saiba mais</button>
      </div>
      <div className="card-container">
        <Card img={Paciente}/>
        <button onClick={() => {HandleImage(Paciente); setIsOpen(true)}}>Saiba mais</button>
      </div>
      <div className="card-container">
        <Card img={Crepusculo}/>
        <button onClick={() => {HandleImage(Crepusculo); setIsOpen(true)}}>Saiba mais</button>
      </div>
      <div className="card-container">
        <Card img={Teto}/>
        <button onClick={() => {HandleImage(Teto); setIsOpen(true)}}>Saiba mais</button>
      </div>
      <div className="card-container">
        <Card img={SeteMarido}/>
        <button onClick={() => {HandleImage(SeteMarido); setIsOpen(true)}}>Saiba mais</button>
      </div>
      <div className="card-container">
        <Card img={Morro}/>
        <button onClick={() => {HandleImage(Morro); setIsOpen(true)}}>Saiba mais</button>
      </div>
      <div className="card-container">
        <Card img={Atencao}/>
        <button onClick={() => {HandleImage(Atencao); setIsOpen(true)}}>Saiba mais</button>
      </div>
      <div className="card-container">
        <Card img={Detento}/>
        <button onClick={() => {HandleImage(Detento); setIsOpen(true)}}>Saiba mais</button>
      </div>
      <div className="card-container">
        <Card img={Inferno}/>
        <button onClick={() => {HandleImage(Inferno); setIsOpen(true)}}>Saiba mais</button>
      </div>
      <div className="card-container">
        <Card img={PoderAgora}/>
        <button onClick={() => {HandleImage(PoderAgora); setIsOpen(true)}}>Saiba mais</button>
      </div>
      <ModalContainer 
        isOpen={isOpen} 
        onClose={() => { 
          setIsOpen(false)}}
          card={flagImages}
          text={flagText}
          />
    </div>
  )
}


