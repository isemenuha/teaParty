const React = require('react');
const Layout = require('./Layout');

module.exports = function AdminCab() {
  return (
    <Layout>
                {data.map((el, index) => (
									<div key={index} className="card" data-id={el.id}>
										<img src="..." className="card-img-top" alt="photo" />
									<div className="card-body">
										<h5 className="card-title"> {el.type} </h5>
										<p className="card-text">{el.description}</p>
										<div class="btn-group" role="group" aria-label="Basic mixed styles example">
										<button type="button" class="btn btn-danger delete"
										>Удалить</button>
										<a type="button" href='/update' class="btn btn-warning update">Редактировать</a>
										</div>
									</div>
									</div>
      ))}
    </Layout>
  );
}