import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto">

        <div className="bg-slate-900 rounded-3xl p-8">

          <div className="grid md:grid-cols-3 gap-10 items-center">

            <div className="flex justify-center">
              <img
                src="/pratik.jpg"
                alt="Pratik Kumar"
                className="w-72 h-72 rounded-full object-cover border-4 border-purple-500 shadow-2xl"
              />
            </div>

            <div className="md:col-span-2">

              <h1 className="text-5xl font-bold mb-4">
                Pratik Kumar 👨‍💻
              </h1>

              <p className="text-2xl text-purple-400 mb-4">
                BCA Student at RIT Roorkee | Data Science Learner
              </p>

              <p className="text-slate-300 leading-8">
                Hello! I'm Pratik Kumar, currently pursuing BCA from RIT Roorkee.
                I am passionate about Data Science, Web Development, AI, Machine
                Learning and building real-world software products.

                FocusFlow was developed during the second year of my graduation
                as a productivity platform for students and learners to manage tasks,
                track habits, improve focus and measure progress through analytics
                and gamification.
              </p>

            </div>

          </div>

        </div>

        <div className="bg-slate-900 rounded-3xl p-8 mt-8">

          <h2 className="text-3xl font-bold mb-6">
            Contact Information 📬
          </h2>

          <div className="space-y-4">

            <div className="bg-slate-800 p-4 rounded-xl">
              📧 Email:
              {" "}
              <a
                href="mailto:pratikkumar787096@gmail.com"
                className="text-purple-400"
              >
                pratikkumar787096@gmail.com
              </a>
            </div>

            <div className="bg-slate-800 p-4 rounded-xl">
              💻 GitHub:
              {" "}
              <a
                href="https://github.com/pratikkumar57"
                target="_blank"
                rel="noreferrer"
                className="text-purple-400"
              >
                github.com/pratikkumar57
              </a>
            </div>

            <div className="bg-slate-800 p-4 rounded-xl">
              🔗 LinkedIn:
              {" "}
              <a
                href="https://www.linkedin.com/in/pratik-kumar--?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noreferrer"
                className="text-purple-400"
              >
                View LinkedIn Profile
              </a>
            </div>

          </div>

        </div>

        <div className="bg-slate-900 rounded-3xl p-8 mt-8">

          <h2 className="text-3xl font-bold mb-6">
            About FocusFlow 🚀
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            <div className="bg-slate-800 p-4 rounded-xl">
              ✅ Task Management System
            </div>

            <div className="bg-slate-800 p-4 rounded-xl">
              ✅ Pomodoro Focus Timer
            </div>

            <div className="bg-slate-800 p-4 rounded-xl">
              ✅ Habit Tracker
            </div>

            <div className="bg-slate-800 p-4 rounded-xl">
              ✅ Skills Tracker
            </div>

            <div className="bg-slate-800 p-4 rounded-xl">
              ✅ XP & Level System
            </div>

            <div className="bg-slate-800 p-4 rounded-xl">
              ✅ Achievement System
            </div>

            <div className="bg-slate-800 p-4 rounded-xl">
              ✅ Analytics Dashboard
            </div>

            <div className="bg-slate-800 p-4 rounded-xl">
              ✅ Local Storage Persistence
            </div>

          </div>

        </div>

      </div>
    </Layout>
  );
}