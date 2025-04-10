// server/index.js

const express = require("express");
// const db = require('services/dbConnect.js');

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});


// // persist image
// app.post("/persist-image", (request, response) => {
//   // collected image from a user
//   const data = {
//     title: request.body.title,
//     image: request.body.image
//   }

//   // upload image here
//   cloudinary.uploader.upload(data.image)
//   .then((image) => {
//     db.pool.connect((err, client) => {
//       // inset query to run if the upload to cloudinary is successful
//       const insertQuery = 'INSERT INTO images (title, cloudinary_id, image_url) 
//          VALUES($1,$2,$3) RETURNING *';
//       const values = [data.title, image.public_id, image.secure_url];

//       // execute query
//       client.query(insertQuery, values)
//       .then((result) => {
//         result = result.rows[0];

//         // send success response
//         response.status(201).send({
//           status: "success",
//           data: {
//             message: "Image Uploaded Successfully",
//             title: result.title,
//             cloudinary_id: result.cloudinary_id,
//             image_url: result.image_url,
//           },
//         })
//       }).catch((e) => {
//         response.status(500).send({
//           message: "failure",
//           e,
//         });
//       })
//     })  
//   }).catch((error) => {
//     response.status(500).send({
//       message: "failure",
//       error,
//     });
//   });
// });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
