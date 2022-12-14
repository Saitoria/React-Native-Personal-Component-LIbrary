import React from 'react';
import { StyleSheet,View,Text,ImageBackground,TextInput,TouchableWithoutFeedback,ScrollView,Dimensions,Image} from 'react-native';

//Login screen 0 with a background screen
function Login1()
{
    return(
        <ScrollView style={{flex:1,width:'100%',}}>
        <ImageBackground source={require('../../resources/images/login0.jpg')} resizeMode="cover" style={styles.imgBackground}>
            
            <View style={styles.topContainer}>
                <Text style={styles.headerText}>Log in</Text>
            </View>
            <View style={styles.bottomContainer}>

                <View style={styles.userProfileContainer}>

                <View>
                <Image source={require('../../resources/images/user.png')} style={styles.userImg}>
                </Image>
                </View>

                <View >
                <Text style={styles.container2Text}>
                Swis Software
                </Text>
                <Text style={styles.emailText}>
                swissoftware@gmail.com
                </Text>
                </View>

                </View>

                <TextInput 
                style={styles.txtInput} 
                placeholder={'Password'}
                placeholderTextColor={'black'}
                placeholderStyle={{fontFamily:'OpenSans', marginLeft:50,}} >
                </TextInput>

                <TouchableWithoutFeedback>
                <View style={styles.customButton}>
                    <Text style={styles.buttonText}>Agree and Continue</Text>
                </View>
                </TouchableWithoutFeedback>

                <Text style={styles.containerText}>
                Forgot your password?
                </Text>


            </View>
            
           
        </ImageBackground>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    imgBackground:{
        flex:1,
        width:'100%',
        height:Dimensions.get('screen').height,
    },
    topContainer:{
        position:'absolute',
        top:'20%',
        marginLeft:"7%",
    },
    headerText:{
        fontSize:30,
        fontFamily:'OpenSans-Bold',
        color:'white',
    },
    bottomContainer:{
        backgroundColor:'rgba(0, 0, 0, 0.7)',
        borderRadius:30,
        position:'absolute',
        top:'30%',
        marginLeft:"7%",
        width:'90%',
        height:'45%',
        alignContent:'center',
        alignSelf:'center',
    },
    containerText:{
        color:'rgba(88,196,248,1)',
        fontSize:16,
        marginLeft:'7%',
        marginTop:'7%',
        fontFamily:'OpenSans',
    },
    txtInput:{
        width:'90%',
        height:'13%',
        backgroundColor:'white',
        borderRadius:10,
        alignSelf:'center',
        marginTop:'9%',
        color:'black',
        fontFamily:'OpenSans',
    },
    customButton:{
        backgroundColor:'rgba(88,196,248,1)',
        width:'90%',
        alignSelf:'center',
        height:'13%',
        borderRadius:10,
        marginTop:'10%',
        alignItems:'center',
        alignContent:'center',
        justifyContent:'center',
    },
    buttonText:{
        color:'black',
        alignContent:'center',
        alignSelf:'center',
        justifyContent:'center',
        fontFamily:'OpenSans',
    },
    userImg:{
        width:65,
        height:65,
        borderRadius:32.5,
        margin:10,
    },
    userProfileContainer:{
        flexDirection:'row',
        width:'100%',
        height:'20%',
    },
    emailText:{
        color:'white',
        fontSize:13,
        marginLeft:'7%',
        fontFamily:'OpenSans',
    },
    container2Text:{
        color:'white',
        fontSize:16,
        marginLeft:'7%',
        marginTop:'7%',
        fontFamily:'OpenSans-Bold',
    },
});

export default Login1;