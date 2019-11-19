import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from './app/pages/Main';
import User from './app/pages/User';
import StarredView from './app/pages/StarredView';

const routes = createAppContainer(
    createStackNavigator(
        {
            Main,
            User,
            StarredView,
        },
        {
            headerLayoutPreset: 'center',
            headerBackTitleVisible: false,
            defaultNavigationOptions: {
                headerStyle: {
                    backgroundColor: '#7159c1',
                },
                headerTintColor: '#fff',
            },
        }
    )
);

export default routes;
