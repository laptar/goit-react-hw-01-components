import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

export const FriendListItem = ({ id, avatar, isOnline, name }) => {
  return (
    <li className={s.item}>
      <span
        className={s.status}
        style={{
          color: isOnline ? 'green' : 'red',
        }}
      >
        {isOnline ? 'Online' : 'Offline'}
      </span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
  name: PropTypes.string,
};
