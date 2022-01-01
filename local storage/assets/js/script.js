
let form=document.querySelector('form');
let Input=document.querySelector('#txtTaskName');
let List=document.querySelector('#task-list');
let btnDeleteAll=document.querySelector('#btnDeleteAll');
let Items

LoadItem()
EvenListener();
function EvenListener() {
    
    form.addEventListener('submit',AddNewItem)
    List.addEventListener('click',RemoveItem)
    btnDeleteAll.addEventListener('click',RemoveAllItem)
};


function LoadItem() {
    Items=GetItemsLS()
    Items.forEach(function (item) {
        CreatItem(item)
      
    })
  
}


function GetItemsLS() {
    if (localStorage.getItem('items')===null) {
        Items=[]
    }else{
        Items=JSON.parse(localStorage.getItem('items'))
    }
    return Items
  }

 function RemoveItemLS(text){
    Items=GetItemsLS()
   Items.forEach(function (item,index) {
       if (item===text) {
           item.splice(index,1)
       }
   })
   localStorage.setItem('items',JSON.stringify(Items))
  }

  
function SetItemsLs(Text) {
    
    Items=GetItemsLS()
    Items.push(Text)
    localStorage.setItem('items',JSON.stringify(Items))
}
function CreatItem(Text) {
 
   const li=document.createElement('li');
 
    const p=document.createElement('p');
    p.appendChild(document.createTextNode(Text));
    const i=document.createElement('i');
    i.classList='fas fa-times';
    li.appendChild(p);
    li.appendChild(i);
    List.appendChild(li)
}

function AddNewItem(e) {
    if (Input.value==='') {
        alert('please add ne item')
    };
    
    CreatItem(Input.value)
    SetItemsLs(Input.value)
 
    Input.value=''
   e.preventDefault()
   
}

function RemoveItem(e) {
    
        if (e.target.className==='fas fa-times') {
            e.target.parentElement.remove()
            if (confirm("are you sure?")) {
                RemoveItemLS(e.target.parentElement.textContent)
            }
        }
       
    
}
function RemoveAllItem(e) {
   if (conifrm('are you sure')) {
       while(List.firstChild){
           List.removeChild(List.firstChild)
       }
       localStorage.clear()
   }
    
    e.preventDefault()
}




