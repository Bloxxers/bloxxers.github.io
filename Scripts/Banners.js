var Banners = new Array();

Banners[0] = "https://bloxxers.github.io/Bloxxers/Banners/banner.png";
Banners[1] = "https://bloxxers.github.io/Bloxxers/Banners/banner2.png";
Banners[2] = "https://bloxxers.github.io/Bloxxers/Banners/banner3.png";
Banners[3] = "https://bloxxers.github.io/Bloxxers/Banners/banner4.png";
Banners[4] = "https://bloxxers.github.io/Bloxxers/Banners/banner5.png";
Banners[5] = "https://bloxxers.github.io/Bloxxers/Banners/banner6.png";

function Banner() {
  var Banner = Math.floor(Math.random()*Banners.length);
  document.write('<img class="Banner" src="'+Banners[Banner]+'" />');
}

Banner()
