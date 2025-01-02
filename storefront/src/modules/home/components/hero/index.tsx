import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import Head from 'next/head';

export default function HomePage() {
  return (
    <div>
      {/* Link the CSS file */}
      <Head>
        <link rel="stylesheet" href="/styles.css" />
      </Head>

      <h1>Welcome to My Store!</h1>
      <p>This is the homepage of my Medusa Next.js site.</p>
    </div>
  );
}
import Script from 'next/script';

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to My Store!</h1>
      <p>This is the homepage of my Medusa Next.js site.</p>

      {/* Include the JS file */}
      <Script src="/script.js" strategy="afterInteractive" />
    </div>
  );
}

const Hero = () => {
  return (
 <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Siol Alpin - All Info &amp; Shop</title>
 
  


  {/* Favicon */}
  <link rel="icon" href="images/logo.png" type="image/x-icon" />
  {/* Alternative format for PNG */}
  <link rel="icon" href="images/logo.png" type="image/png" />
  {/* Logo Section */}
  <div className="logo-section">
    <div className="logo-container">
      <img src="images/logo.png" alt="Siol Alpin Logo" className="logo-img" />{" "}
      {/* PNG logo */}
      <h1>Sìol Alpìn</h1>
      <p>The Royal Descendants of Judah</p>
    </div>
  </div>
  {/* Main Navigation Bar */}
  <header>
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <a href="index.html">Home</a>
        </li>
        <li className="separator" />
        <li>
          <a href="shop.html">Shop</a>
        </li>{" "}
        {/* Only Shop Link */}
        <li className="separator" />
        <li>
          <a href="books.html">Books</a>
        </li>{" "}
        {/* Only Shop Link */}
      </ul>
    </nav>
  </header>
  {/* Sub Navigation Bar (For Page Sections) */}
  <nav className="sub-navbar">
    <ul className="sub-nav-links">
      <li>
        <a href="#history">About Us</a>
      </li>
      <li>
        <a href="#history">History</a>
      </li>
      <li>
        <a href="#myths">Myths</a>
      </li>
      <li>
        <a href="#stone">The Stone</a>
      </li>
      <li>
        <a href="#connections">Connections</a>
      </li>
    </ul>
  </nav>
  {/* Main Content */}
  <main>
    <section id="history" className="info-section">
      <div className="info-image">
        <img src="/images/KellsFol032vChristEnthroned.jpg" alt="About Us" />
      </div>
      <div className="info-content">
        <h2>About Our Mission</h2>
        <p>
          {" "}
          Thank you for exploring our collection. At <strong>
            SIOL ALPÌN
          </strong>{" "}
          we are dedicated to honoring Scotland's rich heritage while supporting
          its local communities. As a descendant of Alpin through my Mothers
          clan Mackinnon, I am personally invested in spreading this wonderful
          truth. Every product is crafted by skilled Scottish artisans, ensuring
          that 100% of our goods are made by local companies. We believe in the
          importance of giving back, promoting the recognition of Scotland's
          legacy, and empowering those who shape its future. Our mission goes
          beyond craftsmanship; it is rooted in faith and history. as a Hebraic
          Christian brand, we share the belief that many Scots are the
          descendants of Judah. With a specific focus on the 7 Royal clans who
          descend from King Alpin. This connection, though often forgotten, is
          central to our identity. We believe that, as prophecy foretells, we
          will soon remember our roots and unite with our brothers and the
          remaining tribes at the return of the Messiah. Each piece we create is
          made with the finest materials and designed for lasting quality. When
          you support our brand, you are not only investing in exceptional
          craftsmanship, but you also help strengthen local communities and
          revive a spiritual and historical truth that unites us all. Thank you
          for being part of this journey, where together we honor our past,
          celebrate our heritage, and embrace the future with faith and unity.
        </p>
      </div>
      <div className="decorative-circle decorative-circle-1" />
      <div className="decorative-circle decorative-circle-2" />
    </section>
    <main>
      <section className="scroll-section">
        <img src="/images/Ftree.jpg" alt="Medieval History" />
        <div className="content">
          <h2>About Alpín</h2>
          <p>
            <strong>Álpin mac Eochaid </strong>, a renowned king of the Scots in
            the 8th century, stands as the forebear of Siol Alpin, which is
            Gaelic for "Seed of Alpin", the noble lineage from which 7 clans
            like MacGregor, MacKinnon, and MacQuarrie directly descend. All 7
            clans have Slogans Referencing Royalty from Alpin, Mackinnons being
            "Cuimhnich bàs Alpein" Which is Gaelic for "Remember the death of
            Alpin". 7 is also of major importance in the Torah, and Jewish
            numerology known as gematria. one meaning is the symbolism of
            observing the Sabbath, as God created the earth in 6 days and rested
            on the 7th. This line, central to Scotland's royal heritage,
            established its enduring legacy through Álpin's son, Kenneth
            MacAlpin, the first King of a united Scotland. Álpin’s lineage is
            also directly tied to the tribe of Judah, the Royal tribe who
            handles ruling and kingship, whose descendants journeyed through
            Europe and settled among the Celtic peoples. This connection affirms
            Scotland’s ancient heritage as a divinely chosen nation, carrying
            forward the legacy of Judah's kingship into the Scottish royal
            bloodline.
          </p>
          <div className="references">
            <h3>References:</h3>
            <ul>
              <li>Jones, R. (2021). *Empires of the Ancient World.*</li>
              <li>Brown, T. (2019). *The Rise and Fall of Empires.*</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="scroll-section">
        <img src="/images/logo (8).png" alt="Medieval History" />
        <div className="content">
          <h2>Modern Descendants of Alpín</h2>
          <p>
            Álpin mac Eochaid’s lineage lives on through his modern descendants,
            many of whom continue to exhibit the resilience, leadership, and
            charisma attributed to their royal ancestry. Figures like Conor
            McGregor, the world-renowned mixed martial artist. And King Charles
            III, who has reached the pinnacle of global royalty, embody the
            fierce spirit of their forebear. Descended from the ancient Siol
            Alpin, McGregor, and King Charles lineage ties them to the same
            noble bloodline that produced Kenneth MacAlpin, the unifier of
            Scotland. This royal heritage, marked by courage and ambition, has
            undoubtedly influenced the drive and determination seen in modern
            descendants. Through Álpin's legacy, they have inherited a sense of
            greatness, enabling them to reach extraordinary heights in their
            respective fields while continuing to carry forward the indomitable
            spirit of their ancestral lineage.
          </p>
          <div className="references">
            <h3>References:</h3>
            <ul>
              <li>Wilson, P. (2020). *The Renaissance Era.*</li>
              <li>Clark, M. (2018). *Art and Science in the Renaissance.*</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="scroll-section">
        <img
          src="/images/1200px-Declaration_of_arbroath.jpg"
          alt="The Renaissance"
        />
        <div className="content">
          <h2>Decleration Of Arbroath</h2>
          <p>
            The **Declaration of Arbroath** of 1320 affirms that the Scots are
            descendants of the ancient Israelites, a fact deeply rooted in
            Scottish history and royal tradition. The document, which asserts
            Scotland’s independence and divine right to rule, explicitly draws
            on biblical language and imagery, linking the Scottish people to the
            lost tribes of Israel. It highlights the covenantal relationship
            between the Scots and God, paralleling the ancient Israelites'
            unique status as God's chosen people. This connection is further
            underscored by the royal lineage, which traces its ancestry back to
            **Kenneth MacAlpin** and, through him, to the Israelites. The Scots’
            preservation of their independence and their kings' divinely
            sanctioned rule is seen as a direct continuation of Israel’s
            historical mission. The **Declaration of Arbroath** not only
            confirms Scotland’s rightful place as a sovereign nation but also
            solidifies the Scots' identity as the true inheritors of Israel’s
            legacy, carrying forward the spirit and purpose of the biblical
            Israelites.
          </p>
          <div className="references">
            <h3>References:</h3>
            <ul>
              <li>Wilson, P. (2020). *The Renaissance Era.*</li>
              <li>Clark, M. (2018). *Art and Science in the Renaissance.*</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="scroll-section">
        <img src="/images/logo (9).png" alt="The Renaissance" />
        <div className="content">
          <h2>Fergus Mor</h2>
          <p>
            Alpins Son, Kenneth, claim descent from Fergus Mor, the first king
            of the Dalriada Scots, is credited with bringing the Stone of
            Destiny (Also known as Jacobs Pillar Stone) from Ireland, to
            Scotland, marking a pivotal moment in the transfer of Israel's
            sacred legacy to the Scottish people. This stone, Originally brought
            from the land of Israel to Ireland by Prophet Jeremiah, is a symbol
            of divine kingship in Israel, was carried by Fergus as a physical
            token of the Scots' rightful heritage as descendants of the lost
            tribes of Israel. After its arrival in Ireland, the stone was used
            in the coronation of Irish kings, further linking them to the divine
            covenant of the Israelites. It was later transported to Scotland,
            where it became central to the coronation of Scottish monarchs,
            cementing the belief that the Scots, through their royal line, are
            the true heirs to Israel’s sacred promises. This can be clearly seen
            on each clans crest which bolster the rampart lion, the symbol of
            Judah, aswell as many other Heralidc symbolisms. The journey of the
            Stone of Scone is a testament to the enduring connection between the
            Scottish people and the ancient Israelites, confirming the Scots as
            the rightful inheritors of Israel's royal and divine legacy.
          </p>
          <div className="references">
            <h3>References:</h3>
            <ul>
              <li>Wilson, P. (2020). *The Renaissance Era.*</li>
              <li>Clark, M. (2018). *Art and Science in the Renaissance.*</li>
            </ul>
          </div>
        </div>
      </section>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n                    body {\n                        font-family: Arial, sans-serif;\n                        margin: 0;\n                        padding: 0;\n                        background-color: #f9f9f9;\n                        color: #333;\n                    }\n            \n                    .info-links-section {\n                        padding: 40px 20px;\n                        background-color: #ffffff;\n                        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n                        max-width: 800px;\n                        margin: 40px auto;\n                        border-radius: 8px;\n                        text-align: center;\n                    }\n            \n                    .info-links-section h2 {\n                        font-size: 2rem;\n                        margin-bottom: 20px;\n                        color: #007acc;\n                    }\n            \n                    .info-links {\n                        list-style: none;\n                        padding: 0;\n                        margin: 0;\n                    }\n            \n                    .info-links li {\n                        margin: 15px 0;\n                    }\n            \n                    .info-links a {\n                        text-decoration: none;\n                        color: #007acc;\n                        font-size: 1.2rem;\n                        transition: color 0.3s ease;\n                    }\n            \n                    .info-links a:hover {\n                        color: #005f99;\n                    }\n                "
        }}
      />
      <section className="info-links-section">
        <h2>Explore My Other Websites</h2>
        <ul className="info-links">
          <li>
            <a href="https://example1.com" target="_blank">
              About Clan Mackinnon
            </a>
          </li>
          <li>
            <a href="https://example2.com" target="_blank">
              Zebulon in Netherlands
            </a>
          </li>
          <li>
            <a href="https://example3.com" target="_blank">
              My Web Building Services
            </a>
          </li>
          <li>
            <a href="https://Vanderheidephotography.ca" target="_blank">
              My Photography Services
            </a>
          </li>
        </ul>
      </section>
    </main>
    <footer>
      <footer
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
          background: "#f9f9f9",
          borderTop: "1px solid #e0e0e0",
          fontFamily: "Arial, sans-serif",
          color: "#333"
        }}
      >
        <p style={{ margin: 0, fontSize: 18, color: "#007bff" }}>
          <strong>Contact Me At:</strong>
          <a
            href="mailto:info@SiolAlpin.ca"
            style={{ color: "#007bff", textDecoration: "none" }}
          >
            Info@SiolAlpin.ca
          </a>
        </p>
        <p style={{ marginTop: 10, fontSize: 14, color: "#666" }}>
          © 2024 SIOL ALPIN. All Rights Reserved
        </p>
      </footer>
    </footer>
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n        /* General Reset */\n        * {\n            margin: 0;\n            padding: 0;\n            box-sizing: border-box;\n        }\n\n        body {\n            font-family: 'Arial', sans-serif;\n            background: #f5f5f5;\n            color: #333;\n            line-height: 1.6;\n        }\n\n        .info-section {\n            display: flex;\n            align-items: center;\n            gap: 2rem;\n            padding: 2rem;\n            max-width: 1200px;\n            margin: 2rem auto;\n            background: white;\n            border-radius: 12px;\n            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n            overflow: hidden;\n            transition: transform 0.3s ease, box-shadow 0.3s ease;\n        }\n\n        .info-section:hover {\n            transform: translateY(-5px);\n            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);\n        }\n\n        .info-image {\n            flex: 1;\n            max-width: 50%;\n            position: relative;\n        }\n\n        .info-image img {\n            width: 100%;\n            height: auto;\n            border-radius: 12px;\n            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n            transition: transform 0.3s ease;\n        }\n\n        .info-image img:hover {\n            transform: scale(1.05);\n        }\n\n        .info-content {\n            flex: 2;\n            padding: 1rem;\n        }\n\n        .info-content h2 {\n            font-size: 2rem;\n            color: #0078d7;\n            margin-bottom: 1rem;\n        }\n\n        .info-content p {\n            margin-bottom: 1rem;\n            text-align: justify;\n        }\n\n        .info-content a {\n            display: inline-block;\n            margin-top: 1rem;\n            padding: 0.8rem 1.5rem;\n            background: #0078d7;\n            color: white;\n            text-decoration: none;\n            border-radius: 8px;\n            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n            transition: background 0.3s ease, transform 0.3s ease;\n        }\n\n        .info-content a:hover {\n            background: #0056a6;\n            transform: translateY(-2px);\n        }\n\n        /* Decorative Circle */\n        .decorative-circle {\n            position: absolute;\n            width: 200px;\n            height: 200px;\n            background: radial-gradient(circle, #0078d7, transparent);\n            border-radius: 50%;\n            z-index: -1;\n        }\n\n        .decorative-circle-1 {\n            top: -50px;\n            left: -50px;\n        }\n\n\n\n\n        @media (max-width: 768px) {\n            .info-section {\n                flex-direction: column;\n                padding: 1rem;\n            }\n\n            .info-image {\n                max-width: 100%;\n            }\n\n            .info-content h2 {\n                font-size: 1.8rem;\n            }\n\n            .info-content p {\n                font-size: 0.9rem;\n            }\n        }\n    "
      }}
    />
  </main>
</>

  )
}

export default Hero
