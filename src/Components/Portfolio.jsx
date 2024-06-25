/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Microsoft Learn Student Ambassadors Profile 🎉",
    description:
      "As a Microsoft Learn Student Ambassador, I engaged with a global community of students to share knowledge and foster a collaborative learning environment. I organized and led workshops, webinars, and coding sessions to empower peers with skills in Microsoft technologies. This role enhanced my leadership abilities, expanded my technical expertise, and allowed me to contribute to the growth of a vibrant tech community.",
    url: "https://mvp.microsoft.com/enUS/studentambassadors/profile/f26cf0aa-6add-4da3-b434-af65154ab4b2",
  },
  {
    title: "Become a Student Ambassador",
    description:
      "Join the Microsoft Learn Student Ambassadors program to enhance your skills, connect with a global community, and lead initiatives that inspire others. As an ambassador, you will gain access to exclusive resources, mentorship, and opportunities to collaborate on impactful projects. Start your journey towards becoming a tech leader today.",
    url: "https://learn.microsoft.com/training/student-hub/become-a-student-ambassador?wt.mc_id=studentamb_252792",
  },
  {
    title: "Azure login",
    description:
      "Access your Azure account to manage cloud services, monitor applications, and leverage powerful tools for development and deployment. The Azure login portal provides a seamless entry point to the full suite of Azure resources, enabling efficient cloud management and innovation.",
    url: "https://azure.microsoft.com?wt.mc_id=studentamb_252792",
  },
  {
    title: "GitHub Codespaces and github.dev",
    description:
      "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },
  {
    title: "Resources for Students",
    description:
      "Explore a wealth of resources tailored for students on the Microsoft Azure platform. Access tools, tutorials, and projects designed to enhance your technical skills and support your learning journey. Dive into the GitHub tab for collaborative coding opportunities and stay updated with the latest in Azure innovations. Empower your education and career with these invaluable resources.",
    url: "https://azure.microsoft.com/resources/students/?activetab=pivot:githubtab/&wt.mc_id=studentamb_252792",
  },
  {
    title: "Microsoft Cloud Blog",
    description:
      "Stay informed with the latest insights, updates, and best practices in cloud technology through the Microsoft Cloud Blog. Discover articles from industry experts, explore innovative cloud solutions, and keep up with trends shaping the future of cloud computing. This blog is an essential resource for students and professionals eager to deepen their understanding of Microsoft's cloud ecosystem.",
    url: "https://www.microsoft.com/microsoft-cloud/blog?wt.mc_id=studentamb_252792",
  },
  
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
