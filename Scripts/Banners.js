var Banners = new Array();

Banners[0] = "https://bloxxers.github.io/Bloxxers/Banners/banner.png";
Banners[1] = "https://bloxxers.github.io/Bloxxers/Banners/banner.png";
Banners[2] = "https://bloxxers.github.io/Bloxxers/Banners/banner.png";

function Banner() {
  var Banner = Math.floor(Math.random()*Banners.length);
  return document.write('<img src="'+Banners[Banner]+'" />');
}

return Banner()
