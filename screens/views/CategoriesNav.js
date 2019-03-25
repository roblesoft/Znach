import {createStackNavigator, createAppContainer} from 'react-navigation'
import Meat from './Meat'
import Design from './Design'

const categoriesNavigation = createStackNavigator(
    {
        Home: {
            screen: Meat
        },
        Design: {
            screen: Design
        },
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#fff529',
            },
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        },
    }
);

export default createAppContainer(categoriesNavigation)