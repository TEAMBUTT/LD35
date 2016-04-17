class CreateResults < ActiveRecord::Migration
  def change
    create_table :results do |t|
      t.string :slug
      t.json :state

      t.timestamps null: false
    end
  end
end
