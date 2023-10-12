const bcrypt = require('bcrypt')
async function hash(word) {
  try {
    const hashedPassword = await bcrypt.hash(word, 10);
    return hashedPassword;
  } catch (error) {
    console.error('Error hashing password:', error);
    throw error;
  }
}

hash('jopa')
  .then((hashedPassword) => {
    console.log('Hashed Password:', hashedPassword);
  })
  .catch((error) => {
  });