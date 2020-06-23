# README
[![Codeship Status for rmlance/silver-spoon-reviews](https://app.codeship.com/projects/c995ded0-6624-0138-9f4d-7e4f61b5b52a/status?branch=master)](https://app.codeship.com/projects/393643)

# Silver Spoon Reviews
###### A restaurant review website targeting high-end Boston restaurants.
This project is a two-week build, designed to give users a website to review high-end restaurants in Boston, MA. Users can create an account to be able to write reviews, as well as add new restaurants to the list. Non-users can view all restaurants and reviews but do not have access to edit information.

# Authors
* Chris Harris
* Reid Lance
* Ethan Rosenberg
* Peter Stevens

## Built using the following technologies:
* Ruby on Rails
* Javascript
* React.js
* PostgreSQL
* CSS
* HTML
* Devise
* RSpec

# Getting Started:

###### Versions:
* Ruby 2.6.5
* Rails 5.2.4.2
* PostgreSQL 12

###### 1. Clone this repository:
`git clone https://github.com/rmlance/silver-spoon-reviews`

###### 2. Build database:
`bundle exec rake db:create`
`bundle exec rake db:migrate`

###### 3. Running the test suite:
`bundle exec rspec`

###### 4. Running the app in your own local development environment:
* Start the rails server:
`bundle exec rails server`
* Start the webpack-dev-server:
`yarn run start`
* Navigate to `http://localhost:3000` in your broswer.


