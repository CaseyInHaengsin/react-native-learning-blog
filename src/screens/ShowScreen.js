import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);
    let id = navigation.getParam('id');
    const blogPost = state.find((blogPost) => blogPost.id === id);
    return (
        <View>
            <Text style={styles.label}>{blogPost.title}</Text>
            <Text style={styles.contentStyle}>{blogPost.content}</Text>
        </View>
    )
}

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: navigation.getParam('id')})}>
            <EvilIcons name="pencil" size={35} />
          </TouchableOpacity>
        ),
      };
}

const styles = StyleSheet.create({
    label: {
        fontSize: 20,
        marginBottom: 10,
        marginLeft: 5
    },
    contentStyle: {
        height: 200,
        fontSize: 15
    }
})

export default ShowScreen;