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
    title: "Azure.Microsoft.com",
    description:
      "Discover a wide range of cloud services and solutions offered by Microsoft Azure. From computing and networking to databases and AI, Azure provides the tools you need to build, manage, and deploy applications on a global scale.",
    url: "https://azure.microsoft.com?wt.mc_id=studentamb_252792",
  },
  {
    title: "Cloudblogs.Microsoft.com",
    description:
      "Description: Stay informed with the latest news and insights on Microsoft's cloud technologies. Explore blog posts covering innovations, best practices, and industry trends to help you maximize your cloud solutions.",
    url: "https://www.microsoft.com/microsoft-cloud/blog?wt.mc_id=studentamb_252792",
  },
  {
    title: "Code.Visualstudio.com",
    description:
      "Access comprehensive documentation and resources for Visual Studio Code, a powerful and versatile code editor. Find extensions, tips, and tutorials to enhance your coding experience.",
    url: "https://code.visualstudio.com?wt.mc_id=studentamb_252792",
  },
  {
    title: "Visual Studio Code Documentation",
    description:
      "Explore detailed guides and tutorials designed to help you make the most of Visual Studio Code. Learn about features, extensions, and integrations to streamline your development workflow.",
    url: "https://code.visualstudio.com/docs?wt.mc_id=studentamb_252792",
  },
  {
    title: "Devblogs.Microsoft.com",
    description:
      "Dive into technical articles and content crafted for developers by Microsoft experts. Get insights into development tools, frameworks, and best practices to enhance your projects.",
    url: "https://devblogs.microsoft.com?wt.mc_id=studentamb_252792",
  },
  {
    title: "Learn.Microsoft.com",
    description:
      "Boost your skills with interactive learning paths and certifications from Microsoft. Whether you're a beginner or an expert, find resources to advance your knowledge and career.",
    url: "https://learn.microsoft.com?wt.mc_id=studentamb_252792",
  },
  {
    title: "Social.Msdn.Microsoft.com",
    description:
      "Engage with a community of developers on Microsoft's MSDN platform. Share experiences, ask questions, and collaborate with peers to solve technical challenges.",
    url: "https://learn.microsoft.com?wt.mc_id=studentamb_252792",
  },
  {
    title: "Social.Technet.Microsoft.com",
    description:
      "Connect with IT professionals and share your expertise on TechNet. Participate in discussions, find solutions, and contribute to a wealth of technical knowledge.",
    url: "https://learn.microsoft.com?wt.mc_id=studentamb_252792",
  },
  {
    title: "Startups.Microsoft.com",
    description:
      "Learn how Microsoft supports startups with access to tools, resources, and mentorship. Discover programs designed to help startups innovate and scale their businesses.",
    url: "https://www.microsoft.com/startups?wt.mc_id=studentamb_252792",
  },
  {
    title: "Techcommunity.Microsoft.com",
    description:
      "Join the Microsoft Tech Community to engage in discussions, get expert advice, and share your knowledge. Connect with professionals across various fields to collaborate and learn.",
    url: "https://techcommunity.microsoft.com?wt.mc_id=studentamb_252792",
  },
  {
    title: "Microsoft.com/Startups",
    description:
      "Explore Microsoft's initiatives to support startup companies through resources, tools, and programs. Learn how to leverage Microsoft's ecosystem to accelerate your startup's growth.",
    url: "https://www.microsoft.com/startups?wt.mc_id=studentamb_252792",
  },
  {
    title: "GitHub Codespaces and github.dev",
    description:
      "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
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
