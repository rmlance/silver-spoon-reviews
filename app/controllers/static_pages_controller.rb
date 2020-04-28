class StaticPagesController < ApplicationController
  before_action :authenticate_user

  def index
  end

  private

  def authenticate_user
    if request.path == "/restaurants/new"
      if user_signed_in? == false
        render json: { error: "Please ensure you are signed in to view this page." }
      end
    end
  end

end
