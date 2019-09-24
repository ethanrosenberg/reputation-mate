class AddAverageRankingPositionToProperties < ActiveRecord::Migration[5.2]
  def change
    add_column :properties, :average_ranking, :integer
  end
end
