abstartups

API em nodeJs

npm install
nodemon .\bin\server.js
http://localhost:3000/

postman
post
http://localhost:3000/users/
{
	"name": "bruno seabra",
	"email": "ideiasfera@gmail.com",
	"password": "123456"
}

postman
get
http://localhost:3000/users/

[
    {
        "_id": "5e6e5a487226921ea4fc4041",
        "name": "bruno seabra",
        "email": "ideiasfera@gmail.com",
        "password": "9ad27aa9c90b66270129385deb063f1e"
    }
]

http://localhost:3000/users/login
post
{
	"email": "ideiasfera@gmail.com",
	"password": "123456"
}

{
    "message": "Login efetuado com sucesso",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNmU1YTQ4NzIyNjkyMWVhNGZjNDA0MSIsIm5hbWUiOiJicnVubyBzZWFicmEiLCJlbWFpbCI6ImlkZWlhc2ZlcmFAZ21haWwuY29tIiwicGFzc3dvcmQiOiI5YWQyN2FhOWM5MGI2NjI3MDEyOTM4NWRlYjA2M2YxZSIsImlhdCI6MTU4NDI5MTYyMSwiZXhwIjoxNTg0Mzc4MDIxfQ.I1wSqeL73L4Wdb2-h-utpYB26BQQuUCLnt68-eH9quo",
    "user": {
        "id": "5e6e5a487226921ea4fc4041",
        "name": "bruno seabra",
        "email": "ideiasfera@gmail.com",
        "password": "9ad27aa9c90b66270129385deb063f1e"
    }
}

postman
post
http://localhost:3000/startups/
{
	"name": "ideiasfera",
	"description": "software",
	"email": "ideiasfera@gmail.com",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNmU1YTQ4NzIyNjkyMWVhNGZjNDA0MSIsIm5hbWUiOiJicnVubyBzZWFicmEiLCJlbWFpbCI6ImlkZWlhc2ZlcmFAZ21haWwuY29tIiwicGFzc3dvcmQiOiI5YWQyN2FhOWM5MGI2NjI3MDEyOTM4NWRlYjA2M2YxZSIsImlhdCI6MTU4NDI5MTYyMSwiZXhwIjoxNTg0Mzc4MDIxfQ.I1wSqeL73L4Wdb2-h-utpYB26BQQuUCLnt68-eH9quo"
}

postman
get
http://localhost:3000/startups/

[
    {
        "_id": "5e6e5fda7226921ea4fc4042",
        "name": "ideiasfera",
        "email": "ideiasfera@gmail.com",
        "description": "software"
    }
]
