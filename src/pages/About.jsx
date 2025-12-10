import { motion } from 'framer-motion';
import { Target, Eye, Award, TrendingUp } from 'lucide-react';
import './About.css';

function About() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'Digitize every neighborhood business in India, making credit management transparent and helping local shops compete with modern retail.'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'Build the largest network of digitally-enabled local businesses, creating a trusted ecosystem where shops and customers transact seamlessly.'
    },
    {
      icon: Award,
      title: 'Our Approach',
      description: 'Simple, mobile-first solutions that work for small shop owners with minimal technical knowledge, while delivering enterprise-grade reliability.'
    },
    {
      icon: TrendingUp,
      title: 'Our Impact',
      description: 'Reducing disputes, improving cash flow, increasing customer loyalty, and helping neighborhood businesses discover and retain more customers.'
    }
  ];

  return (
    <main className="about">
      <section className="about-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="page-title">About Ekthaa</h1>
            <p className="page-subtitle">
              Transforming India's neighborhood economy through digital innovation
            </p>
          </motion.div>
        </div>
      </section>

      <section className="about-story">
        <div className="container">
          <motion.div
            className="story-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Our Story</h2>
            <div className="story-text">
              <p>
                Ekthaa was born from a simple observation: millions of small businesses across India still rely on paper notebooks to track credit. This creates disputes, cash flow problems, and lost business opportunities.
              </p>
              <p>
                We built Ekthaa to solve this fundamental challenge. Our platform combines the familiarity of the traditional "khata" with the power of digital technology—making it easy for shop owners to manage credit, inventory, and customer relationships while giving customers transparency and convenience.
              </p>
              <p>
                Today, Ekthaa is more than just a digital ledger. We're building a comprehensive ecosystem that includes inventory management, business discovery, product catalogues, and AI-powered insights—all designed specifically for India's neighborhood economy.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <h2 className="section-title">What Drives Us</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="value-icon">
                  <value.icon size={28} />
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-platform">
        <div className="container">
          <motion.div
            className="platform-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">The Ekthaa Platform</h2>
            <div className="platform-description">
              <p>
                <strong>KathaPe</strong> is our flagship product suite, offering separate apps for business owners and customers:
              </p>
              <ul className="platform-list">
                <li>
                  <strong>KathaPe Business:</strong> Digital credit ledger, inventory management, product catalogue, QR-based transactions, receivables tracking, and business analytics.
                </li>
                <li>
                  <strong>KathaPe Customer:</strong> Credit history tracking, QR payment system, local shop discovery, product browsing, and exclusive discounts.
                </li>
              </ul>
              <p>
                Our platform creates a transparent, trusted connection between shops and customers—eliminating disputes, improving cash flow, and building long-term loyalty.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="about-future">
        <div className="container">
          <motion.div
            className="future-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">The Road Ahead</h2>
            <div className="future-text">
              <p>
                We're building AI-powered features to help businesses optimize inventory, predict demand, and create targeted promotions. Our vision includes becoming the operating system for India's neighborhood economy—connecting shops, suppliers, and customers in a seamless digital ecosystem.
              </p>
              <p>
                From kiranas to salons, medical stores to hardware shops—every local business deserves tools that help them compete and grow. That's what we're building at Ekthaa.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default About;
