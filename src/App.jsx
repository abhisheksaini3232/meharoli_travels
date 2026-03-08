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
  ];

  const cars = [
    {
      id: 1,
      name: "Swift Dzire",
      type: "Sedan",
      capacity: "4 Passengers",
      ac: true,
      priceFrom: "₹1,200/day",
      color: "#4f46e5",
      icon: "🚗",
      features: ["AC", "Music System", "GPS"],
    },
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
        <img
          className="hero-img"
          src="/pictures/ashwani999-jaipur-8185377_1920.jpg"
          alt="Hawa Mahal, Jaipur"
        />
        <div className="hero-overlay" aria-hidden="true" />
        <span className="hero-side-text left" aria-hidden="true">
          MEHAROLI
        </span>
        <span className="hero-side-text right" aria-hidden="true">
          TRAVELS
        </span>
        <div className="hero-center">
          <div className="hero-brand">
            <img
              className="hero-logo"
              src="/pictures/main-section/logo-removebg-preview.png"
              alt="Meharoli Travels logo"
            />
            <div className="hero-title-accent" aria-hidden="true">
              <span className="accent-line" />
              <span className="accent-diamond">✦</span>
              <span className="accent-line" />
            </div>
            <p className="hero-tagline">Trusted Travel Partner from Jaipur</p>
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

        <div className="enquiry-fullbleed">
          <section className="enquiry" id="enquiry-form-section">
            {/* Bus animation background */}
            <div className="bus-bg" aria-hidden="true">
              <div className="bus-sky" />
              <div className="bus-buildings">
                <svg
                  viewBox="0 0 1440 120"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Jaipur building silhouettes */}
                  <rect
                    x="0"
                    y="60"
                    width="60"
                    height="60"
                    fill="#b45309"
                    opacity="0.35"
                  />
                  <rect
                    x="20"
                    y="40"
                    width="20"
                    height="20"
                    fill="#b45309"
                    opacity="0.35"
                  />
                  <polygon
                    points="30,20 50,40 10,40"
                    fill="#b45309"
                    opacity="0.35"
                  />
                  <rect
                    x="80"
                    y="50"
                    width="80"
                    height="70"
                    fill="#92400e"
                    opacity="0.3"
                  />
                  <rect
                    x="110"
                    y="30"
                    width="20"
                    height="20"
                    fill="#92400e"
                    opacity="0.3"
                  />
                  <polygon
                    points="120,10 140,30 100,30"
                    fill="#92400e"
                    opacity="0.3"
                  />
                  <rect
                    x="180"
                    y="70"
                    width="50"
                    height="50"
                    fill="#b45309"
                    opacity="0.28"
                  />
                  <rect
                    x="250"
                    y="45"
                    width="90"
                    height="75"
                    fill="#92400e"
                    opacity="0.25"
                  />
                  <rect
                    x="275"
                    y="25"
                    width="20"
                    height="20"
                    fill="#92400e"
                    opacity="0.25"
                  />
                  <rect
                    x="360"
                    y="65"
                    width="55"
                    height="55"
                    fill="#b45309"
                    opacity="0.28"
                  />
                  <rect
                    x="440"
                    y="40"
                    width="75"
                    height="80"
                    fill="#78350f"
                    opacity="0.22"
                  />
                  <rect
                    x="460"
                    y="20"
                    width="15"
                    height="20"
                    fill="#78350f"
                    opacity="0.22"
                  />
                  <polygon
                    points="467,5 480,20 455,20"
                    fill="#78350f"
                    opacity="0.22"
                  />
                  <rect
                    x="540"
                    y="60"
                    width="60"
                    height="60"
                    fill="#b45309"
                    opacity="0.28"
                  />
                  <rect
                    x="620"
                    y="50"
                    width="85"
                    height="70"
                    fill="#92400e"
                    opacity="0.25"
                  />
                  <rect
                    x="650"
                    y="30"
                    width="20"
                    height="20"
                    fill="#92400e"
                    opacity="0.25"
                  />
                  <rect
                    x="730"
                    y="65"
                    width="50"
                    height="55"
                    fill="#b45309"
                    opacity="0.28"
                  />
                  <rect
                    x="800"
                    y="42"
                    width="70"
                    height="78"
                    fill="#92400e"
                    opacity="0.22"
                  />
                  <rect
                    x="825"
                    y="22"
                    width="15"
                    height="20"
                    fill="#92400e"
                    opacity="0.22"
                  />
                  <polygon
                    points="832,8 845,22 820,22"
                    fill="#92400e"
                    opacity="0.22"
                  />
                  <rect
                    x="890"
                    y="60"
                    width="60"
                    height="60"
                    fill="#b45309"
                    opacity="0.28"
                  />
                  <rect
                    x="970"
                    y="48"
                    width="80"
                    height="72"
                    fill="#78350f"
                    opacity="0.22"
                  />
                  <rect
                    x="1060"
                    y="55"
                    width="65"
                    height="65"
                    fill="#b45309"
                    opacity="0.3"
                  />
                  <rect
                    x="1090"
                    y="35"
                    width="15"
                    height="20"
                    fill="#b45309"
                    opacity="0.3"
                  />
                  <rect
                    x="1140"
                    y="40"
                    width="75"
                    height="80"
                    fill="#92400e"
                    opacity="0.25"
                  />
                  <rect
                    x="1240"
                    y="60"
                    width="55"
                    height="60"
                    fill="#b45309"
                    opacity="0.28"
                  />
                  <rect
                    x="1320"
                    y="45"
                    width="80"
                    height="75"
                    fill="#92400e"
                    opacity="0.22"
                  />
                  <rect
                    x="1380"
                    y="65"
                    width="60"
                    height="55"
                    fill="#b45309"
                    opacity="0.28"
                  />
                  {/* Ground */}
                  <rect
                    x="0"
                    y="110"
                    width="1440"
                    height="10"
                    fill="#78350f"
                    opacity="0.2"
                  />
                </svg>
              </div>
              <div className="bus-road-strip" />
              <div className="bus-anim">
                <svg
                  viewBox="0 0 500 210"
                  width="500"
                  height="210"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* ── DROP SHADOW ── */}
                  <ellipse
                    cx="248"
                    cy="204"
                    rx="220"
                    ry="7"
                    fill="rgba(0,0,0,0.18)"
                  />

                  {/* ── REAR PANEL (left side) ── */}
                  <rect
                    x="4"
                    y="95"
                    width="18"
                    height="88"
                    rx="6"
                    fill="#991b1b"
                  />
                  <rect
                    x="6"
                    y="108"
                    width="10"
                    height="24"
                    rx="3"
                    fill="#ef4444"
                    opacity="0.9"
                  />
                  <rect
                    x="6"
                    y="136"
                    width="10"
                    height="8"
                    rx="2"
                    fill="#fb923c"
                    opacity="0.8"
                  />

                  {/* ── MAIN LOWER BODY ── */}
                  <rect
                    x="16"
                    y="93"
                    width="450"
                    height="90"
                    rx="10"
                    fill="#c2410c"
                  />
                  {/* lower body shadow line */}
                  <rect
                    x="16"
                    y="93"
                    width="450"
                    height="5"
                    rx="4"
                    fill="#9a3412"
                    opacity="0.4"
                  />
                  {/* skirt */}
                  <rect
                    x="16"
                    y="176"
                    width="450"
                    height="6"
                    rx="3"
                    fill="#9a3412"
                  />

                  {/* ── MAIN UPPER BODY ── */}
                  <rect
                    x="22"
                    y="16"
                    width="444"
                    height="80"
                    rx="10"
                    fill="#ea580c"
                  />

                  {/* ── ROOF ── */}
                  <rect
                    x="22"
                    y="6"
                    width="444"
                    height="16"
                    rx="8"
                    fill="#f97316"
                  />
                  {/* roof vents */}
                  <rect
                    x="55"
                    y="7"
                    width="28"
                    height="7"
                    rx="3"
                    fill="#c2400c"
                    opacity="0.7"
                  />
                  <rect
                    x="120"
                    y="7"
                    width="28"
                    height="7"
                    rx="3"
                    fill="#c2400c"
                    opacity="0.7"
                  />
                  <rect
                    x="200"
                    y="7"
                    width="28"
                    height="7"
                    rx="3"
                    fill="#c2400c"
                    opacity="0.7"
                  />
                  <rect
                    x="290"
                    y="7"
                    width="28"
                    height="7"
                    rx="3"
                    fill="#c2400c"
                    opacity="0.7"
                  />
                  <rect
                    x="370"
                    y="7"
                    width="28"
                    height="7"
                    rx="3"
                    fill="#c2400c"
                    opacity="0.7"
                  />

                  {/* ── DECK DIVIDER STRIPE ── */}
                  <rect x="16" y="90" width="452" height="6" fill="#fed7aa" />

                  {/* ── BRANDING STRIPE on lower body ── */}
                  <rect
                    x="22"
                    y="125"
                    width="340"
                    height="16"
                    rx="3"
                    fill="#7f1d1d"
                    opacity="0.35"
                  />
                  <text
                    x="192"
                    y="137"
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight="900"
                    fill="#fef3c7"
                    letterSpacing="2.5"
                    opacity="0.92"
                  >
                    MEHAROLI TRAVELS
                  </text>

                  {/* ── DESTINATION BOARD ── */}
                  <rect
                    x="26"
                    y="78"
                    width="295"
                    height="13"
                    rx="4"
                    fill="#1e1b4b"
                  />
                  <text
                    x="173"
                    y="88"
                    textAnchor="middle"
                    fontSize="7.5"
                    fontWeight="bold"
                    fill="#fef08a"
                    letterSpacing="1.2"
                  >
                    JAIPUR CITY HERITAGE TOUR
                  </text>

                  {/* ── UPPER DECK WINDOWS (6 windows) ── */}
                  <rect
                    x="28"
                    y="22"
                    width="62"
                    height="60"
                    rx="6"
                    fill="#bae6fd"
                    opacity="0.84"
                  />
                  <rect
                    x="100"
                    y="22"
                    width="62"
                    height="60"
                    rx="6"
                    fill="#bae6fd"
                    opacity="0.84"
                  />
                  <rect
                    x="172"
                    y="22"
                    width="62"
                    height="60"
                    rx="6"
                    fill="#bae6fd"
                    opacity="0.84"
                  />
                  <rect
                    x="244"
                    y="22"
                    width="62"
                    height="60"
                    rx="6"
                    fill="#bae6fd"
                    opacity="0.84"
                  />
                  <rect
                    x="316"
                    y="22"
                    width="62"
                    height="60"
                    rx="6"
                    fill="#bae6fd"
                    opacity="0.84"
                  />
                  <rect
                    x="388"
                    y="22"
                    width="52"
                    height="60"
                    rx="6"
                    fill="#bae6fd"
                    opacity="0.84"
                  />
                  {/* window glare lines */}
                  <line
                    x1="30"
                    y1="24"
                    x2="46"
                    y2="42"
                    stroke="white"
                    strokeWidth="1.5"
                    opacity="0.35"
                  />
                  <line
                    x1="102"
                    y1="24"
                    x2="118"
                    y2="42"
                    stroke="white"
                    strokeWidth="1.5"
                    opacity="0.35"
                  />
                  <line
                    x1="174"
                    y1="24"
                    x2="190"
                    y2="42"
                    stroke="white"
                    strokeWidth="1.5"
                    opacity="0.35"
                  />
                  <line
                    x1="246"
                    y1="24"
                    x2="262"
                    y2="42"
                    stroke="white"
                    strokeWidth="1.5"
                    opacity="0.35"
                  />
                  <line
                    x1="318"
                    y1="24"
                    x2="334"
                    y2="42"
                    stroke="white"
                    strokeWidth="1.5"
                    opacity="0.35"
                  />

                  {/* ── UPPER DECK TOURISTS ── */}
                  {/* Tourist 1 - camera pose */}
                  <circle cx="59" cy="36" r="13" fill="#fbbf24" />
                  <circle
                    cx="54"
                    cy="33"
                    r="3.5"
                    fill="#92400e"
                    opacity="0.6"
                  />
                  <circle
                    cx="64"
                    cy="33"
                    r="3.5"
                    fill="#92400e"
                    opacity="0.6"
                  />
                  <path
                    d="M54,42 Q59,46 64,42"
                    stroke="#92400e"
                    strokeWidth="1.5"
                    fill="none"
                    opacity="0.7"
                  />
                  <rect
                    x="50"
                    y="47"
                    width="18"
                    height="22"
                    rx="5"
                    fill="#dc2626"
                    opacity="0.8"
                  />
                  <rect
                    x="68"
                    y="53"
                    width="10"
                    height="5"
                    rx="2"
                    fill="#7f1d1d"
                    opacity="0.6"
                  />
                  {/* Tourist 2 - waving */}
                  <circle cx="131" cy="36" r="13" fill="#fb923c" />
                  <circle
                    cx="126"
                    cy="33"
                    r="3.5"
                    fill="#92400e"
                    opacity="0.6"
                  />
                  <circle
                    cx="136"
                    cy="33"
                    r="3.5"
                    fill="#92400e"
                    opacity="0.6"
                  />
                  <path
                    d="M126,42 Q131,46 136,42"
                    stroke="#92400e"
                    strokeWidth="1.5"
                    fill="none"
                    opacity="0.7"
                  />
                  <rect
                    x="122"
                    y="47"
                    width="18"
                    height="22"
                    rx="5"
                    fill="#1d4ed8"
                    opacity="0.8"
                  />
                  <line
                    x1="140"
                    y1="50"
                    x2="148"
                    y2="42"
                    stroke="#fb923c"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  {/* Tourist 3 - hat */}
                  <circle cx="203" cy="37" r="13" fill="#fde68a" />
                  <ellipse
                    cx="203"
                    cy="25"
                    rx="14"
                    ry="5"
                    fill="#92400e"
                    opacity="0.75"
                  />
                  <rect
                    x="196"
                    y="25"
                    width="14"
                    height="10"
                    rx="2"
                    fill="#b45309"
                    opacity="0.7"
                  />
                  <circle
                    cx="198"
                    cy="34"
                    r="3.5"
                    fill="#92400e"
                    opacity="0.6"
                  />
                  <circle
                    cx="208"
                    cy="34"
                    r="3.5"
                    fill="#92400e"
                    opacity="0.6"
                  />
                  <rect
                    x="194"
                    y="48"
                    width="18"
                    height="22"
                    rx="5"
                    fill="#15803d"
                    opacity="0.8"
                  />
                  {/* Tourist 4 - sunglasses */}
                  <circle cx="275" cy="36" r="13" fill="#fb923c" />
                  <rect
                    x="267"
                    y="31"
                    width="16"
                    height="6"
                    rx="3"
                    fill="#1e1b4b"
                    opacity="0.85"
                  />
                  <circle cx="270" cy="34" r="3" fill="#0ea5e9" opacity="0.5" />
                  <circle cx="280" cy="34" r="3" fill="#0ea5e9" opacity="0.5" />
                  <path
                    d="M267,42 Q275,47 283,42"
                    stroke="#92400e"
                    strokeWidth="1.5"
                    fill="none"
                    opacity="0.7"
                  />
                  <rect
                    x="266"
                    y="47"
                    width="18"
                    height="22"
                    rx="5"
                    fill="#7c3aed"
                    opacity="0.8"
                  />
                  {/* Tourist 5 - child */}
                  <circle cx="347" cy="39" r="11" fill="#fbbf24" />
                  <circle cx="342" cy="37" r="3" fill="#92400e" opacity="0.6" />
                  <circle cx="352" cy="37" r="3" fill="#92400e" opacity="0.6" />
                  <path
                    d="M342,44 Q347,48 352,44"
                    stroke="#92400e"
                    strokeWidth="1.5"
                    fill="none"
                    opacity="0.7"
                  />
                  <rect
                    x="339"
                    y="49"
                    width="16"
                    height="18"
                    rx="4"
                    fill="#b91c1c"
                    opacity="0.8"
                  />
                  {/* Tourist 6 - selfie stick */}
                  <circle cx="414" cy="36" r="12" fill="#fde68a" />
                  <circle cx="409" cy="33" r="3" fill="#92400e" opacity="0.6" />
                  <circle cx="419" cy="33" r="3" fill="#92400e" opacity="0.6" />
                  <rect
                    x="405"
                    y="47"
                    width="18"
                    height="20"
                    rx="4"
                    fill="#0e7490"
                    opacity="0.8"
                  />
                  <line
                    x1="424"
                    y1="45"
                    x2="436"
                    y2="30"
                    stroke="#78716c"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <rect
                    x="430"
                    y="26"
                    width="12"
                    height="9"
                    rx="2"
                    fill="#374151"
                  />

                  {/* ── LOWER DECK WINDOWS (4 windows) ── */}
                  <rect
                    x="28"
                    y="100"
                    width="76"
                    height="52"
                    rx="6"
                    fill="#bae6fd"
                    opacity="0.78"
                  />
                  <rect
                    x="114"
                    y="100"
                    width="76"
                    height="52"
                    rx="6"
                    fill="#bae6fd"
                    opacity="0.78"
                  />
                  <rect
                    x="200"
                    y="100"
                    width="76"
                    height="52"
                    rx="6"
                    fill="#bae6fd"
                    opacity="0.78"
                  />
                  <rect
                    x="286"
                    y="100"
                    width="76"
                    height="52"
                    rx="6"
                    fill="#bae6fd"
                    opacity="0.78"
                  />
                  <line
                    x1="30"
                    y1="102"
                    x2="46"
                    y2="120"
                    stroke="white"
                    strokeWidth="1.5"
                    opacity="0.3"
                  />
                  <line
                    x1="116"
                    y1="102"
                    x2="132"
                    y2="120"
                    stroke="white"
                    strokeWidth="1.5"
                    opacity="0.3"
                  />
                  <line
                    x1="202"
                    y1="102"
                    x2="218"
                    y2="120"
                    stroke="white"
                    strokeWidth="1.5"
                    opacity="0.3"
                  />
                  <line
                    x1="288"
                    y1="102"
                    x2="304"
                    y2="120"
                    stroke="white"
                    strokeWidth="1.5"
                    opacity="0.3"
                  />

                  {/* ── LOWER DECK TOURISTS ── */}
                  <circle cx="66" cy="116" r="12" fill="#fb923c" />
                  <circle
                    cx="61"
                    cy="113"
                    r="3"
                    fill="#92400e"
                    opacity="0.55"
                  />
                  <circle
                    cx="71"
                    cy="113"
                    r="3"
                    fill="#92400e"
                    opacity="0.55"
                  />
                  <circle cx="152" cy="116" r="12" fill="#fbbf24" />
                  <circle
                    cx="147"
                    cy="113"
                    r="3"
                    fill="#92400e"
                    opacity="0.55"
                  />
                  <circle
                    cx="157"
                    cy="113"
                    r="3"
                    fill="#92400e"
                    opacity="0.55"
                  />
                  <circle cx="238" cy="116" r="12" fill="#fde68a" />
                  <circle
                    cx="233"
                    cy="113"
                    r="3"
                    fill="#92400e"
                    opacity="0.55"
                  />
                  <circle
                    cx="243"
                    cy="113"
                    r="3"
                    fill="#92400e"
                    opacity="0.55"
                  />
                  <circle cx="324" cy="116" r="12" fill="#fb923c" />
                  <circle
                    cx="319"
                    cy="113"
                    r="3"
                    fill="#92400e"
                    opacity="0.55"
                  />
                  <circle
                    cx="329"
                    cy="113"
                    r="3"
                    fill="#92400e"
                    opacity="0.55"
                  />

                  {/* ── DOOR (lower right area) ── */}
                  <rect
                    x="374"
                    y="96"
                    width="44"
                    height="82"
                    rx="5"
                    fill="#9a3412"
                  />
                  <rect
                    x="376"
                    y="98"
                    width="19"
                    height="78"
                    rx="4"
                    fill="#7f1d1d"
                    opacity="0.65"
                  />
                  <rect
                    x="398"
                    y="98"
                    width="19"
                    height="78"
                    rx="4"
                    fill="#7f1d1d"
                    opacity="0.65"
                  />
                  <rect
                    x="393"
                    y="137"
                    width="8"
                    height="5"
                    rx="2"
                    fill="#fcd34d"
                  />

                  {/* ── FRONT FACE (right side) ── */}
                  <rect
                    x="448"
                    y="93"
                    width="44"
                    height="86"
                    rx="8"
                    fill="#b91c1c"
                  />
                  {/* front lower windshield */}
                  <rect
                    x="452"
                    y="104"
                    width="34"
                    height="42"
                    rx="5"
                    fill="#bae6fd"
                    opacity="0.88"
                  />
                  <line
                    x1="454"
                    y1="106"
                    x2="470"
                    y2="126"
                    stroke="white"
                    strokeWidth="2"
                    opacity="0.45"
                  />
                  {/* front upper windshield */}
                  <rect
                    x="444"
                    y="18"
                    width="42"
                    height="68"
                    rx="6"
                    fill="#bae6fd"
                    opacity="0.8"
                  />
                  <line
                    x1="446"
                    y1="20"
                    x2="464"
                    y2="42"
                    stroke="white"
                    strokeWidth="2"
                    opacity="0.4"
                  />
                  {/* headlight cluster */}
                  <rect
                    x="454"
                    y="150"
                    width="28"
                    height="14"
                    rx="4"
                    fill="#fef9c3"
                  />
                  <ellipse cx="462" cy="157" rx="7" ry="5" fill="#fef08a" />
                  <ellipse
                    cx="462"
                    cy="157"
                    rx="4"
                    ry="3"
                    fill="#fff"
                    opacity="0.9"
                  />
                  <ellipse
                    cx="476"
                    cy="157"
                    rx="5"
                    ry="4"
                    fill="#fb923c"
                    opacity="0.85"
                  />
                  {/* front bumper */}
                  <rect
                    x="449"
                    y="170"
                    width="44"
                    height="8"
                    rx="4"
                    fill="#7f1d1d"
                  />
                  {/* front grille */}
                  <rect
                    x="453"
                    y="160"
                    width="34"
                    height="9"
                    rx="3"
                    fill="#7f1d1d"
                    opacity="0.6"
                  />
                  <line
                    x1="460"
                    y1="160"
                    x2="460"
                    y2="169"
                    stroke="#fef3c7"
                    strokeWidth="0.8"
                    opacity="0.5"
                  />
                  <line
                    x1="468"
                    y1="160"
                    x2="468"
                    y2="169"
                    stroke="#fef3c7"
                    strokeWidth="0.8"
                    opacity="0.5"
                  />
                  <line
                    x1="476"
                    y1="160"
                    x2="476"
                    y2="169"
                    stroke="#fef3c7"
                    strokeWidth="0.8"
                    opacity="0.5"
                  />

                  {/* ── REAR VIEW MIRROR (left) ── */}
                  <rect
                    x="0"
                    y="100"
                    width="8"
                    height="16"
                    rx="3"
                    fill="#9a3412"
                  />
                  <ellipse cx="5" cy="100" rx="6" ry="5" fill="#7f1d1d" />
                  {/* ── FRONT MIRROR (right) ── */}
                  <rect
                    x="490"
                    y="100"
                    width="8"
                    height="16"
                    rx="3"
                    fill="#9a3412"
                  />
                  <ellipse cx="493" cy="100" rx="6" ry="5" fill="#7f1d1d" />

                  {/* ── REAR WHEEL ── */}
                  <circle cx="98" cy="181" r="26" fill="#1c1917" />
                  <circle cx="98" cy="181" r="18" fill="#292524" />
                  <circle cx="98" cy="181" r="11" fill="#78716c" />
                  <line
                    x1="98"
                    y1="163"
                    x2="98"
                    y2="199"
                    stroke="#d6d3d1"
                    strokeWidth="2.5"
                  />
                  <line
                    x1="80"
                    y1="181"
                    x2="116"
                    y2="181"
                    stroke="#d6d3d1"
                    strokeWidth="2.5"
                  />
                  <line
                    x1="85"
                    y1="168"
                    x2="111"
                    y2="194"
                    stroke="#d6d3d1"
                    strokeWidth="2"
                  />
                  <line
                    x1="85"
                    y1="194"
                    x2="111"
                    y2="168"
                    stroke="#d6d3d1"
                    strokeWidth="2"
                  />
                  <circle cx="98" cy="181" r="5" fill="#e7e5e4" />
                  <circle cx="98" cy="181" r="2" fill="#9ca3af" />
                  {/* rear wheel arch */}
                  <path
                    d="M70 166 Q98 152 126 166"
                    stroke="#7f1d1d"
                    strokeWidth="5"
                    fill="none"
                    strokeLinecap="round"
                  />

                  {/* ── FRONT WHEEL ── */}
                  <circle cx="392" cy="181" r="26" fill="#1c1917" />
                  <circle cx="392" cy="181" r="18" fill="#292524" />
                  <circle cx="392" cy="181" r="11" fill="#78716c" />
                  <line
                    x1="392"
                    y1="163"
                    x2="392"
                    y2="199"
                    stroke="#d6d3d1"
                    strokeWidth="2.5"
                  />
                  <line
                    x1="374"
                    y1="181"
                    x2="410"
                    y2="181"
                    stroke="#d6d3d1"
                    strokeWidth="2.5"
                  />
                  <line
                    x1="379"
                    y1="168"
                    x2="405"
                    y2="194"
                    stroke="#d6d3d1"
                    strokeWidth="2"
                  />
                  <line
                    x1="379"
                    y1="194"
                    x2="405"
                    y2="168"
                    stroke="#d6d3d1"
                    strokeWidth="2"
                  />
                  <circle cx="392" cy="181" r="5" fill="#e7e5e4" />
                  <circle cx="392" cy="181" r="2" fill="#9ca3af" />
                  {/* front wheel arch */}
                  <path
                    d="M364 166 Q392 152 420 166"
                    stroke="#7f1d1d"
                    strokeWidth="5"
                    fill="none"
                    strokeLinecap="round"
                  />

                  {/* ── UNDERCARRIAGE ── */}
                  <rect
                    x="30"
                    y="172"
                    width="52"
                    height="9"
                    rx="3"
                    fill="#7f1d1d"
                    opacity="0.45"
                  />
                  <rect
                    x="140"
                    y="172"
                    width="202"
                    height="9"
                    rx="3"
                    fill="#7f1d1d"
                    opacity="0.45"
                  />
                  {/* exhaust */}
                  <rect
                    x="5"
                    y="164"
                    width="16"
                    height="6"
                    rx="3"
                    fill="#78716c"
                  />
                  <ellipse cx="5" cy="167" rx="3" ry="3" fill="#57534e" />
                </svg>
              </div>
            </div>
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
        </div>
        {/* end enquiry-fullbleed */}

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
