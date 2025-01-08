import { resumeData } from "../data/resumeData";

export default function ResumePage() {
  const { name, location, contact, education, technicalSkills, experience, projects, additionalInfo, references } =
    resumeData;

  return (
    <main className="bg-white">
      <div className="flex flex-row bg-[#f5f4fc] my-[15em] mx-[10em] py-[6.7em] px-[3.5em]">
        <div>
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#4831d4]">Technical Skills</h2>
            <div className="flex flex-col gap-4 mt-4">
              {Object.entries(technicalSkills).map(([category, skills]) => (
                <div key={category}>
                  <h3 className="text-lg font-semibold capitalize">{category}</h3>
                  <ul className="list-disc ml-6">
                    {skills.map((skill, idx) => (
                      <li key={idx} className="text-gray-600">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
        <div>
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#4831d4]">{name}</h1>
            <p className="text-gray-600">{location}</p>
            <p className="text-gray-600">
              {contact.phone} | <a href={`mailto:${contact.email}`}>{contact.email}</a> |{" "}
              <a href={contact.linkedIn}>{contact.linkedIn}</a>
            </p>
          </header>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#4831d4]">Education</h2>
            {education.map((edu, idx) => (
              <div key={idx} className="mt-4">
                <h3 className="text-lg font-semibold">{edu.degree}</h3>
                <p className="text-gray-600">{edu.institution}</p>
                <p className="text-sm text-gray-500">{edu.period}</p>
                {edu.details && (
                  <ul className="list-disc ml-6 mt-2">
                    {edu.details.map((detail, index) => (
                      <li key={index} className="text-gray-600">
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>


          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#4831d4]">Experience</h2>
            {experience.map((job, idx) => (
              <div key={idx} className="mt-4">
                <h3 className="text-lg font-semibold">
                  {job.role} at {job.company}
                </h3>
                <p className="text-sm text-gray-500">{job.period}</p>
                <ul className="list-disc ml-6 mt-2">
                  {job.points.map((point, index) => (
                    <li key={index} className="text-gray-600">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#4831d4]">Projects</h2>
            {projects.map((project, idx) => (
              <div key={idx} className="mt-4">
                <h3 className="text-lg font-semibold">{project.name}</h3>
                <p className="text-gray-600">{project.role}</p>
                <p className="text-sm text-gray-500">Stack: {project.stack.join(", ")}</p>
                <ul className="list-disc ml-6 mt-2">
                  {project.responsibilities.map((resp, index) => (
                    <li key={index} className="text-gray-600">
                      {resp}
                    </li>
                  ))}
                </ul>
                <p className="text-gray-600 mt-2">{project.outcome}</p>
              </div>
            ))}
            </section>
          </div>
        </div>
    </main>
  );
}
