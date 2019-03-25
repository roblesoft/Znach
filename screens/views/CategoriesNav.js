import {createStackNavigator, createAppContainer} from 'react-navigation'
import Meat from './Meat'
import Design from './categories/Design'
import Tecnologic from './categories/Tecnologic'
import Bussines from './categories/Bussines'
import Science from './categories/Science'
import Administration from './categories/Administration'

const categoriesNavigation = createStackNavigator(
    {
        Home: {
            screen: Meat
        },
        Design: {
            screen: Design
        },
        Tecnologic: {
            screen: Tecnologic
        },
        Bussines: {
            screen: Bussines
        },
        Science: {
            screen: Science
        },
        Administration: {
            screen: Administration
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

export default createAppContainer(categoriesNavigation)