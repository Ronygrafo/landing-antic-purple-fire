import { MaterialSymbol } from 'react-material-symbols'
import logo from '../../../public/Antic-Logo.svg'
import logoWhite from '../../../public/Antic-Logo-white.svg'
import MenuButton from '../../components/MenuButton/MenuButton'
import './MenuBar.css'

const MenuBar = () => {
  return (
    <header className='header full-width-section'>
        <img className='logo-header' src={logo} alt="Logo" width={96} height={26} />
        <nav className='navbar'>
            <ul>
                <li>
                    <MenuButton title={'Products'}/>
                </li>
                <li>
                    <MenuButton title={'Rooms'}/>
                </li>
                <li>
                    <MenuButton title={'Services'}/>
                </li>
                <li>
                    <MenuButton title={'Inspirations'}/>
                </li>
            </ul>
        </nav>
        <nav  className='navbar-mobile'>
        <img src={logoWhite} alt="Logo" width={96} height={26} />
        <MaterialSymbol icon="dehaze" size={24} color=' var(--color-white)'/>
        </nav>
    </header>
  )
}

export default MenuBar