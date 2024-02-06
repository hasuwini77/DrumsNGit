const darkButton = document.querySelector(".dark-button");
const body = document.querySelector("body");

const toggleDarkMode = () => {
  try {
    body.classList.toggle("dark-mode");
    updateDarkModeIcon();
    saveDarkModePreference();
  } catch (error) {
    console.error("An error occurred while toggling dark mode:", error);
  }
};
const updateDarkModeIcon = () => {
  try {
    darkButton.innerHTML = body.classList.contains("dark-mode") ? `<img class="light-icon" src="./img/mode.png" alt="light-mode-icon" />` : `<img class="dark-icon" src="./img/night-mode.png" alt="dark-mode-icon" />`;
  } catch (error) {
    console.error("An error occurred while updating dark mode icon:", error);
  }
};
const saveDarkModePreference = () => {
  try {
    localStorage.setItem("darkModeEnabled", body.classList.contains("dark-mode"));
  } catch (error) {
    console.error("An error occurred while saving dark mode preference:", error);
  }
};

const loadDarkModePreference = () => {
  try {
    const darkModeEnabled = localStorage.getItem("darkModeEnabled");
    if (darkModeEnabled === "true") {
      body.classList.add("dark-mode");
    }
    updateDarkModeIcon();
  } catch (error) {
    console.error("An error occurred while loading dark mode preference:", error);
  }
};

darkButton.addEventListener("click", toggleDarkMode);

/* COOKIES METHOD 1 

setCookie("firstName", "SpongeBob", 365);
setCookie("lastName", "SquarePants", 365);
getCookie("firstName");
getCookie("lastName");

function setCookie(name, value, daysToLive) {
  const date = new Date();
  date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
  let expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}

function deleteCookie(name) {
  setCookie(name, null, null);
}
function getCookie(name) {
  const cDecoded = decodeURIComponent(document.cookie);
  const cArray = cDecoded.split("; ");
  let result;

  cArray.forEach((element) => {
    if (element.indexOf(name) == 0) {
      result = element.substring(name.length + 1);
    }
  });
  return result;
} */

// COOKIE METHOD 2

const cookieBox = document.querySelector(".wrapper"),
  buttons = document.querySelectorAll(".button");

const executeCodes = () => {
  //if cookie contains codinglab it will be returned and below of this code will not run
  if (document.cookie.includes("DrumsNGit")) return;
  cookieBox.classList.add("show");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      cookieBox.classList.remove("show");

      //if button has acceptBtn id
      if (button.id == "acceptBtn") {
        //set cookies for 1 month. 60 = 1 min, 60 = 1 hours, 24 = 1 day, 30 = 30 days
        document.cookie = "cookieBy= DrumsNGit; max-age=" + 60 * 60 * 24 * 30;
      }
    });
  });
};

//executeCodes function will be called on webpage load

document.addEventListener("DOMContentLoaded", () => {
  loadDarkModePreference();
  executeCodes();
});

class HomeContent {
  constructor(title, image, description, para2, time, tag) {
    this.title = title;
    this.image = image;
    this.description = description;
    this.para2 = para2;
    this.time = time;
    this.tag = tag;
  }
}

const firstArticle = new HomeContent(
  "Best Guitar Chord Ever",
  "./img/guitar1.jpg",
  "An exemplary advanced and jazzy chord is the 'G13#11' chord. This chord is known for its rich and complex sound, making it a favorite in jazz and fusion contexts. To play the G13#11 chord effectively, place your fingers on the frets and strings according to the following configuration: ",
  `Place your index finger on the 3rd fret of the low E string. 
Skip the A string.
On the D string, place your middle finger on the 4th fret.
On the G string, use your ring finger on the 3rd fret.
Skip the B string.
Finally, on the high E string, use your pinky finger on the 5th fret.
This chord creates a sophisticated and colorful harmony with its mix of dominant 7th, 9th, 11th, and sharp 11th intervals. Practice precise finger placement and experiment with incorporating this chord into jazz progressions to add depth and complexity to your playing.  `,
  "10 minutes",
  "guitar"
);

const secondArticle = new HomeContent(
  "Best Drum Pattern",
  "./img/drums1.jpg",
  "Explore the dynamic world of drumming with the best drum pattern that adds rhythm and groove to your beats. This pattern is renowned for its versatility, fitting seamlessly into various music genres. To master this drum pattern, focus on precise kick and snare placements, creating a solid foundation for your drumming skills.",
  "Experiment with different tempos and accents to unlock the full potential of this pattern and elevate your drumming to new heights.",
  "15 minutes",
  "drums"
);

const thirdArticle = new HomeContent(
  "Best Rudiment in Drums",
  "./img/drums2.jpg",
  "Delve into the world of drum rudiments and discover the power of the best rudiment that can enhance your drumming technique. Known for its intricate sticking patterns and dynamic variations, this rudiment provides a solid foundation for drummers of all skill levels. Practice this rudiment with a metronome, gradually increasing speed for precision and control.",
  "Incorporate this rudiment into your drumming vocabulary, and witness how it adds flair and complexity to your drum fills and solos.",
  "12 minutes",
  "drums"
);

let arrayOfArticles = [firstArticle, secondArticle, thirdArticle];

const showAllArticles = (articles) => {
  let divContent = document.querySelector(".main-content");

  articles.forEach((article) => {
    divContent.innerHTML += ` 
    <div class="article-content"> 
  <h2> ${article.title} </h2>
  <img class="article-img" src="${article.image}" alt="${article.title}">
  <p class="article-desc"> ${article.description} </p> 
  <p class="article-desc2"> ${article.para2} </p> 
  <p class="article-time"> ${article.time} </p> 
   </div> `;
  });
};

showAllArticles(arrayOfArticles);
