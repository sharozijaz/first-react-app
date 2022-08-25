import "./about.style.css";
import lofiImage from "./wallpaperflare.com_wallpaper.jpg";
const AboutPage = () => {
  return (
    <>
      <div className="about">
        <div className="about-text">
          <h1>About Lofi-College</h1>
          <p>
            Lofi-College is World Leading Lofi Music Studio, We Make Best lofi
            Music
          </p>
        </div>
        <div className="about-image">
          <img src={lofiImage} alt="Lofi" />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
