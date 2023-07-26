// Add your code here
function submitData(name, email){


    return fetch("http://localhost:3000/users", {
      method:"POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(
        {name:name,
        email: email}
      )
    })
    .then((response => response.json()))
    .then((data)=>{
      const getId = data.id;
      const getElement = document.createElement('p');
      getElement.textContent = `Your id is: ${getId}`;
      document.body.append(getElement);
    })
    .catch(error=> {
      let errorCatch = document.createElement("p")
      error.textContent=`Error: ${errorCatch.message}`
      document.body.append(error)
    })
   }
    document.addEventListener('DOMContentLoaded', function(){
      const form = document.querySelector("#input");
      form.addEventListener("submit", function (e) {
          e.preventDefault();
          let name = document.getElementById('nameId').value;
          let email = document.getElementById('emailId').value;
          submitData(name, email);
    });
      
    })

