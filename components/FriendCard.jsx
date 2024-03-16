import Button from "./Button";
import "./friend-card.css";

export default function Card({ id, imgUrl = "", name, debit, onSelectFriend, selectedFriend, onCloseCard }) {

    const divImg = {
        backgroundImage: imgUrl !== null && imgUrl !== "" ? `url(${imgUrl})` : "url('https://cdn.vectorstock.com/i/preview-1x/66/14/default-avatar-photo-placeholder-profile-picture-vector-21806614.jpg')",
        width: "2rem",
        height: "2rem",
        backgroundSize: "cover",
        borderRadius: "100%",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundPosition: "center, center",
        backgroundColor: "gray"
    }

    return (
        <div className="card">
            <div>
                <div style={divImg}></div>
            </div>

            <div className="box_content">
                <span>{name}</span>
                {debit > 0 && (
                    <p style={{ color: "red" }}>Você deve R$ {Number(debit)} a {name}</p>
                )}

                {debit < 0 && (
                    <p style={{ color: "green" }}>{name} deve R$ {Math.abs(debit)} a você</p>
                )}

                {debit === 0 && (
                    <p>Você e {name} estão quites</p>
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