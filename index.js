var inputText = document.getElementById("txt"),
                 items = document.querySelectorAll("#list li"),
                 tab = [], index;
         
             // get the selected li index using array
             // populate array with li values
             
             for(var i = 0; i < items.length; i++){
                 tab.push(items[i].innerHTML);
             }
             
             // get li index onclick
             for(var i = 0; i < items.length; i++){
                 
                 items[i].onclick = function(){
                     index = tab.indexOf(this.innerHTML);
                     console.log(this.innerHTML + " INDEX = " + index);
                     // set the selected li value into input text
                     inputText.value = this.innerHTML;
                 };
                 
             }
            
            function refreshArray()
            {
                // clear array
                tab.length = 0;
                items = document.querySelectorAll("#list li");
                // fill array
                for(var i = 0; i < items.length; i++){
                 tab.push(items[i].innerHTML);
               }
            }
            function addLI(){
                
                var listNode = document.getElementById("list"),
                    textNode = document.createTextNode(inputText.value),
                    liNode = document.createElement("LI");
                    
                    liNode.appendChild(textNode);
                    listNode.appendChild(liNode);
                    
                    refreshArray();
                    
                    // add event to the new LI
                    
                    liNode.onclick = function(){
                     index = tab.indexOf(liNode.innerHTML);
                     console.log(liNode.innerHTML + " INDEX = " + index);
                     // set the selected li value into input text
                     inputText.value = liNode.innerHTML;
                 };
                    
             }
             
             function editLI(){
                 // edit the selected li using input text
                 items[index].innerHTML = inputText.value;
                 refreshArray();
              }
              
              function deleteLI(){
                  
                      refreshArray();
                      if(items.length > 0){
                          items[index].parentNode.removeChild(items[index]);
                          inputText.value = "";
                      }
              }
            
/*
To add and remove movies from a bookmark list, you can use the same approach as adding and removing bookmarks. 
The main difference is that instead of storing the URL and title of the page, you will store the movie information such as its title, 
poster, and release date.

Here's an example of how to add a movie to a bookmark list:

function addMovieToBookmark(movie) {
  const bookmarkedMovies = JSON.parse(localStorage.getItem('bookmarkedMovies')) || [];
  bookmarkedMovies.push(movie);
  localStorage.setItem('bookmarkedMovies', JSON.stringify(bookmarkedMovies));
}

This function takes a movie object as a parameter and retrieves the list of bookmarked movies from localStorage. 
If there are no bookmarked movies, it initializes an empty array. 
It then adds the movie object to the list of bookmarked movies and stores the updated list back into localStorage.

To remove a movie from the bookmark list, you can use the filter method to filter out the movie that matches the 
ID of the movie to be removed. Here's an example:

function removeMovieFromBookmark(movieId) {
  let bookmarkedMovies = JSON.parse(localStorage.getItem('bookmarkedMovies')) || [];
  bookmarkedMovies = bookmarkedMovies.filter(movie => movie.id !== movieId);
  localStorage.setItem('bookmarkedMovies', JSON.stringify(bookmarkedMovies));
}


This function takes a movieId as a parameter and retrieves the list of bookmarked movies from localStorage. 
It then uses the filter method to create a new array that excludes the movie with the matching id. Finally, 
it stores the updated list back into localStorage.

Note that in both of these examples, we're using JSON.parse and JSON.stringify to convert between JSON and JavaScript objects. 
This is because localStorage can only store strings, 
so we need to convert our objects to strings before storing them and parse them back into objects when retrieving them. 
Additionally, in the second example, 
we first assign the filtered list to a new variable and then store it 
back into localStorage to avoid any unexpected behavior caused by modifying the original array.



*/
