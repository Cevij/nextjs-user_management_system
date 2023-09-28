"use client"
//we have to import a lot of things and here are they
import {
    Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue
} from "@nextui-org/react"
import { Lead } from "./Model/LeadModel"

//now we are expecting 2 props: columns and the data(that we are expecting from the page component)
export function DataTable({
    columns,
    data
}: {columns: any[], data: any[]} ) {

    return (
        <Table aria-label="Example table with dynamic content">
            <TableHeader columns={columns}>
                {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
            </TableHeader>
            <TableBody items={data}>
                {(item: Lead) => (
                    <TableRow key={item.id}>
                        {(columnKey: any) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
}