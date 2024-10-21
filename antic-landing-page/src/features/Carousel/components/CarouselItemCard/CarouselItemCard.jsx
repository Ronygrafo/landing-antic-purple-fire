import './CarouselItemCard.css'

const CarouselItemCard = ({imagesrc}) => {
  return (
    <div className='carousel-item'>
        <img className='carousel-image' src={imagesrc} />
    </div>
  )
}

export default CarouselItemCard