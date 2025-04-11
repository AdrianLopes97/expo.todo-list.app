import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        marginBottom: 16,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    taskText: {
        color: '#fff',
        fontSize: 16,
        flex: 1,
        marginLeft: 16,
    },
    completedTaskText: {
        textDecorationLine: 'line-through',
        color: '#aaa',
    },
    buttonTextRemove: {
        fontSize: 24,
        color: '#fff',
    },
    buttonTextCheck: {
        fontSize: 14,
        color: '#fff',
    },
    buttonRemove: {
        backgroundColor: '#E23C44',
        height: 24,
        width: 24,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        marginBottom: 5,
        marginRight: 4,
        borderRadius: 5,
    },
    buttonCheck: {
        height: 24,
        width: 24,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        marginBottom: 5,
        marginRight: 4,
        borderRadius: 5,
    },
    buttonCheckDone: {
        backgroundColor: "#31CF67", // Verde para "uncheck"
    },
    buttonCheckUndone: {
        backgroundColor: "#f44336", // Vermelho para "check"
    },
}); 