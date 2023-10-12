const React = require('react');

const Layout = require('./Layout');

module.exports = function Login() {
  return (
    <Layout>
      <div className="container mt-5 pb-5">
        <div className="row">
          <div className="col-12">
            <div className="globalRegDiv">
              <div className="regDiv">
                <h2>Регистрация</h2>
                <script defer src="/js/register.js" />
                <form action="/register" method="POST" id="loginForm">
                  <input name="name" type="text" className="form-control mt-2" id="exampleInput1" placeholder="Ваше имя" />
                  <input name="email" type="email" className="form-control mt-2" id="exampleInput2" placeholder="Email" />
                  <input name="password" type="password" className="form-control mt-2" id="exampleInput3" placeholder="Пароль" />
                  <button type="submit" className="btn btn-primary mt-3">
                    Зарегистрироваться
                  </button>
                </form>
                <h3 className="regMsg"></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
