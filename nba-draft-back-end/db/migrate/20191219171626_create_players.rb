class CreatePlayers < ActiveRecord::Migration[6.0]
  def change
    create_table :players do |t|
      t.string :player_name
      t.string :player_position
      t.string :team_abbreviation
      t.float :age
      t.float :player_height
      t.float :player_weight
      t.string :college
      t.string :country
      t.float :draft_year
      t.float :draft_round
      t.float :draft_number
      t.float :gp
      t.float :pts
      t.float :reb
      t.float :ast
      t.float :net_rating
      t.float :oreb_pct
      t.float :dreb_pct
      t.float :usg_pct
      t.float :ts_pct
      t.float :ast_pct
      t.string :season
      t.references :team, null: false, foreign_key: true

      t.timestamps
    end
  end
end
