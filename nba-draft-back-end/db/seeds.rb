# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Player.destroy_all 
Team.destroy_all


lakers = Team.create(name:"Lakers" , abbreviation: "LAL" , location: "Los Angeles", logo:"https://worldsportlogos.com/wp-content/uploads/2019/06/Los-Angeles-Lakers-Logo.png")
bucks = Team.create(name:"Bucks" , abbreviation: "MIL" , location: "Milwakee" ,logo:"https://worldsportlogos.com/wp-content/uploads/2018/03/Milwaukee-Bucks-logo-1280x720.png")
warriors = Team.create(name:"Warriors", abbreviation:"GSW", location:"Golden State" , logo:"https://worldsportlogos.com/wp-content/uploads/2019/06/Golden-State-Warriors-logo-1280x720.png")
raptors = Team.create(name:"Raptors", abbreviation:"TOR" , location:"Toronto" , logo:"https://worldsportlogos.com/wp-content/uploads/2018/01/Toronto-Raptors-logo-1280x720.png")
mavs = Team.create(name:"Mavericks", abbreviation:"DAL" , location:"Dallas" , logo:"https://worldsportlogos.com/wp-content/uploads/2019/06/Dallas-Mavericks-Logo.png")
rockets = Team.create(name:"Rockets" , abbreviation: "HOU" , location: "Houston", logo:"https://worldsportlogos.com/wp-content/uploads/2019/09/Houston-Rockets-logo-1280x720.png")
clippers = Team.create(name:"Clippers" , abbreviation: "LAC" , location: "Los Angeles", logo:"https://worldsportlogos.com/wp-content/uploads/2019/06/Los-Angeles-Clippers-Logo-1280x720.png")
celtics = Team.create(name:"Celtics" , abbreviation: "BOS" , location: "Boston", logo:"https://worldsportlogos.com/wp-content/uploads/2018/01/Boston-Celtics-logo-1280x720.png")   
nets = Team.create(name:"Nets" , abbreviation: "BKN" , location: "Brooklyn", logo:"https://worldsportlogos.com/wp-content/uploads/2018/01/Brooklyn-Nets-Logo-1280x720.png")
oklahoma = Team.create(name:"Thunder" , abbreviation: "OKC" , location: "Oklahoma" ,logo:"https://worldsportlogos.com/wp-content/uploads/2019/06/Oklahoma-City-Thunder-logo-1280x720.png")
hawks = Team.create(name:"Hawks", abbreviation:"ATL", location:"Atlanta" , logo:"https://worldsportlogos.com/wp-content/uploads/2018/03/Atlanta-Hawks-logo-1280x720.png")
hornets = Team.create(name:"Hornets", abbreviation:"CHA" , location:"Charlotte" , logo:"https://worldsportlogos.com/wp-content/uploads/2018/03/Charlotte-Hornets-logo.png")
cavs = Team.create(name:"Cavaliers", abbreviation:"CLE" , location:"Cleveland" , logo:"https://worldsportlogos.com/wp-content/uploads/2018/03/Cleveland-Cavaliers-logo-1280x720.png")
nuggets = Team.create(name:"Nuggets" , abbreviation: "DEN" , location: "Denver", logo:"https://worldsportlogos.com/wp-content/uploads/2019/06/Denver-Nuggets-Logo-1280x720.png")
pistons = Team.create(name:"Pistons" , abbreviation: "DET" , location: "Detroit", logo:"https://worldsportlogos.com/wp-content/uploads/2018/01/Detroit-Pistons-logo-1280x720.png") 
pacers = Team.create(name:"Pacers" , abbreviation: "IND" , location: "Indiana", logo:"https://worldsportlogos.com/wp-content/uploads/2018/01/Indiana-Pacers-logo-1280x720.png")   


# Lakers Players # 

#  Bucks Players # 
giannis = Player.create(
player_name:"Giannis Antetokounmpo",team_abbreviation:"MIL",age:19.0,player_height:205.74,player_weight:92.98635999999999,college:"None",country:"Greece",draft_year:2013,draft_round:1,
draft_number:15,gp:77,pts:6.8,reb:6.8,ast:4.4,net_rating:1.9, oreb_pct:4.4,dreb_pct:0.047,usg_pct:0.16,ts_pct:0.15,ast_pct:0.518,season:"2013-14",team_id:bucks.id
)   
kmiddleton = Player.create(
player_name:"Khris Middleton",team_abbreviation:"MIL",age:21.0,player_height:200.66,player_weight:97.52228000000001,college:"Texas A&M",country:"USA",draft_year:2012,draft_round:2,
draft_number:39,gp:27,pts:6.1,reb:1.9,ast:1.0,net_rating:2.2,oreb_pct:0.01,dreb_pct:0.124,usg_pct:0.159,ts_pct:0.532,ast_pct:0.085,season:"2012-13",team_id:bucks.id 
)





