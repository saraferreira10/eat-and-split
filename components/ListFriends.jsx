import FriendCard from "./FriendCard";

export default function ListFriends({ arr, onSelectFriend, selectedFriend, onCloseCard }) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "fit-content",
            gap: "1rem"
        }}>
            <ul>
                {arr.map((friend, idx) => (
                        <FriendCard key={idx} id={friend.id} name={friend.name} imgUrl={friend.imgUrl} debit={friend.debit} onSelectFriend={onSelectFriend} selectedFriend={selectedFriend} onCloseCard={onCloseCard} />
                ))}
            </ul>


        </div>
    );
}