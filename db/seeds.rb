User.create(email: "fake@email.com", password: "123456", role: "admin", first_name: "Guy", last_name: "Admin")
User.create(email: "john@cena.com", password: "Andhisnameis", role: "admin", first_name: "John", last_name: "Cena")
User.create(email: "mj@mj.com", password: "6times", role: "member", first_name: "Michael", last_name: "Jordan")

Restaurant.create(name: "Fogo de Chao", address: "200 Dartmouth St.", neighborhood: "Back Bay", phone: "(617) 585-6300", url: "fogodechao.com")
Restaurant.create(name: "Bar Mezzana", address: "360 Harrison Ave.", neighborhood: "South End", phone: "(617) 530-1770", url: "barmezzana.com")
Restaurant.create(name: "Uni", address: "370A Commonwealth Ave.", neighborhood: "Back Bay", phone: "(617) 536-7200", url: "uni-boston.com")
Restaurant.create(name: "Menton", address: "354 Congress St.", neighborhood: "Fort Point", phone: "(617) 737-0099", url: "mentonboston.com")
Restaurant.create(name: "Grill 23 & Bar", address: "161 Berkeley St.", neighborhood: "Back Bay", phone: "(617) 542-2255", url: "grill23.com")
Restaurant.create(name: "The Palm", address: "1 International Pl., Suite 190.", neighborhood: "Financial District", phone: "(617) 867-9292", url: "thepalm.com")
Restaurant.create(name: "Sorellina", address: "1 Huntington Ave.", neighborhood: "Back Bay", phone: "(617) 412-4600", url: "sorellinaboston.com")
Restaurant.create(name: "Mistral Bistro", address: "223 Columbus Ave.", neighborhood: "Bay Village", phone: "(617) 867-9300", url: "mistralbistro.com")
Restaurant.create(name: "Asta", address: "47 Massachusetts Ave.", neighborhood: "Back Bay", phone: "(617) 585-9575", url: "astaboston.com")
Restaurant.create(name: "Meritage Restaurant", address: "text.", neighborhood: "text", phone: "numbers", url: "bhh.com")
Restaurant.create(name: "Ostra", address: "text.", neighborhood: "text", phone: "numbers", url: "ostaboston.com")
Restaurant.create(name: "The Capital Grille", address: " 900 Boylston St.", neighborhood: "Back Bay", phone: "(617) 262-8900", url: "thecapitalgrille.com")
Restaurant.create(name: "No. 9 Park", address: "9 Park St.", neighborhood: "Beacon Hill", phone: "(617) 742-9991", url: "no9park.com")
Restaurant.create(name: "Del Frisco’s Double Eagle Steakhouse", address: "250 Northern Ave., Suite 200.", neighborhood: "Seaport", phone: "(617) 951-1368", url: "delfriscos.com")
Restaurant.create(name: "O Ya", address: "9 East St.", neighborhood: "Leather District", phone: "(617) 654-9900", url: "o-ya.restaurant.com")
Restaurant.create(name: "Mooo", address: "15 Beacon St.", neighborhood: "Beacon Hill", phone: "(617) 670-2515", url: "mooorestaurant.com")

Review.create(rating: 5, description: "Best atmosphere!", restaurant_id: 1)
Review.create(rating: 3, description: "Seemed pretty overpriced for my meal.", restaurant_id: 2)
Review.create(rating: 5, description: "Best sushi in Boston bar none!", restaurant_id: 3)
Review.create(rating: 4, description: "Barbara Lynch does it again!", restaurant_id: 4)
Review.create(rating: 4, description: "My steak was good but the service could have been better for the price", restaurant_id: 5)
Review.create(rating: 3, description: "Seemed like a good place to use my company card.", restaurant_id: 6)
Review.create(rating: 4, description: "Another Back Bay gem.", restaurant_id: 7)
Review.create(rating: 5, description: "Their brunch was amazing and well worth the long wait.", restaurant_id: 8)
Review.create(rating: 3, description: "For all the hype I thought it was average", restaurant_id: 9)
Review.create(rating: 4, description: "Has the city's best views at sunset", restaurant_id: 10)
Review.create(rating: 5, description: "Probably one of the best meals of my life!", restaurant_id: 11)
Review.create(rating: 3, description: "If you've been to one Capital Grille, you've been to them all.", restaurant_id: 12)
Review.create(rating: 5, description: "Truly a once in a lifetime experience!", restaurant_id: 13)
Review.create(rating: 2, description: "Was exceedingly mediocre", restaurant_id: 14)
Review.create(rating: 4, description: "I would come back here any time!", restaurant_id: 15)
Review.create(rating: 5, description: "Wow, the meal of a lifetime!", restaurant_id: 16)
