class Api::V1::RestaurantsController < ApplicationController
  before_action :authenticate_user, except: [:index, :show]
  before_action :authorize_user, except: [:index, :show, :create, :update]

  def index
    render json: Restaurant.all
  end

  def create
    restaurant = Restaurant.new(restaurant_params)
    if restaurant.save
      render json: { restaurant: restaurant }
    else
      render json: { error: restaurant.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    render json: Restaurant.find(params[:id])
  end

  def update
    restaurant = Restaurant.find(params[:id])
    validUpdate = Restaurant.new(restaurant_params)
    if validUpdate.valid?
      restaurant.update(restaurant_params)
      restaurant.save
      render json: { restaurant: restaurant }
    else
      render json: { error: validUpdate.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    restaurant = Restaurant.find(params[:id])
    restaurant.destroy
  end

  protected

  def restaurant_params
    params.require(:restaurant).permit(:name, :address, :neighborhood, :phone, :url)
  end

  def authenticate_user
    if !user_signed_in?
      render json: { error: "You do not have access to this page, please ensure you are signed in."}
    end
  end

  def authorize_user
    if !current_user.admin?
      render json: { error: "You do not have access to this action."}
    end
  end
end
