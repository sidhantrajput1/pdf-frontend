function About() {
    return (
      <div className="max-w-screen-lg mx-auto my-28 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row gap-8">
          {/* About Image */}
          <div className="w-full sm:w-2/4">
            <img
              src="https://www.galgotiasuniversity.edu.in/public/uploads/media/zjTjUueRtOcA36ovbqFxiPai9ETVmkIjkBbzP9UM.jpg"
              alt="About Elite Coding"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
  
          {/* About Text */}
          <div className="flex flex-col gap-6 w-full sm:w-2/4">
            <h3 className="font-bold text-sky-700 text-3xl font-serif">
              About Elite Coding Test
            </h3>
            <p className="font-light pr-0 sm:pr-10">
              The Elite Coding Test is an initiative to challenge students and
              professionals alike with real-world coding problems that push their
              limits. Our mission is to foster innovation, sharpen problem-solving
              skills, and bring out the best in coding enthusiasts.
            </p>
            <p className="font-light pr-0 sm:pr-10">
              Whether you are a beginner or a seasoned coder, this platform offers
              opportunities to grow and showcase your skills. Join us and take the
              first step towards becoming an elite coder.
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600">
              Learn More
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default About;
  