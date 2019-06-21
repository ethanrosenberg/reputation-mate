Rails.application.routes.draw do



  scope '/api/v1' do
    post '/search', to: 'search_results#search'
    get '/searchresults', to: 'search_results#index'
  end

  #delete '/logout', to 'sessions#destroy'

  resources :search_results
  resources :users

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
