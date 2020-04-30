require 'rails_helper'

RSpec.describe Api::V1::ReviewsController, type: :controller do

  describe "POST#create" do
    it "creates a new review" do
      restaurant1 = Restaurant.create(name: "Tiger Mama", address: "1363 Boylston Street", neighborhood: "Fenway", phone: "617-425-6262", url: "https://www.tigermamaboston.com")
      user1 = FactoryBot.create(:user)
      sign_in user1

      post_json = {
        restaurant_id: restaurant1.id,
        user_id: user1,
        review: {
          rating: 5,
          description: "BBQ?"
        }
      }
      prev_count = Review.count
      post(:create, params: post_json, format: :json)
      new_count = Review.count

      expect(new_count).to eq(prev_count + 1)
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json).to_not be_kind_of(Array)
      expect(returned_json["review"]["rating"]).to eq 5
      expect(returned_json["review"]["description"]).to eq "BBQ?"
    end

    it "data is not persisted if form is not valid when submitted" do
      restaurant1 = Restaurant.create(name: "Tiger Mama", address: "1363 Boylston Street", neighborhood: "Fenway", phone: "617-425-6262", url: "https://www.tigermamaboston.com")
      user1 = FactoryBot.create(:user)
      sign_in user1

      post_json = {
        restaurant_id: restaurant1.id,
        user_id: user1,
        review: {
          description: "So sad."
          }
        }
      prev_count = Review.count
      post(:create, params: post_json, format: :json)
      new_count = Review.count

      expect(new_count).to eq prev_count
    end

    it "returns an error when required field is blank" do
      restaurant1 = Restaurant.create(name: "Tiger Mama", address: "1363 Boylston Street", neighborhood: "Fenway", phone: "617-425-6262", url: "https://www.tigermamaboston.com")
      user1 = FactoryBot.create(:user)
      sign_in user1

      post_json = {
        restaurant_id: restaurant1.id,
        user_id: user1,
        review: {
          description: "So sad."
        }
      }
      post(:create, params: post_json, format: :json)
      returned_json = JSON.parse(response.body)

      expect(returned_json["error"][0]).to eq "Rating can't be blank"
    end
  end
end
