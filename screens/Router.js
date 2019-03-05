import {createStackNavigator, createAppContainer} from 'react-navigation'
import LogIn from './views/logIn'
import Registration from './views/Registration'
import Profile from './views/profile'


const RootStack =  createStackNavigator({
  Home:{ 
    screen: Profile
  },
  Registration: {
    screen: Registration
  },
  Profile: {
    screen: LogIn
  }
}, {headerMode: 'none'})

const App = createAppContainer(RootStack)
export default App