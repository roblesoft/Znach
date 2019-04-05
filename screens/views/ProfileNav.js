import {createStackNavigator, createAppContainer} from 'react-navigation'

import Feed from './feed'
import Profile from './Profile/Profile'
import AddSkill from './Profile/AddSkill'

export default createStackNavigator(
    {
        Home: {
            screen: Profile,
            navigationOptions: () => ({
                headerBackTitle: null,
            })
        },
        AddSkill: {
            screen: AddSkill
        }
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#8a29ff',
                height: 60
            },
            headerTintColor: '#FFF',
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 25
            }
        },
    }
);


