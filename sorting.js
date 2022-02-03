const { request, response } = require("express")
const express = require("express")
const app = express()

app.use(express.json())

// endpoint pertama
app.post("/sortdata", (request, response) => {
    let data = request.body.data

    for (let i = 0; i < data.length; i++) {
        for (let j = i; j < data.length; j++) {
            if (data[j].umur <= data[i].umur) {
                //    tukar data
                let bantuan = data[i]
                data[i] = data[j]
                data[j] = bantuan
            }
        }
    }

    return response.json({
        data: data
    })
})
/*{
    "data": [
        {"nis": 100, "nama": "Jila", "umur": 22},
        {"nis": 101, "nama": "Dhea", "umur": 25},
        {"nis": 102, "nama": "Yepa", "umur": 24}
    ]
}
*/

app.post("/sortdata", (request, response) => {
    let data = request.body.data
    let key = request.body.key
    let type = request.body.type

    for (let i = 0; i < data.length; i++) {
        for (let j = i; j < data.length; j++) {
            if (key === "nama") {
                if (type === "ascending") {
                    if (data[j].nama <= data[i].nama) {
                    }
                    //    tukar data
                    let bantuan = data[i]
                    data[i] = data[j]
                    data[j] = bantuan

                } else if (type === "descending") {
                    if (data[j].nama <= data[i].nama) {
                        //    tukar data
                        let bantuan = data[i]
                        data[i] = data[j]
                        data[j] = bantuan
                    }
                }

                if (key === "nis") {
                    if (type === "ascending") {
                        if (data[j].nis <= data[i].nis) {
                        }
                        //    tukar data
                        let bantuan = data[i]
                        data[i] = data[j]
                        data[j] = bantuan

                    } else if (type === "descending") {
                        if (data[j].nis <= data[i].nis) {
                            //    tukar data
                            let bantuan = data[i]
                            data[i] = data[j]
                            data[j] = bantuan
                        }
                    }

                    if (key === "umur") {
                        if (type === "ascending") {
                            if (data[j].umur <= data[i].umur) {
                            }
                            //    tukar data
                            let bantuan = data[i]
                            data[i] = data[j]
                            data[j] = bantuan

                        } else if (type === "descending") {
                            if (data[j].umur <= data[i].umur) {
                                //    tukar data
                                let bantuan = data[i]
                                data[i] = data[j]
                                data[j] = bantuan
                            }
                        }
                    }
                }
            }
        }
    }

    return response.json({
        data: data
    })
})
/*
{
    "key": "nis",
    "type": "descanding",
    "data": [
        {"nis": 100, "nama": "Jila", "umur": 22},
        {"nis": 101, "nama": "Dhea", "umur": 25},
        {"nis": 102, "nama": "Yepa", "umur": 24}
    ]
}
*/
app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})