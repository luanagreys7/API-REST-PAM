import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        paddingTop: 50,
        flex: 1,
        padding: 20,
        backgroundColor: "#ffbaf4"
    },

    title: {
        fontSize: 22,
        textAlign: "center",
        marginBottom: 20,
        color: "#a163a6", // 👈 mude para a cor desejada
    },
    card: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        padding: 10,
        marginBottom: 10,
        borderRadius: 12
    },

    name: {
        fontSize: 16
    },

    email: {
        fontSize: 12
    },

    phone: {
        fontSize: 12
    },

    searchInput: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 12,
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginVertical: 10,
        fontSize: 14,
        backgroundColor: '#fff',
    },

    button: {
        paddingVertical: 10,
        paddingHorizontal: 18,
        backgroundColor: "#d15cbe",
        borderRadius: 12,
        marginVertical: 4,
        alignItems: 'center',
    },

    buttonDanger: {
        paddingVertical: 10,
        paddingHorizontal: 18,
        backgroundColor: "#e53935",
        borderRadius: 12,
        marginVertical: 4,
        alignItems: 'center',
    },

    buttonText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: 'bold',
    },
});