import React from 'react';
import {ScrollView, Text, View} from "react-native";
import styles from "../constants/styles";
import SvgBackground from "../components/icons/Svg.Background";
import gStyles from "../constants/styles";
import SvgDisneyPlusLogo from "../components/icons/Svg.DisneyPlusLogo";
import colors from "../constants/colors";

const Downloads = () => {
    return (
        <View style={gStyles.container}>
            {/*// @ts-ignore*/}
            <View style={gStyles.absPos}>
                <SvgBackground/>
            </View>

            <Text style={{color: colors.white}}>Downloads</Text>
        </View>
    );
};

export default Downloads;