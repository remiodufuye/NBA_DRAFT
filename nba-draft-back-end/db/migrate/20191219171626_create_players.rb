class CreatePlayers < ActiveRecord::Migration[6.0]
  def change
    create_table :players do |t|
      t.string :player_name
      t.string :team_abbreviation
      t.integer :age
      t.float :player_height
      t.integer :player_weight
      t.string :college
      t.string :country
      t.integer :draft_year
      t.inetger :draft_round
      t.integer :draft_number
      t.integer :gp
      t.integer :pts
      t.inetger :reb
      t.integer :ast
      t.integer :net_rating
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
