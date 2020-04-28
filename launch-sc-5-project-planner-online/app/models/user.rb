class User < ActiveRecord::Base
  validates :first_name, presence: true
  validates :last_name, presence: true

  has_many :userprojects
  has_many :projects, through: :userprojects
end
