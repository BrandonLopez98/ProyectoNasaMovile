import React,  { FC } from "react";
import { View, Text, Image, StyleSheet , TouchableOpacity } from "react-native";

import { PostImage, RootStackParams } from "../../types";
import { useNavigation } from "@react-navigation/native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type PostImageNavigationProps = NativeStackNavigationProp<RootStackParams, 'Detail'>

const TodayImage: FC<PostImage> = ({date, title, url, explanation}) =>{
    const {navigate} = useNavigation<PostImageNavigationProps>(); 

    const handleViewPress = () =>{
        navigate('Detail', {title,date,url,explanation})
    }
    
    return(
        <View style={styles.container}>     
            <View style={styles.imageContainer}>
                <Image source={{uri: url}} style={styles.image}/>
            </View>      
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
            <TouchableOpacity style={styles.bottonContainer} onPress={handleViewPress}>
                <Text style={styles.botton}>View</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#2c449d',
        marginVertical: 16,
        borderRadius: 32,
        padding:16,
        marginHorizontal: 24,
    },
    imageContainer:{
        
    },
    image:{
        width: '100%',
        height:190,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius:32,
    },
    title:{
        color: '#fff',
        fontSize: 20,
        marginVertical: 12,
        fontWeight: 'bold',
    },
    date:{
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    bottonContainer:{
        alignItems:'flex-end',
        paddingEnd:10,
    },
    botton:{
        fontSize: 20,
        color: 'blue'
    }

});


export default TodayImage;