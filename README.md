A responsive landing Page using HTML, CSS, and JavaScript.

#Code

Button scrolls to top when it's clicked:
```
var scrollTop=document.querySelector('#btn');
scrollTop.addEventListener('click', function() {

  document.documentElement.scrollTop = 0; 
} );
```

Switch to Dark mode:

```
var myCheck= document.querySelector('input[type="checkbox"]');
				var myBody=document.querySelector('body');

			myCheck.addEventListener('change', () => {
  if(myCheck.checked) {
    myBody.style.background = '#130101';
    
  } else {
    myBody.style.background= 'white';
  }
});
```
