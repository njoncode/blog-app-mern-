// File: ./lib/utils.js

const jwt = require('jsonwebtoken');
const crypto = require('crypto');


const SECRET_KEY = process.env.ACCESS_TOKEN_SECRET


//  A utility function that will generate a JWT for our user

/**
 * @param {*} user - The user object.  We need this to set the JWT `sub` payload property to the MongoDB user ID
 */
function issueJwt(user) {

  const _id = user._id;
  // const expiresIn = '1d';
  const expiresIn = '1d';

  const payload = {
    sub: _id,
    // iat: Date.now(),
  };

  console.log('SECRET_KEY: ', SECRET_KEY)

// const signedToken = jwt.sign(payload, SECRET_KEY, { expiresIn: expiresIn });
const signedToken = jwt.sign(payload, SECRET_KEY, { expiresIn: expiresIn });

  return {
    jwtToken: "Bearer " + signedToken,
    expires: expiresIn
  }
};


module.exports = {
  issueJwt
};




/** Issues:    Token Does Not Expire At All
 * token doesn't seem to expire at all. I'm setting the expiresIn property to 5 seconds when signing the token for experimental purposes.
 *
   was manually setting the "iat" as Date.now() in the payload.
  But apparently the token will generate iat property itself.
  Commenting that out and it works fine.
 */
