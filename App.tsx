import 'react-native-gesture-handler';
import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Text} from 'react-native';
import {Screen} from "react-native-screens";

import useCachedResources from './hooks/useCachedResources';
import Navigation from "./navigation/Navigation";
import {NavigationContainer} from "@react-navigation/native";

const App = () => {
    const isLoadingComplete = useCachedResources();

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <NavigationContainer>
                <SafeAreaProvider>
                    <Navigation/>
                    <StatusBar animated={true}/>
                </SafeAreaProvider>
            </NavigationContainer>
        );
    }
}

export default App;
