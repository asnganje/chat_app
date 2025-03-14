# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
# User.create(username:"Nafisa", password:"password")
# User.create(username:"Suleiman", password:"password")
# User.create(username:"Auf", password:"password")
# User.create(username:"Zaynab", password:"password")
# User.create(username:"Asya", password:"password")
# Message.create(body:"Hello daddy", user: User.find(1))
# Message.create(body:"Hello sule", user: User.find(2))
# Message.create(body:"Hello zaynab", user: User.find(3))
# Message.create(body:"Hello Asya", user: User.find(3))
# Message.create(body:"Hello nafisa", user: User.find(5))