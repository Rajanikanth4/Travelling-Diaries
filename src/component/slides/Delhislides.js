
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'

const Delhislides = () => {
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
          <div style={style}><img src="image/delss8.jpg" width={"100%"} alt="ap"/></div>
          <div style={style}><img src="image/delss9.jpg" width={"100%"} alt="ap"/></div>
          <div style={style}><img src="image/delss10.jpg" width={"100%"} alt="ap"/></div>
          <div style={style}><img src="image/delss11.jpg" width={"100%"} alt="ap"/></div>
          <div style={style}><img src="image/delss12.jpg" width={"100%"} alt="ap"/></div>
          <div style={style}><img src="image/delss13.jpg" width={"100%"} alt="ap"/></div>
        </Slide>
      </div>
    </div>
  );
};

export default Delhislides;
