var title = $('h1');
var input = $('input').val();
var button = $('button');
var container = $('.container')

button.on('click', addNew);

function addNew() {
  var input = $('input').val();
container.append(`${input}`);
}
