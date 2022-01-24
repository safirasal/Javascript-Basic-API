// load library express
const { request, response } = require("express")
let express = require("express")
const req = require("express/lib/request")

// inisiasi objek baru dari express 
let app = express()

// nomer 1 
// endpoint pertama
app.use(express.json())
app.post("/kubus",(request, response) => {
    let sisi = request.body.sisi

    let volume = sisi * sisi * sisi
    let luas = 6 * sisi * sisi

    return response.json({
        volume : volume,
        luas : luas
    })
})

// endpoint kedua
app.post("/balok",(request, response) => {
    let panjang = request.body.panjang
    let lebar = request.body.lebar
    let tinggi = request.body.tinggi

    let volume = panjang * lebar * tinggi
    let luas = 2 * (panjang*lebar + panjang*tinggi + lebar*tinggi)

    return response.json({
        volume : volume,
        luas : luas
    })
})

// endpoint ketiga
app.post("/tabung",(request, response) => {
    let r = request.body.r
    let tinggi = request.body.tinggi

    let volume = 22/7 * (r*r) * tinggi
    let luas = 2 * 22/7 * r * (r + tinggi)

    return response.json({
        volume : volume,
        luas : luas
    })
})

// endpoint keempat
app.post("/bola",(request, response) => {
    let r = request.body.r

    let volume = 4/3 * 22/7 * (r * r * r)
    let luas = 4 * 22/7 * (r * r)

    return response.json({
        volume : volume,
        luas : luas
    })
})
// nomer 2 
// endpoint pertama
app.post("/celcius",(request, response) => {
    let celcius = request.body.celcius

    let reamur = 4/5 * celcius
    let fahrenheit = 9/5 * celcius + 32
    let kelvin = celcius + 273

    return response.json({
        reamur : reamur,
        fahrenheit : fahrenheit,
        kelvin : kelvin
    })
})

// endpoint kedua
app.post("/reamur",(request, response) => {
    let reamur = request.body.reamur

    let celcius = 5/4 * reamur
    let fahrenheit = 9/4 * reamur + 32
    let kelvin = 5/4 * reamur + 273

    return response.json({
        celcius : celcius,
        fahrenheit : fahrenheit,
        kelvin : kelvin
    })
})

// endpoint ketiga
app.post("/kelvin",(request, response) => {
    let kelvin = request.body.kelvin

    let celcius = kelvin - 273
    let fahrenheit = 9/5 * (kelvin - 273.15) + 32
    let reamur = 4/5 * (kelvin - 273.15)

    return response.json({
        celcius : celcius,
        fahrenheit : fahrenheit,
        reamur : reamur
    })
})

// endpoint keempat
app.post("/fahrenheit",(request, response) => {
    let fahrenheit = request.body.fahrenheit

    let celcius = 5/9 * (fahrenheit - 32)
    let reamur = 4/9 * (fahrenheit - 32)
    let kelvin = 5/9 * (fahrenheit - 32) + 273

    return response.json({
        celcius : celcius,
        reamur : reamur,
        kelvin : kelvin
    })
})

// nomer 3
// endpoint pertama
app.post("/desimal", (request, response) => {
    let desimal = request.body.desimal

    let biner = desimal.toString(2);
    let oktal = desimal.toString(8);
    let hex = desimal.toString(16);

    return response.json({
        biner : biner,
        oktal : oktal,
        hex : hex
    })
})
// endpoint kedua
app.post("/biner", (request, response) => {
    let biner = request.body.biner

    let desimal = parseInt(biner, 2);
    let oktal = parseInt(biner, 2).toString(8);
    let hex = parseInt(biner, 2).toString(16);
    

    return response.json({
        desimal : desimal,
        oktal : oktal,
        hex : hex
    })
})
// endpoint ketiga
app.post("/oktal", (request, response) => {
    let oktal = request.body.oktal

    let desimal = parseInt(oktal, 8);
    let biner = desimal.toString(2);
    let hex = desimal.toString(16);
    

    return response.json({
        desimal : desimal,
        biner : biner,
        hex : hex
    })
})
// endpoint keempat
app.post("/hex", (request, response) => {
    let hex = request.body.hex

    let desimal = parseInt(hex, 16);
    let biner = desimal.toString(2);
    let oktal = desimal.toString(8);
    

    return response.json({
        desimal : desimal,
        biner : biner,
        oktal : oktal
    })
})
// nomer 4
app.post("/bmi", (request, response) => {
    // tampung data tinggi dan berat 
    let tinggi = request.body.tinggi
    let berat = request.body.berat

    let bmi = berat / (tinggi * tinggi)

    let status = null 

    if (bmi < 18.5) {
        status = `Kekurangan Berat badan`
    } else if (bmi >= 18.5 && bmi < 25){
        status = `Ideal`
    } else if (bmi >= 18.5 && bmi < 30){
        status = `kelebihan berat badan`
    } else if (bmi >= 30) {
        status = `Obesitas`
    }

    return response.json({
        nilai: bmi,
        status: status
    })
})
app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})