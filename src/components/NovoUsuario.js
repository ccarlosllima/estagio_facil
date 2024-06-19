import React, { useState } from "react";
import {Image ,View, Text, TextInput, TouchableOpacity, StyleSheet, CheckBox } from "react-native";
import { useNavigation } from '@react-navigation/native';
export default function NovoUsuario() {
    const navigation = useNavigation()
    function login() {
        navigation.navigate('login')
    }
    function cadastrarUsuario() {
        navigation.navigate('home')
    }
    return (
        <View style={estilo.container}>
            <View style={estilo.viewSection}>
                <Text style={estilo.textCadastro}>Cadastre-se</Text>
                <View>
                    <TextInput
                        style={estilo.input}
                        placeholder="Seu nome"

                    />
                    <TextInput
                        style={estilo.input}
                        placeholder="Seu melhor E-mail"
                    />
                    <TextInput
                        style={estilo.input}
                        placeholder="Senha"
                    />
                    <TextInput
                        style={estilo.input}
                        placeholder="Confirmar senha"
                    />
                </View>

                <View style={estilo.checkBoxView}>
                    <CheckBox />
                    <Text>Ao clicar em cadastrar, você concorda com os Termos de Servicos e Política de Privacidade</Text>
                </View>

                <TouchableOpacity
                    style={estilo.button}
                    onPress={cadastrarUsuario}
                >
                    <Text style={estilo.buttonText} >Cadastrar</Text>
                </TouchableOpacity>

                {/* Login Social */}
                <TouchableOpacity
                    style={estilo.buttonSocial}
                    onPress={cadastrarUsuario}
                >
                    <Image source={require('../../assets/icons/google.png')} style={estilo.iconSocial}/>
                    <Text style={estilo.buttonSocialText} >Entrar com o Google</Text>
                </TouchableOpacity>

                <View style={estilo.textRodape}>
                    <Text>Já tem uma conta? </Text>
                    <Text
                        style={estilo.textRodapeLink}
                        onPress={login}

                    >Entrar</Text>
                </View>



            </View>
        </View>
    )
}


const estilo = StyleSheet.create({
    container: {
        backgroundColor: '#418cd4',
        width: "100%",
        height: "100%",
        justifyContent: 'flex-end'
    },
    viewSection: {
        backgroundColor: "#ffffff",
        borderStartEndRadius: 30,
        borderTopStartRadius: 30,
        padding: 25
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
        marginBottom: 15,
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
        gap: 10
    },
    textRodape: {
        flexDirection: 'row',
        justifyContent: 'center',
        fontSize: 15
    },
    textRodapeLink: {
        color: '#418cd4',
        fontWeight: 'light'
    },
    buttonSocial: {
        borderColor: "#c2c2c2",
        backgroundColor: '#ffffff',
        flexDirection:'row',
        gap:10,
        borderWidth: 1,
        height: 40,
        borderRadius: 15,
        marginBottom: 30,
        justifyContent: 'center',
        alignItems:'center'
    },
    buttonSocialText: {
        color: '#000',
        textAlign: 'center',
        justifyContent: 'center',
        fontWeight: '600'
    },
    iconSocial:{
      width:25,
      height:25  
    }
})
