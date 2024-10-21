import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./ImageCarousel.css";
import CarouselItemCard from "./components/CarouselItemCard/CarouselItemCard";

const ImageCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <section className="carousel-section full-width-section">
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {[
          "../../../slider-1.jpeg",
          "../../../slider-2.jpeg",
          "../../../slider-3.jpeg",
          "../../../slider-4.jpeg",
          "../../../slider-5.jpeg",
          "../../../slider-6.jpeg",
        ].map((item, index) => (
          <CarouselItemCard key={index} imagesrc={item} imagealt="inspiring carousel image" />
        ))}
      </Carousel>
    </section>
  );
};

export default ImageCarousel;
