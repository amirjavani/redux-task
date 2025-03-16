import { Route } from "react-router"
import { Routes } from "react-router"
import Layout from "./Layouts/Layout"


function App() {

  return (
    <Routes>
      <Route path={'/'} element={<Layout>main</Layout>}/>
      <Route path={'/home'} element={<Layout>home</Layout>}/>

    </Routes>
  )
}

export default App
