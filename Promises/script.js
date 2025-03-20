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
      document.getElementById("fetchJoke").addEventListener("click",fetchData);