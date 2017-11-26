class CreateNotebooks < ActiveRecord::Migration[5.1]
  def change
    create_table :notebooks do |t|
      t.string :title, null: false
      t.integer :owner_id, null: false
      t.integer :shortcut_id

      t.timestamps
    end
    add_index :notebooks, :owner_id
    add_index :notebooks, :shortcut_id
    add_index :notebooks, [:owner_id, :title], unique: true
  end
end
