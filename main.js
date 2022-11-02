let spacebarDarkMode = false;

function switchMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
window.addEventListener("keydown", spaceKey);

function spaceKey(key) {
  if (key.keyCode === 17) { 
    spacebarDarkMode = !spacebarDarkMode;
   console.log("spacebar Dark mode: " + spacebarDarkMode);
   switchMode();
  }
}
const init = () => {
  const inputForm = document.querySelector('form');
  inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.querySelector('input#submitSearch');
  
    function mouseClear(){
      location.reload();
    }
    mouseReset.addEventListener("mouseover", mouseClear);

      fetch(`https://api.openbrewerydb.org/breweries/search?query=${input.value}`)
    .then(response => response.json())
    .then(data => {
      
       data.forEach(user =>{
             
          const outPut =`<li>${user.name}</li>`;
        
          document.querySelector('ul').insertAdjacentHTML('beforebegin', outPut);
          
          const outPut1 =`<li>${user.phone}</li>`;
        
          document.querySelector('ul').insertAdjacentHTML('beforebegin', outPut1);
                    
          const outPut2 =`<li>${user.website_url}</li>`;
          
          document.querySelector('ul').insertAdjacentHTML('beforebegin', outPut2);
      }
       );
          
    });
  });
}
document.addEventListener('DOMContentLoaded', init);