Rails.application.routes.draw do
  root 'static_pages#index'

  get "/restaurants", to: 'static_pages#index'
  get "/restaurants/new", to: 'static_pages#index'
  get "/restaurants/:id", to: 'static_pages#index'
  get "/restaurants/:id/edit", to: 'static_pages#index'

  namespace :api do
    namespace :v1 do
<<<<<<< HEAD
      resources :restaurants, only: [:index, :show, :create, :update]
=======
      resources :restaurants, only: [:index, :show, :create]
>>>>>>> c5cb3e6bef8072a57c0eb493cc135fc70c587dd4
    end
  end

  devise_for :users

end
