const React = require('react');
const Layout = require('./Layout');

module.exports = function TeaCard({ tea, name, comments }) {
  return (
    <Layout name={name}>
      <script defer src="/js/teacard.js" />
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md">
            {tea.map((tea, index) => (
              <div key={index}>
                <div className="card mb-3 teacard">
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img src={`${tea.image}`} className="card-img shadow-sm" alt="Фото чая" />
                    </div>
                    <div className="col-md-8 d-flex align-items-center">
                      <div className="card-body">
                        <h3 className="card-title">{tea.type}</h3>
                        <p className="card-text">{tea.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="mt-5">
              <h4 className="mt-5">Комментарии</h4>

              {comments.map((el, index) => (
                <div className="card mb-3">
                  <div className="card-header">
                    <h5 className="card-title">{el.User.name}</h5>
                    <small className="text-muted">{el.updatedAt.toLocaleString('ru-RU')}</small>
                  </div>
                  <div className="card-body">
                    <p className="card-text">{el.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="row mt-5">
              <div className="col-md-12">
                <form action="/comments/add" method="POST" id="commentForm">
                  <div className="mb-3">
                    <label htmlFor="comment" className="form-label">
                      Добавить комментарий
                    </label>
                    <textarea name="text" className="form-control" id="comment" rows="3"></textarea>
                  </div>
                  <input type="hidden" name="teaId" value={tea[0]?.id} />
                  <button type="submit" className="btn btn-primary">
                    Отправить
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
