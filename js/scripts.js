const form = document.getElementById('myForm'); 
  
form.addEventListener('submit', function(event) { 
  event.preventDefault(); // Prevent form submission 

  // Get form values 
  const pilihintro = document.getElementById('pilihintro').value;
  const textintro = document.getElementById('textintro').value; 
  const warnatext = document.getElementById('warnatext').value; 
  const warnaefektext = document.getElementById('warnaefektext').value;
  

  // Format data for WhatsApp URL 
  const formattedpilihintro = encodeURIComponent(pilihintro);
  const formattedtextintro = encodeURIComponent(textintro); 
  const formattedwarnatext = encodeURIComponent(warnatext);
  const formattedwarnaefektext = encodeURIComponent(warnaefektext);
  
  
   
  // Build WhatsApp URL 
  const whatsappUrl = `https://wa.me/+628988906499?text=${formattedpilihintro}%0A${formattedtextintro}%0A${formattedwarnatext}%0A${formattedwarnaefektext}`; 

  // Open WhatsApp URL 
  window.open(whatsappUrl); 
});