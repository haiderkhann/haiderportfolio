import scss from "../styles/Experience.module.scss";

export default function Experience() {
  const experience = [
    {
      field: "HTML",
      years: 1,
    },
    {
      field: "CSS",
      years: 1,
    },
    {
      field: "Javascript",
      years: 1,
    },
    {
      field: "Accessibility",
      years: 1,
    },
    {
      field: "React",
      years: 1,
    },
    {
      field: "Sass",
      years: 1,
    },
  ];

  return (
    <section aria-label="experience" className={scss.experience}>
      {experience.map((exp, index) => (
        <div key={index}>
          <h1>{exp.field}</h1>
          <p>{exp.years} Years Experience</p>
        </div>
      ))}
    </section>
  );
}
