export default function Friend({ avatar, name, isOnline }) {
  return (
    <div>
      <span class="status"></span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </div>
  );
}
