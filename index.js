let count = 0;

function increment() {

    count = count + 1;
    document.getElementById("count-el").textContent = count;
    
}



function save(){
    let saveEl = document.getElementById("save-el")

    let val =  count + " - " ;
    saveEl.textContent+=val;

    document.getElementById("count-el").textContent=0
    count=0;


}


    
















