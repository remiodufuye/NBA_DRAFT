# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Team.destroy_all
Player.destroy_all

lakers = Team.create(name:"Lakers" , abbreviation: "LAL" , location: "Los Angeles, "logo:"https://i.pinimg.com/originals/2f/2f/f9/2f2ff9f9cc894675d3a4f3d83b42d385.jpg")
Bucks = Tea