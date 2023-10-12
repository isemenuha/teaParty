const React = require('react');

const Layout = require('./Layout');

module.exports = function Home({ name }) {
  return (
    <Layout name={name}>
      <script src="https://api-maps.yandex.ru/2.1/?apikey=25c96404-4795-41f1-a616-103183a0d71e&lang=ru_RU" type="text/javascript" />
      <script src="/js/maps.js" />
      <link rel="stylesheet" href="/css/maps.css" />
      <div id="map" className="map"></div>
    </Layout>
  );
};
