// Making menu in mobile view
let listButton = document.querySelector('.toggle-button');
let navItems = document.querySelector('.nav-items');
let closeList = document.querySelector('body');
if(window.innerWidth<='776')
	{
listButton.addEventListener('click',  function(e){
    navItems.style.display='block';
    console.log(" block");
  e.stopPropagation();
 });
window.addEventListener('click',function(){
  navItems.style.display='none';
  console.log("none");
})

	}


//It should be clear which section is being viewed while scrolling through the page. 
function onScroll(event){
  var sections = document.querySelectorAll('#menu a');
  var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  
  for( var i = 0; i < sections.length; i++ ){
    var currLink = sections[i]; 
    var val = currLink.getAttribute('href');
    var refElement = document.querySelector(val);
      if( refElement.offsetTop <= scrollPos && ( refElement.offsetTop + refElement.offsetHeight > scrollPos)){
        document.querySelector('#menu ul li a').classList.remove('active');
        currLink.classList.add('active');
      }else{
         currLink.classList.remove('active');
       }
  }           
    
};

window.document.addEventListener('scroll', onScroll );

//When clicking an item from the navigation menu, the link should scroll to the appropriate section. 
document.querySelector('.scrollme').scrollIntoView({ 
  behavior: 'smooth' 
});
