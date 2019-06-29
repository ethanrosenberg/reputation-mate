class CreateProperties < ActiveRecord::Migration[5.2]
  def change
    create_table :properties do |t|
      t.string :root_url
      t.string :sentiment
      t.text :analysis
      t.integer :occurrences

      t.timestamps
    end
  end
end
