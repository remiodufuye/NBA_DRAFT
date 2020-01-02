class PlayersController < ApplicationController
        
        def index
            players = Player.all 
            render json: players.to_json(:except => [:created_at, :updated_at])
        end 

        def create 
            name = Faker::Sports::Basketball.player 
            position = Faker::Sports::Basketball.position 
            college_name = Faker::University.name

            player = Player.create(player_name:name,player_position:position,team_abbreviation:"FAKER",age:19.0,
                                  player_height:203.20,player_weight:108.86208,college:college_name,country:"USA",draft_year:2003,
                                  draft_round:1,draft_number:1,gp:79,pts:20.9,reb:5.5,ast:5.9,net_rating:2.6, 
                                  oreb_pct:0.035,dreb_pct:0.116,usg_pct:0.28,ts_pct:0.488,ast_pct:0.268,season:"2003-04",
                                  team_id: params[:team_id])
            render json: player

        end 




        def destroy
            player = Player.find(params[:id])
            player.destroy
            render json: {message:'success'}
        end


end





