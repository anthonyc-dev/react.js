 const darkMood = document.getElementById('dark-mood');
 const body = document.querySelector('body');

  darkMood.addEventListener("click", function(){
    this.classList.toggle('fa-moon');
    
    if(this.classList.toggle('fa-sun')){
      body.style.background = 'white';
      body.style.color = 'black';
      body.style.transition = '2s';
    }
    else {
      body.style.background = 'black';
      body.style.color = 'white'
      body.style.transition = '2s';
    }
  });