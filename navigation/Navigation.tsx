import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import colors from '../constants/colors';

// screens
import Home from "../screens/Home";
import {DownloadsIcon, HomeIcon, ProfileIcon, SearchIcon} from "./Icons";
import Search from "../screens/Search";
import Downloads from "../screens/Downloads";
import Profile from "../screens/Profile";


const Tab = createBottomTabNavigator();

const Navigation = () => {
    return (
        // navigation container for routes
        <Tab.Navigator initialRouteName='Home'
                       tabBarOptions={{
                           activeTintColor: colors.white,
                           inactiveTintColor: colors.inactiveGrey,
                           showLabel: false,
                           style: {
                               height: '10%',
                               backgroundColor: colors.background,
                               borderTopWidth: 0
                           }
                       }}>
            <Tab.Screen name='Home' component={Home} options={{
                tabBarIcon: HomeIcon
            }}/>
            <Tab.Screen name='Search' component={Search} options={{
                tabBarIcon: SearchIcon
            }}/>
            <Tab.Screen name='Downloads' component={Downloads} options={{
                tabBarIcon: DownloadsIcon
            }}/>
            <Tab.Screen name='Profile' component={Profile} options={{
                tabBarIcon: ProfileIcon
            }}/>
        </Tab.Navigator>
    )
}


export default Navigation;