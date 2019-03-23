import {createStackNavigator, createAppContainer, createSwitchNavigator} from 'react-navigation'
import SignedIn from './AuthNavigation';
import SignedOut from './OutNavigation';

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