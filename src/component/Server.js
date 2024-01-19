import axios from "axios"

const BASEURI = "http://localhost:3000/"
export const ApiEndPoints = {
    TRANSACTIONLIST: 'transactions',
    STATISTICS: "statistics",
    BARCHART: "bar-chart-data"
}

export const serverCall = (endpoint, params) => {

    return new Promise((resolve, reject) => {

        axios({
            url: BASEURI + endpoint,
            method: "GET",
            params: params
        }).then((response) => {
            resolve(response.data)
        }).catch((err) => {
            reject(err)
        })
    })
}
