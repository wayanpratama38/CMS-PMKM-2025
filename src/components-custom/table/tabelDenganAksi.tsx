import { AiOutlineDelete } from "react-icons/ai";
import { RiEditBoxLine } from "react-icons/ri";

export default function TableDenganAksi() {
 return (
 <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              
                <th scope="col" className="px-6 py-3 text-center">
                    Nama
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                    Jabatan
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                    Foto
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                   Aksi
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Kepala Desa
                </td>
                <td className="px-6 py-4">
                    Kepala Desa
                </td>
                <td className="px-6 py-4">
                    foto
                </td>
                <td className="px-6 py-4 flex justify-items-center justify-center gap-2">
                   <a href="#" className="bg-red-600 p-2 rounded-full"><AiOutlineDelete size={24} color="white" /></a>
                   <a href="#" className="bg-yellow-600 p-2 rounded-full"><RiEditBoxLine size={24} color="white" /></a>
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Kepala Desa
                </td>
                <td className="px-6 py-4">
                   Kepala Desa
                </td>
                <td className="px-6 py-4">
                    Kepala Desa
                </td>
                <td className="px-6 py-4 flex justify-items-center justify-center gap-2">
                   <a href="#" className="bg-red-600 p-2 rounded-full"><AiOutlineDelete size={24} color="white" /></a>
                   <a href="#" className="bg-yellow-600 p-2 rounded-full"><RiEditBoxLine size={24} color="white" /></a>
                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Kepala Desa
                </td>
                <td className="px-6 py-4">
                    Kepala Desa
                </td>
                <td className="px-6 py-4">
                    Kepala Desa
                </td>
                <td className="px-6 py-4 flex justify-items-center justify-center gap-2">
                   <a href="#" className="bg-red-600 p-2 rounded-full"><AiOutlineDelete size={24} color="white" /></a>
                   <a href="#" className="bg-yellow-600 p-2 rounded-full"><RiEditBoxLine size={24} color="white" /></a>
                </td>
            </tr>
        </tbody>
    </table>
</div>


 )
}