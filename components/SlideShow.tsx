import React from 'react';
import Carousel from 'react-native-snap-carousel';
import ImageSlide from "./ImageSlide";

import images from '../constants/images'
import device from "../constants/device";

export interface SlideData {
    image: string
}

// data
const slidesData: SlideData[] = [
    { image: 'slideStarWarsMandalorian' },
    { image: 'slideAvengersEndgame' },
    { image: 'slideAvatar' },
    { image: 'slideCaptainMarvel' }
];

const SlideShow = () => {
    const itemWidth = device.width - 70;
    return (
        <Carousel
         autoplay
         autoplayInterval={5000}
         loop
         data={slidesData}
         // @ts-ignore
         renderItem={({item: {image}}) => (<ImageSlide source={images[image]} imageWidth={itemWidth} />)}
         sliderWidth={device.width}
         itemWidth={itemWidth}
        />
    );
};

export default SlideShow;