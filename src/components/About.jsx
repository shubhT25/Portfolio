import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center pt-24 px-10 w-full h-full lg:pl-[80px]">
        <div className="pb-8">
          <p className="text-3xl font-bold inline border-b-4 border-gray-400 sm:text-4xl">About</p>
        </div>
        <p className="text-gray-200 text-lg py-4 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sunt inventore deleniti vitae veniam repellendus odio enim earum ipsa autem saepe, ex et at facere? Mollitia tempore suscipit error rem quibusdam pariatur dolorem quaerat possimus fugit dicta cupiditate illum aliquam omnis aliquid, sint, enim placeat, non ut adipisci odit ad.
        </p>
        <br/>
        <p className="text-gray-200 text-lg py-4 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, alias ab! Nam illo ducimus et ipsa consequuntur corporis est ipsum nesciunt repudiandae, tempore totam, numquam accusamus laudantium error molestiae obcaecati harum corrupti sunt minus hic consectetur! Voluptatem, optio illum. Error aperiam odit cupiditate vel labore animi quidem dolorum illum eligendi?
        </p>
      </div>
    </div>
  );
};

export default About;
