import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const Builder = () => {
  const [data, SetData] = useState({
    hobbies: "",
    topics: "",
    skills: "",
    impact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`
    hobbies: ${data.hobbies} 
    topics: ${data.topics}
    skills: ${data.skills}
    impact: ${data.impact}`);
  };

  return (
    <div>
      <div className="lg:flex bg-white lg:h-[90vh] m-2 rounded-3xl overflow-hidden">
        <div className="basis-1/2">
          <div className="flex font-bold text-7xl md:text-5xl m-4 justify-center font-poppins">
            Details
          </div>
          <div className="flex text-2xl pl-2 lg:p-0 font-semibold justify-center items-center font-poppins">
            Discover your true north in the world of work
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col justify-center items-center m-20 md:m-8 my-20 text-xl gap-10">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <label>What are your general interests and hobbies?</label>
                    <input
                      type="text"
                      name="hobbies"
                      className="border-2 border-black p-2 rounded-lg outline-none"
                      value={data.hobbies}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label>
                      What subjects or topics do you find most engaging or
                      enjoyable?
                    </label>
                    <input
                      type="text"
                      name="topics"
                      className="border-2 border-black p-2 rounded-lg outline-none"
                      value={data.topics}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label>
                      Are there any specific skills or areas of knowledge you'd
                      like to develop in your career?
                    </label>
                    <input
                      type="text"
                      name="skills"
                      className="border-2 border-black p-2 rounded-lg outline-none"
                      value={data.skills}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label>
                      What are some of your biggest strengths and weaknesses?
                    </label>
                    <input
                      type="text"
                      name="impact"
                      className="border-2 border-black p-2 rounded-lg outline-none"
                      value={data.impact}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex gap-10">
                  <button
                    className="px-4 py-2 bg-[#2d55e3] rounded-lg text-white font-semibold"
                    type="submit"
                  >
                    Submit
                  </button>
                  <button
                    className="px-4 py-2 bg-red-500 rounded-lg text-white font-semibold"
                    onClick={() => {
                      SetData({
                        hobbies: "",
                        topics: "",
                        skills: "",
                        impact: "",
                      });
                    }}
                  >
                    Clear
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="basis-1/2 bg-slate-900 text-white m-6 rounded-2xl shadow-2xl">
          <ReactMarkdown className="p-8 lg:text-lg overflow-auto h-full">
            Certainly! When creating a web application for career guidance using
            an AI model like myself, you might want to collect various inputs
            from the user to tailor the guidance provided. Here are some inputs
            you might consider gathering: Personal Information: Name Age Gender
            Location (city/country) Educational Background (current level of
            education, field of study) Interests and Passions: Areas of interest
            (e.g., technology, healthcare, arts, etc.) Hobbies and
            extracurricular activities Passions or long-term aspirations Skills
            and Strengths: Technical skills (programming languages, software
            proficiency, etc.) Soft skills (communication, leadership,
            problem-solving, etc.) Any certifications or qualifications Career
            Goals: Short-term career goals (1-5 years) Long-term career
            aspirations (5+ years) Desired industry or sector Preferred work
            environment (e.g., corporate, startup, remote) Work Preferences:
            Type of work (full-time, part-time, freelance) Desired job roles or
            positions Salary expectations Personality and Work Style:
            Personality traits (introverted/extroverted, analytical/creative,
            etc.) Preferred work environment (collaborative, independent, etc.)
            Work style preferences (structured, flexible, etc.) Current
            Situation: Current employment status Challenges or obstacles faced
            in career advancement Reasons for seeking career guidance Feedback
            and Preferences: How they prefer to receive guidance (text-based
            chat, interactive quizzes, etc.) Any specific areas they want to
            focus on or avoid By gathering this information from the user, the
            AI model can provide more personalized and relevant career guidance
            tailored to their individual circumstances, interests, and goals.
            Additionally, you can use this data to track progress and adapt the
            guidance over time as the user's situation evolves.
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default Builder;
