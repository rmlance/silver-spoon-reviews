require 'rails_helper'

RSpec.describe Review, type: :model do

    it "should allow the new user review to persist to the database" do
      good_review = Review.create(rating: 5, restaurant_id: 1)
      expect(good_review).to be_valid
    end

    it "should not allow a new review record to persist to the database" do
      bad_review = Review.create(rating: 500, restaurant_id: 1)
      expect(bad_review).to_not be_valid
    end
  end
