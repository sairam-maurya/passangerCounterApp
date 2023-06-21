let count = 0;

function increment() {

    count = count + 1;
    document.getElementById("count-el").innerText = count;
    
}



function save(){
    let saveEl = document.getElementById("save-el")

    let val = count +" "+ "-"+" " ;
    saveEl.innerText+=val

}


    
















