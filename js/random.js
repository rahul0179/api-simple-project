const randomData = () => {
    const url = `https://randomuser.me/api/`
    fetch(url)
        .then(res => res.json())
        .then(data => displaydata(data))
}
randomData();

let displaydata = (d) => {
    console.log(d)
    const result = d.results[0];
    const display = document.getElementById('display')
    const div = document.createElement('div')
    div.innerHTML = `
    <p> Date -${result.dob.date} , Age - ${result.dob.age}  </p>
    
    <p> cell -${result.cell} ,  Email- ${result.email} , Gender :${result.gender}  </p>
    <P>Address</P>
    <p> Street -${result.location.street} , city - ${result.location.city} ,Country  :${result.location.country}  </p>

    
    
     `

    display.appendChild(div)

}