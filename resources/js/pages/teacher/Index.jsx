import SidebarLayout from "../../Layouts/SidebarLayout"
import { Link, usePage, router } from "@inertiajs/react"
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { Button } from "@/components/ui/button"
import {
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableHead,
    TableCell,
} from "@/components/ui/table"

export default function index() {
    const { teachers } = usePage().props

    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this teacher?")) {
            router.delete(`/teacher/delete/${id}`)
        }
    }


    return (
        <>
            <div className="flex w-full mb-4">
                <Link href="/teachers_create">
                    <Button className="bg-blue-400 hover:bg-blue-800 text-white 
                        active:scale-95 active:bg-blue-600 
                        transition-all duration-75">
                        <IoMdAdd className="text-lg p-0" /> Create
                    </Button>
                </Link>
            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Subject</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Edit</TableHead>
                        <TableHead>Delete</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {teachers && teachers.length > 0 ? (
                        teachers.map((teacher, index) => (
                            <TableRow className="hover:bg-gray-200" key={index}>
                                <TableCell>{teacher.name}</TableCell>
                                <TableCell>{teacher.subject}</TableCell>
                                <TableCell>{teacher.email}</TableCell>

                                {/* Edit */}
                                <TableCell className="text-green-600 px-3">
                                    <FaRegEdit />
                                </TableCell>

                                {/* Delete */}
                                <TableCell className="text-lg text-red-400 px-3">
                                    <button
                                        onClick={() => handleDelete(teacher.id)}
                                        className="hover:text-red-600"
                                    >
                                        <MdDelete />
                                    </button>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={5} className="text-center text-gray-500">
                                No teachers found
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </>
    )
}

index.layout = (page) => <SidebarLayout>{page}</SidebarLayout>
