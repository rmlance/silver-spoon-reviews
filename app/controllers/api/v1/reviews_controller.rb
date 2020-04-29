class Api::V1::ReviewsController < ApplicationController
  before_action :authenticate_user

  def create
    restaurant = Restaurant.find(params[:restaurant_id])
    review = Review.new(review_params)
    review.restaurant_id = restaurant.id
    if review.save
      render json: { restaurant: restaurant }
    else
      render json: { error: review.errors.full_messages }, status: :unprocessable_entity
    end
  end

  protected

  def review_params
    params.require(:review).permit(:rating, :description)
  end

  def authenticate_user
    if !user_signed_in?
      render json: { error: "You do not have access to this page, please ensure you are signed in."}
    end
  end
end
