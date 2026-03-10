import { useRef } from "react";
import "./App.css";

function App() {
  const whatsappNumber = "919999999999"; // TODO: replace with real WhatsApp number
  const carScrollRef = useRef(null);

  const scrollCars = (dir) => {
    if (carScrollRef.current) {
      carScrollRef.current.scrollBy({ left: dir * 300, behavior: "smooth" });
    }
  };

  const scrollToForm = () => {
    const formSection = document.getElementById("enquiry-form-section");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openWhatsApp = (message) => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message,
    )}`;
    window.open(url, "_blank");
  };

  const handlePackageEnquiry = (pkgName) => {
    const packageInput = document.getElementById("package-name-field");
    if (packageInput) {
      packageInput.value = pkgName;
      packageInput.dispatchEvent(new Event("input", { bubbles: true }));
    }
    scrollToForm();
  };

  const packages = [
    {
      id: 1,
      name: "Jaipur City Highlights",
      tag: "Pink City",
      destinations: ["Hawa Mahal", "City Palace", "Jantar Mantar"],
      priceFrom: "₹7,499",
      image: "/pictures/lalitajapa-jaipur-7798509_1920.jpg",
    },
    {
      id: 2,
      name: "Amer Fort & Lakeside",
      tag: "Heritage",
      destinations: ["Amer Fort", "Jal Mahal", "Nahargarh"],
      priceFrom: "₹8,999",
      image: "/pictures/roaming_revolution-patrika-gate-6626520.jpg",
    },
    {
      id: 3,
      name: "Jaipur Nights & Bazaars",
      tag: "Markets",
      destinations: ["Johari Bazaar", "Bapu Bazaar", "Chokhi Dhani"],
      priceFrom: "₹9,499",
      image: "/pictures/praful_sharma-jaipur-4027735_1920.jpg",
    },
  ];

  const services = [
    {
      id: 1,
      title: "Hotels & Stays",
      description:
        "Handpicked stays in Jaipur from budget-friendly hotels to premium heritage properties.",
      image: "/pictures/lalitajapa-jaipur-7798509_1920.jpg",
    },
    {
      id: 2,
      title: "Tourist Attractions",
      description:
        "Guided visits to Hawa Mahal, Amer Fort, City Palace, Jantar Mantar and more.",
      image: "/pictures/roaming_revolution-patrika-gate-6626520.jpg",
    },
    {
      id: 3,
      title: "Local Experiences",
      description:
        "Food walks, cultural shows and authentic Rajasthani experiences curated for you.",
      image: "/pictures/praful_sharma-jaipur-4027735_1920.jpg",
    },
    {
      id: 4,
      title: "Transport & Travel Tips",
      description:
        "Airport and railway station transfers, local cabs and personalised assistance.",
      image: "/pictures/roaming_revolution-patrika-gate-6626520.jpg",
    },
  ];

  const jaipurItinerary = [
    {
      day: 1,
      title: "Double Decker Boarding & City Orientation",
      details:
        "Pickup from hotel in our iconic Double Decker bus. Open-top upper deck ride through the walled Pink City — see Hawa Mahal, Tripolia Gate and Chhoti Chaupar while the guide narrates Jaipur's royal history.",
    },
    {
      day: 2,
      title: "Heritage Fort Circuit on Deck",
      details:
        "Morning Double Decker cruise to Amer Fort, Jal Mahal scenic stop and Nahargarh viewpoint. The elevated open-top deck offers panoramic shots of the Aravalli hills and fort ramparts impossible from a regular cab.",
    },
    {
      day: 3,
      title: "Bazaar Lap & Chokhi Dhani Evening",
      details:
        "Double Decker tour through Johari Bazaar, Bapu Bazaar and Nehru Bazaar. Shop for gems, textiles and blue pottery. Evening village dinner at Chokhi Dhani with folk music and cultural shows.",
    },
    {
      day: 4,
      title: "Sunrise Ride & Departure",
      details:
        "Optional early-morning Double Decker sunrise lap around the City Palace walls before check-out. Transfer to airport / railway station with a royal send-off and unforgettable Jaipur memories.",
    },
  ];

  const whyJaipur = [
    {
      id: 1,
      title: "Reliable Travel Partner",
      description:
        "Local Jaipur specialists crafting well-planned, hassle-free holidays.",
      image: "/pictures/lalitajapa-jaipur-7798509_1920.jpg",
    },
    {
      id: 2,
      title: "Premium Support",
      description:
        "Dedicated trip coordinator and on-ground support throughout your stay.",
      image: "/pictures/roaming_revolution-patrika-gate-6626520.jpg",
    },
    {
      id: 3,
      title: "Secure & Transparent",
      description:
        "Clear inclusions, no hidden costs and secure payment options.",
      image: "/pictures/praful_sharma-jaipur-4027735_1920.jpg",
    },
    {
      id: 4,
      title: "Customer Friendly",
      description:
        "Custom itineraries for families, couples, and groups of all sizes.",
      image: "/pictures/roaming_revolution-patrika-gate-6626520.jpg",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      city: "Delhi",
      rating: 5,
      text: "Meharoli Travels made our Jaipur trip absolutely magical! The hotel was perfect, the guide was knowledgeable and everything was seamlessly organized. Highly recommended!",
      avatar: "PS",
    },
    {
      id: 2,
      name: "Rahul Mehta",
      city: "Mumbai",
      rating: 5,
      text: "Booked a 4-day Jaipur package for our family of 6. The cabs were comfortable, AC was working, and the driver was very professional. Will definitely book again!",
      avatar: "RM",
    },
    {
      id: 3,
      name: "Sunita & Vikram",
      city: "Bengaluru",
      rating: 5,
      text: "Our honeymoon in Jaipur was beyond expectations. The team arranged a heritage property stay, candle-light dinner and private fort tour. Simply wonderful.",
      avatar: "SV",
    },
    {
      id: 4,
      name: "Anjali Patil",
      city: "Pune",
      rating: 5,
      text: "Very transparent pricing — no hidden charges at all. The itinerary covered all major attractions and we had plenty of free time too. Great experience overall!",
      avatar: "AP",
    },
    {
      id: 5,
      name: "Deepak Agarwal",
      city: "Hyderabad",
      rating: 5,
      text: "The WhatsApp support was quick and very helpful. They customised the trip according to our budget and we got more than what we expected. 5 stars!",
      avatar: "DA",
    },
    {
      id: 6,
      name: "Neha Joshi",
      city: "Ahmedabad",
      rating: 5,
      text: "Travelled with my parents for the first time and Meharoli Travels took care of everything. Senior-friendly hotels, easy pace itinerary and a very caring driver. Truly stress-free!",
      avatar: "NJ",
    },
  ];

  const cars = [
    {
      id: 2,
      name: "Maruti Ertiga",
      type: "MPV",
      capacity: "6 Passengers",
      ac: true,
      priceFrom: "₹2,000/day",
      color: "#0891b2",
      icon: "🚙",
      features: ["AC", "Luggage Space", "Music System"],
    },
    {
      id: 3,
      name: "Toyota Innova",
      type: "SUV",
      capacity: "6 Passengers",
      ac: true,
      priceFrom: "₹2,500/day",
      color: "#059669",
      icon: "🚐",
      features: ["AC", "Premium Seats", "GPS", "USB Charging"],
    },
    {
      id: 4,
      name: "Toyota Crysta",
      type: "Premium SUV",
      capacity: "7 Passengers",
      ac: true,
      priceFrom: "₹3,200/day",
      color: "#d97706",
      icon: "🚘",
      features: ["AC", "Luxury Interior", "GPS", "USB Charging"],
    },
    {
      id: 5,
      name: "Tempo Traveller",
      type: "Mini Coach",
      capacity: "12–17 Passengers",
      ac: true,
      priceFrom: "₹4,500/day",
      color: "#db2777",
      icon: "🚌",
      features: ["AC", "Wide Seats", "Luggage Rack", "Music System"],
    },
    {
      id: 6,
      name: "Luxury Coach",
      type: "Bus",
      capacity: "30+ Passengers",
      ac: true,
      priceFrom: "₹12,000/day",
      color: "#7c3aed",
      icon: "🚎",
      features: ["AC", "Recliner Seats", "Onboard TV", "Restroom"],
    },
  ];

  return (
    <div className="app">
      <section className="hero" id="top">
        {/* Decorative background blobs */}
        <div className="hero-bg-effects" aria-hidden="true">
          <div className="hero-blob b1" />
          <div className="hero-blob b2" />
          <div className="hero-blob b3" />
          <div className="hero-dots" />
        </div>

        {/* Left – branding & CTA */}
        <div className="hero-left">
          <img
            src="/pictures/main-section/logo-removebg-preview.png"
            alt="Meharoli Travels Logo"
            className="hero-logo"
          />
          <span className="hero-badge">
            ⭐ Rajasthan Certified Travel Partner
          </span>
          <h1 className="hero-title">
            <span className="hero-title-line line-1">Meharoli</span>
            <span className="hero-title-line line-3">Travels</span>
          </h1>
          <p className="hero-tagline">
            Your trusted guide to Jaipur &amp; Rajasthan — crafting
            unforgettable journeys since 2014.
          </p>
          <div className="hero-stats">
            <div className="hero-stat">
              <strong>500+</strong>
              <small>Happy Clients</small>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <strong>10+</strong>
              <small>Years Experience</small>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <strong>4.9★</strong>
              <small>Google Rating</small>
            </div>
          </div>
          <div className="hero-cta-row">
            <button
              type="button"
              className="btn primary"
              onClick={() =>
                openWhatsApp(
                  "Hi Meharoli Travels, I would like to plan my Jaipur trip.",
                )
              }
            >
              Plan My Trip
            </button>
            <a href="#packages" className="btn ghost">
              View Packages
            </a>
          </div>
        </div>

        {/* Right – photo */}
        <div className="hero-right">
          <div className="hero-img-wrap">
            <img
              className="hero-img"
              src="/pictures/main-section/generated-image (3).png"
              alt="Jaipur, Rajasthan"
            />
            <div className="hero-img-badge">
              <strong>10+</strong>
              <small>Years of Experience</small>
            </div>
          </div>
        </div>
      </section>

      <main>
        <section className="highlights" aria-label="Why travel with Meharoli">
          <div className="highlights-strip">
            <div className="highlights-track">
              <div className="highlight-item">⭐ Best Price Guaranteed</div>
              <div className="highlight-item">🕐 24/7 Customer Support</div>
              <div className="highlight-item">
                🛡️ 100% Secure &amp; Covid Safety
              </div>
              <div className="highlight-item">🌟 4.9 Star Google Reviews</div>
              <div className="highlight-item">🏆 10+ Years of Experience</div>
              <div className="highlight-item">
                💳 Pay Online with Card &amp; UPI
              </div>
              {/* duplicate for seamless loop */}
              <div className="highlight-item" aria-hidden="true">
                ⭐ Best Price Guaranteed
              </div>
              <div className="highlight-item" aria-hidden="true">
                🕐 24/7 Customer Support
              </div>
              <div className="highlight-item" aria-hidden="true">
                🛡️ 100% Secure &amp; Covid Safety
              </div>
              <div className="highlight-item" aria-hidden="true">
                🌟 4.9 Star Google Reviews
              </div>
              <div className="highlight-item" aria-hidden="true">
                🏆 10+ Years of Experience
              </div>
              <div className="highlight-item" aria-hidden="true">
                💳 Pay Online with Card &amp; UPI
              </div>
            </div>
          </div>
        </section>

        <div className="enquiry-fullbleed">
          <section className="enquiry" id="enquiry-form-section">
            <div className="section-heading">
              <h2>Send an Enquiry</h2>
              <p>
                Share a few details and we will get back with a customised quote
                and itinerary suggestions.
              </p>
            </div>
            <div className="enquiry-layout">
              <form
                className="enquiry-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you! Your enquiry has been received.");
                  e.target.reset();
                }}
              >
                <div className="form-row two-cols">
                  <div className="form-field">
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Full name"
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="phone">Phone</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
                <div className="form-row two-cols">
                  <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Optional"
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="destination">Destination / Tour</label>
                    <input
                      id="destination"
                      name="destination"
                      type="text"
                      placeholder="e.g. Jaipur Day Tour"
                    />
                  </div>
                </div>
                <div className="form-row two-cols">
                  <div className="form-field">
                    <label htmlFor="travel-date">Travel Date</label>
                    <input id="travel-date" name="travel-date" type="date" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="travellers">Number of Travellers</label>
                    <input
                      id="travellers"
                      name="travellers"
                      type="number"
                      min="1"
                      placeholder="2"
                    />
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="message">Additional details (optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    placeholder="Share preferences like dates, hotel category, or special requests"
                  ></textarea>
                </div>

                <button type="submit" className="btn primary full">
                  Submit enquiry
                </button>
              </form>
            </div>
          </section>
        </div>
        {/* end enquiry-fullbleed */}

        {/* ── SPECIAL DOUBLE DECKER PACKAGE ── */}
        <section className="jaipur-details" id="double-decker-package">
          <div className="jaipur-details-inner">
            <div className="jaipur-banner">
              <div className="decker-bus-showcase">
                <div className="bus-bg" aria-hidden="true">
                  <div className="bus-road-strip" />
                  <div className="bus-anim">
                    <img
                      className="bus-img"
                      src="/pictures/main-section/bus-doubledecker.png"
                      alt="Double decker bus"
                    />
                  </div>
                </div>
              </div>
              <div className="decker-badge">
                🚌 Special Double Decker Package
              </div>
              <p className="jaipur-banner-text">
                Explore the Pink City like never before — from the open-top
                upper deck of our iconic Double Decker bus, cruise through royal
                forts, bazaars and palaces with the wind in your hair.
              </p>
              <p className="decker-price-tag">
                Starting at <strong>₹11,999</strong> / person
              </p>
              <button
                type="button"
                className="btn primary jaipur-banner-btn"
                onClick={() =>
                  handlePackageEnquiry("Special Double Decker Package")
                }
              >
                Book Double Decker Tour
              </button>
            </div>
            <div className="jaipur-itinerary">
              <h2 className="jaipur-itinerary-title">
                Special Double Decker Package
              </h2>
              <p className="jaipur-itinerary-sub">
                4 Days · Open-Top Bus · Guided · All Major Attractions
              </p>
              <div className="jaipur-itinerary-list">
                {jaipurItinerary.map((day) => (
                  <details
                    key={day.day}
                    className="itinerary-day"
                    open={day.day === 1}
                  >
                    <summary>
                      <span>{`Day ${day.day}: ${day.title}`}</span>
                      <span className="day-toggle-icon">▾</span>
                    </summary>
                    <p>{day.details}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="packages" id="packages">
          <div className="section-heading">
            <h2>Featured Holiday Packages</h2>
            <p>
              Carefully designed bundles including stays, sightseeing, meals and
              comfortable cabs, so you only focus on enjoying the journey.
            </p>
          </div>
          <div className="packages-carousel-wrap">
            <div className="packages-grid">
              {packages.map((pkg) => (
                <article key={pkg.id} className="package-card">
                  <div
                    className="package-image"
                    aria-hidden="true"
                    style={{ backgroundImage: `url(${pkg.image})` }}
                  >
                    <div className="package-badge">{pkg.tag}</div>
                  </div>
                  <div className="package-body">
                    <h3>{pkg.name}</h3>
                    <p className="package-destinations">
                      Destinations: {pkg.destinations.join(" · ")}
                    </p>
                    <p className="package-price">
                      Starting at {pkg.priceFrom} per person
                    </p>
                    <ul className="package-includes">
                      <li>Comfortable hotels</li>
                      <li>Private cab transfers</li>
                      <li>Guided sightseeing</li>
                      <li>Breakfast & selected meals</li>
                    </ul>
                    <div className="package-actions">
                      <button
                        type="button"
                        className="btn primary full"
                        onClick={() => handlePackageEnquiry(pkg.name)}
                      >
                        Send enquiry
                      </button>
                      <button
                        type="button"
                        className="btn ghost full"
                        onClick={() =>
                          openWhatsApp(
                            `Hi Meharoli Travels, I want to know more about the ${pkg.name} package.`,
                          )
                        }
                      >
                        WhatsApp about this
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="testimonials" id="testimonials">
          <div className="section-heading">
            <h2>What Our Travellers Say</h2>
            <p>
              Thousands of happy travellers have explored Jaipur with us.
              Here&apos;s what some of them had to share.
            </p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonials-track">
              {testimonials.map((t) => (
                <article key={t.id} className="testimonial-card">
                  <div className="testimonial-stars">
                    {"★".repeat(t.rating)}
                    {"☆".repeat(5 - t.rating)}
                  </div>
                  <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">{t.avatar}</div>
                    <div>
                      <div className="testimonial-name">{t.name}</div>
                      <div className="testimonial-city">{t.city}</div>
                    </div>
                  </div>
                </article>
              ))}
              {/* duplicate for seamless mobile loop */}
              {testimonials.map((t) => (
                <article
                  key={`d-${t.id}`}
                  className="testimonial-card"
                  aria-hidden="true"
                >
                  <div className="testimonial-stars">
                    {"★".repeat(t.rating)}
                    {"☆".repeat(5 - t.rating)}
                  </div>
                  <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">{t.avatar}</div>
                    <div>
                      <div className="testimonial-name">{t.name}</div>
                      <div className="testimonial-city">{t.city}</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── CARS ── */}
        <section className="cars-section" id="cars">
          <div className="section-heading">
            <h2>Book a Vehicle</h2>
            <p>
              Choose from our well-maintained fleet of AC vehicles — ideal for
              solo travellers, families and large groups.
            </p>
          </div>
          <div className="cars-carousel-wrapper">
            <button
              type="button"
              className="cars-scroll-btn left"
              onClick={() => scrollCars(-1)}
              aria-label="Scroll left"
            >
              ‹
            </button>
            <div className="cars-carousel" ref={carScrollRef}>
              {cars.map((car) => (
                <article key={car.id} className="car-card">
                  <div
                    className="car-card-top"
                    style={{ background: car.color }}
                  >
                    <span className="car-icon">{car.icon}</span>
                    <span className="car-type-badge">{car.type}</span>
                  </div>
                  <div className="car-card-body">
                    <h3 className="car-name">{car.name}</h3>
                    <p className="car-capacity">👥 {car.capacity}</p>
                    <ul className="car-features">
                      {car.features.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                    <p className="car-price">From {car.priceFrom}</p>
                    <button
                      type="button"
                      className="btn primary full"
                      onClick={() =>
                        openWhatsApp(
                          `Hi Meharoli Travels, I want to book a ${car.name} (${car.type}) for my Jaipur trip.`,
                        )
                      }
                    >
                      Book Now
                    </button>
                  </div>
                </article>
              ))}
            </div>
            <button
              type="button"
              className="cars-scroll-btn right"
              onClick={() => scrollCars(1)}
              aria-label="Scroll right"
            >
              ›
            </button>
          </div>
        </section>

        {/* ── RAJASTHAN TOURISM CERTIFICATE ── */}
        <section className="cert-section">
          <div className="cert-inner">
            <div className="cert-badge-wrap">
              <div className="cert-badge">
                <div className="cert-badge-seal">🏛</div>
                <div className="cert-badge-text">
                  <span className="cert-badge-title">
                    Certified &amp; Recognized
                  </span>
                  <span className="cert-badge-sub">
                    Rajasthan Tourism Department
                  </span>
                </div>
              </div>
            </div>
            <div className="cert-content">
              <h2>Trusted by Rajasthan Tourism</h2>
              <p>
                Meharoli Travels is an officially recognized travel operator
                under the <strong>Rajasthan Tourism Department</strong>,
                Government of Rajasthan. Our registration ensures you travel
                with a licensed, accountable and government-verified agency.
              </p>
              <ul className="cert-points">
                <li>✅ Licensed under Rajasthan Tourism Act</li>
                <li>✅ Verified guides &amp; certified drivers</li>
                <li>✅ Insured vehicles &amp; passengers</li>
                <li>✅ Complaint redressal through Tourism Helpline</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="services">
          <div className="section-heading services-heading">
            <h2>Complete Traveling Services</h2>
            <p>
              Plan as you want to. Book hotels, sightseeing and transport the
              way you like with fully customisable options.
            </p>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <article key={service.id} className="service-card">
                <div
                  className="service-icon"
                  aria-hidden="true"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-jaipur">
          <div className="about-jaipur-inner">
            <div className="about-jaipur-text">
              <h2>About Jaipur Tourism</h2>
              <p>
                Known as the "Pink City", Jaipur blends royal palaces, bustling
                bazaars and colourful streets with warm Rajasthani hospitality.
              </p>
              <p>
                From the iconic Hawa Mahal and Amer Fort to serene lakes and
                vibrant markets, Jaipur offers a perfect mix of history, culture
                and photo-worthy spots for every traveller.
              </p>
              <p>
                Whether you are planning a short weekend escape or an extended
                Rajasthan circuit, Meharoli Travels designs Jaipur holidays that
                match your pace and budget.
              </p>
              <button
                type="button"
                className="btn primary about-btn"
                onClick={() =>
                  openWhatsApp(
                    "Hi Meharoli Travels, I want to talk to a Jaipur travel expert.",
                  )
                }
              >
                Talk to an Expert
              </button>
            </div>
            <div className="about-jaipur-image" aria-hidden="true">
              <div className="about-jaipur-photo" />
            </div>
          </div>
        </section>

        <section className="why-jaipur">
          <div className="section-heading services-heading">
            <h2>Why Book Jaipur With Us</h2>
            <p>
              Enjoy expert planning, trusted local partners and end-to-end trip
              support so you can relax and soak in the Pink City.
            </p>
          </div>
          <div className="why-grid">
            {whyJaipur.map((item) => (
              <article key={item.id} className="why-card">
                <div
                  className="why-icon"
                  aria-hidden="true"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <h3 className="why-title">{item.title}</h3>
                <p className="why-description">{item.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="logo-mark">MT</div>
            <div>
              <div className="brand-name">Meharoli Travels</div>
              <div className="brand-tagline">
                Jaipur &amp; Rajasthan specialists
              </div>
            </div>
          </div>
          <div className="footer-columns">
            <div className="footer-column">
              <h4>Jaipur Packages</h4>
              <ul>
                <li>Weekend Pink City Getaway</li>
                <li>Jaipur with Amer &amp; Nahargarh</li>
                <li>Jaipur, Ajmer &amp; Pushkar</li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Contact</h4>
              <ul>
                <li>Jaipur, Rajasthan</li>
                <li>WhatsApp: +91-99999-99999</li>
                <li>Email: info@meharolitravels.com</li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Quick Actions</h4>
              <button
                type="button"
                className="btn primary footer-whatsapp"
                onClick={() =>
                  openWhatsApp(
                    "Hi Meharoli Travels, I would like to plan my Jaipur holiday.",
                  )
                }
              >
                Chat on WhatsApp
              </button>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Meharoli Travels. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
