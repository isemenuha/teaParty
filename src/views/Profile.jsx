const React = require('react');
const Layout = require('./Layout');
const AdminProfile = require('./AdminCab');
const UserProfile = require('./UserProfile');
const UserCab = require('./UserCab');

module.exports = function Profile({ data, user }) {
  return (
    <Layout>
      {user.role === "admin" ? 
      (
<AdminProfile/>
      ) : (
<UserCab/>
      )}
    </Layout>
  )
};
