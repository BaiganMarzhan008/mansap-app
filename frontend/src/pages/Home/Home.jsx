import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section animate-fade-in">
        <div className="hero-content">
          <h1 className="hero-title">
            JobPortal.kz <span>туралы</span>
          </h1>
          <p className="hero-subtitle">
            Қазақстандағы ең жылдам дамып келе жатқан IT мамандар мен<br/>жұмыс берушілерді біріктіретін платформа.
          </p>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="People working in office" />
        </div>
      </section>

      <section className="features-section">
        <div className="features-grid">
          <div className="feature-card animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="feature-icon" style={{ fontSize: '2rem' }}>
              🚀
            </div>
            <h3>Біздің миссиямыз</h3>
          </div>
          
          <div className="feature-card animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="feature-icon" style={{ fontSize: '2rem' }}>
              💡
            </div>
            <h3>Біздің көзқарасымыз</h3>
          </div>
          
          <div className="feature-card animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="feature-icon" style={{ fontSize: '2rem' }}>
              🤝
            </div>
            <h3>Біздің құндылықтарымыз</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;