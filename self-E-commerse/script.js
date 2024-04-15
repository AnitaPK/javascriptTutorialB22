const user=[{id:1,username:'john',password:'john'},
            {id:1,username:'Tom',password:'tom'}];

loginCheck1 = document.getElementById('loginCheck')
loginCheck1.addEventListener('click',()=>{
       userName1 =  document.getElementById('usrName').value;
       password = document.getElementById('password').value;

       console.log(userName1);
       user.forEach(elmn =>{
            if(elmn.username !== userName1){
                alert('incorrect Username or password');
            }else{
                window.open('./homePage.html');
            }
        })

})





// <div class="card" style="width: 18rem;">
//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>