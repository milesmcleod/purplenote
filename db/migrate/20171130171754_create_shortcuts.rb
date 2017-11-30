class CreateShortcuts < ActiveRecord::Migration[5.1]
  def change
    create_table :shortcuts do |t|
      t.integer :owner_id, null: false
      t.references :shortcuttable, polymorphic: true, index: true
      t.timestamps
    end
    add_index :shortcuts, :owner_id
  end
end
