Rails.application.routes.draw do
  root 'static_pages#index'

  get "/restaurants", to: 'static_pages#index'
  get "/restaurants/new", to: 'static_pages#index'
  get "/restaurants/:id", to: 'static_pages#index'

  namespace :api do
    namespace :v1 do
      resources :restaurants, only: [:index, :show, :new, :create]
    end
  end

  devise_for :users

end
