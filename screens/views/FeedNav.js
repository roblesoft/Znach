
import {createStackNavigator, createAppContainer} from 'react-navigation'

import Feed from './feed'
import Message from './Home/Message';
import NuevaPublicacion from './Home/NuevaPublicacion';
import Chat from './Home/Chat'
import ChatReceived from './Home/ChatReceived'

export default createStackNavigator(
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
        },
        Chat: {
            screen: Chat
        },
        ChatReceived: {
            screen: ChatReceived
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

