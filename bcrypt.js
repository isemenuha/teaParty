const bcrypt = require('bcrypt');
async function hash(word) {
  try {
    const hashedPassword = await bcrypt.hash(word, 10);
    return hashedPassword;
  } catch (error) {
    console.error('Error hashing password:', error);
    throw error;
  }
}

hash('Vaxta4Life')
  .then((hashedPassword) => {
    console.log('Hashed Password:', hashedPassword);
  })
  .catch((error) => {});

// vaxtoviksergey@example.com
// Vaxta4Life

// 1@1
// 1
