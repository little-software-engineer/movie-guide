let movieNameRef = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");


//Function to fetch data from API
let getMovie = () => {
  let movieName = movieNameRef.value;
  let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;
  //If input field is empty
  if (movieName.length <= 0) {
    result.innerHTML = `<h3 class="msg">Please enter a movie or a TV show </h3>`;
  }
  //If input field is NOT empty
  else {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        //If movie exists in database
        if (data.Response == "True") {
          result.innerHTML = `
            <div class="info">
                <img src=${data.Poster} class="poster">
                <div>
                   <div class="title"> <h2>${data.Title}</h2></div>
                    <div class="rating">
                        <img src="star.png">
                        <h4>${data.imdbRating}</h4>
                   

                    </div>

                    <div class ="director">
                    <h4>Director:</h4>
                    <p>${data.Director}</p>

                    </div>
                    <div class="details">
                        <span>${data.Rated}</span>
                        <span>${data.Year}</span>
                        <span>${data.Runtime}</span>
                       
                       

                    </div>
                    <div class="genre">
                        <div>${data.Genre.split(",").join("</div><div>")}</div>
                    </div>
                </div>
            </div>
            <h3>Plot:</h3>
            <p>${data.Plot}</p>
            <h3>Cast:</h3>
            <p>${data.Actors}</p>
            <h3>Language:</h3>
            <p>${data.Language}</p>
            
        `;
        }
        //If movie does NOT exists in database
        else {
          //result.innerHTML = `<h3 class='msg'>${data.Error}</h3>`;
          result.innerHTML = `<h3 class='msg'>Movie/TV Show not found.</h3>`

        }
      })
      //If error occurs
      .catch(() => {
        result.innerHTML = `<h3 class="msg">Error Occured</h3>`;
      });
  }
};
searchBtn.addEventListener("click", getMovie);
window.addEventListener("load", getMovie);