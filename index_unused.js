// const express = require('express');
// const app = express();
// const port = 3000;
// const pool = require('./config') // memanggil folder config.js

// app.use(express.urlencoded({ extended: false}));
// app.use(express.json());

// function createTeacher(body) {
//     return new Promise((resolve, reject) => {
//         const query = `INSERT INTO "Teachers" (first_name, last_name, email, gender) VALUES($1, $2, $3, $4);`;

//         // console.log(Object.values(body), body);

//         pool
//             .query(query, Object.values(body))
//             .then((data)=>{
//                 resolve(data);
//             })
//             .catch((error)=>{
//                 reject(error);
//             });
//     });
// }

// app.post('/', function (request, respond) {
//     createTeacher(request.body)
//     .then(data=>{
//         respond.status(201).json({
//             data,
//             message: 'success create teacher'
//         })
//     })
//     .catch(err => {
//         respond.status(500).json({
//             err,
//             message: 'error create teacher'
//         })
//     })
// })

// function getAllTeacher(){
//     return new Promise((resolve, reject)=>{
//         const query = `SELECT * FROM "Teachers" ORDER BY id`

//         pool
//             .query(query)
//             .then(data =>{
//                 resolve(data.rows);
//             })
//             .catch(err =>{
//                 reject(err);
//             })
//     })
// }

// app.get('/', function(request, respond) {
//     getAllTeacher()
//     .then(data => {
//         respond.status(200).json({
//             data,
//             message: 'success get all teachers data'
//         })
//     })
//     .catch(err => {
//         respond.status(500).json({
//             err,
//             message: 'failed to get all teachers data'
//         })
//     })
// });

// function updateTeacher(params, body){
//     return new Promise((resolve, reject) =>{
//         const {first_name, last_name, email, gender} = body;

//         const query = `UPDATE "Teachers"
//             SET
//                 first_name = $2,
//                 last_name =$3,
//                 email = $4,
//                 gender = $5
//             WHERE
//                 id = $1;`;

//         const values = [+params, first_name, last_name, email, gender];

//         pool
//             .query(query, values)
//             .then(data => {
//                 resolve(data);
//             })
//             .catch((err) => {
//                 reject(err);
//             })
//     })
// }

// app.put('/:id', function(request, respond){
//     const id = request.params.id
//     updateTeacher(id, request.body)
//     .then(data => {
//         respond.status(200).json({
//             data,
//             message: 'success update teacher'
//         })
//     })
//     .catch(err => {
//         respond.status().json({
//             err,
//             message:'error update teacher'
//         })
//     })
// })

// function deleteTeacher(params){
//     return new Promise((resolve, reject) => {
//         const query = `DELETE FROM "Teachers" WHERE id = $1`;

//         pool
//             .query(query,[params])
//             .then(data => {
//                 resolve(data)
//             })
//             .catch(err => {
//                 reject(err)
//             })
//     })
// }

// app.delete('/:id', async function (request, respond) {
//     const id = request.params.id
//     try {
//         const delTeacher = await deleteTeacher(id)
//         respond.status(200).json({
//             data: delTeacher,
//             message: 'success delete teacher'
//         })

//     } catch (error) {
//         respond.status(500).json({
//             err,
//             message: 'failed to delete teacher'
//         })
//     }
//     // deleteTeacher(id)
//         // .then(data => {
//         // })
//         // .catch(err => {
//         // })
// })

// app.listen(port, function(){
//     console.log('Server running on port', port);;
// })
