import {createBottomTabNavigator, createAppContainer} from 'react-navigation'
import Profile from './views/Profile';
import Feed from './views/feed'

export const SignedIn = createBottomTabNavigator({
    Home: Feed,
    Profile: Profile
})

//export default createAppContainer(SignedIn)