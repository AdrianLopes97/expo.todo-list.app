import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import React from "react";
import { Feather } from "@expo/vector-icons"; // Import do ícone


type Props = {
    name: string;
    done: boolean;
    onRemove: () => void;
    onCheck: () => void;
};

export function Task(props: Props) {
    return (
        <View style={styles.container}>
            <Text style={[styles.taskText, props.done && styles.completedTaskText]}>
                {props.name}
            </Text>
            <TouchableOpacity style={styles.buttonRemove} onPress={props.onRemove}>
                <Feather name="trash-2" size={20} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity 
                style={[
                    styles.buttonCheck, 
                    !props.done ? styles.buttonCheckDone : styles.buttonCheckUndone
                ]} 
                onPress={props.onCheck}
            >
                <Text style={styles.buttonTextCheck}>
                {props.done ? "✖" : "✔"}
                </Text>
            </TouchableOpacity>
        </View>                
    )
}
