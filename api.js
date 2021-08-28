const loadData = () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(data => addData(data))
}
loadData()
const addData = countries => {
    const findSection = document.getElementById('new-id');
    for( const countri of countries){
        const div = document.createElement('div');
        div.classList.add('new-class')
        div.innerHTML = `
        <h3> Country name: ${countri.name}</h3>
        <h4> Capital name: ${countri.capital}</h4>
        <p> Region: ${countri.region}</p>
        <p> Time Zon: ${countri.timezones}</p>
        <img src="${countri.flag}" alt="">
        
        `
        findSection.appendChild(div)
        console.log(countri)
    }
}