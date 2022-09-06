/**
 * Fetch API
 * */

const urlNumbersApi = `https://filrouge.uha4point0.fr/entrainementAlgoTri/10`;

fetch(urlNumbersApi)
    .then((numbersRes) =>{
        return numbersRes.json()
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

/*------ Todo - Dynamiser : Utiliser numbers de l'api au lieu de arr
              - afficher dans l'html
              - bouton ask sort https://codepen.io/fabienhenon/pen/RwovXJd
------*/


//optimized bubble sort

const arr = [ 4, 6, 3, 9, 9, 3, 9, 6, 9, 1 ];
console.log(arr);


let optimizedBubbleSort = (arr) => {
    let n = arr.length;
    let swapped = false;

    for(let i = 0; i < n - 1; i++){
        for(let j = 0; j <= n - i - 1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                swapped = true;
            }
        }
        if(!swapped){
            break;
        }
    }
    return arr;
}

optimizedBubbleSort(arr);
console.log(arr);


/*------ Sources Algo ------*/
// https://askcodez.com/algorithme-de-tri-bubble-javascript.html
// https://learnersbucket.com/examples/algorithms/bubble-sort-algorithm-in-javascript/

