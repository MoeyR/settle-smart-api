/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      id: 1,
      user_name: "Emma",
      user_email: "eJohnson0@feedburner.com",
      user_icon: "http://localhost:8080/user-icon/user_icon01.png",
    },
    {
      id: 2,
      user_name: "James",
      user_email: "jsmith1@pagesperso-orange.fr",
      user_icon: "http://localhost:8080/user-icon/user_icon02.png",
    },
    {
      id: 3,
      user_name: "Olivia",
      user_email: "owilliams2@netscape.com",
      user_icon: "http://localhost:8080/user-icon/user_icon03.png",
    },
    {
      id: 4,
      user_name: "Lee",
      user_email: "nbrown3@fc3.com",
      user_icon: "http://localhost:8080/user-icon/user_icon04.png",
    },
    {
      id: 5,
      user_name: "Ava",
      user_email: "ataylor4@marketwatch.com",
      user_icon: "http://localhost:8080/user-icon/user_icon05.png",
    },
    {
      id: 6,
      user_name: "StarGazer24",
      user_email: "StarGazer24@gmail.com",
      user_icon: "http://localhost:8080/user-icon/user_icon06.png",
    },
    {
      id: 7,
      user_name: "CoolCat97 ",
      user_email: "CoolCat97@gmail.com",
      user_icon: "http://localhost:8080/user-icon/user_icon07.png",
    },
    {
      id: 8,
      user_name: "SunnySmiles88",
      user_email: "SunnySmiles88@gmail.com",
      user_icon: "http://localhost:8080/user-icon/user_icon08.png",
    },
    {
      id: 9,
      user_name: "LunaLovegood42 ",
      user_email: "LunaLovegood42@hotmail.com",
      user_icon: "http://localhost:8080/user-icon/user_icon09.png",
    },
    {
      id: 10,
      user_name: "MountainHiker99 ",
      user_email: "MountainHiker99@hotmail.com",
      user_icon: "http://localhost:8080/user-icon/user_icon10.png",
    },
    {
      id: 11,
      user_name: "BeachBum365 ",
      user_email: "BeachBum365@yahoo.com",
      user_icon: "http://localhost:8080/user-icon/user_icon11.png",
    },
    {
      id: 12,
      user_name: "TechNerd22 ",
      user_email: "TechNerd22@yahoo.com",
      user_icon: "http://localhost:8080/user-icon/user_icon12.png",
    },
    {
      id: 13,
      user_name: "WanderlustDreamer ",
      user_email: "WanderlustDreamer@gmail.com",
      user_icon: "http://localhost:8080/user-icon/user_icon13.png",
    },
    {
      id: 14,
      user_name: "MidnightOwl23 ",
      user_email: "MidnightOwl23@brainstation.com",
      user_icon: "http://localhost:8080/user-icon/user_icon14.png",
    },
    {
      id: 15,
      user_name: "MusicJunkie101 ",
      user_email: "MusicJunkie101 @brainstation.com",
      user_icon: "http://localhost:8080/user-icon/user_icon15.png",
    },
    {
      id: 16,
      user_name: "AdventureBound22 ",
      user_email: "AdventureBound22 @yahoo.com",
      user_icon: "http://localhost:8080/user-icon/user_icon16.png",
    },
    {
      id: 17,
      user_name: "FashionistaChic ",
      user_email: "FashionistaChic @hotmail.com",
      user_icon: "http://localhost:8080/user-icon/user_icon17.png",
    },
    {
      id: 18,
      user_name: "GamerGirlPro ",
      user_email: "GamerGirlPro @outlook.com",
      user_icon: "http://localhost:8080/user-icon/user_icon18.png",
    },
    {
      id: 19,
      user_name: "CoffeeAddict23 ",
      user_email: "CoffeeAddict23 @outlook.com",
      user_icon: "http://localhost:8080/user-icon/user_icon19.png",
    },
    {
      id: 20,
      user_name: "BookwormReader88 ",
      user_email: "BookwormReader88 @hotmail.com",
      user_icon: "http://localhost:8080/user-icon/user_icon20.png",
    }
  
  
  ]);
};
