export default function SkillCard({
  skill,
  level,
  progress,
}) {
  return (
    <div className="bg-slate-900 p-5 rounded-2xl">
      <div className="flex justify-between mb-3">
        <h2>{skill}</h2>
        <span>Lv.{level}</span>
      </div>

      <div className="w-full bg-slate-700 h-4 rounded-full">
        <div
          className="bg-purple-500 h-4 rounded-full"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      <p className="mt-2">
        {progress}% Complete
      </p>
    </div>
  );
}