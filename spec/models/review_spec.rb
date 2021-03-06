require 'rails_helper'

RSpec.describe Review, type: :model do
  let!(:restaurant1) { Restaurant.create(name: "Soup Co", address:"300 Walker St", neighborhood: "Southie", phone: "781-908-5678", url: "wwww.SoupCo.com") }

  it "should allow the new user review to persist to the database if all required fields are filled correctly" do
    good_review = Review.create(rating: 5, restaurant: restaurant1)
    expect(good_review).to be_valid
  end

  it "should not allow data to be persisted when required field is blank" do
    bad_review = Review.create(rating: 500, restaurant: restaurant1)
    expect(bad_review).to_not be_valid
  end
end
