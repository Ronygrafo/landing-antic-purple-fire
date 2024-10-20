import './MenuButton.css'

const MenuButton = ({title}) => {
  return (
    <a href={`#${title}`} className='varta-regular nav-button'>
        {title}
    </a>
  )
}

export default MenuButton