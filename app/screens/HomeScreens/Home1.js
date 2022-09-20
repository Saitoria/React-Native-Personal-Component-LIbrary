import React from 'react';
import {StyleSheet,View,Text,Image,ImageBackground, ScrollView,Dimensions} from 'react-native';
import Card from '../../globals/Cards/card1';

export default function Home()
{
    return(
        <ImageBackground source={require('../../resources/images/tile1.jpg')} resizeMode="cover" style={styles.imgBackground}>
        <View style={styles.mainContainer}>

            <View style={styles.headerContainer}>
                <Text style={styles.header1Txt}>HOME</Text>
                <Text style={styles.header2Txt}>PRODUCTS</Text>
            </View>

            <View style={styles.headerDescContainer}>
                <Text style={styles.normalTxt}>
                    A collection of our finest home products to make your house feel like a home. We've got everything you need
                    from home furniture, kitchen utensils, cleaning products and many more. 
                </Text>
            </View>

            <View style={styles.midContainer}>
            <View style={styles.menuContainer}>
                <Text style={styles.normal2Txt}>All</Text>
                <Text style={styles.normal2Txt}>Top Rated</Text>
                <Text style={styles.normal3Txt}>On Sale</Text>
                <Text style={styles.normal2Txt}>New Products</Text>
            </View>
            </View>

            <ScrollView style={styles.contentContainer}>

                <View style={styles.tile1Container}>
                <Card src={require('../../resources/images/tile3.jpg')} desc={"Water \n Bottle"} price={"3000/="}/>
                <Card src={require('../../resources/images/tile2.jpg')} desc={"Pesticide"} price={"5000/="}/>
                </View>

                <View style={styles.tile1Container}>
                <Card src={require('../../resources/images/tile4.jpg')}  desc={"Toothbrush"} price={"1500/="}/>
                <Card src={require('../../resources/images/tile5.jpg')}  desc={"Cleaning \n soap"} price={"6000/="}/>
                </View>
                
            </ScrollView>
        </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    imgBackground:{
        flex:1,
        width:'100%',
        height:Dimensions.get('screen').height,
    },
    mainContainer:{
        flex: 1,
        flexDirection:'column',
        width:'100%',
        height:'100%',
        //backgroundColor:'#2E3033',
        backgroundColor:'rgba(46, 48, 51,0.9)',
        padding:10,
    },
    header1Txt:{
        fontSize:40,
        fontFamily:'Pd-SemiBold',
        color:'#ff587c',
        
    },
    header2Txt:{
        fontSize:40,
        fontFamily:'Pd-SemiBold',
        color:'white',
    },
    headerContainer:{
        //backgroundColor:'rgba(46, 48, 51,0.8)',
        width:'100%',
        height:'17%',
        paddingLeft:'7%',
        marginTop:'3%',
    },
    headerDescContainer:{
        width:'100%',
        height:'18%',
        //backgroundColor:'#2E3033',
        padding:'4%',
    },
    normalTxt:{
        color:'white',
        fontFamily:'Pd-Regular',
        fontSize:15,
    },
    normal2Txt:{
        color:'white',
        fontFamily:'Pd-Regular',
        fontSize:15,
        //marginLeft:'7%',
    },
    normal3Txt:{
        color:'#ff587c',
        fontFamily:'Pd-Regular',
        fontSize:15,
        //marginLeft:'7%',
    },
    menuContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-evenly',
        width:'100%',
        height:'10%',
        alignContent:'space-around',
        //backgroundColor:'red',
        paddingTop:'2%',
    },

    midContainer:{
        width:'100%',
        height:'7%',
        alignContent:'center',
    },
    contentContainer:{
        width:'98%',
        marginLeft:'1%',
        marginRight:'1%',
        paddingBottom:10,
        //backgroundColor:'green',
    },
    tile1Container:{
        height:'49%',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignContent:'space-around',
        //backgroundColor:'red',
    }

});