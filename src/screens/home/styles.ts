import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    alignItems: "center",
    justifyContent: "flex-start",
    fontFamily: "Inter",
  },
  logoContainer: {
    backgroundColor: "#000",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 173,
  },
  logo: {
    width: 110,
    height: 32,
    resizeMode: "contain",
  },
  form: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 24,
    marginTop: -28,
    marginBottom: 42,
  },
  input: {
    backgroundColor: '#262626',
    color: '#fff',
    borderRadius: 8,
    padding: 16,
    flex: 1,
    marginRight: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#1E6F9F',
    height: 52,
    width: 52,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
  },
  countersContainer: {
    flexDirection: "row",
    width: '100%',
    justifyContent: "space-between",
    paddingHorizontal: 24,
    marginBottom: 20,
  },
  counterCreated: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  counterConcluded: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  counterLabelCreated: {
    color: "#4EA8DE",
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 8,
  },
  counterLabelConcluded: {
    color: "#8284FA",
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 8,
  },
  counterValue: {
    backgroundColor: "#333333",
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  counterText: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "bold",
  },
  lineContainer: {
    width: '100%',
    paddingHorizontal: 24,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#333333',
    marginBottom: 20,
  },
  emptyListContainer: {
    alignItems: "center",
    marginTop: 48,
  },
  emptyListIcon: {
    width: 56,
    height: 56,
    marginBottom: 16,
  },
  emptyListText: {
    color: '#808080',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 16,
    fontWeight: "bold",
  },
  emptyListSubText: {
    color: '#808080',
    fontSize: 12,
    textAlign: 'center',
  },
});