$('body').on('keydown', (event) => {
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  if (arrowPress) {
    var direction = arrowPress[1];
    // SwimTeam.move(direction.toLowerCase());
   axios.post('http://127.0.0.1:3000', direction)
    .then(function (response) {
      console.log (response);
    })
    .catch (function(error) {
      console.log (error)
    });
    // $.ajax({
    //   url: 'http://127.0.0.1:3000',
    //   type: 'POST',
    //   error: (error) => {console.log('error', error)},
    //   data: JSON.stringify(direction),
    //   success: (data) => {console.log('success', data)},
    //   complete: () => {console.log('complete')},
    // })
  }
});

console.log('Client is running in the browser!');

var nextMove = '';

$('.ajaxDequeue').on('click', function(event) {
  axios.get ('http://127.0.0.1:3000/item')
  .then(function(response) {
    console.log(response.data)
    SwimTeam.move(response.data)
  });
  // $.ajax({
  //   url: 'http://127.0.0.1:3000/item',
  //   type: 'GET',
  //   error: (error) => {console.log('error', error)},
  //   success: (data) => {nextMove += JSON.parse(data)},
  //   complete: () => {SwimTeam.move(nextMove); nextMove = '';},
  // })
})

$('.changeButton').on('click', function(event){
  var moves = ['left', 'right', 'up', 'down'];
  var randomNum = Math.floor(Math.random() * 4);
  SwimTeam.move(moves[randomNum]);
})

$('.ajaxButton').on('click', function(event){
  axios.get('http://127.0.0.1:3000')
  .then(function(response) {
    console.log (response.data)
    SwimTeam.move(response.data)
  })
  // $.ajax({
  //   url: 'http://127.0.0.1:3000',
  //   type: 'GET',
  //   error: (error) => {console.log('error', error)},
  //   success: (data) => {SwimTeam.move(data)},
  //   complete: () => {console.log('complete')},

  // })
})
