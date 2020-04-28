class CreateProject < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :name, null: false
      t.string :description

      t.timestamps null: false
    end
  end
end
