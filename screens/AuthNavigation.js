import {createBottomTabNavigator, createAppContainer} from 'react-navigation'
import {Text, StyleSheet} from 'react-native'
import React from 'react'
import Profile from './views/Profile';
import Feed from './views/feed'
import Notifications from './views/Notifications'
import Meat from './views/Meat'
import Ionicons from 'react-native-vector-icons/Ionicons'

const SignedIn = createBottomTabNavigator({
    Home: Feed,
    Meat: Meat,
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
                    iconColor = focused ? '#00ADB5' : '#d9d9d9'
                }
                break;
                case 'Meat':{
                    iconName = `ios-people`;
                    iconColor = focused ? '#00ADB5' : '#d9d9d9'
                }
                break;
                case 'Notifications': {
                    iconName = `ios-notifications`
                    iconColor = focused ? '#00ADB5' : '#d9d9d9'
                }
                break;
                case 'Profile': {
                    iconName = `ios-person`
                    iconColor = focused ? '#00ADB5' : '#d9d9d9'
                }
            }
            return <IconComponent name={iconName} size={25} color={iconColor}/>;
        },
        tabBarLabel: ({focused, tintcolor}) => {
            const { routeName } = navigation.state;
            let label;
            let name;
            switch(routeName){
                case 'Home': 
                    label = focused ? styles.labelColorFocus : styles.labelColorUnfocus
                    name = focused ? routeName : ''
                case 'Meat':
                    label = focused ? styles.labelColorFocus : styles.labelColorUnfocus
                    name = focused ? routeName : ''
                case 'Notifications':
                    label = focused ? styles.labelColorFocus : styles.labelColorUnfocus
                    name = focused ? routeName : ''
                case 'Profile':
                    label = focused ? styles.labelColorFocus : styles.labelColorUnfocus
                    name = focused ? routeName : ''
            }
            return <Text style={label}>{routeName}</Text>;
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