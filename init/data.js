
  const sampleListings = [
    {
      title: "Cozy Beachfront Cottage",
      description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
      image: {
        url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        filename: "cozy_beachfront_cottage.jpg"
      },
      price: 1500,
      location: "Malibu",
      country: "United States",
      geometry: {
        type: "Point",
        coordinates: [-118.7798, 34.0259] // longitude, latitude
      }
    },
    {
      title: "Modern Loft in Downtown",
      description: "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
      image: {
        url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        filename: "modern_loft_downtown.jpg"
      },
      price: 1200,
      location: "New York City",
      country: "United States",
      geometry: {
        type: "Point",
        coordinates: [-74.0060, 40.7128]
      }
    },
    {
      title: "Mountain Retreat",
      description: "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
      image: {
        url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        filename: "mountain_retreat.jpg"
      },
      price: 1000,
      location: "Aspen",
      country: "United States",
      geometry: {
        type: "Point",
        coordinates: [-106.8175, 39.1911]
      }
    },
    {
      title: "Historic Villa in Tuscany",
      description: "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
      image: {
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        filename: "historic_villa_tuscany.jpg"
      },
      price: 2500,
      location: "Florence",
      country: "Italy",
      geometry: {
        type: "Point",
        coordinates: [11.2558, 43.7696]
      }
    },
    {
      title: "Secluded Treehouse Getaway",
      description: "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
      image: {
        url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        filename: "secluded_treehouse_getaway.jpg"
      },
      price: 800,
      location: "Portland",
      country: "United States",
      geometry: {
        type: "Point",
        coordinates: [-122.6750, 45.5051]
      }
    },
    {
      title: "Beachfront Paradise",
      description: "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
      image: {
        url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        filename: "beachfront_paradise.jpg"
      },
      price: 2000,
      location: "Cancun",
      country: "Mexico",
      geometry: {
        type: "Point",
        coordinates: [-86.8515, 21.1619]
      }
    },
    {
      title: "Rustic Cabin by the Lake",
      description: "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
      image: {
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        filename: "rustic_cabin_lake.jpg"
      },
      price: 900,
      location: "Lake Tahoe",
      country: "United States",
      geometry: {
        type: "Point",
        coordinates: [-120.0324, 39.0968]
      }
    },
    {
      title: "Luxury Penthouse with City Views",
      description: "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
      image: {
        url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        filename: "luxury_penthouse_cityviews.jpg"
      },
      price: 3500,
      location: "Los Angeles",
      country: "United States",
      geometry: {
        type: "Point",
        coordinates: [-118.2437, 34.0522]
      }
    },
    {
      title: "Ski-In/Ski-Out Chalet",
      description: "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
      image: {
        url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        filename: "ski_chalet_swissalps.jpg"
      },
      price: 3000,
      location: "Verbier",
      country: "Switzerland",
      geometry: {
        type: "Point",
        coordinates: [7.2275, 46.1003] // longitude, latitude for Verbier, Switzerland
      }
    },
    {
      title: "Safari Lodge in the Serengeti",
      description: "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
      image: {
        url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        filename: "safari_lodge_serengeti.jpg"
      },
      price: 4000,
      location: "Serengeti National Park",
      country: "Tanzania",
      geometry: {
        type: "Point",
        coordinates: [34.8233, -2.3333] // longitude, latitude for Serengeti National Park, Tanzania
      }
    },
    {
      title: "Historic Canal House",
      description: "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
      image: {
        url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        filename: "historic_canal_house.jpg"
      },
      price: 1800,
      location: "Amsterdam",
      country: "Netherlands",
      geometry: {
        type: "Point",
        coordinates: [4.9041, 52.3676] // longitude, latitude for Amsterdam, Netherlands
      }
    },
    {
      title: "Private Island Retreat",
      description: "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
      image: {
        url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        filename: "private_island_retreat.jpg"
      },
      price: 10000,
      location: "Fiji",
      country: "Fiji",
      geometry: {
        type: "Point",
        coordinates: [179.4144, -16.5782] // longitude, latitude for Fiji
      }
    },
    {
      title: "Charming Cottage in the Cotswolds",
      description: "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
      image: {
        url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        filename: "charming_cottage_cotswolds.jpg"
      },
      price: 1200,
      location: "Chipping Campden",
      country: "United Kingdom",
      geometry: {
        type: "Point",
        coordinates: [-1.7825, 52.0498] // longitude, latitude for Chipping Campden, UK
      }
    },
    {
      title: "Historic Brownstone in Boston",
      description: "Step back in time in this elegant historic brownstone located in the heart of Boston.",
      image: {
        url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        filename: "historic_brownstone_boston.jpg"
      },
      price: 2200,
      location: "Boston",
      country: "United States",
      geometry: {
        type: "Point",
        coordinates: [-71.0589, 42.3601] // longitude, latitude for Boston, USA
      }
    },
    {
      title: "Beachfront Bungalow in Bali",
      description: "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
      image: {
        url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        filename: "beachfront_bungalow_bali.jpg"
      },
      price: 1800,
      location: "Bali",
      country: "Indonesia",
      geometry: {
        type: "Point",
        coordinates: [115.1889, -8.4095] // longitude, latitude for Bali, Indonesia
      }
    },
    {
      title: "Mountain View Cabin in Banff",
      description: "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
      image: {
        url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        filename: "mountain_view_cabin_banff.jpg"
      },
      price: 1500,
      location: "Banff",
      country: "Canada",
      geometry: {
        type: "Point",
        coordinates: [-115.5708, 51.1784] // longitude, latitude for Banff, Canada
      }
    },
    {
      title: "Art Deco Apartment in Miami",
      description: "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
      image: {
        url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        filename: "art_deco_apartment_miami.jpg"
      },
      price: 1600,
      location: "Miami",
      country: "United States",
      geometry: {
        type: "Point",
        coordinates: [-80.1918, 25.7617] // longitude, latitude
      }
    },
    {
      title: "Tropical Villa in Phuket",
      description: "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
      image: {
        url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        filename: "tropical_villa_phuket.jpg"
      },
      price: 3000,
      location: "Phuket",
      country: "Thailand",
      geometry: {
        type: "Point",
        coordinates: [98.3923, 7.8804] // longitude, latitude
      }
    },
    {
      title: "Historic Castle in Scotland",
      description: "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
      image: {
        url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIydmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        filename: "historic_castle_scotland.jpg"
      },
      price: 4000,
      location: "Scottish Highlands",
      country: "United Kingdom",
      geometry: {
        type: "Point",
        coordinates: [-4.5062, 56.7923] // longitude, latitude
      }
    },
    {
      title: "Desert Oasis in Dubai",
      description: "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
      image: {
        url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        filename: "desert_oasis_dubai.jpg"
      },
      price: 5000,
      location: "Dubai",
      country: "United Arab Emirates",
      geometry: {
        type: "Point",
        coordinates: [55.296249, 25.276987] // longitude, latitude
      }
    },
    {
      title: "Rustic Log Cabin in Montana",
      description: "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
      image: {
        url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        filename: "rustic_log_cabin_montana.jpg"
      },
      price: 1100,
      location: "Montana",
      country: "United States",
      geometry: {
        type: "Point",
        coordinates: [-110.3626, 46.8772] // longitude, latitude
      }
    },
    {
      title: "Beachfront Villa in Greece",
      description: "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
      image: {
        url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        filename: "beachfront_villa_greece.jpg"
      },
      price: 2500,
      location: "Mykonos",
      country: "Greece",
      geometry: {
        type: "Point",
        coordinates: [25.3705, 37.4467] // longitude, latitude
      }
    },
    {
      title: "Eco-Friendly Treehouse Retreat",
      description: "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
      image: {
        url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        filename: "eco_friendly_treehouse_retreat.jpg"
      },
      price: 750,
      location: "Costa Rica",
      country: "Costa Rica",
      geometry: {
        type: "Point",
        coordinates: [-83.7534, 9.7489] // longitude, latitude
      }
    },
    {
      title: "Historic Cottage in Charleston",
      description: "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
      image: {
        url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        filename: "historic_cottage_charleston.jpg"
      },
      price: 1600,
      location: "Charleston",
      country: "United States",
      geometry: {
        type: "Point",
        coordinates: [-79.9310, 32.7765] // longitude, latitude
      }
    },
    {
      title: "Modern Apartment in Tokyo",
      description: "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
      image: {
        url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        filename: "modern_apartment_tokyo.jpg"
      },
      price: 2000,
      location: "Tokyo",
      country: "Japan",
      geometry: {
        type: "Point",
        coordinates: [139.759455, 35.682839] // longitude, latitude
      }
    },
    {
      title: "Lakefront Cabin in New Hampshire",
      description: "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
      image: {
        url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        filename: "lakefront_cabin_new_hampshire.jpg"
      },
      price: 1200,
      location: "New Hampshire",
      country: "United States",
      geometry: {
        type: "Point",
        coordinates: [-71.5724, 43.1939] // longitude, latitude
      }
    },
    {
      title: "Luxury Villa in the Maldives",
      description: "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
      image: {
        url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        filename: "luxury_villa_maldives.jpg"
      },
      price: 5000,
      location: "Maldives",
      country: "Maldives",
      geometry: {
        type: "Point",
        coordinates: [73.5089, 3.2028] // longitude, latitude
      }
    },
    {
      title: "Banff National Park",
      description: "Experience the stunning beauty of Banff National Park, with its breathtaking mountains and lakes.",
      image: {
        url: "https://images.unsplash.com/photo-1531870542726-3f6d9497a3d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGJhbmZmJTIwY2FuYWRhfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        filename: "banff_national_park.jpg"
      },
      price: 2000,
      location: "Banff",
      country: "Canada",
      geometry: {
        type: "Point",
        coordinates: [-115.5708, 51.1784] // longitude, latitude
      }
    },
];

module.exports = { data: sampleListings }; 