
import {createStackNavigator, createAppContainer} from 'react-navigation'

import Feed from './feed'
import Message from './Home/Message';
import NuevaPublicacion from './Home/NuevaPublicacion';

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
        },

        NuevaPublicacion: {
            screen: NuevaPublicacion
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