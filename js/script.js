var song1 = [ { name: "Song 1", 
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS22qQeLF1KrH4sNhtOYO9vlwTxIJL3pnQP545MF6sQonJc9Hg9",
artist: "sonic the hedgehog", 
length: "infinity",
link: "no" } ]

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
