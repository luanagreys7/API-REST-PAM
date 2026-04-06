import { FlatList, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import styles from "../../Backend/servers/peopleCrud";

import { getPeople } from '../servers/peopleCrud';
import { CardPersonal } from '../components/CardPersonal'

export default function HomeScreen( { } ) {

    const navigation = useNavigation();
    const [people, setPeople] = useState([]);
    const [search, setSearch] = useState('');

    async function loadPeople() {

        const data = await getPeople();

        setPeople(data);
    }

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            loadPeople();
        });

        return unsubscribe
    }, [navigation]);

    const filteredPeople = people.filter((person) => {
        const term = search.toLowerCase();
        return (
            person.firstName.toLowerCase().includes(term) ||
            person.lastName.toLowerCase().includes(term) ||
            person.email.toLowerCase().includes(term) ||
            person.phone.includes(term)
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
                keyExtractor={(item) => item.id.toString()}
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