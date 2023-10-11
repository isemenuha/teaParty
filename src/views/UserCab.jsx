const React = require('react');
const Layout = require('./Layout');

module.exports = function UserCab() {
  return (
    <Layout>
      {myComments.map((el, index) => (
        <div key={index} className="card" data-id={el.id}>
          <img src="..." className="card-img-top" alt="фото" />
          <div className="card-body">
            <h5 className="card-title">{el.type}</h5>
            <p className="card-text">{el.description}</p>
            <div className="btn-group" role="group" aria-label="Основной смешанный стиль">
              <button type="button" className="btn btn-danger delete">
                Удалить
              </button>
              <a type="button" href="/update" className="btn btn-warning update">
                Редактировать
              </a>
            </div>
          </div>
        </div>
      ))}
    </Layout>
  );
}