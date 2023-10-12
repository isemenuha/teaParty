const form = document.querySelector('#commentForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const res = Object.fromEntries(data);
  console.log('res', res);
  if (!res.text) {
    alert('Введите комментарий');
  } else {
    try {
      console.log(JSON.stringify(res));
      const response = await fetch('/comments/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(res),
      });

      const result = await response.json();

      if (response.ok) {
        window.location.reload();
      } else {
        alert(`Ошибка: ${result.message}`);
      }
    } catch (error) {
      console.log(`Что-то сломалось ==> ${error}`);
      alert(`Что-то сломалось ==> ${error}`);
    }
  }
});
