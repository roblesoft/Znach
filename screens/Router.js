import {createStackNavigator, createAppContainer, createSwitchNavigator} from 'react-navigation'
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';



export const createRootNavigator = (signedIn=false) => {
  return createSwitchNavigator(
    {
      SignedIn: SignedIn,
      SignedOut: SignedOut
    },
    {
      initialRouteName: signedIn ? 'SignedIn' : 'SignedOut'
    }
  );
};