import { Route } from "react-router";
import { Routes } from "react-router";
import Layout from "./Layouts/Layout";
import AuthPage from "./pages/authPage";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Layout>main</Layout>} />
      <Route path={"/home"} element={<Layout>home</Layout>} />
      <Route
        path={"/auth"}
        element={
          <Layout>
            <AuthPage />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
