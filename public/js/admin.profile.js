const teadiv = document.querySelector('.tea-cards');
const form = document.querySelector('.jopa');
const list = document.querySelector('.tealist');

teadiv.addEventListener('click', async (e) => {
  try {
    if (e.target.classList.contains('btn-danger')) {
      const response = await fetch(`/profile/tea/${e.target.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();
      if (result.msg) {
        e.target.closest('.tea-cover').remove();
      }
    }
  } catch (error) {
    console.log(error);
  }
});

form.addEventListener('submit', async (e) => {
  try {
    e.preventDefault();

    const data = new FormData(form);

    const response = await fetch('profile/', {
      method: 'POST',
      body: data,
    });
    const result = await response.json();
    console.log('!!!!!!!!!!!!!!', result);
    const newPost = `
  <div class="tea-cover mt-3">
    <div class="card" data-id=${result.id}>
      <div class="card-body d-flex justify-content-between">
        <h5 class="card-title"> ${result.type} </h5>
        <button id=${result.id} type="button" class="btn-danger">
          Удалить
        </button>
      </div>
    </div>
  </div>
`;
    list.insertAdjacentHTML('beforeend', newPost);
    document.querySelectorAll('input').forEach((el) => (el.value = ''));
  } catch (error) {
    console.log(error);
  }
});

{
  /* <div class='tea-cover'>
<div key={index} class="card" data-id = ${result.id}>
<div class="card-body">
  <h5 class="card-title"> ${result.type} </h5>
  <button id = ${result.id} type="button"  class="btn-danger">
    Удалить
  </button>
</div>
</div>
</div> */
}
