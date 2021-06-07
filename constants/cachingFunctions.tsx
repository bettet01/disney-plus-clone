import * as Font from 'expo-font';
import { Image } from 'react-native';
import { Asset } from 'expo-asset';

// TODO: this doesn't work
export const cacheFonts = (fonts: any) => {
    for (const fontsKey in fonts) {
        // @ts-ignore
        Font.loadAsync(fonts[fontsKey])
    }
}

export const cacheImages = (images: any) => {
    return Object.values(images).map((image) => {
        if (typeof image === 'string') {
            return Image.prefetch(image);
        }

        // @ts-ignore
        return Asset.fromModule(image).downloadAsync();
    });
};