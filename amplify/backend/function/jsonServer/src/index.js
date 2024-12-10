
const fs = require('fs');
const path = require('path');

exports.handler = async (event) => {
  const filePath = path.resolve(__dirname, 'db.json');
  const data = fs.readFileSync(filePath, 'utf8');

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
  };
};