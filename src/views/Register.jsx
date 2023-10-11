const React = require('react');

const Layout = require('./Layout');

module.exports = function Login() {
  return (
    <Layout>
      <div className='globalRegDiv'>
        <div className='regDiv'>
      <h2>Регистрация</h2>
      <script defer src="/js/register.js" />
      <form action="/register" method="POST" id="loginForm">
        <label htmlFor="exampleInput1" className="form-label">Name</label>
        <input name="name" type="text" className="form-control" id="exampleInput1" />
        <label htmlFor="exampleInput2" className="form-label">Email</label>
        <input name="email" type="email" className="form-control" id="exampleInput2" />
        <label htmlFor="exampleInput3" className="form-label">Password</label>
        <input name="password" type="password" className="form-control" id="exampleInput3" />
        <button type="submit" className="btn btn-primary">Отправить</button>
      </form>
      <h3 className='regMsg'></h3>
      </div>
      </div>
    </Layout>
  );
};
