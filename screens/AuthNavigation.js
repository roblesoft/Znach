import {createBottomTabNavigator, createAppContainer} from 'react-navigation'
import {Text, StyleSheet} from 'react-native'
import React from 'react'
import Profile from './views/ProfileNav';
import Feed from './views/feed'
import Notifications from './views/Notifications'
import Meat from './views/Meat'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Categories from './views/CategoriesNav'
import HomeFeed from './views/FeedNav'
import Proyecto from './views/Proyecto'

const SignedIn = createBottomTabNavigator({
    Home: HomeFeed,
    Meat: Categories,
    Notifications: Notifications,
    Profile: Profile,
    Proyecto: Proyecto,
},
{
    defaultNavigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused, horizontal, tintcolor}) => {
            const { routeName } = navigation.state;
            let IconComponent = Ionicons;
            let iconName;
            let iconColor;
            switch(routeName) {
                case 'Home': {
                    iconName = `ios-home`;
                    iconColor = focused ? '#00ADB5' : '#cccccc'
                }
                break;
                case 'Meat':{
                    iconName = `ios-people`;
                    iconColor = focused ? '#00ADB5' : '#cccccc'
                }
                break;
                case 'Notifications': {
                    iconName = `ios-notifications`
                    iconColor = focused ? '#00ADB5' : '#cccccc'
                }
                break;
                case 'Profile': {
                    iconName = `ios-person`
                    iconColor = focused ? '#00ADB5' : '#cccccc'
                }
                break;
                case 'Proyecto': {
                    iconName = `ios-today`
                    iconColor = focused ? '#00ADB5' : '#cccccc'
                }
            }
            return <IconComponent name={iconName} size={30} color={iconColor}/>;
        },
        tabBarLabel: ({focused, tintcolor}) => {
            const { routeName } = navigation.state;
            switch(routeName){
                case 'Home': 
                    return null
                case 'Meat':
                    return null
                case 'Notifications':
                    return null
                case 'Profile':
                    return null
                case 'Proyecto':
                    return null
            }
        }
    }),
})

export default createAppContainer(SignedIn)