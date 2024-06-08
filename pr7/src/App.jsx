import { Route, Routes } from "react-router-dom";
import EmployeeForm from "./components/EmployeeForm/EmployeeForm";
import EmployeeView from "./components/EmployeeView/EmployeeView";
import Header from "./components/Header/Header";
import EmployeeEdit from "./components/EmployeeEdit/EmployeeEdit";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<EmployeeForm />} />
        <Route path="/Employee-View" element={<EmployeeView />} />
        <Route path="/Employee-Edit" element={<EmployeeEdit />} />
      </Routes>
    </>
  )
}

export default App
