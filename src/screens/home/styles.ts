import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
  },
  eventName: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
  },
  eventDate: {
    color:'#6B6B6B',
    fontSize: 16,
  },
  completedTasksText: {
    fontSize: 16,
    color: "#4caf50", // Verde para destacar
    marginBottom: 10,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: '#1E1B26',
    color: '#fff',
    borderRadius: 8,
    marginTop: 16,
    padding: 16,
    flex: 1,
    marginRight: 12,
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
  },
  button: {
    backgroundColor: '#31CF67',
    height: 56,
    width: 56,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    borderRadius: 8,
  },
  form: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 36,
    marginBottom: 42,
  },
  emptyListText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});