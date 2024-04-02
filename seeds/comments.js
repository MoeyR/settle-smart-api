/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('comments').del()
  await knex('comments').insert([
    {
      id: 1,
      post_id: 1,
      user_id: 10,
      comment:"Me! I'm at NY",
      comment_likes: 3
    }, 
    {
      id: 2,
      post_id: 1,
      user_id: 9,
      comment:"I'm at Waterloo! Anyone wfh here? Please contact me",
      comment_likes: 4
    }, 
    {
      id: 3,
      post_id: 1,
      user_id: 8,
      comment:"I live in Mississauga, also wfh.",
      comment_likes: 5
    }, 
    {
      id: 4,
      post_id: 1,
      user_id: 7,
      comment:"Hello, what industry/field are you currently in? I'd love to connect with you over a coffee chat.",
      comment_likes: 6
    }, 
    {
      id: 5,
      post_id: 2,
      user_id: 6,
      comment:"I love their snowflake chicken",
      comment_likes: 2
    }, 
    {
      id: 6,
      post_id: 3,
      user_id: 5,
      comment:"Both bread and cakes from Wholefood are delicious",
      comment_likes: 4
    }, 
    {
      id: 7,
      post_id: 3,
      user_id: 4,
      comment:"It looks like the one I bought from Costoco",
      comment_likes: 6
    }, 
    {
      id: 8,
      post_id: 4,
      user_id: 3,
      comment:"I usually use it before meals, it hurts like crazy, and then I can eat happily.",
      comment_likes: 10
    }, 
    {
      id: 9,
      post_id: 4,
      user_id: 2,
      comment:"I also suffer from oral ulcers, so I usually take vitamin B12 supplements",
      comment_likes: 3
    }, 
    {
      id: 10,
      post_id: 5,
      user_id: 1,
      comment:"This restaurant is truly good, especially for meat lovers.",
      comment_likes: 5
    }, 
    {
      id: 11,
      post_id: 6,
      user_id: 6,
      comment:"811 is really fast. Once I felt dizzy and couldn't make an appointment with my family doctor. I called 811 at 8pm and a nurse answered within 10 minutes. The diagnosis was very accurate.",
      comment_likes: 2
    }, 
    {
      id: 12,
      post_id: 6,
      user_id: 7,
      comment:"sick kids is great",
      comment_likes: 9
    }, 
    {
      id: 13,
      post_id: 7,
      user_id: 8,
      comment:"Allianz, I claimed twice. Bought it from an insurance agent.",
      comment_likes: 5
    }, 
    {
      id: 14,
      post_id: 7,
      user_id: 9,
      comment:"manulife is good, claims are settled smoothly, and it is also a top tier insurance company in Canada.",
      comment_likes: 5
    }, 
    {
      id: 15,
      post_id: 7,
      user_id: 10,
      comment:"I used JF. You can go to the official website to find out. For approval and claim settlement, you can call the customer service number.  Chinese language is available.",
      comment_likes: 6
    }, 
    {
      id: 16,
      post_id: 7,
      user_id: 11,
      comment:"Tugo may not be inexpensive, but their claims process is very reassuring and can provide coverage for pre-existing medical conditions.",
      comment_likes: 3
    }, 
    {
      id: 17,
      post_id: 8,
      user_id: 12,
      comment:"I use it to mop floors, do laundry, and clean tiles.",
      comment_likes: 10
    }, 
    {
      id: 18,
      post_id: 8,
      user_id: 13,
      comment:"My husband's towels, pillowcases, sheets, and shirt collars have all been saved by this. I wash them every week and they won't turn yellow.",
      comment_likes: 16
    }, 
    {
      id: 19,
      post_id: 9,
      user_id: 14,
      comment:"Marked, I'll buy it soon.",
      comment_likes: 2
    }, 
    {
      id: 20,
      post_id: 10,
      user_id: 15,
      comment:"I bought this one, I love lululemon too",
      comment_likes: 10
    }, 
    {
      id: 21,
      post_id: 10,
      user_id: 16,
      comment:"Danskin is very comfy",
      comment_likes: 8
    }, 
    {
      id: 22,
      post_id: 11,
      user_id: 17,
      comment:"It looks delicious! The price is also acceptable. I'll go try it.",
      comment_likes: 8
    }, 
    {
      id: 23,
      post_id: 12,
      user_id: 18,
      comment:"The photo looks really nice! I'll try it out this weekend!",
      comment_likes: 7
    }, 
    {
      id: 24,
      post_id: 13,
      user_id: 19,
      comment:"The ichatea on the left side of this store is also great!",
      comment_likes: 6
    }, 
    {
      id: 25,
      post_id: 14,
      user_id: 5,
      comment:"It's out of stock here. lol",
      comment_likes: 9
    }, 
    {
      id: 26,
      post_id: 15,
      user_id: 4,
      comment:"I must go there",
      comment_likes: 10
    }, 
    {
      id: 27,
      post_id: 16,
      user_id: 3,
      comment:"The scenery here is really nice, but be careful about mosquitoes",
      comment_likes: 3
    }
    
  ]);
};
