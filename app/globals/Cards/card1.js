import React from "react";
import {StyleSheet,View,Text,Image} from 'react-native';

export default function Card(props)
{
    return(
        <View style={styles.cardContainer}>
            <Image source={props.src} style={styles.cardIMg}>
            </Image>
            <View style={styles.bottomDesc}>
                <Text style={styles.normalTxt}>{props.desc}</Text>
                <Text style={styles.normal2Txt}>{props.price}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer:{
        width:'40%',
        height:250,
        margin:'5%',
        
    },
    cardIMg:{
        width:'100%',
        height:'90%',
        borderRadius:20,
    },
    bottomDesc:{
        flexDirection:'row',
        //backgroundColor:'red',
        marginTop:'4%',
        justifyContent:'space-between',
        alignContent:'space-around',
    },
    normalTxt:{
        color:'#ff587c',
        fontFamily:'Pd-Regular',
        fontSize:15,
        marginRight:'2%',
    },
    normal2Txt:{
        color:'white',
        fontFamily:'Pd-SemiBold',
        fontSize:18,
    },
});