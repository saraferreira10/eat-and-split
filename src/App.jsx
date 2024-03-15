import './App.css'
import { useState } from 'react'
import ListFriends from '../components/ListFriends'
import Button from '../components/Button';
import FormFriend from '../components/FormFriend';

function App() {
  const friendsArr = [
    {
      name: "Rebeca",
      imgUrl: "../src/assets/imgProfile1.jpg",
      debit: 200
    },
    {
      name: "maria",
      imgUrl: "../src/assets/imgProfile1.jpg",
      debit: -100
    },

  ]

  const [list, setList] = useState(friendsArr);
  const [isFormOpen, setFormOpen] = useState(false);
  const [inputName, setinputName] = useState("");
  const [inputImg, setinputImg] = useState("");

  function closeForm() {
    setFormOpen(false);
  }

  function openForm() {
    setFormOpen(true);
  }

  function createFriend(name, imgUrl, debit) {
    return {
      name: name,
      imgUrl: imgUrl,
      debit: debit
    }
  }

  function clearInputs() {
    setinputImg("");
    setinputName("");
  }

  function addFriend() {
    if (inputName.trim() !== "") {
      setList((list) => [...list, createFriend(inputName, inputImg, 0)]);
    } else {
      alert("Escreva um nome válido!");
    }

    clearInputs();
  }

  return (
    <>
      <div style={{ maxWidth: "fit-content", display: "flex", flexDirection: "column", gap: "1rem" }}>
        <ListFriends arr={list} />

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <FormFriend closeForm={closeForm} isFormOpen={isFormOpen} addFriend={addFriend} inputName={inputName} setName={setinputName} inputImg={inputImg} setImg={setinputImg} />
          {!isFormOpen && <Button paddingX={"1rem"} paddingY={"0.5rem"} text={"Adicionar novo amigo"} fontSize={"10px"} onClick={openForm} />
          }
        </div>

        {isFormOpen && (
          <div style={{ display: "flex", justifyContent: "flex-end", padding: "0 1rem" }}>
            <Button paddingX={"1rem"} paddingY={"0.5rem"} text={"Close"} fontSize={"10px"} onClick={closeForm} />
          </div>
        )}
      </div>
    </>
  )
}

export default App
