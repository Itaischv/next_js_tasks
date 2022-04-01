import Head from "next/head";

export default function Home() {
  return (
      <div className="flex flex-col items-center justify-center py-2">
        <div>
          <Head>
            <title>Supabase and NextJs Demo</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <h1 className="text-4xl font-bold mt-20">
              <a className="text-blue-600" href="/">
                Full Stack Application With Tailwind CSS and Supabase in NextJs
              </a>
            </h1>

            <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
              <div className="p-8 mt-6 border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
                <div className="w-full max-w-sm">
                  <form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                      <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="taskName"
                      >
                        Task Name
                      </label>
                      <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="taskName"
                          type="text"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="taskActivity"
                      >
                        Task Activity
                      </label>

                      <textarea
                          className="form-textarea mt-1 block shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          rows="3"
                          placeholder="Task Activity"
                      ></textarea>
                    </div>

                    <div className="mb-4">
                      <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="startDate"
                      >
                        Task Start Date
                      </label>
                      <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="startDate"
                          type="date"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="endDate"
                      >
                        Task End Date
                      </label>
                      <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="endDate"
                          type="date"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                          type="button"
                      >
                        Add Task
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="p-2 mt-6 w-96 rounded-xl focus:text-blue-600">
                <table className="shadow-lg bg-white">
                  <tbody>
                  <tr>
                    <th className="bg-blue-400 border text-left px-4 py-4">
                      S/N
                    </th>
                    <th className="bg-blue-400 border text-left px-8 py-4">
                      Name
                    </th>
                    <th className="bg-blue-400 border text-left px-8 py-4">
                      Activity
                    </th>
                    <th className="bg-blue-400 border text-left px-14 py-4">
                      Start Date
                    </th>
                    <th className="bg-blue-400 border text-left px-16 py-4">
                      End Date
                    </th>

                    <th className="bg-blue-400 border text-left px-4 py-4">
                      Action
                    </th>
                  </tr>
                  <tr>
                    <td className="border px-4 py-4"></td>
                    <td className="border px-4 py-4"></td>
                    <td className="border px-8 py-4"></td>
                    <td className="border px-8 py-4"></td>
                    <td className="border px-8 py-4"></td>
                    <td className="border px-8 py-4">
                      {" "}
                      <button
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                          type="button"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>
  );
}
