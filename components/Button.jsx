export default function Button({ paddingX, paddingY, text, fontSize, onClick }) {
    const style = {
        border: "none",
        backgroundColor: "#EF9B0F",
        padding: `${paddingY} ${paddingX}`,
        fontSize: fontSize,
        fontWeight: "bold",
        borderRadius: "5px"
    }
    
    return <button style={style} onClick={onClick}>{text}</button>;
}