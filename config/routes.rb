Rails.application.routes.draw do



  resources :properties
  scope '/api/v1' do
    post '/search', to: 'search_results#search'
    get '/searchresults', to: 'search_results#index'
    get '/mostpopular', to: 'properties#all'
  end

  #delete '/logout', to 'sessions#destroy'

  resources :search_results
  resources :users

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
