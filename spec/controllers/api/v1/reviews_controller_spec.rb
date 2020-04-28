require 'rails_helper'

RSpec.describe Api::V1::ReviewsController, type: :controller do
  let!(:restaurant1) { Restaurant.create(name: "Soup Co", address:"300 Walker St", city:"Newton", state: "MA", phone: "781-908-5678", zip: "02582", url: "wwww.SoupCo.com", rating: 3) }
  let!(:restaurant2) { Restaurant.create(name: "Pho", address:"300 main St", city:"natick", state: "MA", phone: "781-237-5678", zip: "02452", url: "wwww.pho.com", rating: 5) }
  let!(:review1) { Review.create(rating: 4, description:"Great ambiance!", restaurant_id: 1) }
  let!(:review2) { Review.create(rating: 3, description:"Average experience.", restaurant_id: 2) }

  describe "GET#index" do
    it "returns a sucessful response status and a content type of json" do
      #
      # get :index
      #
      # expect(response.status).to eq 200
      # expect(response.content_type).to eq 'application/json'
    end

    it "returns all reviews associated with a particular restaurant in the database" do
      # get :index, params: {id: restaurant1.id}
      # response_body = JSON.parse(response.body)
      #
      # expect(response_body["reviews"].length).to eq 2
      #
      # expect(response_body[0]["rating"]).to eq review1.rating
      # expect(response_body[0]["description"]).to eq review1.description
      #
      # expect(response_body[1]["rating"]).to eq review2.rating
      # expect(response_body[1]["description"]).to eq review2.description
    end
  end
end
