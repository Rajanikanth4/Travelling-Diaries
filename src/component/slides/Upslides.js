
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'

const Upslides = () => {
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
          <div style={style}><img src="image/ups1.jpg" width={"100%"} alt="ap"/></div>
          <div style={style}><img src="image/ups2.jpg" width={"100%"} alt="ap"/></div>
          <div style={style}><img src="image/ups6.jpg" width={"100%"} alt="ap"/></div>
          <div style={style}><img src="image/ups8.jpg" width={"100%"} alt="ap"/></div>
          <div style={style}><img src="image/ups12.jpg" width={"100%"} alt="ap"/></div>
          <div style={style}><img src="image/ups9.jpg" width={"100%"} alt="ap"/></div>
        </Slide>
      </div>
    </div>
  );
};

export default Upslides;
