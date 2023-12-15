import React,  { FC } from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";

import { PostImage } from "../../types";

const TodayImage: FC<PostImage> = ({date, title, url}) =>{

    return(
        <View style={styles.container}>     
            <View style={styles.imageContainer}>
                <Image source={{uri: url}} style={styles.image}/>
            </View>      
            <Text>{title}</Text>
            <Text>{date}</Text>
            <Button title="View" />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#2c449d',
    },
    imageContainer:{

    },
    image:{

    }
});


export default TodayImage;