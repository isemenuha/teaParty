const React = require('react');
const Layout = require('./Layout');

module.exports = function AdminCab({ data }) {
  return (
    <>
      <div className="container mt-5 pb-5">
        <div className="row">
          <div className="col-12 col-md">
            <h1 className="mt-5">Администрирование</h1>
            <h4 className="mt-5">Список сортов чая</h4>
            {data.map((el, index) => (
              <div className="tea-cover mt-3" key={index}>
                <div className="card" data-id={el.id}>
                  <div className="card-body d-flex justify-content-between">
                    <h5 className="card-title"> {el.type} </h5>
                    <button id={el.id} type="button" className="btn-danger">
                      Удалить
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <h4>Добавить чай</h4>
            <form action="/profile" method="POST" className="mt-3 mb-5" encType="multipart/form-data" id="loginForm">
              <label htmlFor="exampleInput1" className="form-label">
                Сорт чая
              </label>
              <input name="type" type="text" className="form-control" id="exampleInput1" />
              <label htmlFor="exampleInput2" className="form-label">
                Широта
              </label>
              <input name="shirota" type="text" className="form-control" id="exampleInput2" />
              <label htmlFor="exampleInput2" className="form-label">
                Долгота
              </label>
              <input name="dolgota" type="text" className="form-control" id="exampleInput3" />
              <label htmlFor="exampleInput3" className="form-label">
                Описание
              </label>
              <input name="description" type="text" className="form-control" id="exampleInput4" />
              <label htmlFor="exampleInput2" className="form-label">
                Загрузите изображение
              </label>
              <input name="file" accept="image/*" type="file" className="form-control" id="exampleInput5" />
              <button type="submit" className="btn btn-primary  mt-3">
                Отправить
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
