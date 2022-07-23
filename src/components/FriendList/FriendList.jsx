import friends from '../../data/friends';
import s from './FriendList.module.css';

import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = () => {
  return (
    <ul className={s.friendList}>
      <FriendListItem friends={friends} />
    </ul>
  );
};
