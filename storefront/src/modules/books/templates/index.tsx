<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Books for Sale</title>
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="styles.css" />
  {/* Favicon */}
  <link rel="icon" href="/images/logo.png" type="image/x-icon" />
  {/* Alternative format for PNG */}
  <link rel="icon" href="/images/logo.png" type="image/png" />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        body {\n            margin: 0;\n            background-color: #f5f5f5;\n            color: #333;\n        }\n\n        header {\n            background-color: #007acc;\n            color: #fff;\n            padding-bottom: 28px;\n            padding-top: 14px;\n            text-align: center;\n        }\n\n        header h1 {\n            margin: 0;\n            font-size: 2rem;\n        }\n\n        .container {\n            max-width: 1200px;\n            margin: 20px auto;\n            padding: 0 15px;\n        }\n\n        .highlighted-book {\n            display: grid;\n            grid-template-columns: 1fr 2fr;\n            background: #fff;\n            border-radius: 10px;\n            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n            overflow: hidden;\n            margin-bottom: 20px;\n            gap: 15px;\n        }\n\n        .highlighted-book img {\n            width: 100%;\n            height: auto;\n            object-fit: cover;\n        }\n\n        .highlighted-content {\n            padding: 20px;\n            text-align: left;\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n        }\n\n        .highlighted-content h2 {\n            font-size: 1.75rem;\n            margin: 0 0 10px;\n            color: #333;\n        }\n\n        .highlighted-content p {\n            font-size: 1rem;\n            color: #777;\n            margin: 5px 0;\n        }\n\n        .highlighted-price {\n            font-size: 1.5rem;\n            font-weight: 700;\n            color: #1e88e5;\n            margin: 10px 0;\n        }\n\n        .highlighted-button {\n            display: inline-block;\n            background: #1e88e5;\n            color: #fff;\n            text-align: center;\n            text-decoration: none;\n            padding: 12px 25px;\n            border-radius: 5px;\n            font-size: 1rem;\n            transition: background 0.3s ease;\n        }\n\n        .highlighted-button:hover {\n            background: #1565c0;\n        }\n\n        .book-grid {\n            display: grid;\n            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n            gap: 20px;\n        }\n\n        .book-card {\n            background: #fff;\n            border-radius: 10px;\n            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n            overflow: hidden;\n            transition: transform 0.3s ease, box-shadow 0.3s ease;\n        }\n\n        .book-card:hover {\n            transform: translateY(-5px);\n            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);\n        }\n\n        .book-card img {\n            width: 100%;\n            height: auto;\n        }\n\n        .book-content {\n            padding: 15px;\n        }\n\n        .book-title {\n            font-size: 1.25rem;\n            font-weight: 500;\n            margin: 0 0 10px;\n            color: #333;\n        }\n\n        .book-author {\n            font-size: 1rem;\n            color: #777;\n            margin-bottom: 10px;\n        }\n\n        .book-price {\n            font-size: 1.25rem;\n            font-weight: 700;\n            color: #1e88e5;\n            margin-bottom: 15px;\n        }\n\n        .buy-button {\n            display: inline-block;\n            background: #1e88e5;\n            color: #fff;\n            text-align: center;\n            text-decoration: none;\n            padding: 10px 20px;\n            border-radius: 5px;\n            font-size: 1rem;\n            transition: background 0.3s ease;\n        }\n\n        .buy-button:hover {\n            background: #1565c0;\n        }\n\n        footer {\n            text-align: center;\n            padding: 20px;\n\n            color: #fff;\n            margin-top: 20px;\n        }\n\n        @media (max-width: 768px) {\n            .highlighted-book {\n                grid-template-columns: 1fr;\n                text-align: center;\n            }\n\n            .highlighted-content {\n                padding: 15px;\n            }\n        }\n    "
    }}
  />
  <div className="logo-section">
    <div className="logo-container">
      <img src="images/logo.png" alt="Siol Alpin Logo" className="logo-img" />{" "}
      {/* PNG logo */}
      <h1>Sìol Alpìn</h1>
      <p>The Royal Descendants of Judah</p>
    </div>
  </div>
  <header>
    <h1>Books for Sale</h1>
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li className="separator" />
        <li>
          <a href="/store">Shop</a>
        </li>{" "}
        {/* Only Shop Link */}
        <li className="separator" />
        <li>
          <a href="/books">Books</a>
        </li>{" "}
        {/* Only Shop Link */}
      </ul>
    </nav>
  </header>
  <main className="container">
    {/* Highlighted Latest Release */}
    <section className="highlighted-book">
      <img
        src="images/Screenshot 2024-12-20 at 12.42.00 PM.png"
        alt="Latest Book"
      />
      <div className="highlighted-content">
        <h2>
          Latest Release: Nineveh in Nova Scotia &amp; Nimrod in North Holland
        </h2>
        <p>by Brandon Vanderheide</p>
        <p>
          A Prophetic look into the April 8, 2024 Total Solar Eclipse that I
          personally witnessed in Nova Scotia.
        </p>
        <p className="highlighted-price">$34.99</p>
        <a href="#" className="highlighted-button">
          Buy Now
        </a>
      </div>
    </section>
    {/* Rest of the Books */}
    <section className="book-grid">
      {/* Book 1 */}
      <div className="book-card">
        <img
          src="images/Screenshot 2024-12-20 at 12.44.41 PM.png"
          alt="Book 1"
        />
        <div className="book-content">
          <h2 className="book-title">The Holy Hebrides</h2>
          <p className="book-author">by Brandon Vanderheide</p>
          <p className="book-price">$19.99</p>
          <a href="#" className="buy-button">
            Buy Now
          </a>
        </div>
      </div>
      {/* Book 2 */}
      <div className="book-card">
        <img
          src="images/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.webp"
          alt="Book 2"
        />
        <div className="book-content">
          <h2 className="book-title">Book of Kells Decoded</h2>
          <p className="book-author">by Brandon Vanderheide</p>
          <p className="book-price">$24.99</p>
          <a href="#" className="buy-button">
            Buy Now
          </a>
        </div>
      </div>
      {/* Book 3 */}
      <div className="book-card">
        <img
          src="images/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.webp"
          alt="Book 3"
        />
        <div className="book-content">
          <h2 className="book-title">Scythians the Sethians</h2>
          <p className="book-author">by Brandon Vanderheide</p>
          <p className="book-price">$29.99</p>
          <a href="#" className="buy-button">
            Buy Now
          </a>
        </div>
      </div>
      {/* Add more books here */}
    </section>
  </main>
  <footer>
    <p>© 2024 Your Bookstore. All rights reserved.</p>
  </footer>
</>
