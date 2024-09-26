import React from 'react'

function About() {
  return (
    <section className="mt-16 py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-center">About Us</h2>
        <p className="text-lg mb-6 text-gray-700">
          At Techera, we're passionate about bridging the tech skills gap and fostering a community of innovators. Our mission is to provide accessible, high-quality tech education, empowering individuals and organizations to thrive in the digital age.
        </p>

        <h3 className="text-2xl font-semibold mt-10 mb-4">Our Story</h3>
        <p className="text-lg mb-6 text-gray-700">
          Founded in 2023 by Folu Sogbesan and Fola Oladipupo, Techera Digital Hub under the trade name Techera Africa was born out of a shared vision to make tech education inclusive, engaging, and effective. Our team of experienced educators, industry experts, and tech enthusiasts is dedicated to helping learners acquire in-demand skills and stay ahead of the curve.
        </p>

        <h3 className="text-2xl font-semibold mt-10 mb-4">Our Values</h3>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li>Accessibility: Tech education for all, regardless of background or location.</li>
          <li>Innovation: Staying cutting-edge to ensure our learners receive the latest industry insights.</li>
          <li>Community: Fostering collaboration, support, and networking opportunities.</li>
          <li>Quality: Delivering engaging, interactive, and informative learning experiences.</li>
          <li>Impact: Measuring success by the careers we transform and the innovation we inspire.</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-10 mb-4">Our Offerings</h3>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li>Online courses and certifications in DevOps, Cloud Computing, Cybersecurity, Virtual Reality Development, and Fullstack.</li>
          <li>Workshops, boot camps, and hackathons.</li>
          <li>Customized corporate training solutions.</li>
          <li>Mentorship programs and career guidance.</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-10 mb-4">Meet Our Team</h3>
        {/* You can add team members' information here */}
        <p className="text-lg text-gray-700">More details about our team will be available soon!</p>

        <h3>Join Our Community</h3>
        <p>Stay updated on industry trends, new courses, and exclusive promotions. Follow us on [social media platforms].</p>

        
      </div>
    </section>

  )
}

export default About