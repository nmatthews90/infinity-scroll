//Unsplash API
const count = 10;
const apiKey = "3Hmi3Ftw8aZrCu71GuJmjTYM7nEp71aKIUcXEthFGZU";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//Get phots form Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    // Catch Error Here
  }
}

// On Load
getPhotos();
