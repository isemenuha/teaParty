const React = require('react');
const Layout = require('./Layout');
const AdminCab = require('./AdminCab');
const UserCab = require('./UserCab');

module.exports = function Profile({ data, user, myComments, userName, teas }) {
  return (
    <Layout name = { userName } user = { user }>
      {user.role === "admin" ? 
      (
        <div className='tea-cards'>
          <script defer src ="/js/admin.profile.js"/>
        <AdminCab data = {data}/>
        </div>
        ) : (
          <div className='cards'>  
          <script defer src ="/js/profile.js"/>
<UserCab myComments = {myComments} data = { data } user = { user } name = { userName } teas = {teas} />
      </div>
      )}
    </Layout>
  )
};