import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import React from "react";
import { Feather } from "@expo/vector-icons";


type Props = {
    name: string;
    done: boolean;
    onRemove: () => void;
    onCheck: () => void;
};

export function Task(props: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.containerInput}>
            <TouchableOpacity 
                style={[
                    styles.buttonCheck, 
                    props.done ? styles.buttonCheckDone : styles.buttonCheckUndone
                ]} 
                onPress={props.onCheck}
            >
                <Text style={styles.buttonTextCheck}>
                    {props.done ? "✔" : ""}
                </Text>
            </TouchableOpacity>
            <Text 
                style={[styles.taskText, props.done && styles.completedTaskText]}
                ellipsizeMode="tail"
            >
                {props.name}
            </Text>
            <TouchableOpacity style={styles.buttonRemove} onPress={props.onRemove}>
                <Feather name="trash-2" size={20} color="#808080" />
            </TouchableOpacity>
            </View>     
        </View>
    )
}
