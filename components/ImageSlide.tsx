import React from 'react';
import { Image } from 'react-native';
import device from '../constants/device';

export interface ImageSlideProps {
    source: number,
    imageWidth: number
}

const ImageSlide = ({source, imageWidth = device.width}: ImageSlideProps) => {
    const { height, width } = Image.resolveAssetSource(source);
    const responsiveHeight = Math.round((imageWidth * height) / width);
    return <Image source={source} style={{height: responsiveHeight, width: imageWidth}} />;

};

export default ImageSlide;