import React from 'react';
import Profile from './socialProfile/socialProfile';
import user from './socialProfile/user.json';
import Statistics from './statistics/statistics';
import statisticalData from './statistics/statistical-data.json';
import FriendList from './friendList/friendList';
import friends from './friendList/friends.json';
import TransactionHistory from './transactionHistory/transactionHistory';
import transactions from './transactionHistory/transactions.json';


const App = () => (
  <>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </>
);

export default App;
