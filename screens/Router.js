import {createStackNavigator, createAppContainer} from 'react-navigation'
import LogIn from './views/logIn'
import Registration from './views/Registration'
import Profile from './views/profile'
import Meat from './views/Meat'


const RootStack =  createStackNavigator({
  Home:{ 
    screen: Profile
  },
  Registration: {
    screen: Registration
  },
  Profile: {
    screen: LogIn
  },
  Meat:{
    screen: Meat
  }
}, {headerMode: 'none'})

const App = createAppContainer(RootStack)
export default App