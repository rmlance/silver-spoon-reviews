require 'rails_helper'

RSpec.describe Restaurant, type: :model do
  describe "restaurant?" do
    it "has all required fields and is valid" do
      restaurant = Restaurant.create(name: "Sweet Cheeks Q", address: "1381 Boylston Street", neighborhood: "Fenway", phone: "617-266-1300")

      expect(restaurant.name).to eq("Sweet Cheeks Q")
      expect(restaurant.address).to eq("1381 Boylston Street")
      expect(restaurant.neighborhood).to eq("Fenway")
      expect(restaurant.phone).to eq("617-266-1300")
    end
  end
end
