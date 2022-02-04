const { request, response } = require("express")
const express = require("express")
const app = express()

app.use(express.json())

// endpoint pertama
app.post("/", (request, response) => {

})
app.post("/Barang",(request,response)=>{
    let barang = request.body.barang
    let pack = request.body.pack

    let netto = 0
    let totalharga = 0

    let total = []

    for (let i = 0; i < barang.length; i++) {
        for (let j = 0; j < pack.length; j++) {
            if (barang[i].pack == pack[j].nama_pack) {
                netto = barang[i].bruto - pack[j].berat
                totalharga = netto * barang[i].harga
            }          
        }
        total.push({
            ID : barang[i].id,
            Nama : barang[i].nama,
            Bruto : barang[i].bruto,
            Harga : barang[i].harga,
            Pack : barang[i].pack,
            Netto : netto,
            Total : totalharga
        })
        
    }
    return response.json({
        "Barang" : total
    })
})
/*{
     "barang":[
         {"id":1,"nama":"Beras","bruto":100,"harga":15000,"pack":"Karung"},
         {"id":2,"nama":"Gula","bruto":150,"harga":11000,"pack":"Karung"},
         {"id":3,"nama":"Minyak","bruto":50,"harga":20000,"pack":"Plastik"},
         {"id":4,"nama":"Telur","bruto":200,"harga":25000,"pack":"Kayu"}
     ],
     "pack":[
         {"id_pack":1,"nama_pack":"Karung","berat":1},
         {"id_pack":2,"nama_pack":"Plastik","berat":0.5},
         {"id_pack":3,"nama_pack":"Kayu","berat":2}
     ]
}
*/
// endpoint kedua
app.post("/word", (request, response) => {
    let word = request.body.word

    let jmlKata = 0

    if (word !== "") {
        for (let i = 0; i < word.length; i++) {
            if(word[i] == ' '){
                jmlKata += 1
            }
        }
        jmlKata += 1
    } else {
        jmlKata = 0
    }
    return response.json({
        "Jumlah Kata":jmlKata
    })
})

// endpoint ketiga
app.post("/alphabet",(request,response)=>{
    let word = request.body.word
    word = word.toLowerCase()

    let vokal = 0
    let konsonan = 0

    for (let i = 0; i < word.length; i++) {
        if (word[i] === "a" || word[i] === "i" || word[i] === "u" || word[i] === "e" || word[i] === "o") {
            vokal += 1
        }
        if (word[i] !== "a" && word[i] !== "i" && word[i] !== "u" && word[i] !== "e" && word[i] !== "o") {
            konsonan += 1
        }
        
    }
    return response.json({
        "Jumlah Huruf Vokal" : vokal,
        "Jumlah Huruf Konsonan" : konsonan
    })
})

app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})