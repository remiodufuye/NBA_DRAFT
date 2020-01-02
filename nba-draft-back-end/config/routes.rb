Rails.application.routes.draw do
  resources :users
  resources :players
  resources :teams
  get '/finder' , to: "finder#home" , as:"finder"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
