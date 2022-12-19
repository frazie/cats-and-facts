document.querySelector('button').addEventListener('click', getFruit);

function getFruit() {

    //get the value from the dom
    //define the api address and the value
    const factCount = document.getElementById('fact').value
    const url =  `https://meowfacts.herokuapp.com/?count=${factCount}`
    //fetch the data from the ap
    //then plug in the data by creating new 'p' elements for each return value and then append the element to the dom
    fetch(url)
        .then(response => response.json())
        .then(data => {
            
            for (const fact of data.data) {
                const p = document.createElement('p');
                        p.innerText = fact;
                        document.body.appendChild(p);
            }
            console.log(data.data);
        })
        .catch(error => {
            console.error(error);
        });
}