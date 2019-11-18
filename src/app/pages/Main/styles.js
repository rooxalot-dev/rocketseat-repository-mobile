import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    padding: 30px 20px;
`;

export const Form = styled.View`
    flex-direction: row;
    padding-bottom: 10px;
    border-bottom-width: 1px;
    border-color: #eee;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#888',
})`
    flex: 1;
    height: 40px;
    background-color: #eee;
    border-radius: 4px;
    padding: 0 15px;
    border: 1px solid #eee;
`;

export const SubmitButton = styled(RectButton)`
    justify-content: center;
    align-items: center;
    background-color: #7159c1;
    border-radius: 4px;
    margin-left: 10px;
    padding: 0 12px;
    opacity: ${props => (props.loading ? 0.6 : 1)};
`;

export const List = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
})`
    margin-top: 20px;
`;

export const User = styled.View`
    align-items: center;
    margin: 0 20px 30px;
`;

export const Avatar = styled.Image`
    height: 64px;
    width: 64px;
    border-radius: 32px;
    background-color: #eee;
`;

export const Name = styled.Text`
    font-size: 14px;
    color: #333;
    font-weight: bold;
    margin: 5px 0;
    text-align: center;
`;

export const Bio = styled.Text.attrs({
    numberOfLines: 2,
})`
    font-size: 13px;
    line-height: 18px;
    color: #999;
    text-align: center;
`;

export const ProfileButton = styled(RectButton)`
    margin-top: 10px;
    height: 40px;
    border-radius: 4px;
    align-self: stretch;
    background-color: #7159c1;
    justify-content: center;
    align-items: center;
`;

export const ProfileButtonText = styled.Text`
    font-size: 14px;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
`;
