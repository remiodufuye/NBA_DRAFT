class PlayersController < ApplicationController

        def create
            player = Player.create(params[strong_params]) 
            # check strong params 
            # player = Player.create(params[:id]) 
        end 

        def destroy
            player = Player.find(params[:id])
            player.destroy
            # render json: {message: 'success'}
        end


end





