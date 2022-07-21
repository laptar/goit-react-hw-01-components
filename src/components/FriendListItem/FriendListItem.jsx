import PropTypes from 'prop-types';
export const FriendListItem = ({ friends }) => {
  return (
    <>
      {friends.map(({ id, avatar, isOnline, name }) => {
        return (
          <li className="item" key={id}>
            <span className="status"></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p
              style={{
                color: isOnline ? 'green' : 'red',
              }}
            >
              {isOnline ? 'Online' : 'Offline'}
            </p>
            <p className="name">{name}</p>
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
