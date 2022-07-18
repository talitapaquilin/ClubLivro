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
      setFlagText('O COLECIONADOR é a história de Frederick Clegg, um homem solitário, de origem humilde, menosprezado por uma sociedade esnobe, que encontra o grande amor de sua vida. Tudo o que ele deseja é passar um tempo a sós com ela, demonstrar seus nobres sentimentos e deixar claro que eles nasceram um para o outro.')
      

    } else if(img === Lista) {
      setFlagImages(Lista)
      setFlagText(' Em uma ilha afastada na costa da Irlanda, convidados se reúnem para celebrar uma união de dar inveja. O noivo, bonito e charmoso, é uma estrela de TV em ascensão. A noiva, elegante e ambiciosa, é editora da própria revista. A festa de casamento é um reflexo de suas personalidades: vestido e terno de grife, localização remota e exclusiva, decoração luxuosa, uísque da melhor qualidade. Tudo rigorosamente planejado. ')

    } else if(img === Paciente) {
      setFlagImages(Paciente)
      setFlagText(' Alicia Berenson tinha uma vida perfeita. Ela era uma pintora famosa casada com um fotógrafo bem-sucedido e morava numa área nobre de Londres que dá para o parque de Hampstead Heath. Certa noite, Gabriel, seu marido, voltou tarde para casa depois de um ensaio para a Vogue, e de repente a vida de Alicia mudou completamente Alicia tinha 33 anos quando deu cinco tiros no rosto do marido, e ela nunca mais disse uma palavra s.')

    }else if(img === Crepusculo) {
      setFlagImages(Crepusculo)
      setFlagText(' Eles se apaixonam e, apesar de saber que a garota corre perigo, Edward não desiste da paixão. Bella, então, descobre o segredo da família: eles são vampiros. Mesmo muito assustada com a descoberta, a garota decide enfrentar todos os riscos para viver a paixão por Edward, sabendo que ele pode matá-la a qualquer momento. ')

    }else if(img === Teto) {
      setFlagImages(Teto)
      setFlagText(' Leon está enrolado com questões financeiras e tem uma ideia pouco convencional para arranjar dinheiro rápido: sublocar seu apartamento, onde fica apenas no período da manhã e da tarde nos dias úteis, já que passa os finais de semana com a namorada e trabalha como enfermeiro no turno da noite.')

    }else if(img === SeteMarido) {
      setFlagImages(SeteMarido)
      setFlagText(' amor e ódio.E é assim cada uma das páginas que compõe este livro quase todo escrito nos anos em que o autor cumpriu pena. Homem de sensibilidade aguçada, encontrou na privação da liberdade espaço para escrever. No começo foram cartas, suas e de seus companheiros.')

    }else if(img === Morro) {
      setFlagImages(Morro)
      setFlagText(' Barreiras sociais impedem que Cathy se relacione com o cavalariço Heathcliff. O rapaz some quando Cathy se casa com Edgar, um homem de posses, e retorna dez anos depois como um homem rico. Entretanto, pode ser tarde demais para ele e Cathy.')

    }else if(img === Atencao) {
      setFlagImages(Atencao)
      setFlagText(' Mais do que uma técnica de meditação, a atenção plena (ou mindfulness) é um estilo de vida que consiste em estar aberto à experiência presente, observando seus pensamentos sem julgamentos, críticas ou elucubrações.')

    }else if(img === Detento) {
      setFlagImages(Detento)
      setFlagText(' Agora, em liberdade, depois de cumprir pena por receptação de carga roubada, num confuso processo criminal que o condenou a oito anos e três meses de reclusão, Jocenir lança o livro "Diário de um Detento", em que conta a sua prisão e a rotina sufocante das prisões em que foi forçado a viver')

    }else if(img === Inferno) {
      setFlagImages(Inferno)
      setFlagText(' Dessa forma, Sobrevivendo no Inferno aborda, de diferentes formas, temas como encarceramento em massa, genecídio, abolicionismo penal, desmilitarização da polícia, dependência química, descriminalização das drogas, entre outros. Tudo isso ilustrado por situações costumeiras do dia a dia dos moradores das periferias..')

    }else if(img === PoderAgora) {
      setFlagImages(PoderAgora)
      setFlagText(' Dessa forma, Sobrevivendo no Inferno aborda, de diferentes formas, temas como encarceramento em massa, genecídio, abolicionismo penal, desmilitarização da polícia, dependência química, descriminalização das drogas, entre outros. Tudo isso ilustrado por situações costumeiras do dia a dia dos moradores das periferias.')

    }else if(img === GarotaExemplar) {
      setFlagImages(GarotaExemplar)
      setFlagText('Na manhã de seu quinto aniversário de casamento, Amy, a linda e inteligente esposa de Nick Dunne, desaparece de sua casa às margens do Rio Mississippi. Aparentemente, trata-se de um crime violento, e passagens do diário de Amy revelam uma garota perfeccionista que seria capaz de levar qualquer um ao limite. ')

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


