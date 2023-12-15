import React, { FC } from "react";
import { View, Text, StyleSheet, TouchableOpacity  } from "react-native";
import { PostImage as PostImageTypes, RootStackParams } from "../../types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

type PostImageNavigationProps = NativeStackNavigationProp<RootStackParams, 'Detail'>



const PostImage: FC<PostImageTypes> = ({title, date,url,explanation}) =>{

    const {navigate} = useNavigation<PostImageNavigationProps>(); 

    const handleViewPress = () =>{
        navigate('Detail', {title,date,url,explanation})
    }
    
    return(
        <View style={styles.container}>
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
       backgroundColor: 'rgba(18,39,113,255)',
        borderRadius: 20,
        marginBottom: 12,
        padding: 16,
    },
    title:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 12,
    },
    date:{
        color: '#fff',
    },
    bottonContainer:{
        alignItems:'flex-end',
    },
    botton:{
        fontSize: 20,
        color: 'blue'
    }
   
    });

export default PostImage;