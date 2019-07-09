# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Post.delete_all

NUM_PRODUCT = 100

NUM_PRODUCT.times do
  created_at = Faker::Date.backward(365 * 5)
  Post.create(
    # Faker is a ruby module. We access classes
    # or other modules inside of it with ::.
    # Here, Hacker is a class inside of the
    # Faker module
    title: Faker::Beer.name,
    body: Faker::Lorem.paragraph_by_chars(55, false),
    created_at: created_at,
    updated_at: created_at
  )
end

posts = Post.all