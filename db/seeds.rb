# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#ethan = User.create(email: "ethan@aol.com", password: "test")

#ethan.search_results.create(url: "http://www.google.com/search?q=ethan+rosenberg")




Property.create(root_url: "twitter.com", sentiment: "positive", analysis: "Awesome! Claim your twitter profile with your name as soon as possible... Make sure to link to your other social media properties for maximum effect.", occurrences: 1)
Property.create(root_url: "house.gov", sentiment: "negative", analysis: "Almost all .gov domains are controlled by institutions or the govenment and creating your own web property on them is very  tough...", occurrences: 1)
Property.create(root_url: "wikipedia.org", sentiment: "negative", analysis: "Wikipedia doesnt allow personal urls or the ability to create your own profile...", occurrences: 1)
