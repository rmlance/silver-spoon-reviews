Rails.application.routes.draw do
  root 'static_pages#index'

  get "/restaurants", to: 'static_pages#index'
  get "/restaurants/new", to: 'static_pages#index'
  get "/restaurants/:id", to: 'static_pages#index'
  get "/restaurants/:id/edit", to: 'static_pages#index'

  namespace :api do
    namespace :v1 do
<<<<<<< HEAD
      resources :restaurants, only: [:index, :show, :create] do
        resources :reviews, only: [:create]
      end
=======
      resources :restaurants, only: [:index, :show, :create, :update]
>>>>>>> d963a93322d01019799851ffdedf61ceb51fd4f4
    end
  end

  devise_for :users

end
