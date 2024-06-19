import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function Home() {
    const [dados, setDados] = useState(null)

    useEffect(() => {
        getVagas()
    }, []);

    const navigation = useNavigation()

    return (

        <FlatList
            style={estilo.container}
            data={dados} 
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <View style={estilo.view}>
                    <TouchableOpacity
                        style={estilo.list}
                        onPress={() => navigation.navigate('detalhe', { item, navigation })}
                    >
                        <Text style={estilo.titulo}>{item.titulo}</Text>
                        <Text style={estilo.empresa}>{item.empresa}</Text>
                        <Text style={estilo.localidade}>{item.localidade}</Text>
                        <Text style={estilo.salario}> <MaterialIcons name="attach-money" size={15} />{item.salario}</Text>
                    </TouchableOpacity>

                </View>
            )}
        />
    )
    function getVagas() {
        try {
            fetch('http://localhost:80080')
                .then(res => {
                    if (res.status !== 200) {
                        console.log('ERRO NA REQUISICAO')
                    }
                    return res.json()
                })
                .then(vagas => setDados(vagas))
        } catch (error) {
            console.log(error)
        } finally {
            setDados(DADOS)
        }

    }
}

const estilo = StyleSheet.create({
    container: {
        backgroundColor: '#eeedec',
    },
    view: {
        borderColor: 'lightgray',
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        textAlign: 'left',
        width: "95%",
        height: 'auto',
        marginTop: 10,
        paddingBottom: 18,
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    list: {
        alignSelf: 'flex-start',
        marginLeft: 20,
        marginTop: 10,
        color: 'black',
        fontSize: 15,
    },
    titulo: {
        fontSize: 28,
        fontWeight: 'bold'
    },
    empresa: {
        fontSize: 20,
    },
    localidade: {
        marginBottom: 5,
    },
    salario: {
        backgroundColor: "#418cd4",
        fontSize: 18,
        width: 100,
        borderRadius: 5,
        paddingTop: 1,
        paddingBottom: 1,
        color: '#FFF'
    }
})

const DADOS = [
    {
        id: 1,
        titulo: 'Desenvolvedor Web',
        empresa: 'TechNova Solutions',
        localidade: 'São Paulo, SP',
        salario: '1500.00',
        habilidades: 'PHP, HTML, CSS, JavaScript',
        descricao_vaga: 'Estágio para desenvolvimento web utilizando PHP, HTML, CSS e JavaScript.'
    },
    {
        id: 2,
        titulo: 'Analista de Marketing',
        empresa: 'ByteWave Innovations',
        localidade: 'Santa Catarina, SC',
        salario: '1200.00',
        habilidades: 'Marketing Digital, Redes Sociais',
        descricao_vaga: 'Estágio para marketing digital, incluindo gestão de redes sociais e criação de conteúdo.'
    },
    {
        id: 3,
        titulo: 'Designer Gráfico',
        empresa: 'Deck Soft',
        localidade: 'Rio de Janeiro, RJ',
        salario: '1300.00',
        habilidades: 'Adobe Photoshop, Adobe Illustrator',
        descricao_vaga: 'Estágio para criação de materiais gráficos utilizando Adobe Photoshop e Adobe Illustrator.'
    },
    {
        id: 4,
        titulo: 'Administrativo',
        empresa: 'CyberSky Technologies',
        localidade: 'Salvador, BA',
        salario: '1100.00',
        habilidades: 'Administração, Atendimento ao Cliente',
        descricao_vaga: 'Estágio para suporte administrativo e atendimento ao cliente.'
    },
    {
        id: 5,
        titulo: 'Engenheiro Civil',
        empresa: 'QuantumLeap Systems',
        localidade: 'Belo Horizonte, MG',
        salario: '1600.00',
        habilidades: 'Engenharia Civil, AutoCAD',
        descricao_vaga: 'Estágio em engenharia civil com foco em projetos e desenhos utilizando AutoCAD.'
    },
    {
        id: 6,
        titulo: 'Assistente Financeiro',
        empresa: 'FutureFusion Tech',
        localidade: 'Porto Alegre, RS',
        salario: '1400.00',
        habilidades: 'Finanças, Contabilidade',
        descricao_vaga: 'Estágio para suporte nas atividades financeiras e contábeis da empresa.'
    },
    {
        id: 7,
        titulo: 'Desenvolvedor Mobile',
        empresa: 'NexGen Networks',
        localidade: 'Recife, PE',
        salario: '1700.00',
        habilidades: 'Java, Kotlin, Swift',
        descricao_vaga: 'Estágio para desenvolvimento de aplicativos móveis utilizando Java, Kotlin e Swift.'
    },
    {
        id: 8,
        titulo: 'Analista de Sistemas',
        empresa: 'DigitalEagle Enterprises',
        localidade: 'Curitiba, PR',
        salario: '1600.00',
        habilidades: 'Análise de Sistemas, Banco de Dados',
        descricao_vaga: 'Estágio para análise e desenvolvimento de sistemas, incluindo banco de dados.'
    },
    {
        id: 9,
        titulo: 'Engenheiro de Produção',
        empresa: 'SmartCircuit Labs',
        localidade: 'Fortaleza, CE',
        salario: '1500.00',
        habilidades: 'Engenharia de Produção, Gestão de Projetos',
        descricao_vaga: 'Estágio em engenharia de produção com foco em gestão de projetos.'
    },
    {
        id: 10,
        titulo: 'Assistente de Marketing',
        empresa: 'InnovateX Technologies',
        localidade: 'Brasília, DF',
        salario: '1300.00',
        habilidades: 'Marketing Digital, Produção de Conteúdo',
        descricao_vaga: 'Estágio para assistência nas atividades de marketing digital e produção de conteúdo.'
    }
]