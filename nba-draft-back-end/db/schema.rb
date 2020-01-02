# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_12_30_175427) do

  create_table "players", force: :cascade do |t|
    t.string "player_name"
    t.string "player_position"
    t.string "team_abbreviation"
    t.float "age"
    t.float "player_height"
    t.float "player_weight"
    t.string "college"
    t.string "country"
    t.float "draft_year"
    t.float "draft_round"
    t.float "draft_number"
    t.float "gp"
    t.float "pts"
    t.float "reb"
    t.float "ast"
    t.float "net_rating"
    t.float "oreb_pct"
    t.float "dreb_pct"
    t.float "usg_pct"
    t.float "ts_pct"
    t.float "ast_pct"
    t.string "season"
    t.integer "team_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["team_id"], name: "index_players_on_team_id"
  end

  create_table "teams", force: :cascade do |t|
    t.string "name"
    t.string "abbreviation"
    t.string "location"
    t.string "logo"
    t.integer "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_teams_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "players", "teams"
  add_foreign_key "teams", "users"
end
