//classes






//addEventListeners
eventLIstener();
function eventLIstener(){
document.querySelector('#submitBtn').document.addEventListener('click', search )
}




//functions

function search(e){
    e.preventDefault();
    let newsName = document.querySelector('#news-name').value;
    let country = document.querySelector('#country').value;
    let category = document.querySelector('#category').value;

    if (newsName !=='' || country !=="" || category !==''){

    }else{
        
    }
    

}


