import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/styles';

import { deletePerson } from '../servers/peopleCrud';

export function CardPersonal({ item, navigation, refresh }) {

    return (
        <View style={styles.card}>

            <View>
                <Text style={styles.name}>
                    {item.firstName} {item.lastName}
                </Text>

                <Text style={styles.email}>
                    {item.email}
                </Text>

                <Text style={styles.phone}>
                    {item.phone}
                </Text>
            </View>

            <View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("AddEdit", { person: item })}
                >
                    <Text style={styles.buttonText}>Editar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonDanger}
                    onPress={async () => {
                        await deletePerson(item.id);
                        refresh();
                    }}
                >
                    <Text style={styles.buttonText}>Excluir</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}