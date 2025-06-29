function About() {
  return (
    <section className="bg-gray-950 py-16" id="about">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        {/* Left Side - Image */}
        <div className=" md:w-1/3  rounded-lg  ">
          <img
            src="/hero.jpg"
            alt="Abdullah"
            className="w-72 h-72 rounded-lg object-cover shadow-lg trans"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4 text-gray-300">
            Get to Know Me
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Hello! I’m Md Abdullah, a junior frontend web developer who prefers
            to let my work speak louder than words. Since 2023, I’ve been on an
            exciting journey of learning and growing in frontend development.
            Starting with curiosity and determination, I quickly found myself
            deeply engaged with JavaScript and the incredible React.js library —
            tools that empower me to create dynamic and seamless web
            experiences. <br /> <br /> What drives me the most is the challenge
            of turning complex problems into simple, elegant solutions through
            code. I’m passionate about crafting clean, efficient user interfaces
            that not only function well but also provide a great user
            experience. Every project is an opportunity to explore new
            technologies, sharpen my skills, and push the boundaries of what I
            can build. <br /> But I’m not just a coder — I believe life is about
            balance. Outside of programming, I’m an active person who enjoys
            playing cricket and football to keep both body and mind energized.
            Sports teach me discipline and teamwork, qualities I bring back into
            my development work. I’m also drawn to creativity beyond the screen
            — I love exploring digital art and painting, which help me think in
            fresh, innovative ways. <br /> <br /> At my core, I’m a lifelong
            learner and a collaborator. I thrive in environments where I can
            connect with others who are passionate about technology, creativity,
            and growth. If you’re someone who shares this enthusiasm or simply
            wants to talk about code, sports, or art, I’d love to hear from you!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
