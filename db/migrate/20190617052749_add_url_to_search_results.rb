class AddUrlToSearchResults < ActiveRecord::Migration[5.2]
  def change
    add_column :search_results, :url, :string
  end
end
