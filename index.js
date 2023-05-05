const express = require("express");
const app = express();
const port = 2500;
const path = require("path");
var CryptoJS = require("crypto-js");
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
const handlebars = require("express-handlebars");
const { log } = require("console");

app.engine("hbs", handlebars.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("partials/home");
});


//Bam sha 1
app.post("/sha1", (req, res) => {
  let message = req.body.text;
  console.log(message);
  var sha1 = CryptoJS.SHA1(message).toString();
  if (message == "") {
    sha1 = "Vui lòng điền dữ liệu vào input";
  }
  res.render("partials/home", { bam_sha1: message, sha1: sha1 });
});



//Bam MD5
app.post("/md5", (req, res) => {
  let message = req.body.text;
  console.log(message);
  var md5 = CryptoJS.MD5(message).toString();
  if (message == "") {
    md5 = "Vui lòng điền dữ liệu vào input";
  }
  res.render("partials/home", { bam_md5: message, md5: md5 });
});


//chữ ký số
//openssl genrsa -out private_key.pem 2048
const crypto = require('crypto');
const fs = require('fs');

app.post("/signature", (req, res) => {
  const message = req.body.text;
  console.log(message);
  // Read private key from file
  
  const privateKey = fs.readFileSync(path.join(__dirname, "private_key.pem"), 'utf-8');

  // Create signer
  const signer = crypto.createSign('SHA256');
  signer.update(message);

  // Sign message with private key
  const signature = signer.sign(privateKey, 'base64');

  if (message == "") {
    signature = "Vui lòng điền dữ liệu vào input";
  }

  res.render("partials/home", { signature_message: message, signature: signature });
});

//Giải mã chữ ký số
// app.post("/DecrySignature", (req, res) => {
//   const message = req.body.text;
//   console.log(message);

//   const privateKey = fs.readFileSync('E:\\Ma_hoa\\private_key.pem', 'utf-8');
//   const publicKey = fs.readFileSync('E:\\Ma_hoa\\public_key.pem', 'utf-8');

//   // Tạo chữ ký
//   const signer = crypto.createSign('SHA256');
//   signer.update(message);
//   const signature = signer.sign(privateKey, 'base64');

//   // Gửi tài liệu và chữ ký đến bên nhận
//   const messagee = {
//       message,
//       signature,
//   };
  
//   // Xác thực chữ ký
//   const verifier = crypto.createVerify('SHA256');
//   verifier.update(messagee.message);
//   const isVerified = verifier.verify(publicKey, messagee.signature, 'base64');
  
//   console.log(`Chữ ký ${isVerified ? 'hợp lệ' : 'không hợp lệ'}`);

//   res.render("partials/home", { DecrySignature_message: message, DecrySignature: isVerified });
// });


//---

app.listen(port, () => {
  console.log(`Run at http://localhost:${port}`);
});



//Mã hoá
// app.post("/encrypt", (req, res) => {
//   let message = req.body.text;
//   console.log(message);
//   var encrypt = CryptoJS.AES.encrypt(message, "secret key 123").toString();
  
//   if (message == "") {
//     encrypt = "Vui lòng điền dữ liệu vào input";
//   }
//   res.render("partials/home", { input_text: message, encrypt: encrypt });
// });

//Giải mã hoá
// app.post("/decrypt", (req, res) => {
//   let message = req.body.key;
//   var bytes = CryptoJS.AES.decrypt(message, "secret key 123");
//   var decrypt = bytes.toString(CryptoJS.enc.Utf8);
//   if (message == "") {
//     decrypt = "Vui lòng điền dữ liệu vào input";
//   } else if (decrypt == "") {
//     decrypt = "Chuỗi input không hợp lệ";
//   }
//   res.render("partials/home", { input_key: message, decrypt: decrypt });
// });



