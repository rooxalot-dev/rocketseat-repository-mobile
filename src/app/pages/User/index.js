import React, {Component} from 'react';
import {ActivityIndicator} from 'react-native';

import api from '../../services/api';
import {
    Container,
    Header,
    Avatar,
    Name,
    Bio,
    Stars,
    Strarred,
    OwnerAvatar,
    Info,
    Title,
    Author,
    LoadingStarred,
} from './styles';

export default class User extends Component {
    static navigationOptions = ({navigation}) => ({
        title: navigation.getParam('user').name,
    });

    state = {
        loading: true,
        loadingMore: false,
        refreshing: false,
        page: 1,
        stars: [],
    };

    async componentDidMount() {
        const {page} = this.state;
        await this.getStarred(page);
    }

    getStarred = async (page, refresh = false) => {
        const {stars} = this.state;
        const {navigation} = this.props;
        const user = navigation.getParam('user');
        const response = await api.get(
            `/users/${user.login}/starred?page=${page}`
        );

        this.setState({
            stars: !refresh ? [...stars, ...response.data] : [...response.data],
            loading: false,
        });
    };

    handleLoadMore = async () => {
        this.setState({loadingMore: true});
        const {page} = this.state;
        const newPage = page + 1;

        await this.getStarred(newPage);
        this.setState({page: newPage, loadingMore: false});
    };

    handleRefresh = async () => {
        this.setState({refreshing: true});
        await this.getStarred(1, true);
        this.setState({page: 1, refreshing: false});
    };

    handleNavigateStarredView = starred => {
        const {navigation} = this.props;
        navigation.navigate('StarredView', {starred});
    };

    renderFooter = () => {
        const {loadingMore} = this.state;
        if (!loadingMore) {
            return null;
        }
        return <LoadingStarred color="#7159c1" />;
    };

    render() {
        const {stars, loading, refreshing} = this.state;
        const {navigation} = this.props;
        const user = navigation.getParam('user');

        if (loading) {
            return <LoadingStarred color="#7159c1" />;
        }

        return (
            <Container>
                <Header>
                    <Avatar source={{uri: user.avatar}} />
                    <Name>{user.name}</Name>
                    <Bio>{user.bio}</Bio>
                </Header>

                <Stars
                    onEndReachedThreshold={0.2}
                    onEndReached={this.handleLoadMore}
                    onRefresh={this.handleRefresh}
                    refreshing={refreshing}
                    data={stars}
                    keyExtractor={star => String(star.id)}
                    ListFooterComponent={this.renderFooter}
                    renderItem={({item}) => (
                        <Strarred
                            onPress={() =>
                                this.handleNavigateStarredView(item)
                            }>
                            <OwnerAvatar
                                source={{uri: item.owner.avatar_url}}
                            />
                            <Info>
                                <Title>{item.name}</Title>
                                <Author>{item.owner.login}</Author>
                            </Info>
                        </Strarred>
                    )}
                />
            </Container>
        );
    }
}
