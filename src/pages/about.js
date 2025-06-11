import React from "react";
import "../styles/About.css"; // Import the CSS file

const teamMembers = [
  {
    name: "Anshuman Pandey",
    image: "./image/team/p3.jpg",
    description: "I am a student of TIT MAIN. Currently pursuing B.Tech from CSE-DS.",
  },
  {
    name: "Ajita Bajpai",
    image: "./image/team/p4.jpg",
    description: "I am a student of TIT MAIN. Currently pursuing B.Tech from CSE-DS.",
  },
  {
    name: "Dimpi Malghati",
    image: "./image/team/p2.jpg",
    description: "I am a student of TIT MAIN. Currently pursuing B.Tech from CSE-DS.",
  },
  {
    name: "Arpita Sthapak",
    image: "./image/team/p1.jpg",
    description: "I am a student of TIT MAIN. Currently pursuing B.Tech from CSE-DS.",
  }
  
];

const About = () => {
  return (
    <div className="about">
    <div><h2 className="team-title">About Us</h2>
    <p className="about-content">
Welcome to Travelo, your reliable partner in bus travel reservations!

At Travelo, we are passionate about making your journey seamless, comfortable, and stress-free. Whether you’re planning a weekend getaway, a business trip, or a family vacation, we provide an easy-to-use platform that allows you to book bus tickets with just a few clicks.

Our mission is simple: to connect passengers with trusted bus operators, offering a convenient, safe, and affordable travel experience. With a user-friendly interface, you can easily search for buses, compare schedules, and secure your seat in minutes. We strive to provide comprehensive travel options, making sure you get the best routes, timings, and prices for your trip.

Why Choose Us?
Convenience: Book tickets on-the-go with our easy-to-use web app.
Variety: Choose from a wide range of bus operators and routes.
Affordable: Competitive prices with no hidden fees.
Customer Support: Our dedicated team is available to assist you at every step of the way.
Security: Enjoy secure and safe transactions for a worry-free booking process.
We are committed to improving your travel experience by continually enhancing our platform and expanding our services. Thank you for choosing Travelo, where your journey begins with us!
</p>
</div>
      <div className="team-section">
        <h2 className="team-title">Our Team</h2>
        <div className="team-members">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member-card">
              <div className="team-member-content">
                <img
                  className="team-member-image"
                  src={member.image}
                  alt={member.name}
                />
                <h3 className="team-member-name">{member.name}</h3>
                <p className="team-member-description">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
