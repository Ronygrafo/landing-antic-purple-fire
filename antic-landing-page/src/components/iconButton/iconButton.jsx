import { MaterialSymbol } from 'react-material-symbols';
import './IconButton.css'

const IconButton = ({iconName, size, fill, grade, color }) => {
  return (
    <button>
      <MaterialSymbol icon={iconName} size={size} fill={fill} grade={grade} color={color} />
    </button>
  )
}

export default IconButton