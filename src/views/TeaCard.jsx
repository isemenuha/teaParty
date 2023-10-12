const React = require('react');

const Layout = require('./Layout');

module.exports = function TeaCard({ tea, comments }) {
  return <Layout>
     {tea.map((tea, index) => (
          <li key={index}>
            <img src={tea.image} alt="Фото чая" />
            <h3>Чай: {tea.type}</h3>
            <p>{tea.description}</p>
          </li>
      ))}
      {comments.map((el, index) => (
          <li key={index}>
            <p>{el.text}</p>
          </li>
      ))}
  </Layout>;
};