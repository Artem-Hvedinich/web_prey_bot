const axios = require('axios');
const NOTION_KEY = 'Bearer secret_DCi48pAprHCSoLz2H3ylgYFvrZtECDsRXorXqjec1DO'
const NOTION_DATABASE_ID = '9cd332aa307247b68b207e466082d982'

async function NotionApi(id) {
    return await axios
        .get(`https://api.notion.com/v1/databases/${NOTION_DATABASE_ID}/query`, {
            headers: {
                Authorization: `Bearer ${NOTION_KEY}`,
                'Notion-Version': ' 2022-02-22',
            },
        })
        .then(async (res) => {
            return res.data;
        })
        .catch((err) => {
            NotionApi = undefined;
            console.log(err);
        });
}

module.exports = NotionApi;