class CreateNotes < ActiveRecord::Migration[5.1]
  def change
    create_table :notes do |t|
      t.string :title, null: false
      t.string :content
      t.integer :owner_id, null: false
      t.integer :notebook_id, null: false
      t.integer :shortcut_id
      t.boolean :trashBoolean, default: false

      t.timestamps
    end
    add_index :notes, :owner_id
    add_index :notes, :notebook_id
    add_index :notes, :shortcut_id
  end
end
