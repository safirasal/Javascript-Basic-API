const { request, response } = require("express")
const express = require("express")
const app = express()

// set to read a request data from JSON format
app.use(express.json())

// JSON is String
// endpoint pertama
app.post("/ages",(request, response) => {
    // store the request data 
    let data  = request.body.ages
    let jmlRemaja = 0, jmlTua = 0, jmlDewasa = 0

    for (let i = 0; i < data.length; i++) {

        if (data[i].umur >= 12 && data[i].umur <= 24) {
            jmlRemaja+=1
        }

        if (data[i].umur >= 25 && data[i].umur <= 55) {
            jmlDewasa+=1
        }

        if (data[i].umur > 55) {
            jmlTua+=1
        }
    }
    
    // give a response data
    return response.json({
        "jumlah_remaja" : jmlRemaja,
        "jumlah_dewasa": jmlDewasa,
        "jumlah_tua": jmlTua
    })
})

// endpoint 2
app.post("/barang",(request, response) => {
    let belanja = request.body.barang
    let total = 0
    let totalBayar = 0

    for (let i = 0; i < belanja.length; i++) {
        total += belanja[i].harga * belanja[i].jumlah; 
    }

    let ppn = total * 10/100
    totalBayar += ppn + total

    return response.json({
        "ppn" : ppn,
        "totalBayar" : totalBayar
    })
})

// endpoint ketiga
app.post("/uang",(request, response) => {
    let uang = [100000,50000,20000,10000,2000,1000,500,200,100]
    let butuhUang = request.body.butuhUang
    let hasil = []

    for (let i = 0; i < uang.length; i++) {
        if (butuhUang >= uang[i]) {
            let jmlUang = Math.floor(butuhUang/uang[i])
            butuhUang -= (jmlUang * uang[i])

            hasil.push({
                pecahan : uang[i],
                jumlah : jmlUang
            })
        }
    }
    return response.json({
        hasil_pecahan : hasil
    })
})
app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})