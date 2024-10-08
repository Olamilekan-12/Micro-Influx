import { Navigate, replace, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Dashboard from "./page/Dashboard";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />
      <Route path="*" element={<Navigate to={"/"} replace />} />
    </Routes>
  );
};

export default App;
