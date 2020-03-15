abstartups

API em nodeJs

npm install nodemon .\bin\server.js
http://localhost:3000/

postman
post
http://localhost:3000/users/
{ "name": "bruno seabra", "email": "ideiasfera@gmail.com", "password": "123456" }

postman
get
http://localhost:3000/users/

[ { "_id": "5e6e5a487226921ea4fc4041", "name": "bruno seabra", "email": "ideiasfera@gmail.com", "password": "9ad27aa9c90b66270129385deb063f1e" } ]

http://localhost:3000/users/login
post
{ "email": "ideiasfera@gmail.com", "password": "123456" }

{ "message": "Login efetuado com sucesso", "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNmU1YTQ4NzIyNjkyMWVhNGZjNDA0MSIsIm5hbWUiOiJicnVubyBzZWFicmEiLCJlbWFpbCI6ImlkZWlhc2ZlcmFAZ21haWwuY29tIiwicGFzc3dvcmQiOiI5YWQyN2FhOWM5MGI2NjI3MDEyOTM4NWRlYjA2M2YxZSIsImlhdCI6MTU4NDI5MTYyMSwiZXhwIjoxNTg0Mzc4MDIxfQ.I1wSqeL73L4Wdb2-h-utpYB26BQQuUCLnt68-eH9quo", "user": { "id": "5e6e5a487226921ea4fc4041", "name": "bruno seabra", "email": "ideiasfera@gmail.com", "password": "9ad27aa9c90b66270129385deb063f1e" } }

postman
post
http://localhost:3000/startups/
{ "name": "ideiasfera", "description": "software", "email": "ideiasfera@gmail.com", "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNmU1YTQ4NzIyNjkyMWVhNGZjNDA0MSIsIm5hbWUiOiJicnVubyBzZWFicmEiLCJlbWFpbCI6ImlkZWlhc2ZlcmFAZ21haWwuY29tIiwicGFzc3dvcmQiOiI5YWQyN2FhOWM5MGI2NjI3MDEyOTM4NWRlYjA2M2YxZSIsImlhdCI6MTU4NDI5MTYyMSwiZXhwIjoxNTg0Mzc4MDIxfQ.I1wSqeL73L4Wdb2-h-utpYB26BQQuUCLnt68-eH9quo" }

postman
get
http://localhost:3000/startups/

[ { "_id": "5e6e5fda7226921ea4fc4042", "name": "ideiasfera", "email": "ideiasfera@gmail.com", "description": "software" } ]

xxx

http://localhost:3000/users/login
post
{ "email": "ideiasfera@gmail.com", "password": "123456" }

{
    "message": "Login efetuado com sucesso",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNmU1YTQ4NzIyNjkyMWVhNGZjNDA0MSIsIm5hbWUiOiJicnVubyBzZWFicmEiLCJlbWFpbCI6ImlkZWlhc2ZlcmFAZ21haWwuY29tIiwicGFzc3dvcmQiOiI5YWQyN2FhOWM5MGI2NjI3MDEyOTM4NWRlYjA2M2YxZSIsImlhdCI6MTU4NDMxMjI5MSwiZXhwIjoxNTg0Mzk4NjkxfQ.xo3U3oqs7wAypG5HeqbVdxriiyCTE0k--j9uBBqqyg0",
    "user": {
        "id": "5e6e5a487226921ea4fc4041",
        "name": "bruno seabra",
        "email": "ideiasfera@gmail.com",
        "password": "9ad27aa9c90b66270129385deb063f1e"
    }
}

obs:

nao funcionou: "founded_at":"18/11/2014",
tirar: "created_at":"18/06/2013",

http://localhost:3000/startups/
post
{
    "profile_image":"https://cdn.startupbase.com.br/uploads/startups/2019/04/kr85azux2pcubvuw9kyv.opt.png",
    "founded_at":null,
    "id":"000c3b32-afa7-4950-a7e7-80969f29a869",
    "name":"Pocketstore",
    "company_name":"Milch",
    "short_description":"Loja virtual totalmente completa.\r\n\r\nControle de Vendas\r\nProdutos\r\nModalidades de Frete\r\nModalidades de Pagamento\r\nMuitas Outras Funções",
    "description":"A Pocketstore",
    "tags":[
        "agro",
        "portal",
        "marketplace",
        "plataforma",
        "conteúdo",
        "comercialização",
        "dados",
        "agricultura",
        "agtech"
    ],
    "slug":"pocketstore",
    "closed_at":"2015-08-17T00:00:00.000Z",
    "is_verified":0,
    "updated_at":"05/11/2019",
    "employees":"1-5",
    "business_target":"B2B2C",
    "business_phase":"Fora de Operação",
    "business_model":"Marketplace",
    "uf":"PE",
    "state":"Pernambuco",
    "city":"Recife",
    "place":"Recife - PE",
    "is_active":0,
    "badges":[
    {
        "name":"Troposlab",
        "profile_image":"https://cdn.startupbase.com.br/assets/images/badges/badge_troposlab.png"
    }
    ],
    "segments":{
        "primary":"TIC e Telecom",
        "secondary":"Serviços Profissionais"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNmU1YTQ4NzIyNjkyMWVhNGZjNDA0MSIsIm5hbWUiOiJicnVubyBzZWFicmEiLCJlbWFpbCI6ImlkZWlhc2ZlcmFAZ21haWwuY29tIiwicGFzc3dvcmQiOiI5YWQyN2FhOWM5MGI2NjI3MDEyOTM4NWRlYjA2M2YxZSIsImlhdCI6MTU4NDMxMzE0MiwiZXhwIjoxNTg0Mzk5NTQyfQ.WiUctfCF_Mmyg1_SaNFWlw6_IKPkhUqDKoRyZOTObJg"
}


http://localhost:3000/startups/5e6eb39059c54f1f30b97ba9
put
{
    "profile_image":"https://cdn.startupbase.com.br/uploads/startups/2019/04/kr85azux2pcubvuw9kyv.opt.png",
    "founded_at":null,
    "id":"/5e6eb39059c54f1f30b97ba9",
    "name":"a",
    "company_name":"b",
    "short_description":"c",
    "description":"d",
    "tags":[
        "agro",
        "portal",
        "marketplace",
        "plataforma",
        "conteúdo",
        "comercialização",
        "dados",
        "agricultura",
        "agtech"
    ],
    "slug":"e",
    "closed_at":"2015-08-17T00:00:00.000Z",
    "is_verified":1,
    "employees":"1-5",
    "business_target":"B2B2C",
    "business_phase":"Fora de Operação",
    "business_model":"Marketplace",
    "uf":"PE",
    "state":"Pernambuco",
    "city":"Recife",
    "place":"Recife - PE",
    "is_active":0,
    "badges":[
    {
        "name":"Troposlab",
        "profile_image":"https://cdn.startupbase.com.br/assets/images/badges/badge_troposlab.png"
    }
    ],
    "segments":{
        "primary":"TIC e Telecom",
        "secondary":"Serviços Profissionais"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNmU1YTQ4NzIyNjkyMWVhNGZjNDA0MSIsIm5hbWUiOiJicnVubyBzZWFicmEiLCJlbWFpbCI6ImlkZWlhc2ZlcmFAZ21haWwuY29tIiwicGFzc3dvcmQiOiI5YWQyN2FhOWM5MGI2NjI3MDEyOTM4NWRlYjA2M2YxZSIsImlhdCI6MTU4NDMxMzE0MiwiZXhwIjoxNTg0Mzk5NTQyfQ.WiUctfCF_Mmyg1_SaNFWlw6_IKPkhUqDKoRyZOTObJg"
}

{
    "message": "Startup atualizada com sucesso!"
}

http://localhost:3000/startups/
delete
{
    "id":"/5e6eb39059c54f1f30b97ba9",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNmU1YTQ4NzIyNjkyMWVhNGZjNDA0MSIsIm5hbWUiOiJicnVubyBzZWFicmEiLCJlbWFpbCI6ImlkZWlhc2ZlcmFAZ21haWwuY29tIiwicGFzc3dvcmQiOiI5YWQyN2FhOWM5MGI2NjI3MDEyOTM4NWRlYjA2M2YxZSIsImlhdCI6MTU4NDMxMzE0MiwiZXhwIjoxNTg0Mzk5NTQyfQ.WiUctfCF_Mmyg1_SaNFWlw6_IKPkhUqDKoRyZOTObJg"
}

{
    "message": "Startup removida com sucesso!"
}
