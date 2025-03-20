// by using async - await
const apiBody = document.querySelector(".api_body");
const apiUrl = "https://icanhazdadjoke.com/";

// async function fetchData() {
    const fetchData = async() =>{// fat arrow
        try{// can also use try catch
    const res = await fetch(apiUrl,{
        headers:{
            Accept:"application/json",
        },
    });
    const data = await res.json();// await used to wait for promises
    console.log(data.joke);
    apiBody.innerHTML = data.joke;
}catch(error){
    apiBody.innerHTML = data.joke;
    console.log(error);
}
    }
fetchData();

document.getElementById("fetchJoke").addEventListener("click",fetchData);




/* by using promises
const apiBody = document.querySelector(".api_body");
      
      const apiUrl = "https://icanhazdadjoke.com/";

      const fetchData = () =>{
        fetch(apiUrl,{
            headers: {
                Accept :"application/json",
            },
        })
        .then((res) =>{
            console.log(res);
            return res.json();
        })
        .then((data) => {
            apiBody.innerText = data.joke;
        })
        .catch((err) =>{
            console.log(err);
        });
      }
      fetch();
      document.getElementById("fetchJoke").addEventListener("click",fetchData);*/