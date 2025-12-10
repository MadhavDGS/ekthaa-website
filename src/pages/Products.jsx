import { motion } from 'framer-motion';
import { ExternalLink, Store, Users } from 'lucide-react';
import './Products.css';

function Products() {
  const products = [
    {
      name: 'KathaPe Customer',
      description: 'Seamlessly manage credit, discover local shops, and earn rewards. Scan QR codes to take credit or pay back instantly, with full transaction transparency and digital receipts.',
      url: 'https://khatape.tech',
      icon: Users,
      features: [
        'Take credit & pay back via QR scan',
        'Complete credit history tracking',
        'Discover nearby shops & products',
        'Exclusive discounts & cashback offers'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'KathaPe Business',
      description: 'Complete business management platform for local shops. Digital credit ledger, inventory control, product catalogue, and customer analytics — all in one place with cloud sync.',
      url: 'https://business.khatape.tech',
      icon: Store,
      features: [
        'Digital credit ledger with QR transactions',
        'Real-time inventory & stock alerts',
        'Product catalogue for customer discovery',
        'Receivables tracking & business insights'
      ],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <main className="products">
      <section className="products-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="page-title">KathaPe Platform</h1>
            <p className="page-subtitle">
              Powerful tools for local businesses and customers to transact, discover, and grow together
            </p>
          </motion.div>
        </div>
      </section>

      <section className="products-grid-section">
        <div className="container">
          <div className="products-grid">
            {products.map((product, index) => (
              <motion.div
                key={index}
                className="product-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className={`product-header bg-gradient-to-br ${product.color}`}>
                  <div className="product-icon">
                    <product.icon size={40} />
                  </div>
                </div>

                <div className="product-content">
                  <h2 className="product-name">{product.name}</h2>
                  <p className="product-description">{product.description}</p>

                  <div className="product-features">
                    <h3 className="features-title">Key Features</h3>
                    <ul className="features-list">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="feature-item">
                          <span className="feature-bullet"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="product-link"
                  >
                    Visit Website
                    <ExternalLink size={18} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Products;
