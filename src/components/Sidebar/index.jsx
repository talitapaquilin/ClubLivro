import logo from '../../assets/Logo-png.png'

import './styles.css'

export function Sidebar() {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo Book lovers" />
      </div>
      <p>Ler faz bem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit amet enim ut voluptatem ipsam repellendus cupiditate cum. Veritatis, alias? Facere quis quasi deleniti maiores id rerum iste neque, recusandae autem!</p>
    </nav>
  )
}