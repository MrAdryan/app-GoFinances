import {View, Text, StyleSheet, Image} from 'react-native';
import tema from '../../global/styles/tema';

export default function HOME() {
    return(
        <View style={estilos.Container}>
            <View style={estilos.Header}>
                <View style={estilos.TituloWrapper}>
                    <Image source={require('../../../assets/Img/logotipo.png')} style={estilos.LogoTipo}/>

                    <Text style={estilos.Title}>Controle suas finanças de forma muito simples!</Text>
                    <Text style={estilos.SingInTitle}>Faça login com uma das contas abaixo</Text>
                </View>
            </View>
            <View style={estilos.Footer}>
                <View style={estilos.FooterWrapper}>

                </View>
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    Container:{
        flex: 1
    },
    Header:{
        width: '100%',
        height: '70%',
        backgroundColor: theme.colors.primary,
        justifyContent: 'flex-end',
    },
    SingInTitle:{
        color: '#FFFFFF',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 80,
        marginBottom: 67
    },
    Footer:{
        width: '100%',
        height: '30%',
        backgroundColor: theme.colors.secondary
    },
    FooterWrapper:{
        marginTop: -4,
        paddingHorizontal: 32,
        justifyContent: 'space-between'
    },
    TituloWrapper:{
        alignItems: 'center',
    },
    LogoTipo:{
        width: 120,
        height: 68
    },
    Title:{
        color: '#FFFFFF',
        fontSize: 30,
        textAlign: 'center',
        marginTop: 45
    },
})