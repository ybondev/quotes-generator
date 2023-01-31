btnGenerate = document.getElementById('btn-generate');
qoutesId = document.getElementById('id');
qoutes = document.getElementById('qoutes');

let url = "https://api.adviceslip.com/advice";

let getAdvice = () =>{
    fetch(url)
        .then(data => data.json())
        .then((item) => {
            qoutesId.innerText = `ADVICE # ${item.slip.id}`;
            qoutes.innerText = item.slip.advice;
        }).catch(err => alert("fetching error"+err))
}

btnGenerate.addEventListener("click", function() {
    getAdvice();
})