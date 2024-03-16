import Button from "./Button";
import "./card-bill.css";
import Input from "./Input";

export default function CardBill({ name }) {
    return (
        <div className="card_bill">
            <h3>SPLIT A BILL WITH {name.toUpperCase()}</h3>

            <div className="form_bill">
                <Input text={"💰 Valor da conta"} width={"100%"}>
                    <input type="number" name="bill" id="bill" step={0.05} />
                </Input>

                <Input text={"🧍Sua conta"} width={"100%"}>
                    <input type="number" name="your_expense" id="your_expense" step={0.05} min={0}/>
                </Input>

                <Input text={`👫 Conta de ${name}`} width={"100%"}>
                    <input type="number" name="your_friend_expense" id="your_friend_expense" step={0.05} min={0} disabled />
                </Input>

                <Input text={"🤑 Quem está pagando a conta?"} width={"100%"}>
                    <select name="who_is_paying" id="who_is_paying">
                        <option value="you">Você</option>
                        <option value="your_friend" >{name}</option>
                    </select>
                </Input>
            </div>

            <div className="bill_footer">
                <Button paddingX={"1rem"} paddingY={"0.5rem"} text={"Split bill"} fontSize={"10px"} onClick={() => alert("hello")} />
            </div>
        </div>
    );
}