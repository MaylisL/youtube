const mockdata = [
    {
        title: "Awesome",
        channel:"music live",
        logoImage:"https://cdn.pixabay.com/photo/2017/06/24/02/56/art-2436545_1280.jpg",
        numberOfViews: 10,
        viewDate: 5,
        videoUrl: "https://variety.com/wp-content/uploads/2022/07/Music-Streaming-Wars.jpg?w=681&h=383&crop=1"
      },
      {
        title: "Awesome",
        channel:"music live",
        logoImage:"https://cdn.pixabay.com/photo/2012/06/19/10/32/owl-50267_1280.jpg",
        numberOfViews: 100,
        viewDate: 29,
        videoUrl: "https://img.redbull.com/images/c_crop,x_288,y_0,h_2880,w_2304/c_fill,w_1260,h_1575/q_auto,f_auto/redbullcom/2022/10/13/rmjpbxj1vpdinu0d2ujs/stay-close-to-music-mykki-blanco"
      },
      {
        title: "Awesome",
        channel:"music live",
        logoImage: "https://cdn.pixabay.com/photo/2017/06/26/02/47/man-2442565_1280.jpg",
        numberOfViews: 3000,
        viewDate: 3,
        videoUrl: "https://img.redbull.com/images/q_auto,f_auto/redbullcom/2021/5/18/lp7lh7fyxscsrk9yq4wk/seven-idole"
      },
      {
        title: "Awesome",
        channel:"music live",
        logoImage:"https://cdn.pixabay.com/photo/2019/08/19/07/45/corgi-4415649_1280.jpg",
        numberOfViews: 2,
        viewDate: 1,
        videoUrl: "https://cdn.pixabay.com/photo/2018/06/30/09/29/monkey-3507317_1280.jpg"
      },
      {
        title: "Awesome",
        channel:"music live",
        logoImage:"https://cdn.pixabay.com/photo/2015/03/14/19/45/suit-673697_1280.jpg",
        numberOfViews: 1,
        viewDate: 12,
        videoUrl: "https://cdn.pixabay.com/photo/2015/05/07/11/02/guitar-756326_1280.jpg"
      },
      {
        title: "funky jazz",
        channel:"i love jazz",
        logoImage:"https://cdn.pixabay.com/photo/2018/04/23/14/38/dog-3344414_1280.jpg",
        numberOfViews: 13,
        viewDate: 30,
        videoUrl: "https://cdn.pixabay.com/photo/2016/03/16/23/55/flea-market-1262036_1280.jpg"
      }
];

 // Function to create the cards with a loop
    function createCard (data) {
        const {title, channel, videoUrl, logoImage, numberOfViews, viewDate} = data;
        

    //card wrapper
    const cardsContainer = document.querySelector(".cards-container");
   
    const cardWrapper = document.createElement("div");
    cardWrapper.classList.add("card-wrapper");
    cardsContainer.appendChild(cardWrapper);

    //card video wrapper
    const cardVideoWrapper = document.createElement("div");
    cardVideoWrapper.classList.add("card-video-wrapper");
    cardWrapper.appendChild(cardVideoWrapper);

    //card content wrapper
    const cardContentWrapper = document.createElement("div");
    cardContentWrapper.classList.add("card-content-wrapper");
    cardWrapper.appendChild(cardContentWrapper);

    // card video ==> rajouter src
    const cardVideo = document.createElement("img");
    cardVideo.classList.add("card-video");
    cardVideo.setAttribute("src", videoUrl)
    cardVideoWrapper.appendChild(cardVideo);

    /* //card video duration
    const cardVideoDuration = document.createElement("div");
    cardVideoDuration.classList.add("card-video-duration");
    cardVideoWrapper.appendChild(cardVideoDuration); */

    // card logo container
    const cardLogoContainer = document.createElement("div");
    cardLogoContainer.classList.add("card-logo-container");
    cardContentWrapper.appendChild(cardLogoContainer);

    //card content container
    const cardContentContainer = document.createElement("div");
    cardContentContainer.classList.add("card-content-container");
    cardContentWrapper.appendChild(cardContentContainer);

    //card Content Logo Rounded Wrapper
    const cardContentLogoRoundedWrapper= document.createElement("div");
    cardContentLogoRoundedWrapper.classList.add("card-content-logo-roundedWrapper");
    cardLogoContainer.appendChild(cardContentLogoRoundedWrapper);

    // card content Logo image
    const cardContentLogoImage = document.createElement("img");
    cardContentLogoImage.classList.add("card-content-Logo-image");
    cardContentLogoImage.setAttribute("src", logoImage)
    cardContentLogoRoundedWrapper.appendChild(cardContentLogoImage);

    //card content box title
    const cardContentBoxTitle = document.createElement("div");
    cardContentBoxTitle.classList.add("card-content-box-title");
    cardContentContainer.appendChild(cardContentBoxTitle);

    //card content title
    const cardContentTitle = document.createElement("h2");
    cardContentTitle.classList.add("card-content-title");
    cardContentTitle.innerHTML = title;
    cardContentBoxTitle.appendChild(cardContentTitle);

    //card content box channel 
    const cardContentBoxChannel = document.createElement("div");
    cardContentBoxChannel.classList.add("card-content-box-channel");
    cardContentContainer.appendChild(cardContentBoxChannel);

    //card content channel
    const cardContentChannel = document.createElement("p");
    cardContentChannel.classList.add("card-content-channel");
   cardContentChannel.innerHTML = channel;
    cardContentBoxChannel.appendChild(cardContentChannel);

    //card content box info 
    const cardContentBoxInfo = document.createElement("div");
    cardContentBoxInfo.classList.add("card-content-box-info");
    cardContentContainer.appendChild(cardContentBoxInfo);
    
    //card content info views
    const cardContentInfoViews = document.createElement("span");
    cardContentInfoViews.classList.add("card-content-info-views");
    cardContentInfoViews.innerHTML = numberOfViews + " vues";
    cardContentBoxInfo.appendChild(cardContentInfoViews);

    //card content info watched
    const cardContentInfoWatched = document.createElement("span");
    cardContentInfoWatched.classList.add("card-content-info-watched");
    cardContentInfoWatched.innerHTML = "il y a " + viewDate + " jours" ;
    cardContentBoxInfo.appendChild(cardContentInfoWatched);
}
mockdata.forEach(element => createCard(element)); 

console.log(mockdata)

// create the search filter
const searchBar = document.getElementById("searchBar");

searchBar.addEventListener("input", e => {

    const searchString = e.target.value.toLowerCase();

    const filteredVideos = mockdata.filter( (video) => {
      return (
        video.title.toLowerCase().includes(searchString) 
      );
    });
    console.log(filteredVideos);
    //removing all cards before the new search to avoid adding cards again and again
    document.querySelector(".cards-container").innerHTML = "";
    filteredVideos.forEach((element) => createCard(element)); 
  }); 

  // solution 2
/* 
function displayCards(listOfCards) {
    //removing all cards before the new search to avoid adding cards again and again

    document.querySelector(".cards-container").innerHTML = "";
    listOfCards.forEach(element => createCard(element)); 
}

displayCards(mockdata);


// create the search filter
const searchBar = document.getElementById("searchBar");

searchBar.addEventListener("input", e => {

    const searchString = e.target.value.toLowerCase();

    const filteredVideos = mockdata.filter( (video) => {
      return (
        video.title.toLowerCase().includes(searchString) 
      );
    });
    console.log(filteredVideos);

    displayCards(filteredVideos);
});
 */

