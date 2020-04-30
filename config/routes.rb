Rails.application.routes.draw do
  root 'static_pages#index'

  get "/restaurants", to: 'static_pages#index'
  get "/restaurants/new", to: 'static_pages#index'
  get "/restaurants/:id", to: 'static_pages#index'
  get "/restaurants/:id/edit", to: 'static_pages#index'

  namespace :api do
    namespace :v1 do
<<<<<<< HEAD
      resources :restaurants, only: [:index, :show, :create]
=======
      resources :restaurants, only: [:index, :show, :create, :update] do
        resources :reviews, only: [:create]
      end
>>>>>>> d63a26da06e314c4fa5a825d2a89437afb01dc4e
    end
  end

  devise_for :users

end
