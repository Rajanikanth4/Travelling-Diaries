
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'

const NewApSlides = () => {
  const style = {
    textAlign: 'center',
    padding: '50px 0',
    fontSize: '30px',
  };

  const properties = {
    duration: 3000,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    indicators: true,
  };

  return (
    <div>
      <div>
        <Slide {...properties}>
          <div style={style}><img src="image/apss1.jpg" width={"100%"} alt="ap"/></div>
          <div style={style}><img src="image/apss2.jpg" width={"100%"} alt="ap"/></div>
          <div style={style}><img src="image/aps5.jpg" width={"100%"} alt="ap"/></div>
          <div style={style}><img src="image/aps3.jpg" width={"100%"} alt="ap"/></div>
          <div style={style}><img src="image/apss17.jpg" width={"100%"} alt="ap"/></div>
          <div style={style}><img src="image/apss18.jpg" width={"100%"} alt="ap"/></div>
        </Slide>
      </div>
    </div>
  );
};

export default NewApSlides;
