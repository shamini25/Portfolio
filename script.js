function openModal(modalId){

  document.getElementById(modalId).style.display = "block";

}

function closeModal(modalId){

  document.getElementById(modalId).style.display = "none";

}

window.onclick = function(event){

  const modals = document.querySelectorAll('.modal');

  modals.forEach(function(modal){

    if(event.target == modal){
      modal.style.display = "none";
    }

  });

}