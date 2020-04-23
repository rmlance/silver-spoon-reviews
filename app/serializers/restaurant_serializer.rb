class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :city, :state, :zip, :phone, :url, :image_url, :rating
end
