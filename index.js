const quote = document.querySelector('.quote')
const writer = document.querySelector('.writer')
const loading = document.querySelector('.loading')
const btn = document.getElementById('newQuotebtn')
const card = document.querySelector('.card')



const url = 'https://api.api-ninjas.com/v1/quotes?category=happiness'


quoteGenerator();



function quoteGenerator(){
    card.style.opacity = '30%'
    loading.style.opacity= '100%'
    fetch(url , {
        method: 'GET',
        headers: {'X-Api-Key': 'aekgKLaobuygOZaQr9WFug==OAIcmB0K9QUdovPH'}

    })
    .then(Response => Response.json())
    .then(data =>{
        console.log(data);
        quote.innerText = data[0].quote;
        writer.innerText = `By.${data[0].author}`;
    })
    .catch(error => console.error(error))
    .finally(() =>{
        card.style.opacity = '100%'
    loading.style.opacity= '0%'
    })
}

btn.addEventListener('click', quoteGenerator)

