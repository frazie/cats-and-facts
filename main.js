document.querySelector('button').addEventListener('click', getFruit);

function getFruit() {
    const factCount = document.getElementById('fact').value
    const url =  `https://meowfacts.herokuapp.com/?count=${factCount}`

    fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
}