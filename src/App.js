import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import MainContainer from "./components/MainContainer";
import useStore from "./store/store";
import LoadingScreen from "./pages/LoadingScreen";
import { useEffect } from "react";

function App() {
  const dataReady = useStore((store) => store.dataReady);
  const fetchInvoices = useStore((store) => store.fetchInvoices);
  const getUsers = useStore((store) => store.fetchUsers);

  useEffect(() => {
    fetchInvoices({
      autoSelect: true,
    });
    getUsers();
  }, []);

  return (
    <MainContainer>
      {dataReady ? <Dashboard /> : <LoadingScreen />}
    </MainContainer>
  );
}

export default App;
