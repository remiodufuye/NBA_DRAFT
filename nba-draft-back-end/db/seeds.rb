# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Player.destroy_all 
Team.destroy_all



lakers = Team.create(name:"Lakers" , abbreviation: "LAL" , location: "Los Angeles", logo:"https://i.pinimg.com/originals/2f/2f/f9/2f2ff9f9cc894675d3a4f3d83b42d385.jpg")
bucks = Team.create(name:"Bucks" , abbreviation: "MIL" , location: "Milwakee" ,logo:"https://rfathead-res.cloudinary.com/image/upload/h_300,w_300/logos/lgo_nba_milwaukee_bucks.png")
warriors = Team.create(name:"Warriors", abbreviation:"GSW", location:"Golden State" , logo:"http://content.sportslogos.net/logos/6/235/full/4449_golden_state_warriors-primary_dark-2020.png")
raptors = Team.create(name:"Raptors", abbreviation:"TOR" , location:"Toronto" , logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQWtk9HjwYG2-oTkWpH-hvryZm5JmD5GApO7cRdabk5IeeFbIh")
mavs = Team.create(name:"Mavericks", abbreviation:"DAL" , location:"Dallas" , logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTx8FVeFCVRxUxi-Q_1z46PTyrbkwkVXhjMhg_Y6v234s3ihkv4")


giannis = Player.create(
player_name:"Giannis Antetokounmpo",team_abbreviation:"MIL",age:19.0,player_height:205.74,player_weight:92.98635999999999,college:"None",country:"Greece",draft_year:2013,draft_round:1,
draft_number:15,gp:77,pts:6.8,reb:6.8,ast:4.4,net_rating:1.9, oreb_pct:4.4,dreb_pct:0.047,usg_pct:0.16,ts_pct:0.15,ast_pct:0.518,season:"2013-14",team:bucks
)   
kmiddleton = Player.create(
player_name:"Khris Middleton",team_abbreviation:"MIL",age:21.0,player_height:200.66,player_weight:97.52228000000001,college:"Texas A&M",country:"USA",draft_year:2012,draft_round:2,
draft_number:39,gp:27,pts:6.1,reb:1.9,ast:1.0,net_rating:2.2,oreb_pct:0.01,dreb_pct:0.124,usg_pct:0.159,ts_pct:0.532,ast_pct:0.085,season:"2012-13",team_id:bucks.id 
)





