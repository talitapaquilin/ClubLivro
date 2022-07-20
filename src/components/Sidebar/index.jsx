import logo from '../../assets/Logo-png.png'

import './styles.css'

export function Sidebar() {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo Book lovers" />
      </div>
      <p>Este não é um simples site de livros, e sim um ambiente no qual todos os amantes da literatura podem interagir uns com os outros compartilhando da mesma paixão!</p>
    </nav>
  )
}
