import {createStackNavigator, createAppContainer} from 'react-navigation'
import LogIn from './views/logIn'
import Registration from './views/Registration'
import Profile from './views/profile'


const RootStack =  createStackNavigator({
  Home:{ 
    screen: LogIn
  },
  Registration: {
    screen: Registration
  },
  Profile: {
    screen: Profile
  }
}, {headerMode: 'none'})

const App = createAppContainer(RootStack)
export default App