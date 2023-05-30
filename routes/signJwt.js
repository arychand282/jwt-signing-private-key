var express = require('express')
var router = express.Router();
const fs = require('fs')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')

// Generate JWT Token
function generateToken(payload, privateKeyPath) {
  const privateKey = fs.readFileSync(privateKeyPath, 'utf8')
  const token = jwt.sign(payload, privateKey, {
    algorithm: 'RS256',
  })
  return token
}

router.get('/', function(req, res, next) {
  const payload = {
    user: 'bagus.chandra@email.com',
    name: 'Bagus Chandra'
  }
  const privateKeyPath = './jwt-private.key'

  const token = generateToken(payload, privateKeyPath)
  res.send({
    token
  })
});

module.exports = router;