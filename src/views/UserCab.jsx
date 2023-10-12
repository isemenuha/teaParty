const React = require('react');
const Layout = require('./Layout');

module.exports = function UserCab({ myComments, teas, user, userName }) {
  return (
		<>
{myComments.map((el, index) => { 
  const tea = teas.find(tea => tea.id === el.teaId);
  return (
		<div className='cardCover'>
    <div key={index} className="card" data-id={el.id}>
      <div className="card-body">
        <p className="card-title" >{tea ? tea.type : 'Нет названия чая'}</p>
        <p className="card-text">{el.text}</p>
          <button id = {el.id} type="button" className="delete-btn">
            Удалить
          </button>
      </div>
    </div>
		</div>
  );
})}
    </>
  );
}
