import PropTypes from 'prop-types';
export default function Friend({ avatar, name, isOnline }) {
  return (
    <div>
      <span clasName="status"></span>
      <img clasName="avatar" src={avatar} alt="User avatar" width="48" />
      <p clasName="name">{name}</p>
    </div>
  );
}

Friend.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
