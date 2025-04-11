import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#1A1A1A",
        marginBottom: 8,
        paddingHorizontal: 24,
        fontFamily: "Inter",
    },
    containerInput: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#262626",
        padding: 12,
        marginBottom: 8,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#333333",
        paddingHorizontal: 24,
    },
    taskText: {
        color: "#F2F2F2",
        fontSize: 14,
        lineHeight: 20,
        marginLeft: 8,
        flex: 1,
        overflow: "hidden",
    },
    completedTaskText: {
        textDecorationLine: "line-through",
        color: "#808080",
    },
    buttonTextRemove: {
        fontSize: 24,
        color: '#fff',
    },
    buttonRemove: {
        width: 32,
        height: 32,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
        marginLeft: 8,
    },
    buttonCheck: {
        width: 24,
        height: 24,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        borderWidth: 2,
    },
    buttonCheckDone: {
        borderColor: "#8284FA",
        backgroundColor: "#8284FA",
    },
    buttonCheckUndone: {
        borderColor: "#4EA8DE",
        backgroundColor: "transparent",
    },
    buttonTextCheck: {
        color: "#F2F2F2",
        fontSize: 12,
        fontWeight: "bold",
    },
}); 