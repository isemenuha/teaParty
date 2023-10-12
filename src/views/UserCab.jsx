const React = require('react');
const Layout = require('./Layout');

module.exports = function UserCab({ myComments, teas, user, userName }) {
  return (
    <>
      <div className="container mt-5 pb-5">
        <div className="row">
          <div className="col-12 col-md">
            <h4>Комментарии</h4>
            {myComments.map((el, index) => {
              const tea = teas.find((tea) => tea.id === el.teaId);
              return (
                <div className="cardCover mt-3">
                  <div key={index} className="card" data-id={el.id}>
                    <div className="card-body">
                      <p className="card-title">{tea ? tea.type : 'Нет названия чая'}</p>
                      <p className="card-text">{el.text}</p>
                      <button id={el.id} type="button" className="delete-btn">
                        Удалить
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
