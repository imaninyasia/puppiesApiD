function getAllPuppies() {
  return fetch('/api/puppies')
    .then(r => r.json())
    .then((r)=> renderPuppies(r));
}

function adoptPuppy(payload) {
  return fetch('/api/puppies', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(payload)
  });
}

function likePuppy(id) {
  // Implement liking a puppy here.
  return fetch(`/api/puppies/like/${id}`, {
    method: 'PUT',
  }).then(getAllPuppies);
}

function abandonPuppy(id) {
  // Implement abandoning a puppy here :(
  return fetch(`/api/puppies/delete/${id}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'DELETE',
  });
  console.log('abandoning')
}


function renderPuppies(puppies) {
  const $container = $('.adopted-puppies').empty();
  for (let i = 0; i < puppies.length; i += 1) {
    const $newPuppy = $('.puppy-template').clone();

    $newPuppy.removeClass('puppy-template')
      .addClass('puppy')
      .find('.name').text(puppies[i].name);

    $newPuppy
      .find('.likes').text(puppies[i].likes);

    $newPuppy
      .find('.abandon-puppy')
      .prop('id', puppies[i].id);

    $newPuppy
      .find('.puppy-picture img')
      .attr('src', puppies[i].url);

    // You should add a button for liking here
    $newPuppy
      .append($("<button class='like-puppy'>").attr('id', puppies[i].id).text('Like woofer'))
      $newPuppy.find('.like-puppy').on('click', (e) => {
        console.log('like')
       likePuppy(puppies[i].id);
    })
      ;
    // you should add a button for abandoning here

    $newPuppy
      .append($("<button class='delete-puppy'>").attr('id', puppies[i].id).text('Abandon the pup'))
      $newPuppy.find('.delete-puppy').on('click', (e) => {abandonPuppy(puppies[i].id).then(getAllPuppies); console.log('abandon')});
    $container.append($newPuppy);
  }
}

function registerLikeButtonHandler() {
  // implement like button listener here.
  $('.like-puppy').on('click', event => {
    console.log(event.target.id);
    likePuppy(event.target.id).then(() => {
      getAllPuppies()
        .then(registerLikeButtonHandler)
        .then(registerAbandonButtonHandler);
    });
  });
}

function registerAbandonButtonHandler() {
  // implement abandon button listener here. :(
  $('.delete-puppy').on('click', (event) => {
    console.log(event.target.id);
    abandonPuppy(event.target.id).then(() => {
      getAllPuppies()
        .then(registerLikeButtonHandler)
        .then(registerAbandonButtonHandler);
    });
  });
}


function registerFormHandler() {
  $('form').on('submit', function(e) {
    e.preventDefault();
    const $form = $(this);
    const puppy = {
      name: $form.find('[name=name]').val(),
      url: $form.find('[name=url]').val()
    };
console.log($form.find('[name=url]').val())
    adoptPuppy(puppy).then(() => {
      getAllPuppies();
    });
  });
}


$(() => {
  registerFormHandler();
  registerLikeButtonHandler();
  registerAbandonButtonHandler();
  getAllPuppies();
});
