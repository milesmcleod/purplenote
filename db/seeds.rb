# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.new(username: 'demo_user', email: 'demo_user@demo.com', password: 'password', img_url: 'placeholder')
user1.save
user2 = User.new(username: 'miles', email: 'miles@gmail.com', password: 'password', img_url: 'placeholder')
user2.save

20.times do
  note = Note.new(
    title: Faker::StarWars.planet,
    content: Faker::StarWars.wookiee_sentence, owner_id: 1, notebook_id: 1 )
  note.save
end

# use Date.now() to get utc, then subtract a random number of
# milliseconds  within a range of, say, the last 6 months (distributed
# accordingly) from it to set the created/updated at data.
