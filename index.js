const darkButton = document.querySelector(".dark-button");

darkButton.addEventListener("click", () => {
  document.querySelector("body").classList.toggle("dark-mode");

  let darkModeElem = document.querySelector(".dark-mode");
  if (darkModeElem) {
    darkButton.innerHTML = `
    <img class="light-icon" src="./img/mode.png" alt="light-mode-icon" />`;
  } else {
    darkButton.innerHTML = ` 
        <img class="dark-icon" src="./img/night-mode.png" alt="dark-mode-icon" /> `;
  }
});
class HomeContent {
  constructor(title, image, description, para2, time) {
    this.title = title;
    this.image = image;
    this.description = description;
    this.para2 = para2;
    this.time = time;
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
  "10 minutes"
);

const secondArticle = new HomeContent(
  "Best Drum Pattern",
  "./img/drums1.jpg",
  "Explore the dynamic world of drumming with the best drum pattern that adds rhythm and groove to your beats. This pattern is renowned for its versatility, fitting seamlessly into various music genres. To master this drum pattern, focus on precise kick and snare placements, creating a solid foundation for your drumming skills.",
  "Experiment with different tempos and accents to unlock the full potential of this pattern and elevate your drumming to new heights.",
  "15 minutes"
);

const thirdArticle = new HomeContent(
  "Best Rudiment in Drums",
  "./img/drums2.jpg",
  "Delve into the world of drum rudiments and discover the power of the best rudiment that can enhance your drumming technique. Known for its intricate sticking patterns and dynamic variations, this rudiment provides a solid foundation for drummers of all skill levels. Practice this rudiment with a metronome, gradually increasing speed for precision and control.",
  "Incorporate this rudiment into your drumming vocabulary, and witness how it adds flair and complexity to your drum fills and solos.",
  "12 minutes"
);
