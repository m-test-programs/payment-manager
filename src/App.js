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
  const setDataReady = useStore((store) => store.setDataReady);

  useEffect(() => {
    (async () => {
      await fetchInvoices({
        autoSelect: true,
      });
      await getUsers();

      setDataReady();
    })();
  }, []);

  return (
    // Display a loading screen until the data has finished loading. The state is managed within the store.
    <MainContainer>
      {dataReady ? <Dashboard /> : <LoadingScreen />}
    </MainContainer>
  );
}

export default App;
