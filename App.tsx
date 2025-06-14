import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <View>
                <Text>hello world with duckphuong hihi !</Text>
            </View>
            <Text style={styles.text1}>hello world with duckphuong hihi !</Text>
            <Text>hello world with duckphuong hihi !</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text1: {
        color: 'orange',
        fontSize: 20,
        borderColor: 'red',
        borderWidth: 1,
        padding: 20,
    },
});
