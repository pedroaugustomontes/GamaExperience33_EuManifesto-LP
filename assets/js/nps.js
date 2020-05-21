document.addEventListener('mouseleave', function(){
    showPopup();
  })
  
  document.addEventListener('touchleave', function(){
    showPopup();
  }, false)
  
  
  document.querySelector(".fechar").addEventListener('click', function() {
    closePopup();
  })
  
  function showPopup() {
    const popup = document.querySelector(".overlay");
    popup.classList.add("visible");
  }
  
  function closePopup() {
    const popup = document.querySelector(".overlay");
    popup.classList.remove("visible");
  }
  