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

i = 1
3.times do
  notebook = Notebook.new(
    title: Faker::BossaNova.song,
    owner_id: 1
  )
  notebook.save
  i += 1
end

10.times do
  note = Note.new(
    title: Faker::StarWars.planet,
    content: Faker::Lorem.paragraph(4, true, 12),
    owner_id: 1,
    notebook_id: [1, 2, 3].sample )
  note.save
  year = 2017
  month = [11, 11, 11, 11, 11, 10, 10, 9, 9, 8, 7, 5, 2]
  day = [23, 23, 23, 23, 23, 23, 23, 22, 21, 20, 19, 18, 17, 16, 15, 13, 12, 8, 6, 4, 2]
  hour = (0..14).to_a
  minute = (0..59).to_a
  second = (0..59).to_a
  note.update_attributes(
    updated_at: DateTime.new(
      year,
      month.sample,
      day.sample,
      hour.sample,
      minute.sample,
      second.sample
    )
  )
end

20.times do
  note = Note.new(
    title: Faker::StarWars.planet,
    content: Faker::StarWars.wookiee_sentence,
    owner_id: 1,
    notebook_id: [1, 2, 3].sample )
  note.save
  year = 2017
  month = [11, 11, 11, 11, 11, 10, 10, 9, 9, 8, 7, 5, 2]
  day = [23, 23, 23, 23, 23, 23, 23, 22, 21, 20, 19, 18, 17, 16, 15, 13, 12, 8, 6, 4, 2]
  hour = (0..14).to_a
  minute = (0..59).to_a
  second = (0..59).to_a
  note.update_attributes(
    updated_at: DateTime.new(
      year,
      month.sample,
      day.sample,
      hour.sample,
      minute.sample,
      second.sample
    )
  )
end

# use Date.now() to get utc, then subtract a random number of
# milliseconds  within a range of, say, the last 6 months (distributed
# accordingly) from it to set the created/updated at data.
