import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, CheckBox, Image, StatusBar } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Login() {
    const navigation = useNavigation()
    function novoUsuario() {
        navigation.navigate('novoUsuario')
    }
    function home() {
        navigation.navigate('home')
    }
    function loginSocial() {
        return true
    }
    return (
        <View style={estilo.container}>
            <StatusBar backgroundColor={'red'} barStyle='dark-content'></StatusBar>
            <View style={estilo.viewSection}>
                <Text style={estilo.textCadastro}>Entrar</Text>
                <View>

                    <TextInput
                        style={estilo.input}
                        placeholder="Usuário"
                    />
                    <TextInput
                        style={estilo.input}
                        placeholder="Senha"
                    />
                </View>
                <View style={estilo.checkBoxCotainer}>
                    <View style={estilo.checkBoxView}>
                        <CheckBox />
                        <Text>Manter Conectado </Text>
                    </View>
                    <Text style={estilo.textRodapeLink}>Esqueci a senha</Text>
                </View>
                <TouchableOpacity
                    style={estilo.button}
                    onPress={home}

                >
                    <Text style={estilo.buttonText}>Entrar</Text>
                </TouchableOpacity>
                {/* Login Social */}
                <TouchableOpacity
                    style={estilo.buttonSocial}
                    onPress={loginSocial}
                >
                    <Image source={require('../../assets/icons/google.png')} style={estilo.iconSocial} />
                    <Text style={estilo.buttonSocialText} >Entrar com o Google</Text>
                </TouchableOpacity>
                <View style={estilo.textRodape}>
                    <Text>Aina não tem uma conta? </Text>
                    <Text
                        style={estilo.textRodapeLink}
                        onPress={novoUsuario}
                    >Cadastre-se</Text>
                </View>
            </View>
        </View>
    )
}


const estilo = StyleSheet.create({
    container: {
        backgroundColor: '#418cd4',
        flexDirection: 'column',
    },
    viewSection: {
        justifyContent:'center',
        marginTop: 100,
        height: 650,
        alignItems: "stretch",
        backgroundColor: "#ffffff",
        borderStartEndRadius: 30,
        borderTopStartRadius: 30,
        padding: 25,
    },
    textCadastro: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20
    },
    input: {
        borderColor: "#c2c2c2",
        borderWidth: 0.1,
        marginBottom: 30,
        borderRadius: 15,
        padding: 20,
        height: 40,
        shadowColor: '#418cd4',
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 1,
        placeholderTextColor: "#5b5b5b"
    },
    button: {
        marginTop: 20,
        backgroundColor: '#418cd4',
        marginBottom: 30,
        borderRadius: 15,
        height: 40,
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,

    },
    buttonText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center'
    },
    checkBoxView: {
        flexDirection: 'row',
        gap: 5
    },
    checkBoxCotainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textRodape: {
        flexDirection: 'row',
        justifyContent: 'center',
        fontSize: 5
    },
    textRodapeLink: {
        color: '#418cd4',
        fontWeight: 'light',
        flexDirection: 'row'
    },

    buttonSocial: {
        borderColor: "#c2c2c2",
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        gap: 10,
        borderWidth: 1,
        height: 40,
        borderRadius: 15,
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonSocialText: {
        color: '#000',
        textAlign: 'center',
        justifyContent: 'center',
        fontWeight: '600'
    },
    iconSocial: {
        width: 25,
        height: 25
    }
})
