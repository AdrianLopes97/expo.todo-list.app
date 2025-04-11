import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import { Task } from "../../components/task";
import { useState } from "react";
import { TaskProps } from "../../model/task.interface";
import { Image } from "react-native";

export function Home() {

  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [newTask, setNewTask] = useState('');
  const [taskCount, setTaskCount] = useState(0);

  function handleTaskAdd() {

    if (!newTask) {
      return Alert.alert('Erro', 'Digite o nome da tarefa para adicionar!');
    }

    if(tasks.some(task => task.name === newTask)) {
      return Alert.alert('Erro', 'Esta tarefa já foi adicionado!');
    }

    Alert.alert('Adicionar tarefa', `Deseja realmente adicionar a tarefa a seguir? \n\n\"${newTask}\"`, 
      [ 
        { 
          text: 'Cancelar',
          style: 'cancel' 
        }, 
        { 
          text: 'Adicionar', 
          onPress: () => (
            setTasks([...tasks, {name: newTask, done: false }]),
            setNewTask(''),
            Alert.alert('Adicionado', 'Tarefa adicionada com sucesso!')
          )
        } 
      ]);
  }

  function handleTaskRemove(name: string) {

    const taskIndex = tasks.findIndex(item => item.name === name);

    if(taskIndex === -1) {
      return Alert.alert('Erro', 'Tarefa não encontrado!');
    }

    Alert.alert('Remover tarefa', `Deseja remover? \n\n\"${name}\"`, [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: () => (
          tasks.splice(taskIndex, 1),
          setTasks([...tasks]),
          Alert.alert('Deletado', `A tarefa \"${name}\" foi removido com sucesso!`)
        ),
      },
    ]);
  }

  function handleTaskCheck(name: string) {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.name === name ? { ...task, done: !task.done } : task
      )
    );

    setTaskCount(prevCount => {
      const taskIndex = tasks.findIndex(task => task.name === name);
      const task = tasks[taskIndex];
      return task.done ? prevCount - 1 : prevCount + 1;
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image 
          source={require("../../../assets/Logo.png")} 
          style={styles.logo} 
        />
      </View>
      <View style={styles.form}>
        <TextInput
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          style={styles.input}
          onChangeText={setNewTask}
          value={newTask}
        />
        <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.countersContainer}>
        <View style={styles.counterCreated}>
          <Text style={styles.counterLabelCreated}>Criadas</Text>
          <View style={styles.counterValue}>
            <Text style={styles.counterText}>{tasks.length}</Text>
          </View>
        </View>
        <View style={styles.counterConcluded}>
          <Text style={styles.counterLabelConcluded}>Concluídas</Text>
          <View style={styles.counterValue}>
            <Text style={styles.counterText}>
              {tasks.filter(task => task.done).length}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.lineContainer}>
        <View style={styles.line} />
      </View>
      <FlatList
        data={tasks}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <Task 
            name={item.name} 
            done={item.done}
            onRemove={() => handleTaskRemove(item.name)} 
            onCheck={() => handleTaskCheck(item.name)}/>
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.emptyListContainer}>
            <Image 
              source={require("../../../assets/Clipboard.png")}
              style={styles.emptyListIcon} 
            />
            <Text style={styles.emptyListText}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.emptyListSubText}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
      />
    </View>
  );
}

