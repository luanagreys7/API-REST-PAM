import { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";

import styles from "../Styles/styles";

import { createPerson, updatePerson } from "../../Backend/servers/peopleCrud";

export default function AddEditScreen({ route, navigation }) {

    const person = route.params?.person;

    const [firstName, setFirstName] = useState(person?.firstName || '');
    const [lastName, setLastName] = useState(person?.lastName || '');
    const [email, setEmail] = useState(person?.email || '');
    const [phone, setPhone] = useState(person?.phone || '');

    async function save() {
        
        const data = { 
            firstName, 
            lastName, 
            email, 
            phone 
        };

        if (person) {
            await updatePerson(person.id, data);
        } else {
            await createPerson(data);
        }
        navigation.goBack();
    }

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Adicionar pessoa</Text>

            <TextInput
                style={styles.searchInput}
                placeholder="Nome"
                placeholderTextColor="#999"
                value={firstName}
                onChangeText={setFirstName}
            />
            <TextInput
                style={styles.searchInput}
                placeholder="Sobrenome"
                placeholderTextColor="#999"
                value={lastName}
                onChangeText={setLastName}
            />
            <TextInput
                style={styles.searchInput}
                placeholder="Email"
                placeholderTextColor="#999"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.searchInput}
                placeholder="Celular"
                placeholderTextColor="#999"
                value={phone}
                onChangeText={setPhone}
            />

            <TouchableOpacity style={styles.button} onPress={save}>
                <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonDanger} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>

        </View>
    );
}