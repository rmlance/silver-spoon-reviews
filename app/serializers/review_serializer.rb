class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :description, :restaurant_id
end
