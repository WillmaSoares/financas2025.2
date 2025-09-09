import { BackGround, Container, Logo, AreaInput, Input, SubmitButton,
    SubmitText, Link, LinkText
 } from '.styles'

import { useNavigation } from '@react-navigation/native'
import { Platform } from 'react-native';

export default function SignIn(){
    const navigation = useNavigation();
    
    return(
        <BackGround>
            <Container
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enable
            >
                <Logo 
                    source={require('')}
                />

                <AreaInput>
                    <Input 
                        placeholder="Email"
                    />
                </AreaInput>

                <AreaInput>
                    <Input 
                        placeholder="Senha"
                    />
                </AreaInput>

                <SubmitButton activeOpacity={0.8}>
                    <SubmitText>Acessar</SubmitText>
                </SubmitButton>

                <Link onPress={ () => navigation.navigate('SignUp')}>
                    <LinkText>Criar sua conta!</LinkText>
                </Link>
            </Container>
        </BackGround>
    )
}