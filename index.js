document.getElementById('category').addEventListener("click",function(){
const apiUrl = '{{baseURL}}/hackathon/categories-list';

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    return response.json(); 
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
});


document.getElementById("registerBTN").addEventListener("click",function(){
const apiUrl = '{{baseURL}}/hackaton/registeration';
const postData = {
  "Email": "Sample@example.com",
  "phone_number": "0903322445533",
  "team_name": "Space Explore",
  "group_size": "10",
  "project_topic": "Web Server Propagation",
  "Category": 1,
  "privacy_policy_accepted": true
};


fetch(apiUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(postData),
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    return response.json(); 
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

});

document.getElementById("submit").addEventListener("click",function(){
    const apiUrl = '{{baseURL}}/hackaton/contact-form';
    const postData = {
      "email": "Sample@example.com",
      "phone_number": "0903322445533",
      "first_name": "Space Explore",
      "message": "I need further info",
    };
    
    
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json(); 
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
    
    });

   const regBTN= document.getElementsByClassName("register");
   for(var i=0; i<regBTN.length; i++){
    regBTN[i].onclick= function(){
        window.location.href="register.html";
    };
   }