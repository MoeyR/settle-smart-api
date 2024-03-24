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
    },
    {
      id: 2,
      user_name: "James",
      user_email: "jsmith1@pagesperso-orange.fr",
    },
    {
      id: 3,
      user_name: "Olivia",
      user_email: "owilliams2@netscape.com",
    },
    {
      id: 4,
      user_name: "Lee",
      user_email: "nbrown3@fc3.com",
    },
    {
      id: 5,
      user_name: "Ava",
      user_email: "ataylor4@marketwatch.com",
    },
    {
      id: 6,
      user_name: "StarGazer24",
      user_email: "StarGazer24@gmail.com",
    },
    {
      id: 7,
      user_name: "CoolCat97 ",
      user_email: "CoolCat97@gmail.com",
    },
    {
      id: 8,
      user_name: "SunnySmiles88",
      user_email: "SunnySmiles88@gmail.com",
    },
    {
      id: 9,
      user_name: "LunaLovegood42 ",
      user_email: "LunaLovegood42@hotmail.com",
    },
    {
      id: 10,
      user_name: "MountainHiker99 ",
      user_email: "MountainHiker99@hotmail.com",
    },
    {
      id: 11,
      user_name: "BeachBum365 ",
      user_email: "BeachBum365@yahoo.com",
    },
    {
      id: 12,
      user_name: "TechNerd22 ",
      user_email: "TechNerd22@yahoo.com",
    },
    {
      id: 13,
      user_name: "WanderlustDreamer ",
      user_email: "WanderlustDreamer@gmail.com",
    },
    {
      id: 14,
      user_name: "MidnightOwl23 ",
      user_email: "MidnightOwl23@brainstation.com",
    },
    {
      id: 15,
      user_name: "MusicJunkie101 ",
      user_email: "MusicJunkie101 @brainstation.com",
    },
    {
      id: 16,
      user_name: "AdventureBound22 ",
      user_email: "AdventureBound22 @yahoo.com",
    },
    {
      id: 17,
      user_name: "FashionistaChic ",
      user_email: "FashionistaChic @hotmail.com",
    },
    {
      id: 18,
      user_name: "GamerGirlPro ",
      user_email: "GamerGirlPro @outlook.com",
    },
    {
      id: 19,
      user_name: "CoffeeAddict23 ",
      user_email: "CoffeeAddict23 @outlook.com",
    },
    {
      id: 20,
      user_name: "BookwormReader88 ",
      user_email: "BookwormReader88 @hotmail.com",
    }
  
  
  ]);
};
