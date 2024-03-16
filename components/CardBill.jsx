import { useState } from "react";
import Button from "./Button";
import "./card-bill.css";
import Input from "./Input";

export default function CardBill({ name, splitABill }) {

    const [billValue, setBillValue] = useState(0);
    const [yourDebt, setYourDebt] = useState(0);
    const [whoIsPaying, setWhoIsPaying] = useState("you");
    const friendDebt = billValue - yourDebt;

    return (
        <div className="card_bill">
            <h3>SPLIT A BILL WITH {name.toUpperCase()}</h3>

            <div className="form_bill">
                <Input text={"💰 Valor da conta"} width={"100%"}>
                    <input type="number" name="bill" id="bill" step={0.05} value={billValue} onChange={(e) => {
                        if (Number(e.target.value) >= 0) setBillValue(Number(e.target.value));
                    }} />
                </Input>

                <Input text={"🧍Sua conta"} width={"100%"}>
                    <input type="text" name="your_expense" id="your_expense" value={yourDebt} onChange={(e) => {
                        if (Number(e.target.value) >= 0 && Number(e.target.value) <= billValue) setYourDebt(Number(e.target.value))
                    }} />
                </Input>

                {yourDebt > billValue && setYourDebt((e) => billValue)}

                <Input text={`👫 Conta de ${name.charAt(0).toUpperCase() + name.slice(1)}`} width={"100%"}>
                    <input type="number" name="your_friend_expense" id="your_friend_expense" step={0.05} min={0} disabled value={friendDebt} />
                </Input>

                <Input text={"🤑 Quem está pagando a conta?"} width={"100%"}>
                    <select name="who_is_paying" id="who_is_paying" value={whoIsPaying} onChange={(e)=> setWhoIsPaying(e.target.value)}>
                        <option value="you">Você</option>
                        <option value="your_friend">{name.charAt(0).toUpperCase() + name.slice(1)}</option>
                    </select>
                </Input>
            </div>

            <div className="bill_footer">
                <Button paddingX={"1rem"} paddingY={"0.5rem"} text={"Split bill"} fontSize={"10px"} onClick={() => {
                    splitABill(whoIsPaying === "you" ? friendDebt * -1 : yourDebt);
                    setBillValue(0);
                }} />
            </div>
        </div>
    );
}