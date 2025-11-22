import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import api from "../services/api";

export const MovContext = createContext({});

function MovProvider({ children }) {
    const [movimentacoes, setMovimentacoes] = useState([]);
    const [entradas, setEntradas] = useState(0);
    const [saidas, setSaidas] = useState(0);
    const [saldo, setSaldo] = useState(0);

    useEffect(() => {
        carregarMovimentacoes();
        carregarSaldo();
    }, []);

    async function carregarMovimentacoes() {
        try {
            const token = await AsyncStorage.getItem("@token");
            const response = await api.get("/receives", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setMovimentacoes(response.data);
        } catch (err) {
            console.log("Erro ao carregar movimentações:", err);
        }
    }

    function limparValor(valor) {
        if (valor === null || valor === undefined) return 0;

        if (typeof valor === "string") {
            return Number(
                valor
                    .replace("R$", "")
                    .replace(/\./g, "")
                    .replace(",", ".")
                    .trim()
            );
        }

        if (typeof valor === "number") {
            return valor;
        }

        return 0;
    }

    async function carregarSaldo() {
        try {
            const token = await AsyncStorage.getItem("@token");
            const response = await api.get("/balance", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const dados = response.data;

            const entradaObj = dados.find((item) => item.tag === "receita");
            const saidaObj = dados.find((item) => item.tag === "despesa");
            const saldoObj = dados.find((item) => item.tag === "saldo");

            const entradas = entradaObj?.saldo || 0;
            const saidas = saidaObj?.saldo || 0;
            const saldo = saldoObj?.saldo || 0;

            setEntradas(limparValor(entradas));
            setSaidas(limparValor(saidas));
            setSaldo(limparValor(saldo));

            console.log("Saldo carregado:", { entradas, saidas, saldo });
        } catch (err) {
            console.log("Erro ao carregar saldo:", err);
        }
    }

    async function adicionarMovimentacao(dados) {
        try {
            const token = await AsyncStorage.getItem("@token");
            await api.post("/receive", dados, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            carregarMovimentacoes();
            carregarSaldo();
        } catch (err) {
            console.log("Erro ao adicionar movimentação:", err);
        }
    }

    async function excluirMovimentacao(id) {
        try {
            console.log(" ID enviado para exclusão:", id);
            const token = await AsyncStorage.getItem("@token");

            await api.delete("/receives/delete", {
                params: { item_id: id },
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            carregarMovimentacoes();
            carregarSaldo();
            Alert.alert("Sucesso", "Movimentação excluída com sucesso!");
        } catch (err) {
            console.log("Erro ao excluir movimentação:", err.response?.data || err);
            Alert.alert("Erro", "Não foi possível excluir a movimentação.");
        }
    }

    return (
        <MovContext.Provider
            value={{
                movimentacoes,
                entradas,
                saidas,
                saldo,
                adicionarMovimentacao,
                excluirMovimentacao,
                carregarSaldo,
            }}
        >
            {children}
        </MovContext.Provider>
    );
}

export default MovProvider;