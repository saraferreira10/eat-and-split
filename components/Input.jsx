export default function Input({ text, children, width }) {

    return (
        <div style={{
            display: "flex",
            width: width,
            fontSize: "10px",
            fontWeight: "bold",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem"
        }}>
            <p>{text}</p>
            {children}
        </div>
    );
}