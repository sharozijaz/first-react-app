import "./home.style.css";
import heroImage from "./f9zmgpgzlmi71.jpg";
const HomePage = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-text">
          <h1>Welcome to Lofi-College</h1>
          <p>
            Lofi-College is World Leading Lofi Music Studio, We Make Best lofi
            Music
          </p>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Lofi" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
