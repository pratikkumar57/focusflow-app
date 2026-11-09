import { useState, useEffect } from "react";
import Layout from "../components/Layout";

export default function Settings() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const saved =
      JSON.parse(
        localStorage.getItem(
          "focusflow_settings"
        )
      ) || {};

    setName(saved.name || "");
    setEmail(saved.email || "");
  }, []);

  const saveSettings = () => {
    localStorage.setItem(
      "focusflow_settings",
      JSON.stringify({
        name,
        email,
      })
    );

    alert("Settings Saved Successfully ✅");
  };

  const resetData = () => {
    localStorage.clear();

    setName("");
    setEmail("");

    alert("All Data Reset ✅");
  };

  return (
    <Layout>
      <h1 className="text-5xl font-bold mb-8">
        Settings ⚙️
      </h1>

      <div className="bg-slate-900 p-8 rounded-3xl max-w-2xl">

        <label className="block mb-2">
          Name
        </label>

        <input
          type="text"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          className="w-full p-3 bg-slate-800 rounded-xl mb-6"
        />

        <label className="block mb-2">
          Email
        </label>

        <input
          type="email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full p-3 bg-slate-800 rounded-xl mb-6"
        />

        <div className="flex gap-4">

          <button
            onClick={saveSettings}
            className="bg-purple-600 px-6 py-3 rounded-xl"
          >
            Save Settings
          </button>

          <button
            onClick={resetData}
            className="bg-red-600 px-6 py-3 rounded-xl"
          >
            Reset Data
          </button>

        </div>

      </div>
    </Layout>
  );
}