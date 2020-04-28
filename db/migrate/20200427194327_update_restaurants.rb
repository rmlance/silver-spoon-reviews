class UpdateRestaurants < ActiveRecord::Migration[5.2]
  def change
    remove_column :restaurants, :city, :string
    remove_column :restaurants, :state, :string
    remove_column :restaurants, :zip, :string
    remove_column :restaurants, :image_url, :string
    remove_column :restaurants, :rating, :string
  end
end
