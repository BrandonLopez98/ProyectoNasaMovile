import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet , ScrollView } from "react-native";
import Header from "../../components/Header";
import fetchApi from "../../utils/fetch";
import TodayImage from "../../components/TodayImage";
import { PostImage } from "../../types";
import { format, sub } from "date-fns";
import LastFiveDaysImages from "../../components/lastFiveDaysImages";

const Home = () =>{
    
    const [todayImage, setTodayImage] = useState<PostImage>({});
    const [lastFivesDaysImages, setLastFivesDaysImages] = useState<PostImage[]>([])
    
    
    
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
        
                const loadLast5DaysImages =async () =>{
                    try {
                        const date = new Date();
                        const todayDate = format(date, 'yyyy-MM-dd' );
                        const fiveDaysAgoDate = format(sub(date, {days: 5}), 'yyyy-MM-dd');
        
                        const lastFiveDaysImagesResponse = await fetchApi(`&start_date=${fiveDaysAgoDate}&end_date=${todayDate}`)
        
                        setLastFivesDaysImages(lastFiveDaysImagesResponse);
                        
                        
                    } catch (error) {
                        console.error(error);
                        
                    }
                }
    
                loadTodayImage().catch(null)
                loadLast5DaysImages().catch(null)

                               
    }, [])    

    return(
        <ScrollView style={styles.container}>
            <Header />
            <TodayImage {...todayImage} />
            <LastFiveDaysImages postImages={lastFivesDaysImages}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal: 16,
        backgroundColor: 'rgba(7,26,93,255)',
    }
    });

export default Home;