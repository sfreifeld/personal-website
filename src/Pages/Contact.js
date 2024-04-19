import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/animation2.json'; // Ensure this is the correct path to your Lottie file
import ContactForm from '../Components/ContactForm';


function Contact() {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice' // Adjust as needed
    }
  };

  return (
    <div className="relative isolate bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100  ring-gray-900/10 lg:w-1/2">
            <div id="video-background" className="absolute top-0 left-0 w-full h-full z-[-1]">
                {/* Lottie animation as background */}
                <Lottie options={defaultOptions} height="100%" width="100%" />
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-800  font-heading">Get in touch!</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 font-paragraph">
             I'm always excited to connect with like-minded individuals and explore new opportunities. Feel free to drop me a message — I'd love to hear from you!
            </p>
          </div>
        </div>
        {/* ContactForm wrapper */}
        <div className="relative">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
export default Contact
