async function init() {
  try {
    const response = await fetch('/teas');
    if (!response.ok) {
      throw new Error('ERROR');
    }

    const data = await response.json();
    console.log(data);
    const map = new ymaps.Map('map', {
      center: [55.76, 37.64],
      zoom: 3,
    });

    for (const el of data) {
      const placemark = new ymaps.Placemark(
        [el.shirota, el.dolgota],
        {
          balloonContent: `
          <h3>${el.type}</h3>
          <p>${el.description}</p>
          <a href="/tea-details?id=${el.id}">Подробнее</a>
        `,
          hintContent: el.type,
        },
        {
          iconLayout: 'default#image',
          iconImageHref: './img/tea.png',
          iconImageSize: [40, 40],
          iconImageOffset: [-10, -15],
        }
      );

      map.controls.remove('geolocationControl');
      map.controls.remove('searchControl');
      map.controls.remove('trafficControl');
      map.controls.remove('typeSelector');
      map.controls.remove('fullscreenControl');
      map.controls.remove('zoomControl');
      map.controls.remove('rulerControl');
      //   map.behaviors.disable(['scrollZoom']);
      map.geoObjects.add(placemark);
    }
  } catch (e) {
    console.error(`ERROR ${e}`);
  }
}

ymaps.ready(init);