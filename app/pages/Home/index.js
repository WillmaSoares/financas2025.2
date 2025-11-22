import React, { useContext } from "react";
import { ScrollView, Platform, View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MovContext } from "../../context/movimentacao";

import {
    BackGround,
    Container,
    CardArea,
    Card,
    CardLabel,
    CardValue,
    ListHeader,
    ListTitle,
    MovItem,
    Tag,
    MovValue,
} from "./style";

export default function Home() {
    const {
        movimentacoes,
        entradas,
        saidas,
        saldo,
        excluirMovimentacao,
    } = useContext(MovContext);

    return (
        <BackGround>
            <Container behavior={Platform.OS === "ios" ? "padding" : undefined} enabled>
                <ScrollView style={{ width: "100%" }}>
                    <ListHeader>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Feather
                                name="calendar"
                                size={22}
                                color="#000"
                                style={{ marginRight: 6 }}
                            />
                            <ListTitle>Últimas movimentações</ListTitle>
                        </View>
                    </ListHeader>


                    <CardArea>
                        <Card bg="#3B3DBF">
                            <CardLabel>Saldo atual</CardLabel>
                            <CardValue>
                                {new Intl.NumberFormat("pt-BR", {
                                    style: "currency",
                                    currency: "BRL",
                                }).format(Number(saldo) || 0)}
                            </CardValue>
                        </Card>

                        <Card bg="#00B94A">
                            <CardLabel>Entradas</CardLabel>
                            <CardValue>
                                {new Intl.NumberFormat("pt-BR", {
                                    style: "currency",
                                    currency: "BRL",
                                }).format(Number(entradas) || 0)}
                            </CardValue>
                        </Card>
                        <Card bg="#EF463A">
                            <CardLabel>Saídas</CardLabel>
                            <CardValue>
                                {new Intl.NumberFormat("pt-BR", {
                                    style: "currency",
                                    currency: "BRL",
                                }).format(Number(saidas) || 0)}
                            </CardValue>
                        </Card>
                    </CardArea>

                    <ListHeader>
                        <ListTitle>Últimas movimentações</ListTitle>
                    </ListHeader>

                    {movimentacoes.length === 0 ? (
                        <MovItem>
                            <Tag bg="#adb5bd">Nenhuma </Tag>
                            <MovValue>
                                {new Intl.NumberFormat("pt-BR", {
                                    style: "currency",
                                    currency: "BRL",
                                }).format(0)}
                            </MovValue>
                        </MovItem>
                    ) : (
                        movimentacoes.map((item) => (
                            <MovItem
                                key={item.id}
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <View>
                                    <Tag bg={item.type === "receita" ? "#00B94A" : "#EF463A"}>
                                        {item.type}
                                    </Tag>
                                    <MovValue>
                                        {new Intl.NumberFormat("pt-BR", {
                                            style: "currency",
                                            currency: "BRL",
                                        }).format(Number(item.value) || 0)}
                                    </MovValue>
                                </View>

                                <TouchableOpacity onPress={() => excluirMovimentacao(item.id)}>
                                    <Feather name="trash-2" size={20} color="#EF463A" />
                                </TouchableOpacity>
                            </MovItem>
                        ))
                    )}
                </ScrollView>
            </Container>
        </BackGround>
    );
}