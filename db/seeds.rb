Restaurant.create(name: "Smith & Wollensky's", address:"300 Washington St", neighborhood:"South End", phone: "781-234-5678", url: "wwww.Smithandwollenksys.com")
Restaurant.create(name: "Menton", address:"28 Congress Street", neighborhood:"Fort Point", phone: "617-212-5948", url: "wwww.menton.com")
Restaurant.create(name: "Blue Dragon", address:"50 Melcher Street", neighborhood:"Fort Point", phone: "617-564-1578", url: "wwww.bluedragon.com")
Restaurant.create(name: "The Palm", address:"19 Atlantic Ave", neighborhood:"Financial District", phone: "617-123-5438", url: "wwww.thepalm.com")
Restaurant.create(name: "Tiger Mama", address: "1363 Boylston Street", neighborhood:"Fenway", phone: "781-906-1234", url: "wwww.tigermama.com")
Restaurant.create(name: "Top of the Hub", address:"33 Bird Way", neighborhood:"Prudential", phone: "781-785-9091", url: "wwww.topofthehub.com")

Review.create(rating: 4, description: "It was great", restaurant_id: 1)
Review.create(rating: 5, description: "Excellent", restaurant_id: 1)
Review.create(rating: 1, description: "The chef threw a knife at me", restaurant_id: 2)
Review.create(rating: 1, description: "My wife left me here...", restaurant_id: 2)

User.create(email: "fake@email.com", password: "123456", role: "admin", first_name: "Guy", last_name: "Admin")
