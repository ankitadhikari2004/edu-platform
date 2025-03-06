// Account.js
import React from 'react';

export const Account = ({ account }) => {
  return (
    <div>
      <h2>Account</h2>
      <p>Username: {account.username}</p>
      <p>Email: {account.email}</p>
    </div>
  );
};
