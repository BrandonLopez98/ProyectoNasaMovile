import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Header from "../../components/Header";
import fetchApi from "../../utils/fetch";
import TodayImage from "../../components/TodayImage";
import { PostImage } from "../../types";

const Home = () =>{
    
    const [todayImage, setTodayImage] = useState<PostImage>({});

    useEffect(()=>{

        const loadTodayImage =async () => {

            try {
                const todayImageresponse = await fetchApi();
                setTodayImage(todayImageresponse);
                
                
                
            } catch (error) {
                console.error(error);
                setTodayImage({});
            }            
        }
        
        loadTodayImage().catch(null)
          

    }, [])

    
    

    return(
        <View style={styles.container}>
            <Header />
            <TodayImage {...todayImage} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal: 16,
    }
    });

export default Home;