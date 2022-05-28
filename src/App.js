import React from 'react';
import {Text, View, Image, StyleSheet, SafeAreaView, StatusBar, Pressable, Linking} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const fontdarkGithub = '#4F565E';
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/103908402?s=400&u=7f0eb268a5a25e37ddd5e64a20028b75c3dd05ab&v=4';
const linkmyGithub = 'https://github.com/MajorFoxL'

const App = () => {
    const handlePressGoToGitHub = async ()=> {
    console.log('Checando');
    const res = Linking.canOpenURL(linkmyGithub); 
    if(res) {
        await Linking.openURL(linkmyGithub);
        console.log('Aprovado');
        console.log('Abrindo URL');
        }
    };
    

    return ( 
    <SafeAreaView style={style.container}>
        <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
        <View style={style.content}>
            <Image 
            style={style.avatar} 
            source={{uri: imageProfileGithub}} 
            />
            <Text accessibilityLabel="Nome: GL"
            style={[style.defaultText, style.name]}>Gustavo Luvian</Text>
            <Text accessibilityLabel="Apelido: Fox"
            style={[style.defaultText, style.nickname]}>MajorFoxL</Text>
            <Text accessibilityLabel="Descrição: " 
            style={[style.defaultText, style.description]}>Sou fã do Vasco e de aviões
            </Text>
            <Pressable onPress={handlePressGoToGitHub}>
            <View style={style.button}>
                <Text style={[style.defaultText, style.textButton]}>Open in Github</Text>
            </View>
            </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({ //folha de estilho (stylesheet) ela é o que da o desing da nsosa página.
    container: {
        backgroundColor: colorGithub,
        flex: 1, //Expansão da tela. Expandir para 1 equivale a toda screen.
        justifyContent: 'center',
        alignItems:'center',
    },
    content: {
        alignItems:'center',
        padding: 20,
    },
    avatar:{
        height: 180,
        width: 180,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
        alignItems: 'center',
    },
    defaultText: {
        color: colorFontGithub,
    },
    name: {
        marginTop: 25,
        fontSize: 30,
        fontWeight: 'bold'
    },
    nickname: {
        fontSize:20,
        color: fontdarkGithub,
    },
    description:{
        fontWeight: 'bold',
        fontSize: 14,
    },
    button: {
        backgroundColor: fontdarkGithub,
        borderRadius: 20,
        padding:20,
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 16,
    },
});