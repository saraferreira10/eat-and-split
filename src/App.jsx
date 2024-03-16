import './App.css'
import { useState } from 'react'
import ListFriends from '../components/ListFriends'
import Button from '../components/Button';
import FormFriend from '../components/FormFriend';
import CardBill from '../components/CardBill';

function App() {
  const friendsArr = [
    {
      id: 1,
      name: "Rebeca",
      imgUrl: "../src/assets/imgProfile1.jpg",
      debit: 200
    },
    {
      id: 2,
      name: "maria",
      imgUrl: "../src/assets/imgProfile1.jpg",
      debit: -100
    },

  ]

  const [list, setList] = useState(friendsArr);
  const [isFormOpen, setFormOpen] = useState(false);
  const [inputName, setinputName] = useState("");
  const [inputImg, setinputImg] = useState("");
  const [selectedFriend, setSelectedFriend] = useState(-1);

  function closeForm() {
    setFormOpen(false);
  }

  function openForm() {
    setFormOpen(true);
    setSelectedFriend(-1);
  }

  function createFriend(name, imgUrl, debit) {
    return {
      id: Date.now(),
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

  function selectFriend(id) {
    if (id === selectedFriend) return;
    setFormOpen(false)
    setSelectedFriend(id);
  }

  function closeBillCard() {
    setSelectedFriend(-1);
  }

  function returnName() {
    const friend = list.find(friend => friend.id === selectedFriend);
    return friend ? friend.name : "";
  }

  return (
    <>
      <div className="card_app">
        <div style={{ maxWidth: "fit-content", display: "flex", flexDirection: "column", gap: "1rem" }}>
          <ListFriends arr={list} onSelectFriend={selectFriend} selectedFriend={selectedFriend} onCloseCard={closeBillCard} />

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <FormFriend closeForm={closeForm} isFormOpen={(isFormOpen && selectedFriend === -1)} addFriend={addFriend} inputName={inputName} setName={setinputName} inputImg={inputImg} setImg={setinputImg} />
            {(!isFormOpen && selectedFriend === -1) && <Button paddingX={"1rem"} paddingY={"0.5rem"} text={"Adicionar novo amigo"} fontSize={"10px"} onClick={openForm} />
            }
          </div>

          {(isFormOpen && selectedFriend === -1) && (
            <div style={{ display: "flex", justifyContent: "flex-end", padding: "0 1rem" }}>
              <Button paddingX={"1rem"} paddingY={"0.5rem"} text={"Close"} fontSize={"10px"} onClick={closeForm} />
            </div>
          )}
        </div>

        <div>
          {selectedFriend !== -1 && <CardBill name={returnName()} />}
        </div>
      </div>
    </>
  )
}

export default App
