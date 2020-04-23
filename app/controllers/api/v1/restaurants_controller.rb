class Api::V1::RestaurantsController < ApplicationController
  before_action :authenticate_user!, except: [:index]
  before_action :authorize_user, except: [:index]

  def index
    render json: Restaurant.all
  end

  protected

  def authorize_user
    if !user_signed_in? || !current_user.admin?
      flash[:notice] = "You do not have access to this page."
      redirect_to root_path
    end
  end
end
