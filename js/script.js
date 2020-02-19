

var playlist = [
    {
    song1: "gaming",
    length1: 1.30,
    artist1: "ohno",
    link1: "https://www.youtube.com/watch?v=-wZuyIjIjLc",
    image1: "https://i.ytimg.com/an_webp/-wZuyIjIjLc/mqdefault_6s.webp?du=3000&sqp=CM7btvIF&rs=AOn4CLATO2b1zmNNmSE3Q7l7dcI8lddF2g",
    }
]

songs.forEach(function(data) {
  $("#songs").append(data);
});

//---------------------------------------------------------\\

var images = ["image1 ","image2 ","image3 ","image4 ","image5 "]

images.forEach(function(data) {
  $("#images").append(data);
});

//---------------------------------------------------------\\

var artists = ["artist1 ","artist2 ","artist3 ","artist4 ","artist5 "]

artists.forEach(function(data) {
  $("#artists").append(data);
});

//---------------------------------------------------------\\

var lengths = ["length1 ","length2 ","length3 ","length4 ","length5 "]

lengths.forEach(function(data) {
  $("#lengths").append(data);
});

//---------------------------------------------------------\\

var links = ["link1 ","link2 ","link3 ","link4 ","link5 "]

links.forEach(function(data) {
  $("#links").append(data);
});

//---------------------------------------------------------\\

var song1 = [""]
