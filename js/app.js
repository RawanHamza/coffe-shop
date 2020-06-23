//create dynamic navbar
var listItem = [{label : "Home", href : "#Header" ,class: "active"},
               {label : "News & Articles", href : "#News"},{label : "Cafes", href : "#Cafes"},{label : "Newsletter", href : "#Newsletter"},{label : "Help", href : "#Help"}];
var array = listItem.map(function(listI) {
  return "<a href="+ listI.href + ">"+ listI.label + "</a>";
})
var listContainer = document.querySelector("#mainNav");
array.forEach(listItem => listContainer.innerHTML+=listItem);


// Making menu in mobile view
 const navSlide= () => {
   const burger = document.querySelector(".burger");
   const nav= document.querySelector(".nav-links");
   burger.addEventListener('click',() => {nav.classList.toggle('nav-active');
   burger.classList.toggle('toggle');
                                         
  });
 }
 navSlide();

//It should be clear which section is being viewed while scrolling through the page. 
function onScroll(event){
  var sections = document.querySelectorAll('#mainNav a');
  var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  
  for( var i = 0; i < sections.length; i++ ){
    var currLink = sections[i]; 
    var val = currLink.getAttribute('href');
    var refElement = document.querySelector(val);
      if( refElement.offsetTop <= scrollPos && ( refElement.offsetTop + refElement.offsetHeight > scrollPos)){
        document.querySelector('#mainNav a').classList.remove('active');
        currLink.classList.add('active');
      }else{
         currLink.classList.remove('active');
       }
  }           
    
};

window.document.addEventListener('scroll', onScroll );

//button scrolls to top

var scrollTop=document.querySelector('#btn');
scrollTop.addEventListener('click', function() {

  document.documentElement.scrollTop = 0; 
} );
