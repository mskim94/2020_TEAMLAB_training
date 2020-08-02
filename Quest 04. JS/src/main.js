// Data
const items = [
    {
    "type": "tshirt", 
    "gender": "female",
    "size": "large",
    "color": "pink",
    "image": "../img/pink_t.png"
    },
    {
    "type": "tshirt", 
    "gender": "female",
    "size": "small",
    "color": "pink",
    "image": "../img/pink_t.png"
    },
    {
    "type": "tshirt", 
    "gender": "male",
    "size": "small",
    "color": "pink",
    "image": "../img/pink_t.png"
    },
    {
    "type": "tshirt", 
    "gender": "male",
    "size": "large",
    "color": "pink",
    "image": "../img/pink_t.png"
    },
    {
    "type": "tshirt", 
    "gender": "female",
    "size": "small",
    "color": "blue",
    "image": "../img/blue_t.png"
    },
    {
    "type": "tshirt", 
    "gender": "female",
    "size": "large",
    "color": "blue",
    "image": "../img/blue_t.png"
    },
    {
    "type": "tshirt", 
    "gender": "male",
    "size": "small",
    "color": "blue",
    "image": "../img/blue_t.png"
    },
    {
    "type": "tshirt", 
    "gender": "male",
    "size": "large",
    "color": "blue",
    "image": "../img/blue_t.png"
    },
    {
    "type": "tshirt", 
    "gender": "female",
    "size": "small",
    "color": "yellow",
    "image": "../img/yellow_t.png"
    },
    {
    "type": "tshirt", 
    "gender": "female",
    "size": "large",
    "color": "yellow",
    "image": "../img/yellow_t.png"
    },
    {
    "type": "tshirt", 
    "gender": "male",
    "size": "small",
    "color": "yellow",
    "image": "../img/yellow_t.png"
    },
    {
    "type": "tshirt", 
    "gender": "male",
    "size": "large",
    "color": "yellow",
    "image": "../img/yellow_t.png"
    },                                                                              
    {
    "type": "pants", 
    "gender": "female",
    "size": "small",
    "color": "pink",
    "image": "../img/pink_p.png"
    },                                                                              
    {
    "type": "pants", 
    "gender": "female",
    "size": "large",
    "color": "pink",
    "image": "../img/pink_p.png"
    },                                                                              
    {
    "type": "pants", 
    "gender": "male",
    "size": "small",
    "color": "pink",
    "image": "../img/pink_p.png"
    },                                                                              
    {
    "type": "pants", 
    "gender": "male",
    "size": "large",
    "color": "pink",
    "image": "../img/pink_p.png"
    },
    {
    "type": "pants", 
    "gender": "female",
    "size": "small",
    "color": "blue",
    "image": "../img/blue_p.png"
    },                                                                              
    {
    "type": "pants", 
    "gender": "female",
    "size": "large",
    "color": "blue",
    "image": "../img/blue_p.png"
    },                                                                              
    {
    "type": "pants", 
    "gender": "male",
    "size": "small",
    "color": "blue",
    "image": "../img/blue_p.png"
    },                                                                              
    {
    "type": "pants", 
    "gender": "male",
    "size": "large",
    "color": "blue",
    "image": "../img/blue_p.png"
    },
    {
    "type": "pants", 
    "gender": "female",
    "size": "small",
    "color": "yellow",
    "image": "../img/yellow_p.png"
    },                                                                              
    {
    "type": "pants", 
    "gender": "female",
    "size": "large",
    "color": "yellow",
    "image": "../img/yellow_p.png"
    },                                                                              
    {
    "type": "pants", 
    "gender": "male",
    "size": "small",
    "color": "yellow",
    "image": "../img/yellow_p.png"
    },                                                                              
    {
    "type": "pants", 
    "gender": "male",
    "size": "large",
    "color": "yellow",
    "image": "../img/yellow_p.png"
    },
    {
    "type": "skirt", 
    "gender": "female",
    "size": "small",
    "color": "pink",
    "image": "../img/pink_s.png"
    },
    {
    "type": "skirt", 
    "gender": "female",
    "size": "large",
    "color": "pink",
    "image": "../img/pink_s.png"
    },
    {
    "type": "skirt", 
    "gender": "male",
    "size": "small",
    "color": "pink",
    "image": "../img/pink_s.png"
    },
    {
    "type": "skirt", 
    "gender": "male",
    "size": "large",
    "color": "pink",
    "image": "../img/pink_s.png"
    },
    {
    "type": "skirt", 
    "gender": "female",
    "size": "small",
    "color": "blue",
    "image": "../img/blue_s.png"
    },
    {
    "type": "skirt", 
    "gender": "female",
    "size": "large",
    "color": "blue",
    "image": "../img/blue_s.png"
    },
    {
    "type": "skirt", 
    "gender": "male",
    "size": "small",
    "color": "blue",
    "image": "../img/blue_s.png"
    },
    {
    "type": "skirt", 
    "gender": "male",
    "size": "large",
    "color": "blue",
    "image": "../img/blue_s.png"
    },
    {
    "type": "skirt", 
    "gender": "female",
    "size": "small",
    "color": "yellow",
    "image": "../img/yellow_s.png"
    },
    {
    "type": "skirt", 
    "gender": "female",
    "size": "large",
    "color": "yellow",
    "image": "../img/yellow_s.png"
    },
    {
    "type": "skirt", 
    "gender": "male",
    "size": "small",
    "color": "yellow",
    "image": "../img/yellow_s.png"
    },
    {
    "type": "skirt", 
    "gender": "male",
    "size": "large",
    "color": "yellow",
    "image": "../img/yellow_s.png"
    }                        
]

function filter(id) {
    return items.filter((item, index) => 
    ((item.type === id) || (item.color === id)));
}

function displayItems(ids) {
    var selectedItem = document.getElementById("items");
    selectedItem.innerHTML = "" // HTML 생성
    for (let item of ids){
        selectedItem.innerHTML += "<div class = \"items-frame\"><img src=\"img/" + item.image + "\" alt=\"tshirt\" class = \"items-image\"><div class = \"items-discription\">" +item.gender+", " + item.size + "-size </div></div>\n";
    }
    
}
displayItems(items);

