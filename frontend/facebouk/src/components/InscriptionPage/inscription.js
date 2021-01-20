const URL="http://localhost:8081/auth/signup";  //url da la route de la requete en back


const fetchinsc=()=>{ //instancier le js en react
  document.getElementById("submit").addEventListener('click',(e)=>{ //evenement au click sur le bouton 
    e.preventDefault();
  const user={   // creation d un objet avec mes données a envoyer
    username: document.querySelector("#username").value, //username-> req.body.email
    email: document.querySelector("#email").value, //email-> req.body.email
    password: document.querySelector("#password").value, //attention a nommer comme en back
}

const Formjson=JSON.stringify(user); // Transformation en String
console.log(user);
const config = { //configuration fetch
    method: 'POST', //envoyer
    headers: {  //autorisation
    "Accept": "application/json", //j'accepte de recevoir du json
    "Content-Type": "application/json", //j'envoie du json
    "Access-Control-Allow-Origin":"http://localhost:8081/auth/signup", //j autorise a aller sur mon back
    },
    body: Formjson,// j'envoie dans le back body ==req.body
  } 
  console.log(user);  
fetch(URL, config) //instancier la fetch
  .then(response =>  //après que la fetch est faite je fais :
    response.json())
    .then(data => {
        console.log(data);  
        document.location.href="/";
  })})
}

export default fetchinsc;