import Friend from './Friend';

export default function FriendList({ friends }) {
  return (
    <ul>
      {friends.map(friend => (
        <li>
          <Friend
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}
