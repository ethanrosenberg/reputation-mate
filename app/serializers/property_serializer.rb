class PropertySerializer < ActiveModel::Serializer
  attributes :id, :root_url, :sentiment, :analysis, :occurrences
end
