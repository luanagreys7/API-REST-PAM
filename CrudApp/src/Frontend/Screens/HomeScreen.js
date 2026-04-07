import { FlatList, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { useEffect, useState } from 'react';

import styles from "../Styles/styles";

import { getPeople } from '../../Backend/servers/peopleCrud';
import { CardPersonal } from '../../components/CardPersonal'

export default function HomeScreen( { navigation } ) {

    const [people, setPeople] = useState([]);
    const [search, setSearch] = useState('');

    async function loadPeople() {

        const data = await getPeople();

        setPeople(data);
    }

    useEffect(() => {
        loadPeople();
    }, []);

    const filteredPeople = (people || []).filter((person) => {
        const term = search.toLowerCase();
        return (
            person.firstName?.toLowerCase().includes(term) ||
            person.lastName?.toLowerCase().includes(term) ||
            person.email?.toLowerCase().includes(term) ||
            person.phone?.includes(term)
        );
    });

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Pessoas</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("AddEdit")}
            >
                <Text style={styles.buttonText}>Adicionar Pessoa</Text>
            </TouchableOpacity>

            <TextInput
                style={styles.searchInput}
                placeholder="Pesquisar por nome, email ou telefone..."
                placeholderTextColor="#999"
                value={search}
                onChangeText={setSearch}
            />

            <FlatList
                data={filteredPeople}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                    <CardPersonal
                        item={item}
                        navigation={navigation}
                        refresh={loadPeople}
                    />
                )}
            />

        </View>
    );
}