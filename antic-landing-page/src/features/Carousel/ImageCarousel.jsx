import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./ImageCarousel.css";
import CarouselItemCard from "./components/CarouselItemCard/CarouselItemCard";
import IconButton from "../../components/iconButton/iconButton";

const ImageCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const ButtonGroup = ({ next, previous, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className="carousel-button-group">
        {" "}
        <IconButton
          iconName="chevron_left"
          variant="primary"
          size="small"
          iconFill="false"
          className={currentSlide === 0 ? "disable" : ""}
          onClick={() => previous()}
        />
        <IconButton
          iconName="chevron_right"
          variant="primary"
          size="small"
          iconFill="false"
          onClick={() => next()}
        />
      </div>
    );
  };

  return (
    <section className="carousel-section">
      <div className="carousel-container">
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          arrows={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={700}
          shouldResetAutoplay={true}
          keyBoardControl={false}
          centerMode={false}
          transitionDuration={700}
          rewindWithAnimation={true}
          containerClass="carousel-container"
          renderButtonGroupOutside={true}
          customButtonGroup={<ButtonGroup />}
        >
          {[
            "../../../slider-1.jpeg",
            "../../../slider-2.jpeg",
            "../../../slider-3.jpeg",
            "../../../slider-4.jpeg",
            "../../../slider-5.jpeg",
            "../../../slider-6.jpeg",
          ].map((item, index) => (
            <CarouselItemCard
              key={index}
              imagesrc={item}
              imagealt="inspiring carousel image"
            />
          ))}
        </Carousel>
      </div>
      <div className="carousel-content">
        <h2 className="carousel-title merriweather-light">Inspirations</h2>
        <p className="carousel-text varta-regular">
          Our experts are keen to stay on top of trends in order to offer you
          new inspirations for your interior and exterior every day. Remember
          that to inspire you we have to inspire ourselves and we want to share
          that with you.
        </p>
      </div>
    </section>
  );
};

export default ImageCarousel;
