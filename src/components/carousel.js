import React from 'react';
import { Carousel } from 'antd';


function onChange(a, b, c) {
  console.log(a, b, c);
}

const CarouselComp = (props) => {
  return (
    <Carousel afterChange={onChange}>
      <div>
        <img src="https://www.planwallpaper.com/static/images/Nature-Background-Wallpapers-8_gxwmqmj.jpg" alt="Smiley face" />
      </div>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSV5huSrOLwgLaTY12-yPEK-7yH4yJmwdlvCxUXo5qEUnmQu9H" alt="Smiley face" />
      </div>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3fP-ZdBKtAkdz6tMtFiBfQqYeg1gYKPv5KL9_OqLPnKP8g-aK" alt="Smiley face" />
      </div>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOt3aiyJOxl9OpJtBjtgN26DNmpaSMVya2Inyp22MPkQbbJ9VV" alt="Smiley face" />
      </div>
    </Carousel>
  );
  // }
};

export default CarouselComp;
