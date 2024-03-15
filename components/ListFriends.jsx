import Button from "./Button";
import FriendCard from "./FriendCard";

export default function ListFriends({ arr }) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "fit-content",
            gap: "1rem"
        }}>
            <ul>
                {arr.map((friend, idx) => (
                    <li key={idx}>
                        <FriendCard name={friend.name} imgUrl={friend.imgUrl} debit={friend.debit} />
                    </li>
                ))}
            </ul>


        </div>
    );
}