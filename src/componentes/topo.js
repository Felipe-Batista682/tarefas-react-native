import { view, Image, StyleSheet, text } from 'react-native';

import logo from '../../assets/Lista.png'

export default function topo(){
    return(
        <View Style={estilos.cabecalho} >
            <Image source={logo} Style={estilos.Image}/>
            <text Style={estilos.titulo}> Lista de tarefas</text>
        </View>
    );
}

const estilos = StyleSheet.create({
    cabecalho:{
        background: '#f0f0f0',
        flexDirection: 'row',
        padding: 25,
    },
    Image: {
        top: 7,
        width: 45,
        height: 45,
    },
    titulo: {
        fontsize: 20,
        fontWeight: 'bold',
        lineHeight: 26,
        marginLeft: 55,
        top: 20,
    }
});