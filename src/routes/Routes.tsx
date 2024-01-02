import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParams } from "../types";
import Home from "../views/Home";
import Detail from "../views/Detail";

const stack = createNativeStackNavigator<RootStackParams>();
const routeScreenDefaultOptions = {
    headerStyle:{
        backgroundColor: 'rgba(7,26,93,255)',

    },
    headerTitleStyle:{
        color: '#fff',
    },
    headerButtonStyle: {
        color: '#FF0000',
      },
  
}




const Routes = () =>{

    return(
        <NavigationContainer>
            <stack.Navigator initialRouteName="Home">
                <stack.Screen name="Home" component={Home} options={routeScreenDefaultOptions} />
                <stack.Screen name="Detail" component={Detail} options={routeScreenDefaultOptions} />
            </stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal: 16,
    }
    });

export default Routes;