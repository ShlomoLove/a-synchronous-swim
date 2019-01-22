const headers = require('./cors');

var sendResponse = function(response, data, statusCode) {
  statusCode = statusCode || 200;
  response.writeHead(statusCode, headers);
  response.end(data);
}

function randomMove () {
  var moves = ['left', 'right', 'up', 'down'];
  var randomNum = Math.floor(Math.random() * 4);
  return moves[randomNum];
}

module.exports = (req, res) => {
  if (req.method === 'GET') {
    console.log ('request received');
    sendResponse(res, randomMove(), 200);
  }

  if (req.method === 'POST') {
    console.log ('post received');
    sendResponse(res, 'hello', 201)


  }
  // res.writeHead(200, headers);
  // res.end();
};


