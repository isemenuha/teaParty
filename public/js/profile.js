
const div = document.querySelector('.cards');

div.addEventListener('click', async (e) => {
  try {
    if (e.target.classList.contains('delete-btn')) {
      const response = await fetch(`/profile/${e.target.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();
      if (result.msg) {
        e.target.closest('.cardCover').remove();
      }
    }x
  } catch (error) {
    console.log(error);
  }
});
