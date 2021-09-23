// // //1st DOM METHOD createElement(any html element)
// // var division=document.createElement('div')

// // //2nd we need to add the content to the tag (innerHMTL)
// // division.innerHTML="this is div";
// // division.setAttribute('class','main')
// // //3rd step is to add to the document
// // document.body.append(division)


// // var container=document.createElement('div')
// // container.setAttribute('class','container')

// // var row=document.createElement('div')
// // row.setAttribute('class','row')
// // var col=document.createElement('div')
// // col.setAttribute('class','col')
// // row.append(col)
// // container.append(row);
// // document.body.append(container)



// // //Retrieve

// // var res=document.getElementsByClassName('main')
// // console.log(res)



// // function foo()
// // {
// //     var element=document.getElementById('main').value
// //     console.log(element)
// // }

// // var result=document.getElementsByTagName('div')
// // console.log(result) //will return an array

// // //<table>
// // var table=document.createElement('table')
// // table.setAttribute('class','table')
// // //<thead>
// // var thead=document.createElement('thead')
// // thead.setAttribute('class','thead-dark')

// // //<tr>
// // var tr=document.createElement('tr')

// // //<th>
// // var th1=createthtd('th','firstname')
// // var th2=createthtd('th','Lastname')

// // tr.append(th1,th2)
// // thead.append(tr)

// // var tbody=document.createElement(tbody)

// // //<tr>
// // var tr=document.createElement('tr')

// // //<td>
// // var td1=createthtd('td','Mark')
// // var td2=createthtd('td','Otto')

// // tr.append(td1,td2)
// // tbody.append(tr)

// // table.append(thead,tbody)
// // document.body.append(table)



// // var res=document.querySelector('.main')
// // console.log(res)













// // // elementname--<th>
// // // value-->firstname
// // //return vlaue is th tag with firstname or td tag
// // function createthtd(elementname,value)
// // {
// // var td=document.createElement(elementname)
// // td.innerHTML=value;
// // return td;
// // }


// // //creating a bootstrap table
// // var table=document.createElement('table');
// // table.setAttribute('class','table');

// // //creating a thead
// // var thead=document.createElement('thead');
// // thead.setAttribute('class','thead-dark');

// // //create a row
// // var tr=document.createElement('tr');

// // //create a th tag ()
// // var th1=createthtd('th','firstname');
// // var th2=createthtd('th','lastname');
// // tr.append(th1,th2);
// // thead.append(tr);

// // //create a body tag of table
// // var tbody=document.createElement('tbody');

// // //create a row
// // var tr=document.createElement('tr');

// // //create a td tag

// // var td1=createthtd('td','guvi');
// // var td2=createthtd('td','geek');

// // tr.append(td1,td2);
// // tbody.append(tr);
// // table.append(thead,tbody);
// // document.body.append(table);

// // //<th> firstname </th>
// // //elementname-><th>
// // //value->firstname


// // //return value -> <th>firstname </th>
// // //return value -> <td>firstname </td>

// // //return value -> <td>guvi</td>
// // //return value -> <td>geek</td>


// // function createthtd(elementname,value){
// // var element=document.createElement(elementname);
// // element.innerHTML=value;
// // return element;
// // }


//     // var res=prompt("typesomething");
//     // console.log(res)
//     // var t=document.getElementById('promptspan');
//     // t.innerHTML=prompt("typesomething");

//     //question2
// function alertfun()
// {
//     var data=prompt("enter the value here")
//     var span=document.createElement('span')
//     span.style.color='green'
//     span.innerHTML=data;
//     document.body.append(span)
// }

// //questio 1
// document.querySelector('div').addEventListener('mouseover',function(event)
// {
//     event.target.style.color="red"
    
// })
// document.querySelector('div').addEventListener('mouseout',function(event)
// {
//     event.target.style.color="black"
    
// })

// //question 3
// document.querySelector('div').addEventListener('mouseover',function(event){
//     var p=document.createElement('p')
//     p.style.color='red'
//     p.innerHTML=`client x:${event.clientX} client y:${event.clientY}`
//     document.body.append(p)
// })

// //question 4

// document.querySelector('#main').addEventListener('keyup',function(event){
//     console.log(event.target.value.length);
// })


// const date1=new Date()
// console.log(date1)
// function getcount()
// {
// var res=document.getElementById('count').value;
// console.log(res.length)
// }
// function changecolor(x)
// {
// x.style.color="red";
// }

// function changeback(y)
// {
// y.style.color='black'
// }

// // var ele=document.createElement('button')
// // ele.innerHTML="Click me"
// // ele.addEventListener('click',foo)
// // ele.addEventListener('dbclick',foo)
// // document.body.append(ele)


// // function foo()
// // {
// //     console.log("hello world")
// //     var div=document.createElement('div')
// //     div.innerHTML='this is div'
// // div.style.fontSize='32px'
// // div.style.fontFamily='arial'
// // div.style.color='green'
// // document.body.append(div)
// // }


// ///Date
// create an input element with date

//create a div element...
var outerdiv=document.createElement('div')
outerdiv.setAttribute('style','padding-top:20px');
outerdiv.setAttribute('style','text-align:center');

//create a date input field
var dateelement=document.createElement('input');
dateelement.setAttribute('type','date');
dateelement.setAttribute('id','dob');
dateelement.setAttribute('name','dob');
dateelement.setAttribute('style','margin:20px')
outerdiv.appendChild(dateelement);

//create a button element
var button=document.createElement('button');
button.innerHTML='Display Data';
button.setAttribute('class','btn btn-primary');
button.addEventListener('click',calculate)
outerdiv.appendChild(button)


//display the data in the html
var displaydate=document.createElement('div')
displaydate.setAttribute('id','display');
displaydate.setAttribute('style','text-align:center')

function calculate()
{
 var input=document.getElementById('dob').value;   
 console.log(input)
 //check whether input is valid or not
 if(Date.parse(input))
 {
    var inputdate=new Date(input);
console.log(inputdate)
var currentdate=new Date();
console.log(currentdate)

// console.log(currentdate.getMilliseconds())
// console.log(inputdate.getMilliseconds())

var millseconddiff=parseInt(currentdate.getTime())-parseInt(inputdate.getTime())
console.log(millseconddiff)

var secondsdiff=mathfloor(millseconddiff,1000);
console.log(secondsdiff);

var minutediff=mathfloor(secondsdiff,60)
console.log(minutediff)

var hourdiff=mathfloor(minutediff,60)
console.log(hourdiff)

var daydiff=mathfloor(hourdiff,24)
console.log(daydiff)

var monthdiff=getmonthdiff(inputdate,currentdate);
console.log(monthdiff)
var yeardiff=getyeardiff(inputdate,currentdate);
console.log(yeardiff)

displaydate.innerHTML=`given input date is :${inputdate} <br> 
year:${yeardiff}<br>
month:${monthdiff}<br>
day:${daydiff}<br>
hours:${hourdiff}<br>
minutes:${minutediff}<br>
seconds:${secondsdiff}<br>
milliseconds:${millseconddiff}`
 }
 else{
     displaydate.innerHTML="Given input is invalid"
 }
 
 document.body.append(displaydate) 
}

function mathfloor(value1,value2)
{
return Math.floor(value1/value2);
}

function getmonthdiff(value1,value2)
{
var year=getyeardiff(value1,value2);
var month=(year*12)+(value2.getMonth()-value1.getMonth());
return month;
}
function getyeardiff(value1,value2)
{
var date1=new Date(value1)
var date2=new Date(value2)
return date2.getFullYear()-date1.getFullYear();
}
document.body.append(outerdiv)