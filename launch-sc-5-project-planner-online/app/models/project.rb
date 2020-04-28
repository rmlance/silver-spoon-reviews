class Project < ActiveRecord::Base
  validates :name, presence: true

  has_many :userprojects
  has_many :users, through: :userprojects
end
