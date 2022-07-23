import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

export const FriendListItem = ({ friends }) => {
  return (
    <>
      {friends.map(({ id, avatar, isOnline, name }) => {
        return (
          <li className={s.item} key={id}>
            <span
              className={s.status}
              style={{
                color: isOnline ? 'green' : 'red',
              }}
            >
              {isOnline ? 'Online' : 'Offline'}
            </span>
            <img
              className={s.avatar}
              src={avatar}
              alt="User avatar"
              width="48"
            />
            <p className={s.name}>{name}</p>
          </li>
        );
      })}
    </>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string,
      isOnline: PropTypes.bool,
      name: PropTypes.string,
    })
  ),
};
