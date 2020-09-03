import React from "react";

import Profile from './Task-01/Profile';
import Statistics from './Task-02/Statistics';
import FriendList from './Task-03/FriendList'
import TransactionHistory from './Task-04/TransactionHistory';
import Title from './helpers/Tittle'

import user from "../assets/user.json";
import statisticalData from '../assets/statistical-data.json';
import friends from '../assets/friends.json';
import transactions from '../assets/transactions.json';

const App = () => {
  return (
    <>
    <Title text='TASK 1'/>
    <Profile {...user}/>
    <Title text='TASK 2'/>
    <Statistics title="UPLOAD STATS" stats={statisticalData}/>
    <Title text='TASK 3'/>
    <FriendList friends={friends}/>
    <Title text='TASK 4'/>
    <TransactionHistory items={transactions} />
  </>
  )
};

export default App;
