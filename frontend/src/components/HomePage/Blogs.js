import React from "react";
import blogsSmall1 from "../../assets/blogsSmall1.jpeg";
import blogsSmall2 from "../../assets/blogssmall2.png";

import blogsSmall3 from "../../assets/blogssmall3.png";

import blogsBig from "../../assets/blogsBig.png";

const TwoColumnLayout = () => {
  const sectionsData = [
    {
      imageUrl: blogsSmall1, // Example image URL
      part1Text: "Published on 12 Sep",
      part2Text: "8 minutes read",
      part3Text: "Best Time to Visit Vietnam For Indian Travelers",
    },
    {
      imageUrl: blogsSmall2,
      part1Text: "Published on 05 Oct",
      part2Text: "5 minutes read",
      part3Text: "Top 10 Destinations in Europe for Summer Vacation",
    },
    {
      imageUrl: blogsSmall3,
      part1Text: "Published on 20 Aug",
      part2Text: "10 minutes read",
      part3Text: "Ultimate Guide to Exploring the Hidden Gems of Japan",
    },
  ];

  const sectionsData2 = [
    {
      imageUrl: blogsBig,
      part1Text: "Published on 12 Sep",
      part2Text: "8 minutes read",
      part3Text:
        "Top 10 Must-Visit Attractions in Manali: A Comprehensive Guide ",
      part4Text:
        "Manali is a unique tourist destination, nestled amidst snow-capped mountains and fast-flowing rivers. The place has emerged as a popular tourist destination for its ancient temples, adventurous treks, scenic waterfalls, and more places to visit in Manali. From snowboarding and skiing to having the",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex">
        {/* First Column */}
        <div className="w-1/2 pr-4">
          {sectionsData.map((section, index) => (
            <div key={index} className="h-48 rounded-lg shadow-lg flex mb-4">
              {/* Part 1 (smaller width with image) */}
              <div className="w-1/3 bg-blue-200 flex items-center rounded-2xl justify-center">
                <img
                  src={section.imageUrl}
                  alt={`Section ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="w-2/3 bg-white-200 flex flex-col items-start justify-center">
                {/* Upper Row */}
                <div className="flex w-full mb-4">
                  <div className="w-1/2 pr-2">
                    <p className="px-2 text-gray-500">{section.part1Text}</p>
                  </div>
                  <div className="w-1/2 pl-2 text-right">
                    <p className="px-2 text-gray-500">{section.part2Text}</p>
                  </div>
                </div>
                {/* Bottom Section */}
                <div className="w-full">
                  <p className="font-bold px-2">{section.part3Text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="w-1/2 pl-4">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Second Column</h2>
            <p>
              This is the second column. You can add whatever content or
              components you need here.
            </p>
          </div>
        </div> */}

        {/* <div className="w-1/2 pl-4">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <div>Second Column</div>
            <div>
              This is the second column. You can add whatever content or
              components you need here.
            </div>
          </div>
        </div> */}

        <div className="w-1/2 pl-4">
          {sectionsData2.map((section, index) => (
            <div key={index} className="rounded-lg h-144 shadow-lg mb-4">
              {/* Part 1 (smaller width with image) */}
              <div className="w-full bg-blue-200 flex items-center justify-center">
                <img
                  src={section.imageUrl}
                  alt={`Section ${index + 1}`}
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
              <div className="w-full bg-white-200 flex flex-col h-72 items-start justify-center">
                {/* Upper Row */}
                <div className="flex w-full mb-4">
                  <div className="w-1/2 pr-2">
                    <p className="px-2 text-gray-500">{section.part1Text}</p>
                  </div>
                  <div className="w-1/2 pl-2 text-right">
                    <p className="px-2 text-gray-500">{section.part2Text}</p>
                  </div>
                </div>
                {/* Bottom Section */}
                <div className="w-full">
                  <p className="font-bold px-2">{section.part3Text}</p>
                  <p className=" px-2">{section.part4Text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* brak section */}
      </div>
    </div>
  );
};

export default TwoColumnLayout;
