import React from 'react';
import {StatusBar} from 'react-native';
import 'react-native-gesture-handler';

import '../config/reactotron';

import Routes from '../routes';

const App = () => {
    return (
        <>
            <StatusBar backgroundColor="#7159c1" barStyle="light-content" />
            <Routes />
        </>
    );
};

export default App;
