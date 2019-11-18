import React, {Component} from 'react';
import {ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
    Container,
    Form,
    Input,
    SubmitButton,
    List,
    User,
    Avatar,
    Name,
    Bio,
    ProfileButton,
    ProfileButtonText,
} from './styles';
import api from '../../services/api';

export default class Main extends Component {
    state = {
        newUser: '',
        users: [],
        loading: false,
    };

    async componentDidMount() {
        const users = await AsyncStorage.getItem('users');
        if (users) {
            this.setState({
                users: JSON.parse(users),
            });
        }
    }

    async componentDidUpdate(prevProps, prevState) {
        const {users} = this.state;

        if (prevState.users !== users) {
            AsyncStorage.setItem('users', JSON.stringify(users));
        }
    }

    handleAddUser = async () => {
        const {users, newUser} = this.state;
        try {
            this.setState({loading: true});
            const response = await api.get(`/users/${newUser}`);

            const data = {
                name: response.data.name,
                login: response.data.login,
                bio: response.data.bio,
                avatar: response.data.avatar_url,
            };

            this.setState({
                users: [data, ...users],
                newUser: '',
            });
        } catch (error) {
            console.log('ERRO');
        } finally {
            this.setState({loading: false});
        }
    };

    handleNavigateDetails = user => {
        const {navigation} = this.props;
        navigation.navigate('User', {user});
    };

    static navigationOptions = {
        title: 'Usuários',
    };

    render() {
        const {users, newUser, loading} = this.state;

        return (
            <Container>
                <Form>
                    <Input
                        autoCorrect={false}
                        autoCapitalize="none"
                        returnKeyType="send"
                        placeholder="Adicionar usuário"
                        value={newUser}
                        onChangeText={text => this.setState({newUser: text})}
                        onSubmitEditing={this.handleAddUser}
                    />
                    <SubmitButton
                        loading={loading}
                        onPress={this.handleAddUser}>
                        {loading ? (
                            <ActivityIndicator color="#fff" />
                        ) : (
                            <Icon name="add" size={20} color="#fff" />
                        )}
                    </SubmitButton>
                </Form>

                <List
                    data={users}
                    keyExtractor={user => user.login}
                    renderItem={({item}) => (
                        <User>
                            <Avatar source={{uri: item.avatar}} />
                            <Name>{item.name}</Name>
                            <Bio>{item.bio}</Bio>

                            <ProfileButton
                                onPress={() =>
                                    this.handleNavigateDetails(item)
                                }>
                                <ProfileButtonText>
                                    Ver Perfil
                                </ProfileButtonText>
                            </ProfileButton>
                        </User>
                    )}
                />
            </Container>
        );
    }
}
