/**
 * Fetch API
 * */

const urlNumbersApi = `https://filrouge.uha4point0.fr/entrainementAlgoTri/10`;

fetch(urlNumbersApi)
    .then((playersRes) =>{
        return playersRes.json()
    })
    .then((numbersData)=>{
        let dataNumber="";
        numbersData.map((valuesNumber)=>{
            dataNumber+=
                `
                ${valuesNumber}, 
                
                `
        });
        document.getElementById("numbers").innerHTML=dataNumber;
    })
    .catch((err)=>{
        console.log(err);
    })
