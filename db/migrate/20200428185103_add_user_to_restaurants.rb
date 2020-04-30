class AddUserToRestaurants < ActiveRecord::Migration[5.2]
  def change
    add_column :restaurants, :user_id, :bigint
    add_foreign_key :restaurants, :users
  end
end
