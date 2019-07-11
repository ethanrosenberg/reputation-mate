class AddPropertySubmissionUrlToProperty < ActiveRecord::Migration[5.2]
  def change
    add_column :properties, :submission_url, :string
  end
end
