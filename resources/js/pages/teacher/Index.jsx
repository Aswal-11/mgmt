import SidebarLayout from "../../Layouts/SidebarLayout"
import { Link, usePage } from "@inertiajs/react"
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

    return (
        <>
            <div className="flex justify-end w-full mb-4">
                <Link
                    href="/teachers_create"
                    className="p-2 text-sm bg-blue-400 hover:bg-blue-600 font-semibold text-white rounded-sm"
                >
                    + Create
                </Link>
            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Subject</TableHead>
                        <TableHead>Email</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {teachers && teachers.length > 0 ? (
                        teachers.map((teacher, index) => (
                            <TableRow className="hover:bg-gray-200" key={index}>
                                <TableCell>{teacher.name}</TableCell>
                                <TableCell>{teacher.subject}</TableCell>
                                <TableCell>{teacher.email}</TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={3} className="text-center text-gray-500">
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
