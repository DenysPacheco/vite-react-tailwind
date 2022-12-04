import React from 'react'

export default function Compose(props) {
  return (
    <div className="rounded-xl p-3 mb-4 bg-slate-300 dark:bg-slate-700">
      <div className="text-gray-900 dark:text-gray-300 font-bold">
        Example of React Compose Components
      </div>
      <div>
        <div className="inline-flex text-gray-900 dark:text-gray-300 mb-2">
          <div>Props:</div>
          <table className="table-auto">
            <tbody>
              {Array.from(Object.entries(props)).map(([key, value]) => (
                <tr
                  key={key + Math.random()}
                  className="block w-fit m-auto font-mono rounded-t rounded-x border-t-transparent border-x-transparent border-dotted border-2 border-sky-500 hover:border-2 hover:border-solid hover:border-sky-500 hover:rounded"
                >
                  <td>{key}:</td>
                  <td>{value.toString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <div className="inline-flex text-gray-900 dark:text-gray-300 mb-3">
          <div>Children:</div>
          <div className="px-2 text-center front-mono">{props.children}</div>
        </div>
      </div>
    </div>
  )
}
