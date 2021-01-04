import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);
    let id = navigation.getParam('id');
    const blogPost = state.find((blogPost) => blogPost.id === id);
    console.log(blogPost)
    return (
        <View>
            <Text>{blogPost.title}</Text>
        </View>
    )
}

export default ShowScreen;