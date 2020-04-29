class Restaurant < ApplicationRecord
  belongs_to :user, optional: true 

  validates :name, presence: true
  validates :address, presence: true
  validates :neighborhood, presence: true
  validates :phone, presence: true

  has_many :reviews
end
