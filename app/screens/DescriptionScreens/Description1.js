import React from 'react';
import {StyleSheet,View,Text,Image,ImageBackground, ScrollView,Dimensions,TouchableWithoutFeedback} from 'react-native';

export default function Description()
{
    return(
        <ScrollView style={styles.contentContainer}>
        <ImageBackground style={styles.imgBg} source={require("../../resources/images/tile1.jpg")}>

        <View style={styles.mainContainer}>
            <Image source={require("../../resources/images/tile4.jpg")} style={styles.prodImg}></Image>

            <View style={styles.contentContainer}>
            <View style={styles.contentHeader}>
                <Text style={styles.headerTxt}>
                    Toothbrush
                </Text>
                <Text style={styles.header2Txt}>
                    1500/=
                </Text>

            </View>

            <View style={styles.contentBody}>
                <Text style={styles.normalText}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                </Text>
            </View>

            <View style={styles.contentFooter}>
                <TouchableWithoutFeedback>
                <View style={styles.customBtn}>
                    <Text style={styles.header3Txt}>Buy Now</Text>
                </View>
                </TouchableWithoutFeedback>
            </View>

        </View>
        </View>
        </ImageBackground>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    contentContainer:{
        width:'100%',
        
        //backgroundColor:'green',
    },
    mainContainer:{
        width:'100%',
        height:Dimensions.get('screen').height,
        backgroundColor:'rgba(46, 48, 51,0.9)',
    },
    imgBg:{
        flex:1,
        width:'100%',
        height:Dimensions.get('screen').height,
    },
    prodImg:{
        width:'100%',
        height:'40%',
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
    },
    contentContainer:{

    },
    contentHeader:{
        flexDirection:'row',
        justifyContent:'space-around',
        //alignContent:'space-around',
        //alignItems:'stretch',
        marginTop:'5%',
    },
    headerTxt:{
        fontSize:40,
        fontFamily:'Pd-SemiBold',
        color:'#ff587c',
        textAlign:'center',
        alignSelf:'center',
    },
    header2Txt:{
        fontSize:35,
        fontFamily:'Pd-SemiBold',
        color:'white',
        textAlign:'center',
        alignSelf:'center',
    },
    header3Txt:{
        fontSize:25,
        fontFamily:'Pd-SemiBold',
        color:'white',
        textAlign:'center',
        alignSelf:'center',
    },
    contentBody:{
        paddingTop:'5%',
        paddingHorizontal:'7%',
        //backgroundColor:'red',
    },
    normalText:{
        fontSize:15,
        color:'white',
        fontFamily:'Pd-Regular',
    },
    contentFooter:{
        marginTop:'10%',
        height:'18%',
        //backgroundColor:'red',
        justifyContent:'center',
    },
    customBtn:{
        backgroundColor:'#ff587c',
        height:'80%',
        width:'70%',
        alignSelf:'center',
        borderRadius:10,
        justifyContent:'center',
    },
});