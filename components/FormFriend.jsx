import Button from "./Button";
import "./form-friend.css";
import Input from "./Input";

export default function Form({ isFormOpen, addFriend, inputName, setName, inputImg, setImg }) {
  return (
    isFormOpen && <form>

      <Input text={"👫 Nome do amigo"} width={"100%"}>
        <input type="text" value={inputName} onChange={(e) => setName(e.target.value)} />
      </Input>

      <Input text={"🖼️ URL da imagem"} width={"100%"}>
        <input type="text" value={inputImg} onChange={(e) => setImg(e.target.value)} />
      </Input>

      <div className="box_btn">
        <Button paddingX={"1rem"} paddingY={"0.5rem"} text={"Add"} fontSize={"10px"} onClick={(e) => {
          e.preventDefault();
          addFriend();
        }} />
      </div>

    </form>
  );
}