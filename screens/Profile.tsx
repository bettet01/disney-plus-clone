import React from 'react';
import {Text, View} from "react-native";
import styles from "../constants/styles";
import gStyles from "../constants/styles";
import SvgBackground from "../components/icons/Svg.Background";
import colors from "../constants/colors";

const Profile = () => {
    return (
        <View style={gStyles.container}>
            {/*// @ts-ignore*/}
            <View style={gStyles.absPos}>
                <SvgBackground/>
            </View>

            <Text style={{color: colors.white}}>Profile</Text>
        </View>
    );
};

export default Profile;