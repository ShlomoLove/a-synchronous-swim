const headers = require('./cors');
let {enqueue, dequeue} = require('./messageQueue');


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
    if(req.url === '/item') {
      //dequeue and send response back
      sendResponse(res, JSON.stringify(dequeue().toLowerCase()), 200);
    } else {
      sendResponse(res, randomMove(), 200); //this makes swimmers move in a random direction
    }
  }

  if (req.method === 'POST') { //this queues up the commands for swimmers
    var bundle = '';
    req.on('data', function(chunk) {
      bundle += chunk;
      enqueue(bundle);
    });
    sendResponse(res, null, 201);
  }

};


