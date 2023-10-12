const React = require('react');
const Layout = require('./Layout');

module.exports = function AdminCab({data}) {
  return (
		<>
                {data.map((el, index) => (
									<div className='tea-cover'>
									<div key={index} className="card" data-id={el.id}>
									<div className="card-body">
										<h5 className="card-title"> {el.type} </h5>
										<button id = {el.id} type="button"  class="btn-danger">
											Удалить
										</button>
									</div>
									</div>
									</div>
      ))}
		<form action="/profile" method="POST" className='jopa'  encType="multipart/form-data" id="loginForm">
        <label htmlFor="exampleInput1" className="form-label">Sort</label>
        <input name="type" type="text" className="form-control" id="exampleInput1" />
        <label htmlFor="exampleInput2" className="form-label">Широта</label>
        <input name="shirota" type="text" className="form-control" id="exampleInput2" />
				<label htmlFor="exampleInput2" className="form-label">Долгота</label>
        <input name="dolgota" type="text" className="form-control" id="exampleInput3" />
        <label htmlFor="exampleInput3" className="form-label">Описание</label>
        <input name="description" type="text" className="form-control" id="exampleInput4" />
				<label htmlFor="exampleInput2" className="form-label">Загрузите изображение</label>
				<input name="file" accept="image/*" type="file" className="form-control" id="exampleInput5" />
        <button type="submit" className="btn btn-primary">Отправить</button>
      </form>
			</>
  );
}