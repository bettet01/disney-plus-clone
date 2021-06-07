import SvgHome from "../components/icons/Svg.Home";
import React from "react";
import SvgSearch from "../components/icons/Svg.Search";
import SvgDownloads from "../components/icons/Svg.Downloads";
import colors from '../constants/colors';
import { Image, StyleSheet, View } from 'react-native';
import images from '../constants/images';

export interface Icon {
    focused: boolean
}


export const HomeIcon = ({ focused }: Icon) => <SvgHome active={focused} />;

export const SearchIcon = ({ focused }: Icon) => <SvgSearch active={focused} />;

export const DownloadsIcon = ({ focused }: Icon) => <SvgDownloads active={focused} />;

export const ProfileIcon = ({ focused }: Icon) => {
    const borderColor = focused ? { borderColor: colors.white } : {};

    return (
        <View style={[styles.containerProfile, borderColor]}>
            <Image source={images.stormtrooper} style={styles.avatar} />
        </View>
    );
};

const styles = StyleSheet.create({
    containerProfile: {
        alignItems: 'center',
        borderColor: 'transparent',
        borderRadius: 20,
        borderWidth: 2,
        height: 40,
        justifyContent: 'center',
        overflow: 'hidden',
        width: 40
    },
    avatar: {
        height: '100%',
        resizeMode: 'contain',
        width: '100%'
    }
});