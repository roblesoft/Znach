
import {createStackNavigator, createAppContainer} from 'react-navigation'

import Feed from './feed'
import Message from './Home/Message';

const FeedNavigation = createStackNavigator(
    {
        Home: {
            screen: Feed,
            navigationOptions: () => ({
                headerBackTitle: null,
            })
        },
        Messages: {
            screen: Message
        }
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#fff529',
                height: 60
            },
            headerTintColor: '#000',
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 25
            }
        },
    }
);


export default createAppContainer(FeedNavigation)