/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('posts').del()
  await knex('posts').insert([
    {
      id: 1,
      post_title: "Looking for a WFH partner",
      post_content:
        "Since graduating, I've been working from home. I'm hoping to connect with others who are also working remotely, and working together at a local coffee shop. We can also have coffee chat while making progress together.",
      user_id: 5,
      post_collects: 36,
      post_image:"http://localhost:8080/images/image0.jpg",
      post_location: "Toronto",
      post_latitude: 43.6532,
      post_longitude: -79.3832,
    },
    {
      id: 2,
      post_title: "Mississauga's late-night eatery",
      post_content:
        "Nightlife in Mississauga? K-Pocha - Korean pub opens until 2AM. The snowflake chicken is a must-try. Raw beef is also often ordered, it's fresh and the sauce goes well with it. Other recommendations: Army pot, seafood pancakes, cheese corn. Address: 169 Dundas St. E #7, Mississauga, ON L5A 1W8. Opens until 2am, super busy late night on weekends ",
      user_id: 4,
      post_collects: 89,
      post_image:"http://localhost:8080/images/image1.jpg",
      post_location: "Toronto",
      post_latitude: 43.6532,
      post_longitude: -79.3832,
    },
    {
      id: 3,
      post_title: "This bread is so delicious!! I'm going crazy.",
      post_content:
        "My new fav. Cranberry Walnut Bread fresh made by wholefood",
      user_id: 3,
      post_collects: 5,
      post_image:"http://localhost:8080/images/image2.jpg",
      post_location: "Toronto",
      post_latitude: 43.6532,
      post_longitude: -79.3832,
  
    },
    {
      id: 4,
      post_title: "Canadian oral ulcer medicine",
      post_content:"I think zilactin B works the best. I typically use it after meals, and its effects last for about 6 hours. Although it stings initially upon application, it starts working within 30 seconds. You can find it at Shoppers and Walmart.",
      user_id: 2,
      post_collects: 1100,
      post_image:"http://localhost:8080/images/image3.jpg",
      post_location: "Toronto",
      post_latitude: 43.6532,
      post_longitude: -79.3832,
    },
    {
      id: 5,
      post_title: "Daldongnae - The most authentic Korean BBQ in Toronto",
      post_content:
        "Who hasn't experienced it? This store is  conscientious. The beef is of excellent quality and isn't pre-marinated. The portion of meat is generous, and each table receives four side dishes. The waiters are extremely polite. The price-to-performance ratio is excellent, averaging around $30 per person. Opens until 2 AM.",
      user_id: 1,
      post_collects: 258,
      post_image:"http://localhost:8080/images/image4.jpg",
      post_location: "Toronto",
      post_latitude: 43.6532,
      post_longitude: -79.3832,
    },
    {
      id: 6,
      post_title: "Each person shares some medical tips from Canada.",
      post_content:
        "Do you know about 811 and Medimap.ca? Seeing a doctor in Canada is not limited to emergency rooms. 811 is open 27/7, and we can usually communicate with a registered nurse within a few minutes. They will determine whether we need to communicate with the doctor by phone/online. medimap.ca provides available walk-in clinics. An emergency doctor told us: Emergency rooms are generally not that busy at 8 a.m.",
      user_id: 5,
      post_collects: 422, 
      post_image:"http://localhost:8080/images/image5.jpg",
      post_location: "Toronto",
      post_latitude: 43.6532,
      post_longitude: -79.3832,
  
    },
    {
      id: 7,
      post_title: "What is the best insurance to purchase for visiting parents and relatives when they come to Canada?",
      post_content:
        "May I ask which insurance company your parents use when they come to visit Canada? This information is urgently needed. Thank you.",
      user_id: 4,
      post_collects: 382,
      post_image:"http://localhost:8080/images/image6.jpg",
      post_location: "Toronto",
      post_latitude: 43.6532,
      post_longitude: -79.3832,
  
    },
    {
      id: 8,
      post_title: "What to do if white clothes turn yellow",
      post_content:
        "Oxi Clean - This product can effectively remove stains without damaging clothes like bleach does. Even yellow stains on collars can be washed away. Here are the instructions for use: Mix 1/4 of the powder with 4/3 water, apply it on yellowed or oily areas, and wash it off after about 5 minutes. For white clothes, you can soak them in the solution for no more than 6 hours before washing them in the washing machine.",
      user_id: 3,
      post_collects: 216,
      post_image:"http://localhost:8080/images/image7.jpg",
      post_location: "Toronto",
      post_latitude: 43.6532,
      post_longitude: -79.3832,
  
    },
    {
      id: 9,
      post_title: "Here in Toronto, I found the cheese I loved in France.",
      post_content:
        "I've been enjoying this cheese in Paris for many years. It's like whipped cheese, perfect for spreading on bread, and it tastes delicious with figs. Now I can find the original flavor at a Toronto supermarket called City Market.",
      user_id: 2,
      post_collects: 51,
      post_image:"http://localhost:8080/images/image8.jpg",
      post_location: "Toronto",
      post_latitude: 43.6532,
      post_longitude: -79.3832,
    },
    {
      id: 10,
      post_title: "This fleece from costco is the same as the scuba from lululemon",
      post_content:
        "Today, I wore a Lululemon Scuba quarter-zip and went shopping at Costco. I noticed that Danskin's fleece was almost identical to the Scuba I was wearing, but it was only selling for $17.98, while my Scuba was purchased for $118.",
      user_id: 1,
      post_collects: 429,
      post_image:"http://localhost:8080/images/image9.jpg",
      post_location: "Toronto",
      post_latitude: 43.6532,
      post_longitude: -79.3832,
    },
    {
      id: 11,
      post_title: "Boozy Chocolate Liqueur Cake",
      post_content:
        "Honey Honey Cakery - Located at Unionville. A Baileys chocolate cake with a liqueur center, a six-inch one, goes for around $40, while a 4-inch cake sells for about $20. It's affordable and scrumptious, with a silky cream that's not overwhelmingly alcoholic, and it boasts a rich chocolate flavor. Plus, the base of the cake is made with crushed oats.",
      user_id: 20,
      post_collects: 154,
      post_image:"http://localhost:8080/images/image10.jpg",
      post_location: "Toronto",
      post_latitude: 43.6532,
      post_longitude: -79.3832,
    },
    {
      id: 12,
      post_title: "It feels as I'm having brunch in France.",
      post_content:
        "Only 20 minutes drive from Toronto - Old Mill Toronto Restaurant. Restaurant indoor: brunch buffet -  Saturday and Sunday 10:30am-2:30pm, $50 per person. Restaurant outdoor: A La Carte Dinning - open Thursday, Friday and Saturday",
      user_id: 20,
      post_collects: 449,
      post_image:"http://localhost:8080/images/image11.jpg",
      post_location: "Toronto",
      post_latitude: 43.6532,
      post_longitude: -79.3832,
    },
    {
      id: 13,
      post_title: "DAINTIES MACARON",
      post_content:
        "Highly recommended: the Oreo Macaron Ice Cream Sandwich. It features ice cream sandwiched between two macarons. A regular macaron sells for $5, but these ones are generously sized! You can find them at 235 Spadina Ave. #2, Toronto, ON.",
      user_id: 20,
      post_collects: 773,
      post_image:"http://localhost:8080/images/image12.jpg",
      post_location: "Toronto",
      post_latitude: 43.6532,
      post_longitude: -79.3832,
    },
    {
      id: 14,
      post_title: "This Ikea sideboard is a great value",
      post_content:
        "I recently purchased this cabinet. It has a substantial weight and texture to it. Similar cabinets from Article sell for over $1,000.",
      user_id: 20,
      post_collects: 774,
      post_image:"http://localhost:8080/images/image13.jpg",
      post_location: "Toronto",
      post_latitude: 43.6532,
      post_longitude: -79.3832,
    },
    {
      id: 15,
      post_title: "Nordik Spa - Nature Quebec",
      post_content:
        "It stands as the largest hot spring center in North America, perched atop a mountain, offering a genuine mountaintop water hot spring experience. Notably, it boasts the only high-salinity suspension pool in North America, allowing you to unwind and effortlessly float on the water.",
      user_id: 20,
      post_collects: 1400,
      post_image:"http://localhost:8080/images/image14.jpg",
      post_location: "Quebec",
      post_latitude: 52.9399,
      post_longitude: -73.5491,
    },
    {
      id: 16,
      post_title: "Belfountain Conservation Area",
      post_content:
        "It's just an hour's drive from Toronto. This spot is perfect for autumn hikes. The scenic area offers full amenities, and the trails aren't overly long, making it very comfortable. Plus, it's an excellent location for photography.",
      user_id: 20,
      post_collects: 747,
      post_image:"http://localhost:8080/images/image15.jpg",
      post_location: "Toronto",
      post_latitude: 43.6532,
      post_longitude: -79.3832,
    }
  ]);
};
