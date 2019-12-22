class PlayersController < ApplicationController
        
        def index
            players = Player.all 
            render json: players.to_json(:except => [:created_at, :updated_at])
        end 


        def create
            player = Player.create(params[strong_params]) 
            # check strong params 
            # player = Player.create(params[:id]) 
        end 

        def destroy
            player = Player.find(params[:id])
            player.destroy
        end

        private

        def strong_params
            
        end 


end





