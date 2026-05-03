import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";

function Profile() {
  return (
    <section id="profile">
      <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
        My Profiles
      </h2>

      <div className="profiles-container">

        {/* LEFT */}
        <div className="left">
          <a href="https://leetcode.com/samruddhi_606" target="_blank" rel="noreferrer" className="profile-item">
            <SiLeetcode size={30} />
            <span>LeetCode</span>
          </a>

          <a href="https://www.codechef.com/users/samruddhi621" target="_blank" rel="noreferrer" className="profile-item">
            <SiCodechef size={30} />
            <span>CodeChef</span>
          </a>
        </div>

        {/* RIGHT */}
        <div className="right">
          <a href="https://github.com/samruddhi621" target="_blank" rel="noreferrer" className="profile-item">
            <FaGithub size={30} />
            <span>GitHub</span>
          </a>

          <a href="https://linkedin.com/in/your-username" target="_blank" rel="noreferrer" className="profile-item">
            <FaLinkedin size={30} color="#0077b5" />
            <span>LinkedIn</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default Profile;