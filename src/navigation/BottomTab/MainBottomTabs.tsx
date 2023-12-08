import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from './styles';
import { Colors } from 'theme/colors';
import FavouriteScreen from 'screens/App/Favourite';
import { ActiveHome, DeActiveHome, ActiveSearch, DeActiveSearch, ActiveSave, DeActiveSave, ActiveFavourite, DeActiveFavourite, DeActiveMore } from 'assets/svgs';
import BookmarkScreen from 'screens/App/Bookmark';
import HomeScreen from 'screens/App/Home/Main Home';
import ProfileScreen from 'screens/App/Drawer/Profile';
import SearchSreen from 'screens/App/Search';


const BottomTab = createBottomTabNavigator();


export default function BottomTabs() {
    return (
        <BottomTab.Navigator
            initialRouteName='Home'
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: Colors().white,
                tabBarInactiveTintColor: Colors().white,
                tabBarStyle: styles.tabBarStyle,
            })}>
            <BottomTab.Screen name={"Moree"} component={FavouriteScreen} options={{
                title: '',
                tabBarIcon: () => (<DeActiveMore />)
            }}></BottomTab.Screen>

            <BottomTab.Screen name={"Favourite"} component={FavouriteScreen} options={{
                title: '',
                tabBarIcon: ({ focused }) => (focused ? <ActiveFavourite /> : <DeActiveFavourite />)
            }}></BottomTab.Screen>

            <BottomTab.Screen name={"Home"} component={HomeScreen} options={{
                title: '',
                tabBarIcon: ({ focused, }) => (focused ? <ActiveHome /> : <DeActiveHome />)
            }}></BottomTab.Screen>

            <BottomTab.Screen name={"Search"} component={SearchSreen} options={{
                title: '',
                tabBarIcon: ({ focused }) => (focused ? <ActiveSearch /> : <DeActiveSearch />)
            }} ></BottomTab.Screen>

            <BottomTab.Screen name={"Save"} component={BookmarkScreen} options={{
                title: '',
                tabBarIcon: ({ focused }) => (focused ? <ActiveSave /> : <DeActiveSave />)
            }}></BottomTab.Screen>

        </BottomTab.Navigator >
    );
}



