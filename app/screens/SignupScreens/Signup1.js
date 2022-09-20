import React from 'react';
import { StyleSheet,View,Text,ImageBackground,TextInput,TouchableWithoutFeedback,ScrollView,Dimensions} from 'react-native';

//Login screen 0 with a background screen
function Signup()
{
    return(
        <ScrollView style={{flex:1,width:'100%',}}>
        <ImageBackground source={require('../../resources/images/login0.jpg')} resizeMode="cover" style={styles.imgBackground}>
            <View style={styles.mainContainer}>
            <View style={styles.topContainer}>
                <Text style={styles.headerText}>Sign up</Text>
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.containerText}>
                    It seems we don't have your account.{'\n'}
                    Let's create a new account for you
                </Text>

                <TextInput 
                style={styles.txtInput} 
                placeholder={'Name'}
                placeholderTextColor={'black'}
                placeholderStyle={{fontFamily:'OpenSans', marginLeft:50,}} >
                </TextInput>

                <TextInput style={styles.txtInput2} placeholder={'Password'} placeholderTextColor={'black'}>
                </TextInput>

                <Text style={styles.containerText}>
                    By selecting Agree and continue below,{'\n'}
                    I agree to Terms of Services and Privacy Policies
                </Text>

                <TouchableWithoutFeedback>
                <View style={styles.customButton}>
                    <Text style={styles.buttonText}>Agree and Continue</Text>
                </View>
                </TouchableWithoutFeedback>
            </View>
            </View>
           
        </ImageBackground>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    mainContainer:{
        height:'100%',
        width:'100%',
        flex:1,
        flexGrow:1,
        margin:0,
        padding:0,
    },
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
        height:'60%',
        alignContent:'center',
        alignSelf:'center',
    },
    containerText:{
        color:'white',
        fontSize:16,
        marginLeft:'7%',
        marginTop:'7%',
        fontFamily:'OpenSans',
    },
    txtInput:{
        width:'90%',
        height:'10%',
        backgroundColor:'white',
        borderRadius:10,
        alignSelf:'center',
        marginTop:'12%',
        color:'black',
        fontFamily:'OpenSans',
    },
    txtInput2:{
        width:'90%',
        height:'10%',
        backgroundColor:'white',
        borderRadius:10,
        alignSelf:'center',
        marginTop:'7%',
        color:'black',
        fontFamily:'OpenSans',
    },
    customButton:{
        backgroundColor:'rgba(88,196,248,1)',
        width:'90%',
        alignSelf:'center',
        height:'10%',
        borderRadius:10,
        marginTop:'12%',
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
});

export default Signup;