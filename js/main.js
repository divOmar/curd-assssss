var nameInput=document.getElementById("sitename")
var urlinput=document.getElementById("siteurl")
var bookinfo;
if(localStorage.getItem("book")!=null){
    bookinfo=JSON.parse(localStorage.getItem("book"))
    displayBook()


}else{
    bookinfo=[]
}


function addBOOOK(){
   var bookinfos={
    name:nameInput.value,
    url:urlinput.value,
    
   }
   bookinfo.push(bookinfos)
   localStorage.setItem("book",JSON.stringify(bookinfo))
   displayBook()
  
}





function displayBook(){
     var temp=""
     for(var i=0;i<bookinfo.length;i++){
        temp=temp+` <tr>
                <td>`+i+`</td>
                <td>`+bookinfo[i].name+`</td>
                <td><button class="btn btn-success"><i class="fa-solid fa-eye"></i>visit</button></td>
                <td><button  type="button"   onclick=" deletebook(`+i+`)"  class="btn btn-danger"><i class="fa-solid fa-trash"></i>delete</button></td>
               </tr>`
     }
     document.getElementById("mybook").innerHTML=temp
}


function deletebook(x){


    console.log("deleteeee")
    bookinfo.splice(x,1)
    localStorage.setItem("book",JSON.stringify(bookinfo))
    displayBook()
// bookinfo.slice(x,1)
// displayBook()
}


// function displayBook(){
//     var temp=""
//     for(var i=0;i<bookinfo.length;i++ ){
//         temp=temp+` <tr>
//                 <td>1</td>
//                 <td>omar</td>
//                 <td><button class="btn btn-success"><i class="fa-solid fa-eye"></i>visit</button></td>
//                 <td><button class="btn btn-danger"><i class="fa-solid fa-trash"></i>delete</button></td>
//                </tr>`
//     }
//       document.getElementById("mybook").innerHTML=temp
// }