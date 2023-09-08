const express= require("express")
const app = express();
const port=8000;
const DataSiswa =  require("./DataSiswa")

app.get("/",(req,res)=>{
    res.send(
        "Selamat Datang Di Data Center Siswa Indonesia"
    );
});
app.use("/DataSiswa",DataSiswa)
app.listen(port,()=>{
    console.log(`server berjalan di port ${port}`)
});