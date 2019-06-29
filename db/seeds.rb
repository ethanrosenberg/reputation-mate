# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#ethan = User.create(email: "ethan@aol.com", password: "test")

#ethan.search_results.create(url: "http://www.google.com/search?q=ethan+rosenberg")




property = Property.create(root_url: "starwars.com", sentiment: "bad", analysis: "claim your profile as soon as possible.", occurrences: 1)

property = Property.create(root_url: "ninjas.com")
