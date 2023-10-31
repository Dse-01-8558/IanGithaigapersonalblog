function changer() {
          
      
const image = document.queryselector(".imgr");
const input = document.queryselector(".inputf");

    input.addEventListener("change", () => {
      image.src = URL.createObjectURL(input.files[1]);
         image.remove(input.file[0]);
         image.append(image.src);
      });
    }

    const button = document.querySelector("#submit");
    
    function submitUser(){
      button.addEventListener("submit", (e) => {
      e.preventdefault()
      savedUser();
    })
  };
    

 function showUser() {

    button.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        const url = 'https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}}&lon=${longitude}';

        fetch(url).then(res => res.json()).then(data =>{
            console.table(data.address);
        }).catch(() => {
              console.log("Error Fetching The API!");
        });
          
    });
  });
  }

 function savedUser() {
const firstName = document.querySelector('.namey1').value;
const secondName = document.querryselector('.namey2').value;
const nickName = document.querryselector('.niki').value;
const phoneNumber = document.querySelector('.nums').valueAsNumber;
const passWord1 = document.querySelector('.pass1').value;
const passWord2 = document.querySelector('.pass2').value;

let f = firstName;
let s = secondName;
let n =nickName
let p = phoneNumber;
let pass1 = passWord1;
let pass2 = passWord2;

 if(pass1 === pass2) {
   alert('Validated');
  
 } else ( alert('The password you have entered is not the same'));

  
  
 const user = {
f: '',
s: '',
n: '',
p: NaN,
pass1: '',
pass2: ''
}; 


const userJson = JSON.stringify(user);
localStorage.setItem("userData", userJson);
alert('Your information has been safely stored!');

}


function loginUser(){
 const loginPage = document.querySelector('.loginpage');
  
 button.addEventListener("click", () =>{
 let loginPageHTML =`
   <section><div><input type="Email" placeholder=""></input></div></section>
 `; 
 })

}