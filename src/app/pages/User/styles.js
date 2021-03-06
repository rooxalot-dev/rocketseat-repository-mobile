import {TouchableOpacity} from 'react-native-gesture-handler';

import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    padding: 30px;
`;

export const Header = styled.View`
    align-items: center;
    justify-content: center;
    padding-bottom: 30px;
    border-bottom-width: 1px;
    border-color: #eee;
`;

export const Avatar = styled.Image`
    height: 100px;
    width: 100px;
    border-radius: 50px;
    background-color: #eee;
`;

export const Name = styled.Text`
    margin-top: 10px;
    font-size: 20px;
    color: #333;
    font-weight: bold;
    text-align: center;
`;

export const Bio = styled.Text`
    font-size: 14px;
    line-height: 18px;
    color: #999;
    margin-top: 5px;
    text-align: center;
`;

export const Stars = styled.FlatList.attrs({
    showsVerticalScrollIndicator: true,
})`
    margin-top: 20px;
`;

export const Strarred = styled(TouchableOpacity)`
    background-color: #f5f5f5;
    border-radius: 4px;
    padding: 10px 15px;
    margin-bottom: 20px;
    flex-direction: row;
    align-items: center;
`;

export const OwnerAvatar = styled.Image`
    height: 42px;
    width: 42px;
    border-radius: 21px;
    background-color: #eee;
`;

export const Info = styled.View`
    margin-left: 10px;
    flex: 1;
`;

export const Title = styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: #333;
`;

export const Author = styled.Text`
    margin-top: 5px;
    font-size: 13px;
    color: #666;
`;

export const LoadingStarred = styled.ActivityIndicator.attrs({
    color: '#7159c1',
})`
    margin-top: 20px;
`;
