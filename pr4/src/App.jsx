import { useEffect, useState } from "react"
import generateUniqueId from 'generate-unique-id';
import BookingForm from "./components/BookingForm/BookingForm"
import PeopleBooked from "./components/PeopleBooked/PeopleBooked"

function App() {


  const [input, setInput] = useState({
    fname: '',
    lname: '',
    email: '',
    contact: '',
    people: '',
    date: '',
    room: '',
    address: ''
  });

  const [data, setData] = useState(() => {
    const datas = JSON.parse(localStorage.getItem('data'));
    return datas || [];
  });

  const [isEdit, setIsEdit] = useState(false);

  const [isId, setIsId] = useState(null);


  const handleInput = (e) => {

    let name = e.target.name;
    let value = e.target.value;

    setInput({ ...input, [name]: value });

  };


  const handleSubmit = (e) => {

    e.preventDefault();

    if (isEdit === true) {

      let records = [...data];

      let updatedData = records.map((record) => {
        if (record.id == isId) {
          return record = input
        } else {
          return record;
        }
      });

      setData(updatedData);

    } else {

      let obj = {
        id: generateUniqueId({
          length: 5,
          useLetters: false
        }),
        ...input
      };

      setData([...data, obj]);

    }

    setInput({
      fname: '',
      lname: '',
      email: '',
      contact: '',
      people: '',
      date: '',
      room: '',
      address: ''
    });

  };


  const handleEdit = (id) => {

    const records = [...data];

    const updatedData = records.filter((record) => {
      return id === record.id;
    });

    setInput(updatedData[0]);

    setIsEdit(true);
    setIsId(id);

  };


  const handleDelete = (id) => {

    const records = [...data];

    const deletedData = records.filter((record) => {
      return id !== record.id;
    });

    setData(deletedData);

  };


  useEffect(() => {

    localStorage.setItem('data', JSON.stringify(data));

  }, [data]);


  useEffect(() => {

    const datas = JSON.parse(localStorage.getItem('data'));

    if (datas !== null) {
      setData(datas);
    };

  }, []);


  return (
    <>
      <BookingForm input={input} handleInput={handleInput} handleSubmit={handleSubmit} />
      <PeopleBooked data={data} handleEdit={handleEdit} handleDelete={handleDelete} />
    </>
  )


}

export default App
