import "./App.css";

function App() {
  const whatsappNumber = "919999999999"; // TODO: replace with real WhatsApp number

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
      title: "Arrive Jaipur",
      details:
        "Pickup from airport / railway station, check-in to hotel, evening free to explore local markets like Johari & Bapu Bazaar.",
    },
    {
      day: 2,
      title: "Jaipur City & Forts",
      details:
        "Guided visit to Amber Fort, Jal Mahal photo-stop, City Palace and Jantar Mantar. Optional light & sound show in the evening.",
    },
    {
      day: 3,
      title: "Pink City & Shopping",
      details:
        "Visit Hawa Mahal from outside, explore old city lanes, buy handicrafts, jewellery and textiles. Evening at Chokhi Dhani or similar.",
    },
    {
      day: 4,
      title: "Departure",
      details:
        "Check-out from hotel after breakfast and transfer to airport / railway station with beautiful memories of Jaipur.",
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

  return (
    <div className="app">
      <section className="hero" id="top">
        <div className="hero-frame">
          <video
            className="hero-video"
            src="/236224_tiny.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="hero-overlay" aria-hidden="true" />
          <div className="hero-center">
            <div className="hero-brand">
              <h1 className="hero-title">Meharoli Travels</h1>
              <div className="hero-title-accent" aria-hidden="true">
                <span className="accent-line" />
                <span className="accent-diamond">✦</span>
                <span className="accent-line" />
              </div>
              <p className="hero-tagline">Trusted Travel Partner from Jaipur</p>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="btn primary hero-whatsapp-btn"
          onClick={() =>
            openWhatsApp(
              "Hi Meharoli Travels, I would like to plan my Jaipur trip.",
            )
          }
        >
          Connect on WhatsApp
        </button>
      </section>

      <main>
        <section className="highlights" aria-label="Why travel with Meharoli">
          <div className="highlights-strip">
            <div className="highlight-item">Best Price Guaranteed</div>
            <div className="highlight-item">24/7 Customer Support</div>
            <div className="highlight-item">100% Secure &amp; Covid Safety</div>
            <div className="highlight-item">4.9 Star Google Reviews</div>
            <div className="highlight-item">10+ Years of Experience</div>
            <div className="highlight-item">Pay Online with Card &amp; UPI</div>
          </div>
        </section>

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
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="form-row two-cols">
                <div className="form-field">
                  <label htmlFor="contact">Contact number</label>
                  <input
                    id="contact"
                    name="contact"
                    type="tel"
                    required
                    placeholder="10-digit mobile number"
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="city">City name</label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    required
                    placeholder="Your current city"
                  />
                </div>
              </div>

              <div className="form-row two-cols">
                <div className="form-field">
                  <label htmlFor="persons">No. of persons</label>
                  <input
                    id="persons"
                    name="persons"
                    type="number"
                    min="1"
                    required
                    placeholder="e.g. 4"
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="month">Travel month</label>
                  <select id="month" name="month" required defaultValue="">
                    <option value="" disabled>
                      Select month
                    </option>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                  </select>
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="package-name-field">Package (optional)</label>
                <input
                  id="package-name-field"
                  name="package"
                  type="text"
                  placeholder="Selected from packages or your own idea"
                />
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

        <section className="packages" id="packages">
          <div className="section-heading">
            <h2>Featured Holiday Packages</h2>
            <p>
              Carefully designed bundles including stays, sightseeing, meals and
              comfortable cabs, so you only focus on enjoying the journey.
            </p>
          </div>
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

        <section className="jaipur-details">
          <div className="jaipur-details-inner">
            <div className="jaipur-banner">
              <div className="jaipur-banner-photo" />
              <p className="jaipur-banner-text">
                A scenic journey through forts, palaces and streets lit in the
                warm glow of Jaipur&apos;s evenings.
              </p>
              <button
                type="button"
                className="btn primary jaipur-banner-btn"
                onClick={scrollToForm}
              >
                Plan this Jaipur Trip
              </button>
            </div>
            <div className="jaipur-itinerary">
              <h2 className="jaipur-itinerary-title">Jaipur Package Details</h2>
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
