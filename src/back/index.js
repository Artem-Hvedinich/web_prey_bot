const cors = require('cors')
const express = require('express')
const NotionApi = require("./NotionApi");
const app = express()

app.use(express.json());
app.use(cors());

app.get('/getmenu', async (req, res) => {
    console.log('getmenu')
    const data = await NotionApi('uuid');
    res.status(200).json(data);
});


const PORT = process.env.PORT || 5173;
app.listen(PORT, console.log(`Server started @ ${PORT}`));


// // const {Client} = require('@notionhq/client');
// import {Client} from '@notionhq/client'
//
// const NOTION_KEY = 'Bearer secret_DCi48pAprHCSoLz2H3ylgYFvrZtECDsRXorXqjec1DO'
// const NOTION_DATABASE_ID = '9cd332aa307247b68b207e466082d982'
//
// export const getData = async () => {
//     try {
//         const notion = new Client({auth: NOTION_KEY})
//         console.log(notion)
//         const myPage = await notion.databases.query({
//             database_id: NOTION_DATABASE_ID,
//             "Access-Control-Allow-Origin": "*"
//         })
//         console.log(myPage)
//         return {statusCode: 200, data: JSON.stringify(myPage)}
//     } catch (e) {
//         console.log(e)
//     }
// }
// export default async function addItem(text) {
//     try {
//         const response = await notion.pages.create({
//             parent: {database_id: NOTION_DATABASE_ID},
//             properties: {
//                 title: {
//                     title: [
//                         {
//                             "text": {
//                                 "content": text
//                             }
//                         }
//                     ]
//                 }
//             },
//         })
//         console.log(response)
//         console.log("Success! Entry added.")
//     } catch (error) {
//         console.error(error.body)
//     }
// }
