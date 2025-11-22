import React, { useContext, useState } from 'react';
import { Platform } from 'react-native';
import {
  BackGround,
  Container, 
  AreaInput, 
  Input, 
  SubmitButton, 
  SubmitText
} from '../signIn/styles';

import { AuthContext } from '../../context/auth';

export default function SignUp() {


  const { signUp, loadingAuth } = useContext(AuthContext)

  const [name, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignUp(){
    if(name === '' || email === '' || password === '') return;
    signUp(name, email, password );
  }

  return(
    <BackGround>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >

        <AreaInput>
          <Input
            placeholder="Seu nome"
            value={name}
            onChangeText={ (text) => setNome(text) }
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Email"
            value={email}
            onChangeText={ (text) => setEmail(text) }
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Senha"
            value={password}
            onChangeText={ (text) => setPassword(text) }
            secureTextEntry={true}
          />
        </AreaInput>

        <SubmitButton onPress={handleSignUp}>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>

      </Container>

    </BackGround>
  )
}