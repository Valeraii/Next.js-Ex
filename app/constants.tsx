// import React from "react"
export const firstName = "Yoshi";
export const lastName = "Nagai";
export const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
];

export const projects = [
  {
    name: "P1",
    description:
      "Desc for P1",
    image: "/headshot.png",
    github: "https://github.com/",
    link: "https://github.com/",
  },
  {
    name: "P2",
    description: "Desc for P2",
    image: "/headshot.png",
    github: "https://github.com/",
    link: "https://github.com/",
  },
  {
    name: "P3",
    description:
      "Desc for P3",
    image: "/headshot.png",
    github: "https://github.com/",
    link: "https://github.com/",
  },
]

export const selfIntroductionHero = (
  <>
    <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hi, I&#39;m {firstName} !</h1>
    <p className="text-lg mt-4 mb-6 md:text-2xl">
      I&#39;m a{" "}
      <span className="font-semibold text-teal-600">
        Software Engineer{" "}
      </span>
      based in Vancouver, BC. Working towards creating software that
      makes life easier and more meaningful.
    </p>
  </>
);
export const selfIntroductionAbout = (
  <>
  <p>
  Hi, my name is {firstName} {lastName} and I am a{" "}
  <span className="font-bold">{"highly ambitious"}</span>,
  <span className="font-bold">{" self-motivated"}</span>, and
  <span className="font-bold">{" driven"}</span> software engineer.
</p>
<br />
<p>
  Insert your own Content
</p>
<br />
<p>
  Insert your own Content
</p>
<br />
<p>
  I believe that you should{" "}
  <span className="font-bold text-teal-500">
    never stop growing
  </span>{" "}
  and that&#39;s what I strive to do, I have a passion for
  technology and a desire to always push the limits of what is
  possible. 
</p>
  </>
)