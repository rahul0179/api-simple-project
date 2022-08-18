const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displaydata(data))
}

const displaydata = (data) => {
    const display = document.getElementById("display");
    //console.log(data);
    data.forEach(i => {
        //console.log(i);

        const div = document.createElement('div')
        div.classList.add('container');
        //div.onclick.add("idshow(${i.id})")
        div.innerHTML = `
       
      <h1>${i.id} </h2>
      <h1>${i.name} </h2>
      <h1>${i.emil} </h2>
      <button onclick="idshow(${i.id})">click</button> 
    
    
    `
        display.appendChild(div);




    });




}

const idshow = id => {
    const url = `https://jsonplaceholder.typicode.com/comments/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayIdDetails(data))




}

const displayIdDetails = data => {
    const display = document.getElementById("display");
    console.log(data);
    display.innerHTML = "";




    const div = document.createElement('div')
    div.classList.add('container');

    div.innerHTML = `
       
      <h1>${data.id} </h2>
      <h1>${data.name} </h2>
      <h1>${data.email} </h2>
     
    
    
    `
    display.appendChild(div);






}