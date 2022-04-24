document.querySelector('#joke').addEventListener('click', tellJoke)

function tellJoke(){

    fetch('https://v2.jokeapi.dev/joke/Any?safe-mode')
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('.jokeGoesHere1').innerText = data.joke
      document.querySelector('.jokeGoesHere1').innerText = data.setup
      document.querySelector('.jokeGoesHere2').innerText = data.delivery
// Need to figure out how to grab Jokes with Programming Syntax of Bling
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}
