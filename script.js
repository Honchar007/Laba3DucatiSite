/*function rollAll()
{

var elem = document.querySelectorAll('button');
console.log(elem);
for (let i = 0; i < elem.length; i++) {
  elem[i].addEventListener('mouseenter', function() {
  for (let i = 0; i < elem.length; i++) {
    elem[i].classList.remove('roll-button-menu');
    }
    elem[i].classList.remove('roll-button-menu');
    elem[i].classList.add('roll-button-menu');
    
  })
  elem[i].addEventListener('mouseout', function() {
  elem[i].classList.remove('roll-button-menu');
  })
}
}
*/
function myFunction(x) {
    x.classList.toggle("change");
    var elem = document.getElementById("burger-menu_nav");
    elem.classList.toggle("burger-menu_active");
    document.body.classList.toggle("stickylogohide"); 
    elem = document.getElementById("stickylogo");
    elem.classList.remove("hidesome");
   document.getElementById("footer-nav").classList.toggle("hidefooter");   

    NowScrollUPDown= false;
}
function burgerMenuSearchHide()
{
    var textareaburgermenu = document.getElementById("searchTextArea");
    textareaburgermenu.classList.toggle("burger-menu_search");
    textareaburgermenu.classList.toggle("activeInput");
}
function burgerMenuSearch()
{
    var textareaburgermenu = document.getElementById("searchTextArea");
    textareaburgermenu.classList.toggle("activeInput");
    textareaburgermenu.classList.toggle("burger-menu_search");
    textareaburgermenu.focus();
}
var isScrolling = false;
 
window.addEventListener("scroll", throttleScroll, false);
 var lastscrolledY=0;
 var NowScrollUPDown = false;
function throttleScroll(e) {
    if (isScrolling == false ) {
        window.requestAnimationFrame(function() {
            const scrolled = window.scrollY;
            if(lastscrolledY < scrolled-10 && NowScrollUPDown == false)
            {
                setTimeout(dealWithScrollingDown(e), 5000); 
              //  console.log(lastscrolledY +" < "+ scrolled-1)
              //  console.log("Down scroll");
                lastscrolledY = scrolled-10;
                NowScrollUPDown= true;
            }
            else if(lastscrolledY > scrolled+1 && NowScrollUPDown == true)
            {
                setTimeout(dealWithScrollingUp(e),5000);
             //   console.log(lastscrolledY +" >"+ scrolled+10);
             //   console.log("UP scroll");
                NowScrollUPDown=false;
            lastscrolledY = scrolled+10;

            }

            lastscrolledY = scrolled;
          isScrolling = false;
          
        });
    }
    
    
    
    isScrolling = true;
    
}   
 function dealWithScrollingUp(e)
 {
    var elem = document.getElementById("stickylogo");

    elem.classList.remove("hidesome");
 }
function dealWithScrollingDown(e) {
    // do epic stuff 
    var elem = document.getElementById("stickylogo");
    elem.classList.add("hidesome");
}
function clearAll()
{
   document.getElementById("popup-buttonMenu").style.display = "none";   
   document.getElementById('buttonMenu').style.display = 'flex';

}
function rollup()
{
    

    window.requestAnimationFrame(function() {
        document.getElementById('button1').classList.add("buttonhover");
    document.getElementById('button2').classList.add("buttonhover");
    document.getElementById('button3').classList.add("buttonhover");
    });
}
function notrollup()
{
    

    window.requestAnimationFrame(function() {
        document.getElementById('button1').classList.remove("buttonhover");
    document.getElementById('button2').classList.remove("buttonhover");
    document.getElementById('button3').classList.remove("buttonhover");
    });
}
/*
function notRollAll()
{
    setTimeout(() => {  let i = 1;
        while (i <= 3)
            { // выводит 0, затем 1, затем 2
            var elem = document.getElementById("buttonMenu"+i);
            
            elem.classList.remove("roll-button-menu");
            

            i++;
            }; }, 2000);

    
}
*/