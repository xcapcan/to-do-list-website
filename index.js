var title = $('h1');
var input = $('input').val();
var button = $('button');
var container = $('.container')
var checkbox = $('.checkbox').val();

button.on('click', addNew);

function addNew() {
  var input = $('input').val();
  var checkbox = $('.checkbox').val();
container.append(`
  <div>
  <p>${input}</p>
  <input class="checkbox" type="checkbox"
  >
  </div>`);
}
