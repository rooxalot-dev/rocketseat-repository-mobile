import React, {Component} from 'react';
import WebView from 'react-native-webview';

export default class StarredView extends Component {
    static navigationOptions = ({navigation}) => ({
        title: navigation.getParam('starred').name,
    });

    render() {
        const {navigation} = this.props;
        const starred = navigation.getParam('starred');

        return <WebView source={{uri: starred.html_url}} style={{flex: 1}} />;
    }
}
