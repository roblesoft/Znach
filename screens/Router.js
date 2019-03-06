import {createStackNavigator, createAppContainer} from 'react-navigation'
import LogIn from './views/logIn'
import Registration from './views/Registration'
import Profile from './views/profile'
import Meat from './views/Meat'
import Menu from './views/MenuBar'


const RootStack =  createStackNavigator({
  Home:{ 
    screen: LogIn
  },
  Registration: {
    screen: Registration
  },
  Profile: {
    screen: Profile
  },
  Meat:{
    screen: Meat
  },
  Menu: {
    screen: Menu
  }
}, {headerMode: 'none'})

const App = createAppContainer(RootStack)
export default App