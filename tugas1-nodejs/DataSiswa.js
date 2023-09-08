const express= require('express')
const route = express.Router();

route.get("/",(req,res)=>{
    res.json(
       {
        "nama" : "Richard Muhamad",
        "TanggalLahir" : "14 januari 1994",
        "JenisKelamin" : "Laki-Laki",
        "Hobi" : "membaca buku"
       }
       
    );
});

route.post("/",(req,res)=>{
    res.send(
        "request create masuk"
    );
});
route.put("/",(req,res)=>{
    res.send(
        "request update masuk"
    );
});
route.delete("/",(req,res)=>{
    res.send(
        "request delete masuk"
    );
});
module.exports= route;