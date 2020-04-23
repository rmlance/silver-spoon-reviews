class Api::V1::RestaurantsController < ApplicationController
  before_action :authenticate_user!, except: [:index]
  before_action :authorize_user, except: [:index]

  def index
    render json: Restaurant.all
  end

  protected

  def authorize_user
    if !user_signed_in? || !current_user.admin?
      raise ActionController::RoutingError.new("Not Found")
    end
  end
end