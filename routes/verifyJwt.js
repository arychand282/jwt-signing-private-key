const express = require('express')
const router = express.Router()
const fs = require('fs')
const jwt = require('jsonwebtoken')

// Verify a JWT token
function verifyToken(token, publicKeyPath) {
  const publicKey = fs.readFileSync(publicKeyPath, 'utf8');
  try {
    const decoded = jwt.verify(token, publicKey, {
      algorithms: ['RS256']
    })
    return decoded
  } catch (err) {
    // verification failed
    console.error('JWT verification failed: ', err)
    throw err
  }
}

router.post('/', function(req, res, next) {
  const publicKeyPath = './jwt-public.key'
  const { token } = req.body

  const decodedToken = verifyToken(token, publicKeyPath)
  res.send({
    decoded: decodedToken
  })
})

module.exports = router;