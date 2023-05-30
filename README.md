# jwt-signing-private-key

This project is for exercise only.<br />
The main purpose of this project is to give an example how to sign and verify JWT token using private and public key.<br />

<b>Command to create new private key</b><br />
```openssl genpkey -algorithm RSA -out jwt-private.key -pkeyopt rsa_keygen_bits:2048```

<b>Command to create new public key from its private key</b><br />
```openssl rsa -pubout -in jwt-private.key -out jwt-public.key```
<br /><br />
<b>How to run this project</b><br />
```npm install```<br />

```npm start```<br />

``open http://localhost:3000/``
