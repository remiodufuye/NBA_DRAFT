class CreateTeams < ActiveRecord::Migration[6.0]
  def change
    create_table :teams do |t|
      t.string :name
      t.string :abbreviation
      t.string :location
      t.string :logo
      t.references :user, null: false, foreign_key: true # added new 

      t.timestamps
    end
  end
end
