import React, { useState } from 'react'
// import Account from './ui/Account'
// import Personal from './ui/Personal'
// import Social from './ui/Social'
// import Finish from './ui/Finish'
// import "./ui/Account"

const Portfolio = ({setUser}) => {

  
  const [userid, setuserid] = useState(0)
  const [personalDetails, setPesonalDetails] = useState({})
  const [projectDetails, setProjectDetails] = useState({})
  const [softskillDetails, setsoftskillDetails] = useState({})
  const [techskillDetails, settechskillDetails] = useState({})

  React.useEffect(() => {
    const getQs = async() => {

        var personal_details = [];
        var project_details = [];
        var softskill_details = [];
        var techskill_details = [];
        var skill_details = [];


        var opts = [];

        const res = await fetch("http://localhost:1337/api/applicants?populate=projects,techskillratings,softskillratings,skills");
        const json = await res.json();
        var i = 1;
        var techskill_data = json.data[i].attributes.techskillratings.data[0].attributes
        var softskill_data = json.data[i].attributes.softskillratings.data[0].attributes
        var project_data = json.data[i].attributes.projects.data[0].attributes
        var personal_details_data = json.data[i].attributes


        project_details.push({firstname:project_data.projectname,
                              problemstatement: project_data.problemstatement,
                              solution: project_data.solution});

        softskill_details.push({problemsolving: softskill_data.problemsolving,
                                teamwork: softskill_data.teamwork,
                                interpersonal: softskill_data.interpersonal,
                                communication: softskill_data.communication,
                                leadership: softskill_data.leadership});

        techskill_details.push({skill1: techskill_data.skill1,
                                skill2: techskill_data.skill2,
                                skill3: techskill_data.skill3,
                                skill4: techskill_data.skill4,
                                skill5: techskill_data.skill5,
                                skill1_name: techskill_data.skill1_name,
                                skill2_name: techskill_data.skill2_name,
                                skill3_name: techskill_data.skill3_name,
                                skill4_name: techskill_data.skill4_name,
                                skill5_name: techskill_data.skill5});

        personal_details.push({firstname: personal_details_data.firstname,
                              lastname: personal_details_data.lastname,
                              email: personal_details_data.email,
                              linkedinlink: personal_details_data.linkedinlink,
                              imageurl: personal_details_data.imageurl,
                              dob: personal_details_data.dob,
                              physicaladdress: personal_details_data.physicaladdress,
                              city: personal_details_data.city,});

        setPesonalDetails(personal_details[0]);
        setProjectDetails(project_details[0]);
        setsoftskillDetails(softskill_details[0]);
        settechskillDetails(techskill_details[0]);
        console.log(json.data[i].attributes);

        return json
    }
    getQs();
   }, [])

   return (
      



    <div id="RootRoot" className="flex flex-row gap-8 w-full items-start">
    <div className="bg-white flex flex-col justify-end gap-8 w-1/4 items-start pt-10 pb-6 px-40">
      <div
        id="Profile"
        className={" bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row justify-end ml-8 w-2/3 h-40 items-start pt-4 px-2"}style={{ backgroundImage: `url(${personalDetails.imageurl})`}}>
        <img
          src="https://file.rendit.io/n/gFyRxxFgX8GXhmG6rfF3.svg"
          alt="Available"
          id="Available"
          className="mt-24 w-4"
        />
      </div>
      <div className="flex flex-col gap-6 w-full items-start">
        <div className="flex flex-col justify-between gap-4 w-full items-start">
          <div className="text-lg font-['Inter'] font-medium leading-[22.2px] capitalize text-[#2b2b2b] ml-10">
            {personalDetails.firstname} {personalDetails.lastname}
          </div>
          <div className="text-sm font-['Inter'] leading-[24px] capitalize text-[#767676] ml-10">
            Font-end Developerss
          </div>
          <div className="flex flex-row justify-between w-full items-start">
            <div
              id="Ellipse"
              className="bg-[url(https://file.rendit.io/n/7U2V3uhErrL71GbU6aFD.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row w-6 h-6 items-start pt-1 px-1"
            >
              <img
                src="https://file.rendit.io/n/CNlLw7YzwhigLrxScfmn.svg"
                alt="Iconsfacebook"
                id="Iconsfacebook"
                className="w-3"
              />
            </div>
            <div
              id="Ellipse1"
              className="bg-[url(https://file.rendit.io/n/7U2V3uhErrL71GbU6aFD.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row w-6 h-6 items-start pt-1 px-1"
            >
              <img
                src="https://file.rendit.io/n/FoHAmb5clevkfWQ5XjxT.svg"
                alt="Iconsinstagram"
                id="Iconsinstagram"
                className="w-3"
              />
            </div>
            <div
              id="Ellipse2"
              className="bg-[url(https://file.rendit.io/n/7U2V3uhErrL71GbU6aFD.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row w-6 h-6 items-start pt-1 px-1"
            >
              <img
                src="https://file.rendit.io/n/FgOmVpLxG8JmJkBYraM4.svg"
                alt="Iconsgithub"
                id="Iconsgithub"
                className="w-3"
              />
            </div>
            <div
              id="Ellipse3"
              className="bg-[url(https://file.rendit.io/n/7U2V3uhErrL71GbU6aFD.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row w-6 h-6 items-start pt-1 px-1"
            >
              <a href={personalDetails.linkedinlink} target="_blank" rel="noreferrer">
              <img
                src="https://file.rendit.io/n/QLewVxOmITV4ZvEjie0U.svg"
                alt="Iconslinkedin"
                id="Iconslinkedin"
                className="w-3"
              /></a>
            </div>
            <div
              id="Ellipse4"
              className="bg-[url(https://file.rendit.io/n/7U2V3uhErrL71GbU6aFD.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row w-6 h-6 items-start pt-1 px-1"
            >
              <img
                src="https://file.rendit.io/n/ftig5tDtjmOIOEEZQySF.svg"
                alt="IconsYoutube"
                id="IconsYoutube"
                className="w-3"
              />
            </div>
            <div
              id="Ellipse5"
              className="bg-[url(https://file.rendit.io/n/7U2V3uhErrL71GbU6aFD.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row w-6 h-6 items-start pt-1 px-1"
            >
              <img
                src="https://file.rendit.io/n/vCauQ3FycQteBv6tg78D.svg"
                alt="Iconsdribbble"
                id="Iconsdribbble"
                className="w-3"
              />
            </div>
          </div>
        </div>
        <div
          id="Line"
          className="border-solid border-[#f0f0f6] mb-px w-full h-px border-t-2 border-b-0 border-x-0 rounded-none"
        />
        <div className="flex flex-col justify-between gap-2 w-full items-start">
          <div className="flex flex-col gap-2 w-full items-start">
            <div className="flex flex-row justify-between w-full items-start">
              <div className="relative flex flex-row w-12 items-start px-1">
                <div className="w-12 h-6 bg-[#0492c2] absolute top-0 left-0" />
                <div className="text-sm font-['Inter'] leading-[24px] capitalize text-[#2b2b2b] relative mt-px">
                  DOB:
                </div>
              </div>
              <div className="text-right text-sm font-['Inter'] leading-[24px] capitalize text-[#2b2b2b]">
                {personalDetails.dob}
              </div>
            </div>
            <div className="flex flex-row justify-between w-full items-start">
              <div className="text-sm font-['Inter'] leading-[24px] capitalize text-[#2b2b2b] bg-[#0492c2] flex flex-row w-24 items-start px-1">
                City:
              </div>
              <div className="text-right text-sm font-['Inter'] leading-[24px] capitalize text-[#2b2b2b]">
                {personalDetails.city}
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-16 w-full items-start">
            <div className="text-sm font-['Inter'] leading-[24px] capitalize text-[#2b2b2b] bg-[#0492c2] flex flex-row w-20 items-start px-1">
              Availability:
            </div>
            <div className="text-right text-sm font-['Inter'] leading-[24px] capitalize text-[#7eb942]">
              Available
            </div>
          </div>
          <div className="flex flex-row gap-3 w-full items-start">
            <div className="text-sm font-['Inter'] leading-[24px] capitalize text-[#2b2b2b] bg-[#0492c2] flex flex-row w-20 items-start pl-1 pr-2">
              Address:
            </div>
            <div className="text-right text-sm font-['Inter'] leading-[24px] capitalize text-[#2b2b2b]">
              {personalDetails.physicaladdress}
            </div>
          </div>
        </div>
        
        <div
          id="Line1"
          className="border-solid border-[#f0f0f6] mb-px w-full h-px border-t-2 border-b-0 border-x-0 rounded-none"
        />
        <div className="flex flex-col gap-4 w-full items-start">
          <div className="text-lg font-['Inter'] font-medium leading-[22.2px] capitalize text-[#2b2b2b]">
            Soft Skills
          </div>
          <div className="flex flex-col justify-between gap-2 w-full items-start">
            <div className="flex flex-col gap-1 w-full items-start">
              <div className="flex flex-row justify-between w-full items-start">
                <div className="text-sm font-['Inter'] leading-[24px] capitalize text-[#767676]">
                  Communication Skill
                </div>
                <div className="text-sm font-['Inter'] leading-[24px] capitalize text-[#767676]">
                 {softskillDetails.communication}/5
                </div>
              </div>
              <img
                src="https://file.rendit.io/n/fC1jZrWLSzqIthQ4rIrc.svg"
                alt="Line2"
                id="Line2"
              />
            </div>
            <div className="flex flex-col gap-1 w-full items-start">
              <div className="flex flex-row justify-between w-full items-start">
                <div className="text-sm font-['Inter'] leading-[24px] capitalize text-[#767676]">
                  Team Player Skill
                </div>
                <div className="text-sm font-['Inter'] leading-[24px] capitalize text-[#767676]">
                {softskillDetails.teamwork}/5
                </div>
              </div>
              <img
                src="https://file.rendit.io/n/lqgqMVFoiDa0CzXQg2hF.svg"
                alt="Line3"
                id="Line3"
              />
            </div>
            <div className="flex flex-col gap-1 w-full items-start">
              <div className="flex flex-row justify-between w-full items-start">
                <div className="text-sm font-['Inter'] leading-[24px] capitalize text-[#767676]">
                  Interpersonal Skill
                </div>
                <div className="text-sm font-['Inter'] leading-[24px] capitalize text-[#767676]">
                {softskillDetails.interpersonal}/5
                </div>
              </div>
              <img
                src="https://file.rendit.io/n/J6Cd5JReWGUFYrpfhTAD.svg"
                alt="Line4"
                id="Line4"
              />
            </div>
          </div>
        </div>
        <div
          id="Line5"
          className="border-solid border-[#f0f0f6] mb-px w-full h-px border-t-2 border-b-0 border-x-0 rounded-none"
        />
        <div className="flex flex-col gap-4 w-full items-start">
          <div className="text-lg font-['Inter'] font-medium leading-[22.2px] capitalize text-[#2b2b2b]">
            Tech Skills
          </div>
          <div className="flex flex-col justify-between gap-2 w-full items-start">
            <div className="flex flex-col gap-1 w-full items-start">
              <div className="flex flex-row justify-between w-full items-start">
                <div className="text-sm font-['Inter'] leading-[24px] capitalize text-[#767676]">
                  {techskillDetails.skill1_name}
                </div>
                <div className="text-sm font-['Inter'] leading-[24px] capitalize text-[#767676]">
                {techskillDetails.skill1}/5
                </div>
              </div>
              <img
                src="https://file.rendit.io/n/RN3GNsMKreDWpUARJDhf.svg"
                alt="Line6"
                id="Line6"
              />
            </div>
            <div className="flex flex-col gap-1 w-full items-start">
              <div className="flex flex-row justify-between w-full items-start">
                <div className="text-sm font-['Inter'] leading-[24px] capitalize text-[#767676]">
                {techskillDetails.skill2_name}
                </div>
                <div className="text-sm font-['Inter'] leading-[24px] capitalize text-[#767676]">
                {techskillDetails.skill2}/5
                </div>
              </div>
              <img
                src="https://file.rendit.io/n/mOrK4XGlJPQfwtRau6JZ.svg"
                alt="Line7"
                id="Line7"
              />
            </div>
            <div className="flex flex-col gap-1 w-full items-start">
              <div className="flex flex-row justify-between w-full items-start">
                <div className="text-sm font-['Inter'] leading-[24px] capitalize text-[#767676]">
                {techskillDetails.skill3_name}
                </div>
                <div className="text-sm font-['Inter'] leading-[24px] capitalize text-[#767676]">
                {techskillDetails.skill3}/5
                </div>
              </div>
              <img
                src="https://file.rendit.io/n/cGswvPR8YwLeXksDfzox.svg"
                alt="Line8"
                id="Line8"
              />
            </div>
            <div className="flex flex-col gap-1 w-full items-start">
              <div className="flex flex-row justify-between w-full items-start">
                <div className="text-sm font-['Inter'] leading-[24px] capitalize text-[#767676]">
                {techskillDetails.skill4_name}
                </div>
                <div className="text-sm font-['Inter'] leading-[24px] capitalize text-[#767676]">
                {techskillDetails.skill4}/5
                </div>
              </div>
              <img
                src="https://file.rendit.io/n/PHVejrvOdQxZ85QrjXdN.svg"
                alt="Line9"
                id="Line9"
              />
            </div>
            <div className="flex flex-col gap-1 w-full items-start">
              <div className="flex flex-row justify-between w-full items-start">
                <div className="text-sm font-['Inter'] leading-[24px] capitalize text-[#767676]">
                {techskillDetails.skill5_name}
                </div>
                <div className="text-sm font-['Inter'] leading-[24px] capitalize text-[#767676]">
                {techskillDetails.skill5}/5
                </div>
              </div>
              <img
                src="https://file.rendit.io/n/mOrK4XGlJPQfwtRau6JZ.svg"
                alt="Line10"
                id="Line10"
              />
            </div>
          </div>
        </div>
        <div
          id="Line11"
          className="border-solid border-[#f0f0f6] w-full h-px mb-px ml-px border-t-2 border-b-0 border-x-0 rounded-none"
        />
        <div className="flex flex-col gap-4 w-5/6 items-start">
          <div className="text-lg font-['Inter'] font-medium leading-[22.2px] capitalize text-[#2b2b2b]">
            Extra Skills
          </div>
          <div className="flex flex-col justify-between gap-1 w-full items-start">
            <div className="flex flex-row gap-4 w-full items-start">
              <img
                src="https://file.rendit.io/n/A8KNBEy2tGG4omjTB3gy.svg"
                alt="Icons2"
                id="Icons2"
                className="bg-[url(https://file.rendit.io/n/A8KNBEy2tGG4omjTB3gy.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat mt-1 w-4"
              />
              <div className="text-sm font-['Inter'] leading-[24px] capitalize text-[#767676]">
                Bootstrap, Materialize
              </div>
            </div>
            <div className="flex flex-row gap-4 w-5/6 items-start">
              <img
                src="https://file.rendit.io/n/A8KNBEy2tGG4omjTB3gy.svg"
                alt="Icons8"
                id="Icons8"
                className="bg-[url(https://file.rendit.io/n/A8KNBEy2tGG4omjTB3gy.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat mt-1 w-4"
              />
              <div className="text-sm font-['Inter'] leading-[24px] capitalize text-[#767676]">
                Stylus, Sass, Less
              </div>
            </div>
            <div className="flex flex-row gap-4 w-full items-start">
              <img
                src="https://file.rendit.io/n/A8KNBEy2tGG4omjTB3gy.svg"
                alt="Icons14"
                id="Icons14"
                className="bg-[url(https://file.rendit.io/n/A8KNBEy2tGG4omjTB3gy.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat mt-1 w-4"
              />
              <div className="text-sm font-['Inter'] leading-[24px] capitalize text-[#767676]">
                Gulp, Webpack, Grunt
              </div>
            </div>
            <div className="flex flex-row gap-4 w-3/4 items-start">
              <img
                src="https://file.rendit.io/n/A8KNBEy2tGG4omjTB3gy.svg"
                alt="Icons20"
                id="Icons20"
                className="bg-[url(https://file.rendit.io/n/A8KNBEy2tGG4omjTB3gy.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat mt-1 w-4"
              />
              <div className="text-sm font-['Inter'] leading-[24px] capitalize text-[#767676]">
                GIT Knowledge
              </div>
            </div>
          </div>
        </div>
        <div
          id="Line12"
          className="border-solid border-[#f0f0f6] mb-px w-full h-px border-t-2 border-b-0 border-x-0 rounded-none"
        />
        <div className="bg-[#0492c2] flex flex-row justify-center pt-2 gap-5 w-full h-10 items-start">
          <div className="text-sm font-['Inter'] font-semibold uppercase text-[#2b2b2b]">
            Download cv
          </div>
          <img
            src="https://file.rendit.io/n/ObKdJbLLGnozakrG7caT.svg"
            alt="Frame1"
            className="mt-px w-3"
          />
        </div>
      </div>
    </div>
    <div className="flex flex-col justify-between gap-32 w-3/4 items-start">
      <div className="relative flex flex-row justify-end w-full items-start px-16">
        <div
          id="BackgroundImage"
          className="w-full h-[467px] bg-white absolute top-0 left-0 flex flex-col justify-center gap-10 items-start pt-8 pb-6 px-8"
        >
          <div className="border-solid border-[rgba(255,_180,_0,_0.8)] w-4 h-4 origin-top-left rotate-[26.1deg] absolute top-16 left-[902.46484375px] border-2" />
          <div className="border-solid border-[rgba(0,_71,_255,_0.8)] w-4 h-4 origin-top-left rotate-[26.1deg] absolute top-[333px] left-[380.830078125px] border-2" />
          <div className="relative flex flex-col ml-2 gap-6 w-3/5 items-start">
            <div className="flex flex-col gap-1 w-full items-start">
              <img
                src="https://file.rendit.io/n/fB0jvBlmBt69M0XNHeou.svg"
                alt="Ellipse9"
                id="Ellipse9"
                className="w-4"
              />
              <img
                src="https://file.rendit.io/n/fls87vM3nyU3QXi4BZzQ.svg"
                alt="Ellipse6"
                id="Ellipse6"
                className="ml-[480px] w-4"
              />
            </div>
            <div className="flex flex-col ml-5 gap-4 w-full items-start">
              <div className="text-5xl font-['Inter'] font-bold leading-[59.3px] text-[#2b2b2b]">
                I’m {personalDetails.firstname} {personalDetails.lastname}
                <br />
                <span className="text-[#0492c2]">Front-end</span>
                <div> Developer </div>
              </div>
              <div className="font-['Inter'] leading-[24px] capitalize text-[#767676] w-5/6">
              {projectDetails.problemstatement}
              </div>
            </div>
          </div>
          <div className="relative flex flex-row ml-6 gap-[344px] w-full items-start">
            <div className="flex flex-col mb-1 gap-8 w-1/6 h-24 items-start">
              <button
                id="ButtonHireMe"
                className="bg-[#0492c2] flex flex-row justify-center pt-4 gap-2 w-full h-12 cursor-pointer items-start rounded"
              >
                <div className="text-center font-['Inter'] font-medium text-[#2b2b2b]">
                  HIRE ME
                </div>
                <img
                  src="https://file.rendit.io/n/2gx4sVBcDmg4kUQjgZH1.svg"
                  alt="Frame2"
                  className="mt-px w-4"
                />
              </button>
              <img
                src="https://file.rendit.io/n/fls87vM3nyU3QXi4BZzQ.svg"
                alt="Ellipse7"
                id="Ellipse7"
                className="ml-6 w-4"
              />
            </div>
            <img
              src="https://file.rendit.io/n/KMUE1HJZNBRCDDsSMm5l.svg"
              alt="Ellipse8"
              id="Ellipse8"
              className="w-4 mt-10 mr-1"
            />
            <img
              src="https://file.rendit.io/n/JNN59OjQ2xOUJTSLSpfp.svg"
              alt="Polygon"
              id="Polygon"
              className="mt-20 w-4"
            />
          </div>
        </div>
        <img
          src={personalDetails.imageurl}
          alt="YourImage"
          id="YourImage"
          className="relative mt-2"
        />
      </div>
      <div className="flex flex-col gap-12 w-full items-start">
        <div className="flex flex-col gap-6 w-1/2 items-start mb-px ml-64">
          <div className="text-3xl font-['Inter'] font-bold leading-[39.6px] capitalize text-[#2b2b2b] ml-[112px]">
            Project: {projectDetails.projectname}
          </div>
          <div className="text-center text-sm font-['Inter'] leading-[24px] capitalize text-[#767676] w-full">
            {projectDetails.problemstatement}
          </div>
        </div>
        <div className="flex flex-row justify-between w-full items-start">
          <div className="bg-white flex flex-col gap-6 w-1/3 h-56 items-start pt-6 pb-10 pl-20">
            <img
              src="https://file.rendit.io/n/35Ww9A2ow0mbNfcnsgOY.svg"
              alt="Iconscoding"
              id="Iconscoding"
              className="ml-12 w-16"
            />
            <div className="flex flex-col gap-4 w-2/3 items-start">
              <div className="text-lg font-['Inter'] font-medium leading-[22.2px] capitalize text-[#2b2b2b]">
                web development
              </div>
              <div className="text-center text-sm font-['Inter'] leading-[24px] capitalize text-[#767676] ml-3">
                blog, e-commerce
              </div>
            </div>
          </div>
          <div className="bg-white flex flex-col gap-6 w-1/3 h-56 items-start pt-6 pb-10 pl-12">
            <img
              src="https://file.rendit.io/n/1cJd5ALbTczugZZXADn5.svg"
              alt="Iconsillustration"
              id="Iconsillustration"
              className="ml-16 w-16"
            />
            <div className="flex flex-col gap-4 w-4/5 items-start">
              <div className="text-lg font-['Inter'] font-medium leading-[22.2px] capitalize text-[#2b2b2b] ml-10">
                uI/uX design
              </div>
              <div className="text-center text-sm font-['Inter'] leading-[24px] capitalize text-[#767676]">
                Mobile app, website design
              </div>
            </div>
          </div>
          <div className="bg-white flex flex-col gap-6 w-1/3 h-56 items-start pl-16 py-6">
            <img
              src="https://file.rendit.io/n/Mu3Gq5Qul8Zk6cVCXsA6.svg"
              alt="IconsMicrophone"
              id="IconsMicrophone"
              className="ml-12 w-20"
            />
            <div className="flex flex-col gap-4 w-3/4 items-start">
              <div className="text-lg font-['Inter'] font-medium leading-[22.2px] capitalize text-[#2b2b2b] ml-6">
                sound design
              </div>
              <div className="text-center text-sm font-['Inter'] leading-[24px] capitalize text-[#767676]">
                Voice Over, Beat Making
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row ml-8 gap-24 w-full items-start">
          <div className="flex flex-col gap-5 w-1/4 items-start mt-2 mr-1">
            <img
              src="https://file.rendit.io/n/n3pk2U5qVchMAVbgoQL4.svg"
              alt="Iconsgamedevelopment"
              id="Iconsgamedevelopment"
              className="ml-20 w-20"
            />
            <div className="flex flex-col gap-4 w-full items-start">
              <div className="text-lg font-['Inter'] font-medium leading-[22.2px] capitalize text-[#2b2b2b] ml-16">
                game design
              </div>
              <div className="text-center text-sm font-['Inter'] leading-[24px] capitalize text-[#767676]">
                Character Design, Props & Objects
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 w-1/4 items-start">
            <img
              src="https://file.rendit.io/n/xSgLkbOKEDyETZivTiBG.svg"
              alt="IconsPhotographer"
              id="IconsPhotographer"
              className="ml-16 w-20"
            />
            <div className="flex flex-col gap-4 w-full items-start">
              <div className="text-lg font-['Inter'] font-medium leading-[22.2px] capitalize text-[#2b2b2b] ml-12">
                photography
              </div>
              <div className="text-center text-sm font-['Inter'] leading-[24px] capitalize text-[#767676]">
              <div className="footer"><button onClick={() => {setuserid(2)}}>{userid}</button></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-1 gap-5 w-1/4 items-start">
            <div className="text-lg font-['Inter'] font-medium leading-[22.2px] capitalize text-[#2b2b2b] ml-20">
              advertising
            </div>
            <div className="text-center text-sm font-['Inter'] leading-[24px] capitalize text-[#767676] w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla
              diam in ac dictum a urna viverra morbi.{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Portfolio

{/* <div className="app">
<div className="myTabs">
  <div className="tabs">
    <div className={tab == 0 ? "tab active": "tab"} onClick={() => setTab(0)}>1</div>
    <div className={tab == 1 ? "tab active": "tab"} onClick={() => setTab(1)}>2</div>
    <div className={tab == 2 ? "tab active": "tab"} onClick={() => setTab(2)}>3</div>
    <div className={tab == 3 ? "tab active": "tab"} onClick={() => setTab(3)}>4</div>
  </div>

  <div className="myTabsContent">
    {tab === 0 && <Account setTab={setTab} />}
    {tab === 1 && <Social setTab={setTab} />}
    {tab === 2 && <Personal setTab={setTab} />}
    {tab === 3 && <Finish setTab={setTab} />}
  </div>
</div>

</div> */}


