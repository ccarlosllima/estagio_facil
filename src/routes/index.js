import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Detalhe from '../components/Detalhe';
import Home from '../components/Home';
import Login from '../components/Login';
import NovoUsuario from '../components/NovoUsuario';

export default function Routas() {
    const stack = createNativeStackNavigator()
    return (
        <stack.Navigator initialRouteName='login'>
            <stack.Screen
                name='detalhe'
                component={Detalhe}
                options={{
                    title: ''
                    
                }}
            />
            <stack.Screen
                name='home'
                component={Home}
                options={{
                    title: 'Vagas'
                }}
            />
            <stack.Screen
                name='login'
                component={Login}
                options={{
                    title: '',
                    headerStyle: {
                        backgroundColor: '#418cd4',
                    },
                }}
            />
            <stack.Screen
                name='novoUsuario'
                component={NovoUsuario}
                options={{
                    title: '',
                    headerStyle: {
                        backgroundColor: '#418cd4',
                    },
                }}
            />
        </stack.Navigator>
    )
}
