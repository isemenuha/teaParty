const React = require('react');

const Layout = require('./Layout');

module.exports = function Login() {
  return (
    <Layout>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <div className="globalLogDiv">
              <div className="logDiv">
                <h2>Войдите на сайт</h2>
                <script defer src="/js/login.js" />
                <form method="POST" id="loginForm">
                  <input name="email" type="text" className="form-control  mt-2" id="exampleInput1" placeholder="Email" />
                  <input name="password" type="password" className="form-control  mt-2" id="exampleInput2" placeholder="Пароль" />
                  <button type="submit" className="btn btn-primary mt-3">
                    Войти
                  </button>
                </form>
                <h3 className="logMsg"></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
