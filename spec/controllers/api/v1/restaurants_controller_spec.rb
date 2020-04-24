require 'rails_helper'

RSpec.describe Api::V1::RestaurantsController, type: :controller do
  let!(:restaurant1) { Restaurant.create(name: "Soup Co", address:"300 Walker St", city:"Newton", state: "MA", phone: "781-908-5678", zip: "02582", url: "wwww.SoupCo.com", rating: 3) }
  let!(:restaurant2) { Restaurant.create(name: "Pho", address:"300 main St", city:"natick", state: "MA", phone: "781-237-5678", zip: "02452", url: "wwww.pho.com", rating: 5) }

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
    it "should return an individual restaurant" do

      get :show, params: {id: restaurant1.id}
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json.length).to eq 1
      expect(returned_json["restaurant"]["name"]).to eq "Soup Co"
      expect(returned_json["restaurant"]["address"]).to eq "300 Walker St"
    end
  end
end
