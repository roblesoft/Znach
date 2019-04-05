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

const SignedIn = createBottomTabNavigator({
    Home: HomeFeed,
    Meat: Categories,
    Notifications: Notifications,
    Profile: Profile
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
            }
        }
    }),
})

const styles = StyleSheet.create({
    labelColorFocus: {
        color: '#00ADB5',
        fontSize: 10
    },
    labelColorUnfocus: {
        color: 'gray',
        fontSize: 10
    }
})

export default createAppContainer(SignedIn)