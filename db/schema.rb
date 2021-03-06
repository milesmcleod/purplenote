# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171130171754) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "notebooks", force: :cascade do |t|
    t.string "title", null: false
    t.integer "owner_id", null: false
    t.integer "shortcut_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["owner_id", "title"], name: "index_notebooks_on_owner_id_and_title", unique: true
    t.index ["owner_id"], name: "index_notebooks_on_owner_id"
    t.index ["shortcut_id"], name: "index_notebooks_on_shortcut_id"
  end

  create_table "notes", force: :cascade do |t|
    t.string "title", null: false
    t.string "content"
    t.integer "owner_id", null: false
    t.integer "notebook_id", null: false
    t.integer "shortcut_id"
    t.boolean "trashBoolean", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["notebook_id"], name: "index_notes_on_notebook_id"
    t.index ["owner_id"], name: "index_notes_on_owner_id"
    t.index ["shortcut_id"], name: "index_notes_on_shortcut_id"
  end

  create_table "shortcuts", force: :cascade do |t|
    t.integer "owner_id", null: false
    t.string "shortcuttable_type"
    t.bigint "shortcuttable_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["owner_id"], name: "index_shortcuts_on_owner_id"
    t.index ["shortcuttable_type", "shortcuttable_id"], name: "index_shortcuts_on_shortcuttable_type_and_shortcuttable_id"
  end

  create_table "taggings", force: :cascade do |t|
    t.integer "tag_id", null: false
    t.integer "note_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["note_id", "tag_id"], name: "index_taggings_on_note_id_and_tag_id", unique: true
  end

  create_table "tags", force: :cascade do |t|
    t.string "title", null: false
    t.integer "owner_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["owner_id", "title"], name: "index_tags_on_owner_id_and_title", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "username", null: false
    t.string "img_url", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "default_notebook_id"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
