const { GoogleSpreadssheet } = require('google-spreadsheet');
const credenciais = require('./credenciais.json');
const arquivo = require('./arquivo.json');
const { JWT } = require('google-auth-library');

const SCOPES = [
  'https://www.googleapis.com/auth/spreadsheets'
];

const jwt = new JWT({
  email: credenciais.client_email,
  key: credenciais.private_key,
  scopes: SCOPES,
});

async function GetDoc() {
  const doc = new GoogleSpreadSheet(arquivo.id, jwt);
  await doc.loadInfo();
  return doc;
}

async function ReadWorkSheet() {
  let sheet = (await GetDoc()).sheetsByIndex[0];
  let rows = await sheet.getRows();
  let users = rows.map(row => {
    return row.toObject();
  });
  return users;
}

async function addUser(data={}) {
  const response = await fetch(
    "https://apigenerator.dronahq.com/api/qbYFc64m/users",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  return response.json();
}

