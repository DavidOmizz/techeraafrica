import React from 'react'

function Contact() {
  return (
    <section className="mt-16 py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-center">Get in Touch</h2>

        <div className="mb-6 text-lg text-gray-700 text-center">
          <p>Contact us: <a href="mailto:contact@techeraafrica.com" className="text-blue-500 hover:underline">contact@techeraafrica.com</a> | <span className="font-semibold">Phone Number: </span> +234 809 440 2222</p>
          <p className="mt-2"><span className="font-semibold">Address: </span>Your Address Here</p>
        </div>

        <h3 className="text-2xl font-semibold mt-10 mb-4 text-center">Let's Shape the Future of Tech Together</h3>
      </div>
    </section>

  )
}

export default Contact