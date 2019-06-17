class User < ApplicationRecord
  has_secure_password
  has_many :search_results
  validates :email, :username, :presence: true
  validates :email, :uniqueness: true
end
