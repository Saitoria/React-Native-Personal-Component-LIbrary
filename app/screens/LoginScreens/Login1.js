import React from 'react';
import { StyleSheet,View,Text,ImageBackground} from 'react-native';

//Login screen 0 with a background screen
function Login1()
{
    return(
        <ImageBackground source={require('../../resources/images/login0.jpg')} resizeMode="cover" style={styles.imgBackground}>
            <View style={styles.topContainer}>
                <Text style={styles.header1}>HELLO WORLD</Text>
            </View>
            <View>

            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    imgBackground:{
        width:'100%',
        height:'100%',
    },
    topContainer:{
        position:'absolute',
        top:'30%',
    },
    bottomContainer:{

    },
    header1:{
        fontSize:30,
        fontWeight:'bold',
    }
});

export default Login1;