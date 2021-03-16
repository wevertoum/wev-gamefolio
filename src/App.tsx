import React from "react";
import { AppProvider } from "contexts/AppContext";
import MainRouter from "routes/MainRouter";

function App() {
  return (
    <AppProvider>
        <MainRouter />
    </AppProvider>
  );
}

export default App;
