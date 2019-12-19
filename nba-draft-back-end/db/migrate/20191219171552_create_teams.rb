class CreateTeams < ActiveRecord::Migration[6.0]
  def change
    create_table :teams do |t|
      t.string :name
      t.string :abbreviation
      t.string :location
      t.string :logo

      t.timestamps
    end
  end
end
