import { AiOutlineDelete } from "react-icons/ai";
import { RiEditBoxLine } from "react-icons/ri";

export default function TableDenganAksi({ columns, data, onEdit, onDelete }) {
  return (
    <div className="mt-6 rounded-xl border border-gray-100 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-gray-600 dark:text-gray-300">
          <thead className="text-xs text-gray-500 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {columns.map((col, index) => (
                <th
                  key={index}
                  scope="col"
                  className="px-6 py-3 text-left font-semibold tracking-wide"
                >
                  {col.header}
                </th>
              ))}
              <th className="px-6 py-3 text-center font-semibold tracking-wide">
                Aksi
              </th>
            </tr>
          </thead>

          <tbody>
            {data.length > 0 ? (
              data.map((row, i) => (
                <tr
                  key={i}
                  className="border-b last:border-b-0 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  {columns.map((col, ci) => (
                    <td key={ci} className="px-6 py-4">
                      {row[col.key] ?? "-"}
                    </td>
                  ))}
                  <td className="px-6 py-4 flex justify-center gap-2">
                    <button
                      onClick={() => onDelete?.(row)}
                      className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition"
                      title="Hapus"
                    >
                      <AiOutlineDelete size={18} />
                    </button>

                    <button
                      onClick={() => onEdit?.(row)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-full transition"
                      title="Edit"
                    >
                      <RiEditBoxLine size={18} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length + 1}
                  className="py-4 text-center text-gray-400 dark:text-gray-300"
                >
                  Tidak ada data
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}