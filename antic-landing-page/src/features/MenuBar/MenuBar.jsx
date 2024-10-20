import logo from '../../../public/Antic-Logo.svg'
import MenuButton from '../../components/MenuButton/MenuButton'
import './MenuBar.css'

const MenuBar = () => {
  return (
    <header className='header full-width-section'>
        <img src={logo} alt="Logo" width={96} height={26} />
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
    </header>
  )
}

export default MenuBar