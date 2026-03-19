import React, { use } from "react";
import { View, Text, FlatList, Button } from "react-native";

import { styles } from "../Styles/styles";

import { getPeople } from "../../Backend/servers/peopleCrud";

export default function HomeScreen() {

    // estado da lista
    const [people, setPeople] = React.useState([]);

    // função para carregar dados
    async function loadPeople() {

        const data = await getPeople();

        setPeople(data);
    }

    // executa ao abrir tela
    useEffect(() => {
        loadPeople();
    }, []);

    return (

        <View style={styles.container}>

            <Text style={styles.title}>Pessoas</Text>

            <Button 
                title="Adicionar Pessoas" 
                onPress={() => {}} />