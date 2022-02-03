const { request, response } = require("express")
const express = require("express")
const app = express()

app.use(express.json())

// nomer 1
// endpoint 1
app.post("/search", (request, response) => {
    let keyword = request.body.keyword
    let data = [
        {nis: 101, nama:"Baskara", alamat:"Surabaya"},
        {nis: 102, nama:"Aksara", alamat:"Jakarta"},
        {nis: 103, nama:"Haikal", alamat:"Jogja"},
        {nis: 104, nama:"Naya", alamat:"Bali"},
        {nis: 105, nama:"Aruna", alamat:"Bandung"},
        {nis: 106, nama:"Cici", alamat:"Surabaya"},
        {nis: 107, nama:"Bayu", alamat:"Malang"},
        {nis: 108, nama:"Nasa", alamat:"Bekasi"},
        {nis: 109, nama:"Alvino", alamat:"Tangerang"},
        {nis: 110, nama:"Dara", alamat:"Bogor"}
    ]

    let found = []
    for (let i = 0; i < data.length; i++) {
        if (keyword == data[i].nis || keyword == data[i].nama || keyword == data[i].alamat) {
            
            found.push({
                nis : data[i].nis,
                nama : data[i].nama,
                alamat : data[i].alamat
            })
        }
        
    }

    return response.json({
        found
    })
})
/*
{
    "keyword" : "Surabaya"
}
*/
app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})