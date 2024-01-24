


//close modal
function closeModal(name) {    
    const modalElement = document.getElementById(name);    
    modalElement.className =  modalElement.className.replace(' show', '');    
    var backDropModal = document.getElementsByClassName('modal-backdrop');
    if (backDropModal.length>0){
        for (let index = 0; index < backDropModal.length; index++) {
            setTimeout(() => {
                const element = backDropModal[index];
                element.remove();
            }, window.innerWidth > 768 ? 0 : 400);                    
        }
    }    
}

//open modal
function openModal(name) {
    const modalElement = document.getElementById(name);    
    if(!modalElement.className.includes('show'))
    {        
        modalElement.insertAdjacentHTML("beforebegin", "<div class='modal-backdrop'></div>");
        modalElement.className += ' show'
    }        
}