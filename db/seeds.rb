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
