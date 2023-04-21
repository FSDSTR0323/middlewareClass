var express = require('express');
const { userSchema, querySchema } = require('../bodySchema');
const { ourValidator } = require('../validationMiddleware');
var router = express.Router();

const users = {
  a: {
    name: 'Daniel',
    surname: 'Herrero',
  },
  b: {
    name: 'Carlos',
    surname: 'Herrero',
  }
}

// const queryValidator = (req, res, next) => {
//   console.log('hola soy el middleware query validator');
//   const userId = req.query.id;
//   res.locals.userId = userId;
//   if (userId.length !== 1) return res.status(400).json({ error: 'No es un ID valido porque no tiene un único caracter' });
//   next();
// }
/* GET user detail. */
router.get('/', ourValidator('query', querySchema), function (req, res, next) {
  console.log('esto es res.locals', res.locals)
  res.status(200).json({ user: users[res.locals.userId] })
});


const getNewId = () => {
  console.log('estas son las keys', Object.keys(users))
  const arrayOfKeys = Object.keys(users);
  const lastKey = arrayOfKeys.pop();
  const characterAsNumber = lastKey.charCodeAt(0);
  console.log('a ver que numero es esto', lastKey, characterAsNumber)
  const nextCharacter = String.fromCharCode(characterAsNumber + 1);
  console.log('a ver que letra es esta que es el numero anterior más uno', nextCharacter);
  return nextCharacter;
}


router.post('/', ourValidator('body')(userSchema), function (req, res, next) {
  const newUser = req.body;
  const newId = getNewId();
  users[newId] = newUser;
  res.json(users);
});

module.exports = router;
