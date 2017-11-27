class CreateTags < ActiveRecord::Migration[5.1]
  def change
    create_table :tags do |t|
      t.string :title, null: false
      t.integer :owner_id, null: false

      t.timestamps
    end
    add_index :tags, [:owner_id, :title], unique: true
  end
end
