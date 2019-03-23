import {createBottomTabNavigator, createAppContainer} from 'react-navigation'
import Profile from './views/Profile';
import Feed from './views/feed'
import Notifications from './views/Notifications'
import Meat from './views/Meat'
import Ionicons from 'react-native-vector-icons/Ionicons'
import React from 'react'

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
            if(routeName === 'Home') {
                iconName = `ios-people${focused ? '' : '-outline'}`;
            } else if(routeName === 'Meat'){
                iconName = `ios-options`;
            }
            return <IconComponent name={iconName} size={25} />;
        }
    })
})

export default createAppContainer(SignedIn)