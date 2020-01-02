class PlayersController < ApplicationController
        
        def index
            players = Player.all 
            render json: players.to_json(:except => [:created_at, :updated_at])
        end 

        def create
            player = Player.create(params[strong_params]) 
            render json: player
        end 

        def destroy
            player = Player.find(params[:id])
            player.destroy
            render json: {message: 'success'}
        end

        private

         def strong_params
            params.require(:player).permit(:player_name,:player_position ,:player_name ,:player_position,:team_abbreviation,:age,
                                            :player_height,:player_weight,:college,:country,:draft_year,:draft_round,:draft_number,
                                            :gp,:pts,:reb,:ast,:net_rating,:oreb_pct,:dreb_pct,:usg_pct,:ts_pct,:ast_pct,:season )
        end 

        
       


end





