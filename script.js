// 1) {a:'one', b:'2', f:'5', c:'33', p:'do', q:'one' }: Using this object make an array 
// consisting of all the keys of the given object in reverse order. (output should be ['q', 'p', 'c', 'f', 'b', 'a'])
var obj1={
    a:'one', 
    b:'2', 
    f:'5', 
    c:'33', 
    p:'do', 
    q:'one' 
};
let z=Object.keys(obj1);
console.log(z.reverse());

// 2){ data: [{a:'one', id:'22'}, {a:'four', id:'7'}, {a:'six', b:'2'},  {a:'sixty', id:'24'},  {a:'five', id:'212'}] }
// From the given object remove the data arrays item with id as '24'. 
// (consider that the data arrays order will be different every time you get, so write code in
// such a way that given any object it will remove the item with id as 24 if it exists )
var obj2={ data: [{a:'one', id:'22'},
     {a:'four', id:'7'}, 
    {a:'six', b:'2'}, 
     {a:'sixty', id:'24'}, 
     {a:'five', id:'212'}] };
 obj2.data.forEach((element,index) => {
   if (element.id=="24"){
       obj2.data.splice(index,1);
        console.log(obj2);
   }
 });

//  3)Write a function to 
//  a.Calculate the height of the end user's browser screen
//  b.To console the name of the web host
//  c.To show a warning message if there is no https protocol used in the visited website.
//  d.To show an alert message after 10sec while the page is refereshed.
(function(){
    console.log("height of the screeen :" + window.screen.height);
    console.log("Width of the screeen :" + window.location.hostname);
    if (location.protocol!=="https://"){
        alert(" warning ");
    }
    else{
        console.log("no problem");
    }
    window.onload=setTimeout(function(){
        alert("its reloaded");
    },1000);
})();

// 4)Store your basic details in localstorage of the browser every time the page loads, 
// then console them and finally delete them after 1 minute of the page load.
localStorage.setItem("name","aswan");
localStorage.setItem("place","Ramattukara");
console.log("name :"+localStorage.getItem('name')+ " place :" + localStorage.getItem('place'));
setTimeout(() => {
    localStorage.removeItem('place');
    localStorage.removeItem('name');
},60000);

//5) Redirect to the homepage of google from the console.
setTimeout(function(){
   window.location.href="https://www.google.com";
},61000);
