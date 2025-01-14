import React, { useState } from "react";


import whoChooseUsSmall1 from "../../assets/whoChooseUsSmall1.png";
import whoChooseUsSmall2 from "../../assets/whoChooseUsSmall2.png";
import whoChooseUsSmall3 from "../../assets/whoChooseUsSmall3.png";
import whoChooseUsBig1 from "../../assets/whoChooseUsBig1.png";
import whoChooseUsBig2 from "../../assets/whoChooseUsBig2.png";

const WhyChooseUs = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to handle toggle button click
  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="bg-white p-5 lg:py-20">
      <div className="flex flex-wrap gap-6 lg:container lg:flex-nowrap lg:gap-16 2xl:gap-[8.75rem]">
        <div className="w-5/12 p-4 bg-white-100">
          <div className="flex h-screen">
            <div className="w-6/12 p-4 bg-white-100 flex flex-col">
              <div className="flex-1 bg-white-300 rounded-lg mb-4">
                <img
                  src={whoChooseUsBig1}
                  alt="Who Choose Us Big 1"
                  className="rounded-2xl"
                />
              </div>

              <div className="flex-1 bg-white-300">
                <img
                  src={whoChooseUsBig2}
                  alt="Who Choose Us Big 2"
                  className="rounded-2xl"
                />
              </div>
            </div>

            <div className="w-6/12 p-4 bg-white-200 flex flex-col">
              <div className="flex-[0.66] bg-white-400 mb-4">
                <img
                  src={whoChooseUsSmall1}
                  alt="Who Choose Us Small 1"
                  className="rounded-2xl"
                />
              </div>

              <div className="flex-[0.66] bg-white-400 mb-4">
                <img
                  src={whoChooseUsSmall2}
                  alt="Who Choose Us Small 2"
                  className="rounded-2xl"
                />
              </div>

              <div className="flex-[0.66] bg-white-400">
                <img
                  src={whoChooseUsSmall3}
                  alt="Who Choose Us Small 3"
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex grow flex-col gap-4 lg:max-w-[55%] lg:gap-6 2xl:max-w-[55%] 2xl:gap-[3.5rem]">
          <div className="flex flex-col gap-[0.125rem] hidden lg:block">
            <p className="text-[0.75rem] font-medium uppercase tracking-[0.375rem] text-gray-light lg:text-p-md undefined">
              Why Choose Us
            </p>
            <h2 className="text-p-lg font-medium capitalize lg:text-h2">
              Why JustWravel
            </h2>
          </div>
          <div className="rounded-[0.625rem] bg-white lg:rounded-[1.25rem] undefined">
            <div className="overflow-hidden">
              <div className="flex flex-col gap-4 overflow-hidden text-center lg:text-left ">
                <p className="text-p-md font-medium font-poppins lg:text-h6">
                  <i>
                    <q> You are not living, if you are not dreaming</q>
                  </i>
                </p>
                <p className="text-p-sm font-medium font-poppins lg:text-p-lg">
                  Years ago, when Justwravel organized its first trip, we had
                  the opportunity to turn other people's dreams into reality. We
                  became the bridge that narrowed the gap between individuals
                  and their travel dreams.
                </p>
                <p className="text-p-sm  font-poppins lg:text-p-lg">
                  With over 7 years of experience and the sole aim of creating a
                  community of like-minded travelers,
                </p>
                <div
                  className={`overflow-hidden ${
                    isExpanded ? "block" : "hidden"
                  }`}
                >
                  <p>
                    Justwravel takes pride in having served the various needs of
                    travel enthusiasts. We have satisfied the travel cravings of
                    50,000+ Wravelers, completed over 10,000 successful trips,
                    and made 50+ destinations accessible. With consistent
                    support and encouragement from our Wravelers, Justwravel has
                    emerged as a trailblazer in curating remarkable experiences
                    for adventure seekers and wanderlust-driven souls.
                  </p>
                  <p className="text-p-sm font-poppins lg:text-p-lg">
                    As an ATOAI (Adventure Tour Operators Association of India)
                    registered community, safety is our paramount concern. Our
                    trip leaders are not just adventurers but certified experts,
                    holding AMC &amp; BMC certifications and equipped with
                    first-aid training. We ensure that every journey with us is
                    both thrilling and secure.
                  </p>
                  <div>
                    <p className="text-p-sm font-poppins lg:text-p-lg">
                      Being the first travel community to provide free travel
                      insurance for adventure activities up to 4.5 lakhs, we
                      financially back our customers. Our constant dedication
                      and hard work have helped us earn the following
                      achievements:
                    </p>
                    <ul className="list-disc pl-6 text-left text-p-sm font-poppins text-gray-600 lg:text-p-md">
                      <li>Incubated by IIM Bangalore | NSRCEL</li>
                      <li>
                        A proud member of Uttar Pradesh Tourism, recognized as
                        an adventure tour operator
                      </li>
                      <li>Supported by Google For Startups</li>
                      <li>
                        Winner of TripAdvisor's Travel Choice Award in 2020 and
                        2023
                      </li>
                      <li>
                        Three-time recipient of the MSME Best Enterprise (Travel
                        &amp; Tourism) award
                      </li>
                      <li>Featured on Business Standard and ANI</li>
                    </ul>
                  </div>
                  <p className="text-p-sm font-poppins lg:text-p-lg">
                    At Justwravel, we are not just a travel agency ; we are a
                    community of passionate explorers dedicated to crafting the
                    ultimate travel experiences for you. All the milestones we
                    have achieved are a result of the constant support and
                    positive feedback from our travelers.
                  </p>
                  <p className="text-p-sm font-poppins lg:text-p-lg">
                    From the very beginning to this day, all Justwravel has
                    tried and worked is for the community, for the divine places
                    we witness, and for the passion of Travel. Don't think you
                    need another reason to choose us?
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 text-center  font-poppins lg:p-[1.875rem] lg:text-right pt-2 lg:pt-2">
              <button
                className="text-p-sm font-medium text-blue lg:text-h6 font-poppins lg:font-normal"
                onClick={toggleContent}
              >
                {isExpanded ? "View Less" : "View More"}
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 lg:gap-[1.875rem]">
            <div className="grow basis-[30%]">
              <div className="flex flex-col items-center gap-2 2xl:block">
                <div className="inline-block rounded-[.325rem] bg-blue-tint p-2 lg:p-3">
                  <svg
                    xmlns="https://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="none"
                    viewBox="0 0 28 28"
                    className="text-[1.5rem] text-blue lg:text-[2.5rem]"
                  >
                    <path
                      fill="currentColor"
                      d="M22.517 19.717c.467-.817.817-1.75.817-2.8a5.228 5.228 0 00-5.25-5.25 5.228 5.228 0 00-5.25 5.25 5.228 5.228 0 005.25 5.25c1.05 0 1.983-.35 2.8-.817l3.733 3.733 1.634-1.633-3.734-3.733zm-4.433.117a2.888 2.888 0 01-2.917-2.917A2.888 2.888 0 0118.084 14a2.888 2.888 0 012.917 2.917 2.888 2.888 0 01-2.917 2.916zm-4.083 3.5v2.333C7.56 25.667 2.334 20.44 2.334 14c0-6.44 5.227-11.666 11.667-11.666 5.646 0 10.348 4.013 11.433 9.333h-2.415a9.333 9.333 0 00-5.518-6.312v.478a2.34 2.34 0 01-2.334 2.334h-2.333V10.5a1.17 1.17 0 01-1.167 1.167H9.334V14h2.333v3.5h-1.166l-5.589-5.588A9.471 9.471 0 004.667 14c0 5.145 4.189 9.334 9.334 9.334z"
                    ></path>
                  </svg>
                </div>
                <div className="text-center lg:mt-4 2xl:text-left">
                  <h6 className="text-p-xs font-semibold lg:text-h6">
                    50,000+
                  </h6>
                  <p className="text-p-xs lg:text-p-md">Satisfied Travelers</p>
                </div>
              </div>
            </div>
            <div className="grow basis-[30%]">
              <div className="flex flex-col items-center gap-2 2xl:block">
                <div className="inline-block rounded-[.325rem] bg-blue-tint p-2 lg:p-3">
                  <svg
                    xmlns="https://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="none"
                    className="text-[1.5rem] text-blue lg:text-[2.5rem]"
                    viewBox="0 0 32 33"
                  >
                    <path
                      fill="currentColor"
                      d="M16.5 8a2.675 2.675 0 0 1-2.666-2.667c0-1.466 1.2-2.666 2.667-2.666 1.466 0 2.666 1.2 2.666 2.666C19.167 6.8 17.967 8 16.501 8zm6.667-5.333h2.667V3.2c-.133 2.933-1.067 5.2-3.067 6.8-.666.533-1.466.933-2.266 1.2v18.133h-2.667v-8h-2.667v8h-2.666V13.467c-.4.133-.667.266-.8.4C10.5 14.8 9.847 16 9.834 18v.667H7.167V18c0-2.667.947-4.787 2.814-6.387 1.466-1.2 3.853-2.28 6.52-2.28 2.666 0 3.573-.613 4.64-1.413 1.333-1.067 2.026-2.587 2.026-4.587v-.666zM5.834 21.333h4v8h-4v-8z"
                    ></path>
                  </svg>
                </div>
                <div className="text-center lg:mt-4 2xl:text-left">
                  <h6 className="text-p-xs font-semibold lg:text-h6">150+</h6>
                  <p className="text-p-xs lg:text-p-md">All Girls Trips</p>
                </div>
              </div>
            </div>
            <div className="grow basis-[30%]">
              <div className="flex flex-col items-center gap-2 2xl:block">
                <div className="inline-block rounded-[.325rem] bg-blue-tint p-2 lg:p-3">
                  <svg
                    xmlns="https://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="none"
                    viewBox="0 0 28 28"
                    className="text-[1.5rem] text-blue lg:text-[2.5rem]"
                  >
                    <path
                      fill="currentColor"
                      d="M16.924 12.743a2.708 2.708 0 01-5.415 0l.001-.047-.234-.181v.85H9.991c-.668 0-1.228.504-1.297 1.167L8.089 20.3a1.303 1.303 0 001.3 1.438c.659 0 1.225-.497 1.296-1.167l.482-4.601h.96v.595h-.428v5.383H8.891v.7h2.81c.02.692.575 1.252 1.267 1.281v3.632c0 .241.198.439.44.439h1.522a.44.44 0 00.44-.44v-3.63a1.324 1.324 0 001.266-1.283h2.811v-.698h-2.809v-5.384h-.427v-.595h1.056l.482 4.601a1.304 1.304 0 002.595-.27l-.604-5.769a1.304 1.304 0 00-1.298-1.167h-1.285v-.85l-.234.181.001.047zM15.37 23.32v-2.625h-2.402v2.625a.715.715 0 01-.658-.711v-2.5H16.028v2.5c0 .374-.29.681-.658.71zM14.218 4.884a2.444 2.444 0 002.446-2.442A2.444 2.444 0 0014.218 0a2.444 2.444 0 00-2.447 2.442 2.444 2.444 0 002.447 2.442zM6.407 10.676a.407.407 0 100 .812h.282a.866.866 0 001.16 0h1.944c.446 0 .885.15 1.237.424l.515.398c.047-.29.14-.565.273-.817l-.289-.223a2.848 2.848 0 00-1.736-.594H8.216l.509-.326 1.918-1.227a.868.868 0 00.39-.592c.05-.311.138-.554.244-.743v2.933c.158.084.31.181.452.292l.258.2a2.708 2.708 0 014.46 0l.258-.2c.143-.11.295-.208.453-.292V7.788c.105.19.194.432.244.743.04.244.181.459.39.592l1.918 1.227.509.326h-1.577c-.626 0-1.242.21-1.737.594l-.288.223c.132.252.226.527.273.818l.515-.4a2.03 2.03 0 011.237-.423h1.944a.869.869 0 001.16 0h.282a.407.407 0 100-.812h-.004l-.034-.326-.024-.231a.868.868 0 00-.396-.641l-2.533-1.62c-.46-1.792-1.86-2.396-2.581-2.46v.005a.844.844 0 00-.138-.012h-4.201a.844.844 0 00-.137.012v-.005c-.722.064-2.123.668-2.582 2.46l-2.533 1.62a.868.868 0 00-.396.64l-.024.232-.034.326h-.004z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M14.217 10.446c-1.27 0-2.301 1.029-2.301 2.297a2.299 2.299 0 002.3 2.296c1.271 0 2.301-1.028 2.301-2.296a2.299 2.299 0 00-2.3-2.297zm0 1.08c.672 0 1.218.546 1.218 1.217a1.219 1.219 0 01-2.437 0c0-.671.547-1.217 1.219-1.217z"
                    ></path>
                  </svg>
                </div>
                <div className="text-center lg:mt-4 2xl:text-left">
                  <h6 className="text-p-xs font-semibold lg:text-h6">250+</h6>
                  <p className="text-p-xs lg:text-p-md">Bike Trips</p>
                </div>
              </div>
            </div>
            <div className="grow basis-[30%]">
              <div className="flex flex-col items-center gap-2 2xl:block">
                <div className="inline-block rounded-[.325rem] bg-blue-tint p-2 lg:p-3">
                  <svg
                    xmlns="https://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="none"
                    viewBox="0 0 28 28"
                    className="text-[1.5rem] text-blue lg:text-[2.5rem]"
                  >
                    <path
                      fill="currentColor"
                      d="M14.127 7.976a2.354 2.354 0 002.334-2.334 2.354 2.354 0 00-2.334-2.333 2.354 2.354 0 00-2.333 2.333c.042 1.316 1.06 2.334 2.333 2.334zm5.6 6.236c0-2.121-1.697-3.903-3.775-3.988l-1.443 2.8c-.127.297-.594.297-.764 0l-1.442-2.8a4 4 0 00-3.776 3.988v.255h11.2v-.255z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M3.097 17.097h22.019a1.43 1.43 0 001.442-1.443v-14A1.43 1.43 0 0025.116.212H3.097c-.763 0-1.442.636-1.442 1.442v14c0 .806.679 1.443 1.442 1.443zm11.03-14.594c1.74 0 3.183 1.4 3.183 3.182 0 1.739-1.4 3.181-3.182 3.181-1.74 0-3.182-1.4-3.182-3.181.042-1.74 1.442-3.182 3.182-3.182zM7.68 14.212c0-2.673 2.164-4.836 4.88-4.836.169 0 .339.084.423.212l1.188 2.333 1.188-2.333c.127-.255.382-.212.424-.212a4.834 4.834 0 014.837 4.836v.679c0 .254-.17.424-.425.424H8.104c-.255 0-.425-.17-.425-.424v-.68zm17.267 7.976v-1.994a.425.425 0 00-.424-.424H14.425v-1.782h-.849v1.782H3.48c-.254 0-.424.17-.424.424v1.994h.849v-1.57h9.672v1.57h.849v-1.57h9.672v1.57h.849zm-8.994.848h-3.903a.425.425 0 00-.424.424v3.903c0 .255.212.425.424.425h3.903c.212 0 .424-.17.424-.425V23.46c0-.254-.17-.424-.424-.424zm10.521 0H22.57a.425.425 0 00-.424.424v3.903c0 .255.212.425.424.425h3.903c.212 0 .425-.17.425-.425V23.46c0-.254-.17-.424-.425-.424zm-21.042 0H1.528c-.255 0-.424.17-.424.424v3.903c0 .255.17.425.424.425H5.43c.254 0 .424-.17.424-.425V23.46c0-.254-.17-.424-.424-.424z"
                    ></path>
                  </svg>
                </div>
                <div className="text-center lg:mt-4 2xl:text-left">
                  <h6 className="text-p-xs font-semibold lg:text-h6">
                    Customized
                  </h6>
                  <p className="text-p-xs lg:text-p-md">Corporate Trips</p>
                </div>
              </div>
            </div>
            <div className="grow basis-[30%]">
              <div className="flex flex-col items-center gap-2 2xl:block">
                <div className="inline-block rounded-[.325rem] bg-blue-tint p-2 lg:p-3">
                  <svg
                    xmlns="https://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="none"
                    viewBox="0 0 28 28"
                    className="text-[1.5rem] text-blue lg:text-[2.5rem]"
                  >
                    <path
                      fill="currentColor"
                      d="M8.167 3.5h-3.5V7H2.334V1.167h5.833V3.5zm17.5 3.5V1.167h-5.833V3.5h3.5V7h2.333zm-17.5 17.5h-3.5V21H2.334v5.833h5.833V24.5zM23.334 21v3.5h-3.5v2.333h5.833V21h-2.333zm-1.167 0a2.34 2.34 0 01-2.333 2.333H8.167A2.34 2.34 0 015.834 21V7a2.34 2.34 0 012.333-2.333h11.667A2.34 2.34 0 0122.167 7v14zM17.501 9.333h-7v2.333h7V9.333zm0 3.5h-7v2.333h7v-2.333zm0 3.5h-7v2.334h7v-2.334z"
                    ></path>
                  </svg>
                </div>
                <div className="text-center lg:mt-4 2xl:text-left">
                  <h6 className="text-p-xs font-semibold lg:text-h6">
                    Hand-picked
                  </h6>
                  <p className="text-p-xs lg:text-p-md">Itineraries</p>
                </div>
              </div>
            </div>
            <div className="grow basis-[30%]">
              <div className="flex flex-col items-center gap-2 2xl:block">
                <div className="inline-block rounded-[.325rem] bg-blue-tint p-2 lg:p-3">
                  <svg
                    xmlns="https://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="text-[1.5rem] text-blue lg:text-[2.5rem]"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10.515A2.485 2.485 0 0 1 19.515 18a.485.485 0 0 0-.47.606l.062.238c.642 2.496-2.271 4.367-4.275 2.746l-4.16-3.367a1 1 0 0 0-.63-.223H5a3 3 0 0 1-3-3V5Zm3-1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h5.042a3 3 0 0 1 1.887.668l4.161 3.367c.506.41 1.242-.063 1.08-.693l-.062-.238A2.485 2.485 0 0 1 19.515 16a.485.485 0 0 0 .485-.485V5a1 1 0 0 0-1-1H5Z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M6 7a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1ZM6 11a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Z"
                    ></path>
                  </svg>
                </div>
                <div className="text-center lg:mt-4 2xl:text-left">
                  <h6 className="text-p-xs font-semibold lg:text-h6">7095+</h6>
                  <p className="text-p-xs lg:text-p-md"> Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
