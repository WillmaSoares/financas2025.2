import React, { useState, useContext } from "react";
import { MovContext } from "../../context/movimentacao";
import Icon from 'react-native-vector-icons/Feather';
import { View } from 'react-native';
import {
    Container,
    Title,
    Label,
    Input,
    TipoContainer,
    TipoButton,
    TipoSelecionado,
    TipoText,
    TipoTextSelecionado,
    RegistrarButton,
    RegistrarText,
} from "./style";

export default function Registro() {
    const { adicionarMovimentacao } = useContext(MovContext);

    const [nome, setNome] = useState("");
    const [valor, setValor] = useState("");
    const [tipo, setTipo] = useState(null); // "receita" ou "despesa"

    function registrar() {
        if (!nome || !valor || !tipo) {
            alert("Preencha todos os campos e selecione o tipo.");
            return;
        }

        const dados = {
            description: nome.trim(),
            value: Number(valor),
            type: tipo,
            date: new Date().toISOString(),
        };

        adicionarMovimentacao(dados);
        setNome("");
        setValor("");
        setTipo(null);
        alert("Movimentação registrada com sucesso!");
    }

    return (
        <Container>
            <Label>Registrar</Label>

            <Input
                placeholder="Nome"
                value={nome}
                onChangeText={setNome}
            />

            <Input
                placeholder="Valor desejado"
                keyboardType="numeric"
                value={valor}
                onChangeText={setValor}
            />
            <TipoContainer>
                {tipo === "receita" ? (
                    <TipoSelecionado onPress={() => setTipo("receita")}>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
                            <Icon name="arrow-up" size={20} color="#6567DD" />
                            <TipoTextSelecionado>Receita</TipoTextSelecionado>
                        </View>
                    </TipoSelecionado>
                ) : (
                    <TipoButton onPress={() => setTipo("receita")}>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
                            <Icon name="arrow-up" size={20} color="#171717" />
                            <TipoText>Receita</TipoText>
                        </View>
                    </TipoButton>
                )}

                {tipo === "despesa" ? (
                    <TipoSelecionado onPress={() => setTipo("despesa")}>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
                            <Icon name="arrow-down" size={20} color="#6567DD" />
                            <TipoTextSelecionado>Despesa</TipoTextSelecionado>
                        </View>
                    </TipoSelecionado>
                ) : (
                    <TipoButton onPress={() => setTipo("despesa")}>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
                            <Icon name="arrow-down" size={20} color="#171717" />
                            <TipoText>Despesa</TipoText>
                        </View>
                    </TipoButton>
                )}
            </TipoContainer>
            <RegistrarButton onPress={registrar}>
                <RegistrarText>Registrar</RegistrarText>
            </RegistrarButton>
        </Container>
    );
}