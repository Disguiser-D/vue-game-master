import axios from 'axios'

export function get (url) {
    return function (params) {
        return axios.get(url, {
            params
        }).then((res) => {
            console.log(res.data.recommend)
            return res.data
        }).catch((e) => {
            console.log(e)
        })
    }
}
// export function post (url, data) {
//     return function (data) {
//         return axios.post(url, {
//             data
//         }).then((res) => {
//             console.log(res)
//             return res
//         }).catch((e) => {
//             console.log(e)
//         })
//     }
// }
