
//  all sports show home page 

const allSports = () => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/all_sports.php`
    fetch(url)
        .then(res => res.json())
        .then(data => displayAllSports(data))

}
allSports();
const displayAllSports = data => {

    const sports = data.sports
    console.log(sports)
    const tableData = document.getElementById("table-data")
    sports.forEach(i => {
        const tr = document.createElement('tr')
        tr.innerHTML = `
        <th scope="row">${i.idSport}</th>
        <td>${i.strSport}</td>
        <td>${i.strFormat}</td>
        <td><img src="${i.strSportThumb}" alt=""></td>
        <td><img src="${i.strSportIconGreen}" alt=""></td>

        
        `
        tableData.appendChild(tr)





    });


}

