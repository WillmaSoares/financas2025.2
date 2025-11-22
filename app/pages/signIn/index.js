import {
  BackGround, Container, Logo, AreaInput, Input, SubmitButton,
  SubmitText, Link, LinkText
} from './styles';

import { useNavigation } from '@react-navigation/native';
import { Platform } from 'react-native';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/auth';

export default function SignIn() {

  const navigation = useNavigation();
  const { signIn, loadingAuth } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {

    if (email === '' || password === '') {
      alert("Preencha email e senha");
      return;
    }

    signIn(email, password);
  }

  return (
    <BackGround>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <Logo
          source={require('../../../assets/Logo.png')}
          resizeMode="contain"
        />

        <AreaInput>
          <Input
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Senha"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </AreaInput>

        <SubmitButton activeOpacity={0.8} onPress={handleLogin}>
          <SubmitText>
            {loadingAuth ? "Carregando..." : "Acessar"}
          </SubmitText>
        </SubmitButton>

        <Link onPress={() => navigation.navigate('SignUp')}>
          <LinkText>Criar sua conta!</LinkText>
        </Link>
      </Container>
    </BackGround>
  );
}
