

var btn = document.querySelector(".btn");




//rajshahi
async function weatherapp(cityname) {
    let url = `http://localhost:3000/weather?city=${cityname}`;
    const respone = await fetch(url);
    const data = await respone.json();
    
    //console.log("Data is:", data);
     if(data.error){
     
      alert("enter city name");
     }
    document.querySelector(".humidity").innerHTML = "humidity : " + data.main.humidity + " %";
    document.querySelector(".feels_like").innerHTML = "feel.like : " + data.main.feels_like + "°C";
    document.querySelector(".grnd_level").innerHTML = "g_level : " + data.main.grnd_level + " hPa";
    document.querySelector(".pressure").innerHTML = "pressure: " + data.main.pressure + " hPa";
    let temp = document.querySelector(".temp").innerHTML = " : " + Math.floor(data.main.temp) + "°C";
    
    document.querySelector(".temp_max").innerHTML = "temp.max : " + data.main.temp_max + "°C";
    document.querySelector(".temp_min").innerHTML = "temp.min : " + data.main.temp_min  + "°C";
    document.querySelector(".sea_level").innerHTML = "sea_level : " + data.main.sea_level;

    var status = data.weather[0].main;
    document.querySelector(".status").innerHTML = "status : " + status;


    document.querySelector(".city").innerHTML = data.name ;
    document.querySelector(".wind").innerHTML = "wind speed : " + data.wind.speed + " m/s";
    document.querySelector(".deg").innerHTML = "deg : " + data.wind.deg + "°";
    document.querySelector(".gust").innerHTML = "gust : " + data.wind.gust + " m/s";
    document.querySelector(".timezone").innerHTML = "timezone : " + data.timezone + " s";
    document.querySelector(".visibility").innerHTML = "visibility : " + data.visibility + " m";
    
    const weatherImage = document.querySelector('.image');
    if (status === 'Clouds') {
        weatherImage.src = 'pngwing.com (4).png';
    } else if (status === 'Clear') {
        weatherImage.src = 'pngwing.com (1).png';
    } else if (status === 'Rain') {
        weatherImage.src = 'pngwing.com (5).png';
    } else if (status === 'Snow') {
        weatherImage.src = 'pngwing.com (7).png';
    } else if (status === 'Thunderstorm') {
        weatherImage.src = 'pngwing.com (6).png';
    } else {
        // Default image
        weatherImage.src = 'pngwing.com (8).png';
    }

 console.log(status);

}



const locations = {
  "Dhaka": ["Dhanmondi","Banani","Gulshan","Mirpur","Mohammadpur","Uttara","Keraniganj","Shahbagh","Tejgaon","Farmgate"],
  "Chittagong": ["Pahartali","Panchlaish","Kotwali","Halishahar","Patenga","Akbarshah","Chandgaon","Bayazid","Khulshi"],
  "Khulna": ["Khalishpur","Sonadanga","Daulatpur","Gollamari","Tala","Dumuria","Batiaghata"],
  "Rajshahi": ["Rajpara Thana","Boalia Thana","Motihar Thana","Shah Makhdum Thana","Kashiadanga Thana","Chandrima Thana","Paba Upazila","Bagmara Upazila","Charghat Upazila","Durgapur Upazila","Godagari Upazila","Mohanpur Upazila","Puthia Upazila","Tanore Upazila","Bagha Upazila"],
  "Sylhet": ["Sylhet Sadar","Balaganj","Beanibazar","Companiganj","Fenchuganj","Gowainghat","Jaintiapur","Kanaighat","Osmani Nagar"],
  "Gazipur": ["Gazipur Sadar","Kaliakair","Sreepur","Tongi"],
  "Narayanganj": ["Narayanganj Sadar","Bandar","Rupganj","Sonargaon"],
  "Bogura": ["Bogura Sadar","Shibganj","Adamdighi","Kahaloo","Dhunat","Gabtali"],
  "Mymensingh": ["Mymensingh Sadar","Muktagachha","Bhaluka","Trishal","Gaffargaon","Phulpur","Ishwarganj"],
  "Barisal": ["Barisal Sadar","Bakerganj","Babuganj","Banaripara","Gaurnadi","Hizla","Agailjhara","Mehendiganj"],
  "Tongi": ["Tongi Sadar"],
  "Cox's Bazar": ["Cox's Bazar Sadar","Chakaria","Kutubdia","Maheshkhali","Ramu","Teknaf","Ukhia","Moheshkhali"],
  "Jessore": ["Jessore Sadar","Abhaynagar","Bagherpara","Chaugachha","Jhikargachha","Keshabpur","Sharsha"],
  "Comilla": ["Comilla Sadar","Barura","Brahmanpara","Chandina","Daudkandi","Debidwar","Homna","Meghna","Muradnagar","Titas"],
  "Rangpur": ["Rangpur Sadar","Badarganj","Gangachara","Kaunia","Mithapukur","Pirgachha","Pirganj","Taraganj"],
  "Nawabganj": ["Nawabganj Sadar","Shibganj"],
  "Dinajpur": ["Dinajpur Sadar","Birampur","Biral","Chirirbandar","Ghoraghat","Hakimpur","Kaharole","Khansama","Nawabganj","Parbatipur"],
  "Brahmanbaria": ["Brahmanbaria Sadar","Bancharampur","Bijoynagar","Kasba","Nabinagar","Sarail","Ashuganj"],
  "Tangail": ["Tangail Sadar","Basail","Bhuapur","Delduar","Dhanbari","Gopalpur","Kalihati","Madhupur","Mirzapur","Nagarpur","Sakhipur"],
  "Pabna": ["Pabna Sadar","Atgharia","Bera","Bhangura","Chatmohar","Faridpur","Ishwardi","Santhia","Sujanagar"],
  "Naogaon": ["Naogaon Sadar","Badalgachhi","Manda","Niamatpur","Patnitala","Raninagar","Sapahar","Porsha","Atrai","Dhamoirhat","Mohadevpur"],
  "Satkhira": ["Satkhira Sadar","Assasuni","Debhata","Kalaroa","Kaliganj","Tala","Shyamnagar"],
  "Feni": ["Feni Sadar","Chhagalnaiya","Parshuram","Daganbhuiyan","Fulgazi"],
  "Habiganj": ["Habiganj Sadar","Baniachang","Bahubal","Chunarughat","Lakhai","Madhabpur","Nabiganj","Shaistaganj"],
  "Moulvibazar": ["Moulvibazar Sadar","Barlekha","Juri","Kamalganj","Kulaura","Rajnagar","Sreemangal"],
  "Sunamganj": ["Sunamganj Sadar","Bishwamvarpur","Chhatak","Dakshin Sunamganj","Derai","Jagannathpur","Shalla","Sullah","Tahirpur","Jamalganj"],
  "Khagrachhari": ["Khagrachhari Sadar","Dighinala","Lakshmichhari","Mahalchhari","Manikchhari","Matiranga","Panchhari","Ramgarh"],
  "Bandarban": ["Bandarban Sadar","Thanchi","Ruma","Lama","Rowangchhari","Alikadam","Naikhongchhari","Rowangchhari"],
  "Lakshmipur": ["Lakshmipur Sadar","Raipur","Ramganj","Ramgati","Komolnagar"],
  "Noakhali": ["Noakhali Sadar","Begumganj","Chatkhil","Companiganj","Hatiya","Senbagh","Subarnachar","Sonaimuri"],
  "Rangamati": ["Rangamati Sadar","Bagaichhari","Belaichhari","Kaptai","Kaukhali","Juraichhari","Rajasthali","Rangamati Hill"],
  "Chuadanga": ["Chuadanga Sadar","Alamdanga","Damurhuda","Jibannagar"],
  "Jhenaidah": ["Jhenaidah Sadar","Kaliganj","Kotchandpur","Maheshpur","Shailkupa"],
  "Kushtia": ["Kushtia Sadar","Bheramara","Daulatpur","Kumarkhali","Mirpur","Khoksa","Kumarkhali"],
  "Narail": ["Narail Sadar","Lohagara","Kalia"],
  "Patuakhali": ["Patuakhali Sadar","Dumki","Bauphal","Mirzaganj","Galachipa","Rangabali","Kalapara","Dashmina"],
  "Jhalokathi": ["Jhalokathi Sadar","Kathalia","Nalchity","Rajapur"],
  "Bhola": ["Bhola Sadar","Char Fasson","Daulatkhan","Lalmohan","Tazumuddin","Monpura","Burhanuddin"],
  "Bagerhat": ["Bagerhat Sadar","Chitalmari","Fakirhat","Kachua","Mollahat","Mongla","Morelganj","Rampal","Sarankhola"],
  "Magura": ["Magura Sadar","Mohammadpur","Shalikha","Sreepur"],
  "Meherpur": ["Meherpur Sadar","Mujibnagar","Gangni"],
  "Sirajganj": ["Sirajganj Sadar","Belkuchi","Chauhali","Raiganj","Shahjadpur","Tarash","Ullahpara"],
  "Kurigram": ["Kurigram Sadar","Phulbari","Nageshwari","Rajarhat","Ulipur","Bhurungamari","Rowmari","Char Rajibpur"]
};

const input = document.querySelector(".input");
const suggestions = document.querySelector(".suggestions");

input.addEventListener("input", () => {
    const value = input.value.toLowerCase();
    suggestions.innerHTML = "";

    if (!value) return;

    
    const allLocations = [];
    for (let city in locations) {
        allLocations.push(city);           
        allLocations.push(...locations[city]); 
    }

    const filtered = allLocations.filter(name =>
        name.toLowerCase().startsWith(value)
    );

    filtered.forEach(name => {
        const li = document.createElement("li");
        li.textContent = name;
        li.addEventListener("click", () => {
            input.value = name;
            suggestions.innerHTML = "";
        });
        suggestions.appendChild(li);
    });
});


btn.addEventListener('click',() =>{
    var cityname = document.querySelector(".input").value;
    weatherapp(cityname);
    document.querySelector(".input").value = "";
    

});
var cityname = document.querySelector(".input");
cityname.addEventListener("keydown",(e) =>{
    if(e.key === "Enter"){
        btn.click();
    }
});


//color div open function

function xopen(){
    document.querySelector(".bgcolor").style.left = 0 + "%";
    document.querySelector("#xopen").style.display = "none";
    document.querySelector("#xclose").style.display = "block";
}
function xclose(){
    document.querySelector(".bgcolor").style.left = -50 + "%";
    document.querySelector("#xopen").style.display = "block";
    document.querySelector("#xclose").style.display = "none";
}

//bg color function

function color1(){
    document.body.style.background = `
    linear-gradient(
  120deg,
  #0f2027 0%,
  #203a43 35%,
  #2c5364 65%,
  #a8edea 100%
  )
    
    `;
}
function color2(){
    document.body.style.background = `
    linear-gradient(
  120deg,
   #050505,
  #0a1f1a,
  #0f3d2e,
  #1f6f5c
  )
    
    `;
}
function color3(){
    document.body.style.background = `
    linear-gradient(
  120deg,
  #0b3c49 0%,
  #145e63 30%,
  #4ca1af 65%,
  #b8f1ed 100%
  )
    
    `;
}

function color4(){
    document.body.style.background = `
    linear-gradient(
  120deg,
    #6d2c69a1 0%,
  #0f3d2e 30%,
  #2e8b73 65%,
  #9fffc7 100%
  )
    
    `;
}
/*
function mouseIn1(){
    document.body.style.background = `
    linear-gradient(
  120deg,
    #0f2027 0%,
  #203a43 35%,
  #2c5364 65%,
  #a8edea 100%
  )
    
    `;
}

function mouseIn2(){
    document.body.style.background = `
    linear-gradient(
  120deg,
    #050505,
  #0a1f1a,
  #0f3d2e,
  #1f6f5c
  )
    
    `;
}

function mouseIn3(){
    document.body.style.background = `
    linear-gradient(
  120deg,
   #0b3c49 0%,
  #145e63 30%,
  #4ca1af 65%,
  #b8f1ed 100%
  )
    
    `;
}

function mouseIn4(){
    document.body.style.background = `
    linear-gradient(
  120deg,
   #050505 0%,
  #0f3d2e 30%,
  #2e8b73 65%,
  #9fffc7 100%
  )
    
    `;
}
*/




// currrent location

if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition(async (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
    );

    const data = await res.json();

    const city = 
      data.address.city ||
      data.address.town ||
      data.address.village ||
      data.address.county ;
      console.log(data);
      console.log(city);

  },() =>{
    console.log("Location permission denied");
  });
}else {
  console.log("Geolocation not supported");
}
