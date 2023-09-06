



async function getuserdata(){
try{
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await res.json();
    return result;
    
}
catch(error){
    console.error("Error fetching user data:", error);
    throw error;

}
}
getuserdata()
.then((data1) => {
      const maindiv = document.createElement("div");
    maindiv.setAttribute("class","col")
    const div = document.createElement("div");
    div.setAttribute("class","navbar navbar-dark bg-primary text-white p-2")
    div.innerHTML =" Users List"
    maindiv.appendChild(div);
    // document.body.append(maindiv);
    const rowDiv = document.createElement("div"); //bootstap-grid
    rowDiv.setAttribute("class","row m-3")
    for (var i = 0; i < data1.length; i++) {
      //console.log(data1[i])
     const colDiv = document.createElement("div");
     colDiv.setAttribute("class","col-6 col-md-4")
     colDiv.innerHTML = `
          <div class="card">
            <div class="card-body">
            <p class="card-text"><b><i>Name: ${data1[i].name}</i></b></p>
              <p class="card-text"><i>E-mail: ${data1[i].email}</i></p>
              <p class="card-text"><i>Street: ${data1[i].address.street}</i></p>
              <p class="card-text"><i>City: ${data1[i].address.city}</i></p>
          
            </div>
          </div>`;
      rowDiv.appendChild(colDiv);
    }
  maindiv.appendChild(rowDiv);
  document.body.append(maindiv);
  })
  .catch(error => {
    console.error("An error occurred:", error);
  });
/* <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div> */

//   async function foo(){
//     try {
//        const res =  await fetch("https://restcountries.com/v2/all")
//        const result = await res.json();
//        console.log(result)
//    } catch (error) {
//        console.log(error)
//     }
//    }

//    foo();


