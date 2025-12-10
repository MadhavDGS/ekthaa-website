import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const features = [
    {
      icon: Zap,
      title: 'Fast & Reliable',
      description: 'Lightning-fast performance with 99.9% uptime guarantee'
    },
    {
      icon: Shield,
      title: 'Secure',
      description: 'Enterprise-grade security to protect your data'
    },
    {
      icon: Users,
      title: 'User-Friendly',
      description: 'Intuitive interface designed for everyone'
    }
  ];

  return (
    <main className="home">
      <section className="hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">
            Welcome to <span className="gradient-text">Ekthaa</span>
          </h1>
          <p className="hero-subtitle">
            Building innovative digital solutions that empower businesses and individuals
          </p>
          <div className="hero-buttons">
            <Link to="/products" className="btn btn-primary">
              Explore Products
              <ArrowRight size={20} />
            </Link>
            <Link to="/careers" className="btn btn-secondary">
              Join Our Team
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="features">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Why Choose Us
          </motion.h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="feature-icon">
                  <feature.icon size={32} />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="cta-title">Ready to get started?</h2>
            <p className="cta-description">
              Join thousands of users who trust our platform
            </p>
            <Link to="/products" className="btn btn-primary btn-large">
              View Our Products
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default Home;
