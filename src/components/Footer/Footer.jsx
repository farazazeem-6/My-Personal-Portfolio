import React from "react";
import styles from "../Footer/Footer.module.css";
import { useNavigate } from "react-router-dom";
import HeroImg from "../../../public/personal.jpeg";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Profile Section */}
        <div className={styles.profileSection}>
          <div className={styles.profileHeader}>
            <div className={styles.profileImage}>
              <img src={HeroImg} alt="" />
            </div>
            <div className={styles.profileInfo}>
              <h2 className={styles.profileName}>Muhammad Faraz</h2>
              <p className={styles.profileTitle}>Frontend Developer</p>
            </div>
          </div>
          <p className={styles.profileDescription}>
            Passionate about creating innovative digital solutions and bringing
            ideas to life through code. Let's build something amazing together.
          </p>
          <div className={styles.socialIcons}>
            <a
              target="_blank"
              href="https://github.com/farazazeem-6"
              className={`${styles.socialIcon} ${styles.githubIcon}`}
            >
              <i className="ri-github-line"></i>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/faraz-azeem-45207727b/"
              className={`${styles.socialIcon} ${styles.linkedinIcon}`}
            >
              <i className="ri-linkedin-line"></i>
            </a>
            <a
              target="_blank"
              href="https://www.tiktok.com/@farazdhillon06"
              className={`${styles.socialIcon} ${styles.tiktokIcon}`}
            >
              <i className="ri-tiktok-line"></i>
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100059462846704"
              className={`${styles.socialIcon} ${styles.facebookIcon}`}
            >
              <i className="ri-facebook-fill"></i>
            </a>
            <a
              target="_blank"
              href="https://wa.me/923098495478"
              className={`${styles.socialIcon} ${styles.whatsappIcon}`}
            >
              <i className="ri-whatsapp-line"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.linksSection}>
          <h3 className={styles.sectionTitle}>Quick Links</h3>
          <ul className={styles.linksList}>
            <li onClick={() => navigate("/")} className={styles.link}>
              Home
            </li>
            <li onClick={() => navigate("/skills")} className={styles.link}>
              Skills
            </li>
            <li onClick={() => navigate("/projects")} className={styles.link}>
              Projects
            </li>
            <li
              onClick={() => navigate("/testimonials")}
              className={styles.link}
            >
              Testimonials
            </li>
            <li onClick={() => navigate("/contact")} className={styles.link}>
              Contact
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className={styles.contactSection}>
          <h3 className={styles.sectionTitle}>Contact Info</h3>
          <div className={styles.contactList}>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <i className="ri-mail-line"></i>
              </div>
              <div className={styles.contactDetails}>
                <p className={styles.contactLabel}>Email</p>
                <p className={styles.contactValue}>farazazeem66@gmail.com</p>
              </div>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <i className="ri-phone-line"></i>
              </div>
              <div className={styles.contactDetails}>
                <p className={styles.contactLabel}>Phone</p>
                <p className={styles.contactValue}>+92 309 84 954 78</p>
              </div>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <i className="ri-map-pin-line"></i>
              </div>
              <div className={styles.contactDetails}>
                <p className={styles.contactLabel}>Location</p>
                <p className={styles.contactValue}>Lahore, Punjab Pakistan</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div id="contact-cta" className={styles.ctaSection}>
          <h3 className={styles.sectionTitle}>Let's Work Together</h3>
          <p className={styles.ctaDescription}>
            Ready to bring your ideas to life? Let's discuss your next project
            and create something extraordinary.
          </p>
          <button className={styles.ctaButton}>Start a Project</button>
          <button onClick={scrollToTop} className={styles.backToTop}>
            <span className={styles.backToTopIcon}>↑</span>
            Back to Top
          </button>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.right}>
          <p>© 2025 Muhammad Faraz</p>{" "}
          <p className={styles.hide}>• All Rights Reserved</p>
          <p>
            • Made with
            <i style={{ marginLeft: "5px" }} className="ri-heart-2-line"></i> in
            Pakistan.
          </p>
        </div>
        <div className={styles.left}>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
