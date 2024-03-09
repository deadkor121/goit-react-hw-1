import user from '../data/user.json';
import Profile from './Profile/Profile';
import friends from '../data/friends.json';
import FriendList from './FriendList/FriendList';

import transactions from '../data/transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export default function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </>
  );
}
