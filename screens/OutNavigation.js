import {createStackNavigator, createAppContainer} from 'react-navigation'
import SignUp from './views/Registration'
import LogIn from './views/logIn'

const SignedOut = createStackNavigator({
    Home: {
        screen: LogIn
    },
    SignUp: {
        screen: SignUp
    }
}, {headerMode: 'none'})

export default createAppContainer(SignedOut)
//export default SignedOut