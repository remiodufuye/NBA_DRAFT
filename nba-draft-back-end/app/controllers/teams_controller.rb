
class TeamsController < ApplicationController

        def index
            teams = Team.all
            render json: teams.to_json(:only=> [:id , :name , :logo],
            :include => [
                :players => {
                    :except => [:created_at, :updated_at]
                }
            ]
            
            )
        end 
        
end

