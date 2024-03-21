import Button from "./Button";
import "./friend-card.css";

export default function Card({ id, imgUrl = "", name, debit, onSelectFriend, selectedFriend, onCloseCard }) {

    let unsplahRandom = 'https://source.unsplash.com/800x600/?person';

    const divImg = {
        backgroundImage: imgUrl !== null && imgUrl !== "" ? `url(${imgUrl})` : `url(${unsplahRandom})`,
        width: "2rem",
        height: "2rem",
        backgroundSize: "cover",
        borderRadius: "100%",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundPosition: "center, center",
        backgroundColor: "gray"
    }

    return (
        <div className="card" style={{ backgroundColor: selectedFriend === id && "antiquewhite" }}>
            <div>
                <div style={divImg}></div>
            </div>

            <div className="box_content">
                <span>{name.charAt(0).toUpperCase() + name.slice(1)}</span>
                {debit > 0 && (
                    <p style={{ color: "red" }}>Você deve R$ {Number(debit)} a {name.charAt(0).toUpperCase() + name.slice(1)}</p>
                )}

                {debit < 0 && (
                    <p style={{ color: "green" }}>{name.charAt(0).toUpperCase() + name.slice(1)} deve R$ {Math.abs(debit)} a você</p>
                )}

                {debit === 0 && (
                    <p>Você e {name.charAt(0).toUpperCase() + name.slice(1)} estão quites</p>
                )}
            </div>

            <div style={
                { display: "flex", justifyContent: "center", alignItems: "center" }
            }>
                {id !== selectedFriend
                    ? <Button text={"Select"} paddingX={"1rem"} paddingY={"5px"} fontSize={"10px"} onClick={() => onSelectFriend(id)} />
                    : <Button text={"Close"} paddingX={"1rem"} paddingY={"5px"} fontSize={"10px"} onClick={() => onCloseCard()} />
                }

            </div>
        </div>
    );
}