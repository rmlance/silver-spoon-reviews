class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :neighborhood, :phone, :url
end
