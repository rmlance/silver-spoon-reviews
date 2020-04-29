require 'rails_helper'

RSpec.describe Api::V1::RestaurantsController, type: :controller do
  let!(:restaurant1) { Restaurant.create(name: "Soup Co", address:"300 Walker St", neighborhood:"Newton", phone: "781-908-5678", url: "wwww.SoupCo.com") }
  let!(:restaurant2) { Restaurant.create(name: "Pho", address:"300 main St", neighborhood:"natick", phone: "781-237-5678", url: "wwww.pho.com") }
  happy_body = { restaurant: { name: "Top of the Hub", address: "40 Main Street", neighborhood: "Prudential", phone: "123-341-1234", url: "www.topofthehub.com" } }
  sad_body = { restaurant: { address: "40 Main Street", neighborhood: "Prudential", phone: "123-341-1234", url: "www.topofthehub.com" } }
  let!(:review1) { Review.create(rating: 4, description: "Waffle fries for the guys", restaurant: restaurant1) }

  describe "GET#index" do
    it "returns a sucessful response status and a content type of json" do

      get :index

      expect(response.status).to eq 200
      expect(response.content_type).to eq 'application/json'
    end

    it "returns all restaurants in the database" do
      get :index
      response_body = JSON.parse(response.body)

      expect(response_body["restaurants"].length).to eq 2

      expect(response_body["restaurants"][0]["name"]).to eq restaurant1.name
      expect(response_body["restaurants"][0]["address"]).to eq restaurant1.address

      expect(response_body["restaurants"][1]["name"]).to eq restaurant2.name
      expect(response_body["restaurants"][1]["address"]).to eq restaurant2.address
    end
  end

  describe "GET#show" do
    it "should return an individual restaurant with reviews" do

      get :show, params: {id: restaurant1.id}
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json.length).to eq 1
      expect(returned_json["restaurant"].length).to eq 7

      expect(returned_json["restaurant"]["reviews"].length).to eq 1
      expect(returned_json["restaurant"]["reviews"][0].length).to eq 4

      expect(returned_json["restaurant"]["name"]).to eq "Soup Co"
      expect(returned_json["restaurant"]["address"]).to eq "300 Walker St"

      expect(returned_json["restaurant"]["reviews"][0]["rating"]).to eq 4
      expect(returned_json["restaurant"]["reviews"][0]["description"]).to eq "Waffle fries for the guys"
    end
  end

  describe "POST#create" do
    it "creates a new restaurant" do
      user = FactoryBot.create(:user)
      sign_in user
      post_json = happy_body

      prev_count = Restaurant.count
      post(:create, params: post_json, format: :json)
      expect(Restaurant.count).to eq(prev_count + 1)
    end

    it "returns the json of the newly posted restaurant" do
      user = FactoryBot.create(:user)
      sign_in user
      post_json = happy_body

      post(:create, params: post_json, format: :json)
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json).to_not be_kind_of(Array)
      expect(returned_json["restaurant"]["name"]).to eq "Top of the Hub"
      expect(returned_json["restaurant"]["neighborhood"]).to eq "Prudential"
    end

    it "data is not persisted if form is not valid when submitted" do
      user = FactoryBot.create(:user)
      sign_in user
      post_json = sad_body

      prev_count = Restaurant.count
      post(:create, params: post_json, format: :json)
      new_count = Restaurant.count

      expect(new_count).to eq prev_count
    end

    it "returns an error when required field is blank" do
      user = FactoryBot.create(:user)
      sign_in user
      post_json = sad_body

      post(:create, params: post_json, format: :json)
      returned_json = JSON.parse(response.body)

      expect(returned_json["error"][0]).to eq "Name can't be blank"
    end
  end

  describe "PATCH#edit"
    it "updates an existing restaurant and does not create a new record" do
      happy_body = { id: restaurant1.id , restaurant: { name: "Top of the Hub", address: "40 Main Street", neighborhood: "Prudential", phone: "123-341-1234", url: "www.topofthehub.com" } }

      user = FactoryBot.create(:user)
      sign_in user
      post_json = happy_body

      prev_count = Restaurant.count
      patch :update, params: post_json, format: :json
      expect(Restaurant.count).to eq(prev_count)
    end

    it "returns the json of the newly edited restaurant" do
      happy_body = { id: restaurant1.id , restaurant: { name: "Top of the Hub", address: "40 Main Street", neighborhood: "Prudential", phone: "123-341-1234", url: "www.topofthehub.com" } }

      user = FactoryBot.create(:user)
      sign_in user
      post_json = happy_body

      patch :update, params: post_json, format: :json
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json).to_not be_kind_of(Array)
      expect(returned_json["restaurant"]["name"]).to eq "Top of the Hub"
      expect(returned_json["restaurant"]["neighborhood"]).to eq "Prudential"
    end
end
