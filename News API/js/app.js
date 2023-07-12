//classes
let ui = new UI();






//addEventListeners
eventListener();
function eventListener(){
document.querySelector('#submitBtn').addEventListener('click', search);
}




//functions

function search(e){
    e.preventDefault();
    let newsName = document.querySelector('#news-name').value;
    let country = document.querySelector('#country').value;
    let category = document.querySelector('#category').value;

    if (newsName !=='' || country !=="" || category !==''){
    console.log("correct")
    }else{
        ui.printMessage('please enter atleast one parametr','text-center alert alert-danger mt-4');
    }
    

}


