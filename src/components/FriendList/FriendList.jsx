import friends from '../../data/friends';

import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = () => {
  return (
    <ul className="friend-list">
      <FriendListItem friends={friends} />
    </ul>
  );
};
