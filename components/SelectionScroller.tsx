import React, {useEffect} from 'react';
import {FlatList, StyleSheet, Image, View} from "react-native";


import mockData, {ResultData} from '../mockdata/data'
import colors from "../constants/colors";
import images from "../constants/images";

export interface SelectionScrollerProps {
    dataset: string
}

const SelectionScroller = ({dataset}: SelectionScrollerProps) => {
    // @ts-ignore
    const dataArray: ResultData[] = Object.values(mockData[dataset]);
    return (
        <FlatList
            contentContainerStyle={{paddingLeft: 16, paddingRight: 8}}
            horizontal
            keyExtractor={({id}) => id.toString()}
            data={dataArray}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
                // @ts-ignore
                const renderItem = item.image ? <Image source={images[item.image]} style={styles.image}/> :
                    <View style={styles.placeholder}/>
                return <View style={styles.container}>{renderItem}</View>
            }}/>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 4,
        height: 130,
        marginRight: 8,
        overflow: 'hidden',
        width: 93
    },
    placeholder: {
        backgroundColor: colors.infoGrey,
        height: '100%',
        width: '100%'
    },
    image: {
        height: '100%',
        resizeMode: 'contain',
        width: '100%'
    }
});

export default SelectionScroller;