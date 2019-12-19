# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Team.destroy_all
Player.destroy_all

lakers = Team.create(name:"Lakers" , abbreviation: "LAL" , location: "Los Angeles", logo:"https://i.pinimg.com/originals/2f/2f/f9/2f2ff9f9cc894675d3a4f3d83b42d385.jpg")
Bucks = Team.create(name:"Bucks" , abbreviation: "MIL" , location: "Milwakee" ,logo:"https://rfathead-res.cloudinary.com/image/upload/h_300,w_300/logos/lgo_nba_milwaukee_bucks.png")


giannis = Player.create(
player_name:"Giannis Antetokounmpo",team_abbreviation:"MIL",age:19.0,player_height:205.74,
player_weight:92.98635999999999,college:"None",country:"Greece",draft_year:2013,draft_round:1,
draft_number:15,gp:77,pts:6.8,reb:6.8,ast:4.4,net_rating:1.9, 
oreb_pct:4.4,dreb_pct:0.047,usg_pct:0.16,ts_pct:0.15,ast_pct:0.518,season:"2103-14",team_id:lakers.id 
)   


