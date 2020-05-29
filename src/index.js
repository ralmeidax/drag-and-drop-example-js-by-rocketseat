/** app */
const cards = document.querySelectorAll('.card');
const dropzones = document.querySelectorAll('.dropzone');

/** our cards */
cards.forEach((card) => {
    card.addEventListener('dragstart', dragstar);
    card.addEventListener('drag', drag);
    card.addEventListener('dragend', dragend);
})

function dragstar(){
    // log('CART: Start Dragging');
    dropzones.forEach((dropzone) => dropzone.classList.add('highlight'));

    this.classList.add('is-dragging');
}

function drag(){
    // log('CARD: Is dragging');
}

function dragend(){
    // log('CARD: Stop drag!')
    dropzones.forEach((dropzone) => dropzone.classList.remove('highlight'));

    this.classList.remove('is-dragging');
}

/** place where we will drop cards */
dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragenter', dragenter);
    dropzone.addEventListener('dragover', dragover);
    dropzone.addEventListener('dragleave', dragleave);
    dropzone.addEventListener('drop', drop);
    dropzone.addEventListener('dragexit',dragexit);
});

function dragenter(){
    // log('DROPZONE: Enter in zone');
}

function dragover(){
    //log('DROPZONE: Over');
    this.classList.add('over');

    //get dragging card
    const cardBeingDragged = document.querySelector('.is-dragging');

    //put card in dropzone selected
    this.appendChild(cardBeingDragged);

}

function dragleave(){
    //log('DROPZONE: Leave');
    this.classList.remove('over');
}

function drop() {
    log('DROPZONE: dropped');
    this.classList.remove('over');
}


function dragexit(){
    log('DROPZONE Exit');
}
/** help */
function log(message){
    console.log('>CARD ', message);
}