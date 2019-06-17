class SearchResult < ApplicationRecord
  belongs_to :user
  validates :url, presence:true
end
