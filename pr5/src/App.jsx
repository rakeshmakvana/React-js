import { Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Add from "./components/Add/Add"
import View from "./components/View/View"
import Edit from "./components/Edit/Edit"

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Add" element={<Add />} />
        <Route path="/View" element={<View />} />
        <Route path="/Edit" element={<Edit />} />
      </Routes>
    </>
  )

}

export default App
