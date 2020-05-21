document.addEventListener('mouseleave', function(){
    console.log("saida")
    showPopup();
  })
  
  document.addEventListener('touchleave', function(){
    console.log("saida")
    showPopup();
  }, false)
  
  
  document.querySelector(".close").addEventListener('click', function() {
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
  