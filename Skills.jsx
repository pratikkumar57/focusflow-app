import { useState, useEffect } from "react";
import Layout from "../components/Layout";

export default function Skills() {
  const [skillName, setSkillName] = useState("");

  const [skills, setSkills] = useState(() => {
    const saved = localStorage.getItem(
      "focusflow_skills"
    );

    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 1,
            name: "Python",
            xp: 450,
            level: 5,
          },
          {
            id: 2,
            name: "JavaScript",
            xp: 300,
            level: 4,
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem(
      "focusflow_skills",
      JSON.stringify(skills)
    );
  }, [skills]);

  const addSkill = () => {
    if (!skillName.trim()) return;

    const newSkill = {
      id: Date.now(),
      name: skillName,
      xp: 0,
      level: 1,
    };

    setSkills([...skills, newSkill]);

    setSkillName("");
  };

  const deleteSkill = (id) => {
    setSkills(
      skills.filter(
        (skill) => skill.id !== id
      )
    );
  };

  const addSkillXP = (id) => {
    setSkills(
      skills.map((skill) => {
        if (skill.id === id) {

          const newXP =
            skill.xp + 50;

          return {
            ...skill,
            xp: newXP,
            level:
              Math.floor(
                newXP / 100
              ) + 1,
          };
        }

        return skill;
      })
    );
  };

  return (
    <Layout>
      <h1 className="text-5xl font-bold mb-8">
        Skills Tracker 🎯
      </h1>

      <div className="bg-slate-900 p-6 rounded-3xl mb-6">

        <div className="flex gap-4">

          <input
            type="text"
            placeholder="Add Skill"
            value={skillName}
            onChange={(e) =>
              setSkillName(
                e.target.value
              )
            }
            className="flex-1 p-3 bg-slate-800 rounded-xl"
          />

          <button
            onClick={addSkill}
            className="bg-purple-600 px-6 rounded-xl"
          >
            Add Skill
          </button>

        </div>

      </div>

      <div className="space-y-4">

        {skills.map((skill) => {

          const progress =
            skill.xp % 100;

          return (
            <div
              key={skill.id}
              className="bg-slate-900 p-6 rounded-3xl"
            >
              <div className="flex justify-between">

                <div>

                  <h2 className="text-2xl font-bold">
                    {skill.name}
                  </h2>

                  <p>
                    Level : {skill.level}
                  </p>

                  <p>
                    XP : {skill.xp}
                  </p>

                </div>

                <div className="flex gap-3">

                  <button
                    onClick={() =>
                      addSkillXP(
                        skill.id
                      )
                    }
                    className="bg-green-600 px-4 rounded"
                  >
                    +50 XP
                  </button>

                  <button
                    onClick={() =>
                      deleteSkill(
                        skill.id
                      )
                    }
                    className="bg-red-600 px-4 rounded"
                  >
                    Delete
                  </button>

                </div>

              </div>

              <div className="w-full bg-slate-700 rounded-full h-4 mt-4">

                <div
                  className="bg-purple-500 h-4 rounded-full"
                  style={{
                    width: `${progress}%`,
                  }}
                />

              </div>

            </div>
          );
        })}

      </div>
    </Layout>
  );
}