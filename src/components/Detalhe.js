import { Alert, View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
export default function Detalhe({ route }) {
    const { item, navigation } = route.params

    const exibeMensagem = () => {

        Alert.alert(
            '',
            'Cadastro realizado com sucesso',
            [
                {
                    text: 'OK',
                    onPress: () => navigation.navigate('home')
                }
            ]
        )
    }

    return (
        <ScrollView style={estilo.container}>
            <View style={estilo.viewSection}>
                <Text style={estilo.textTitulo}>{item.titulo} </Text>
                <Text style={estilo.texto}>{item.empresa}</Text>
                <Text style={estilo.texto}>{item.localidade} </Text>
            </View>
            <View style={estilo.viewSection}>
                <Text style={estilo.textTitulo}>Dados da Vaga</Text>
                <Text style={estilo.texto}>Salário: {item.salario}</Text>
            </View>
            <View style={estilo.viewSection}>
                <Text style={estilo.textTitulo}>Habilidades Requeridas</Text>
                <Text style={estilo.texto}>{item.habilidades}</Text>
            </View>
            <View style={estilo.viewSection}>
                <Text style={estilo.textTitulo}>Descrição completa da vagas</Text>
                <Text style={estilo.texto}>{item.descricao_vaga}</Text>
            </View>

            <TouchableOpacity
                style={estilo.button}
                onPress={exibeMensagem}
            >
                <Text style={estilo.buttonText}>Candidatar-se</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}


const estilo = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        width: "auto",
        height: '100%',
        alignSelf: 'center',
    },
    viewSection: {
        padding: 20,
    },
    textTitulo: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    texto: {
        marginTop: 5,
        fontSize: 20
    },
    button: {
        backgroundColor: '#418cd4',
        width: '90%',
        justifyContent: 'center',
        height: 50,
        borderRadius: 10,
        marginLeft: 20
    },
    buttonText: {
        color: '#ffffff',
        marginTop: 9,
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    }
});
