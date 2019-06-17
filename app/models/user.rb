class User < ApplicationRecord
  has_secure_password
  has_many :search_results
  validates :email, presence: true

  validates :email, uniqueness: true
end
