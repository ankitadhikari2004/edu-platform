import { Link } from "react-router-dom";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

const SocialLink = ({ icon, to }) => (
  <Link to={to}>
    <div className="circle bg-white rounded-full h-7 w-7 flex justify-center items-center">
      {icon}
    </div>
  </Link>
);

const ContactInfo = ({ icon, text }) => (
  <div className="flex gap-6">
    <div className="circle bg-white rounded-full h-7 w-7 flex justify-center items-center">
      {icon}
    </div>
    <p className="text-slate-300">{text}</p>
  </div>
);

const FooterSection = ({ title, links }) => (
  <div className="flex flex-col text-slate-300 gap-4 font-medium text-sm">
    {links.map((link) => (
      <Link key={link.to} to={link.to}>{link.title}</Link>
    ))}
  </div>
);

export const Footer = () => {
  const leftLinks = [
    { to: "/", title: "Home" },
    { to: "/about", title: "About Us" },
    { to: "/contact", title: "Contact" },
    { to: "/career", title: "Career" },
  ];

  const rightLinks = [
    { to: "/notes/study-material", title: "Study Material" },
    { to: "/notes/asignments", title: "Assignment" },
    { to: "/notes/questions", title: "PYQs" },
    { to: "/notes/note", title: "Notes" },
    { to: "/notes/research-paper", title: "Research Paper" },
    { to: "/notes/archives", title: "Archives" },
  ];

  return (
    <div className="wrapper bg-slate-800">
      <div className="flex flex-wrap gap-2 md:gap-60">
        <div className="flex flex-col gap-4">
          <div className="px-4 pt-5">
            <p className="text-neutral-200 text-3xl font-medium">
              Educate
            </p>
          </div>

          <div className="leftdown h-fit">
            <div className="contact flex flex-col px-4 text-sm gap-3 py-4">
              <ContactInfo icon={<MdEmail />} text="contact@educate.com" />
              <ContactInfo icon={<FaPhone />} text="+91 9834097122" />
            </div>
          </div>
        </div>

        <div className="right flex gap-52 justify-around px-10 py-10">
          <FooterSection title="Home" links={leftLinks} />
          <FooterSection title="Explore" links={rightLinks} />
        </div>
      </div>

      <div className="border-t border-slate-500 flex justify-between">
        <div className="downleft px-4 py-4">
          <p className="text-slate-400 text-sm tracking-wide font-medium">
            Copyright © 2024 Educate | All rights reserved
          </p>
        </div>

        <div className="downright">
          <div className="social flex gap-5 py-3 px-4">
            <SocialLink icon={<FaYoutube />} to="/youtube" />
            <SocialLink icon={<RiInstagramFill />} to="/instagram" />
            <SocialLink icon={<FaTwitter />} to="/twitter" />
            <SocialLink icon={<FaLinkedin />} to="/linkedin" />
          </div>
        </div>
      </div>
    </div>
  );
};
