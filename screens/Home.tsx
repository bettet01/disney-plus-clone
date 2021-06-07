import React from 'react';
import {ScrollView, StyleSheet, View, Text} from "react-native";

import device from "../constants/device";

import SvgDisneyPlusLogo from "../components/icons/Svg.DisneyPlusLogo";
import gStyles from "../constants/styles";
import SvgBackground from "../components/icons/Svg.Background";
import SlideShow from "../components/SlideShow";
import Categories from "../components/Categories";
import SelectionScroller from "../components/SelectionScroller";


const Home = () => {
    return (
        <View style={gStyles.container}>
            {/*// @ts-ignore*/}
            <View style={gStyles.absPos}>
                <SvgBackground/>
            </View>
            <ScrollView scrollEventThrottle={16} showsVerticalScrollIndicator={false}>
                <View style={styles.containerHeader}>
                    <SvgDisneyPlusLogo/>
                </View>

                <SlideShow />

                <Categories />

                <Text style={gStyles.heading}>Originals</Text>
                <SelectionScroller dataset="originals" />

                <Text style={gStyles.heading}>Recommended For You</Text>
                <SelectionScroller dataset="recommended" />

                <Text style={gStyles.heading}>Hit Movies</Text>
                <SelectionScroller dataset="hits" />

                <Text style={gStyles.heading}>Trending</Text>
                <SelectionScroller dataset="trending" />

                <Text style={gStyles.heading}>Out of the Vault</Text>
                <SelectionScroller dataset="vault" />

                <Text style={gStyles.heading}>Ultra HD and HDR</Text>
                <SelectionScroller dataset="hdr" />

                <View style={gStyles.spacer24} />

            </ScrollView>
        </View>

    );
};

const styles = StyleSheet.create({
    containerHeader: {
        alignItems: 'center',
        marginBottom: 8,
        paddingTop: device.iPhoneNotch ? 36 : 6
    }
});

export default Home;