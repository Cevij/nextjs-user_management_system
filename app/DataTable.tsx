"use client"
//we have to import a lot of things and here are they
import {
    Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue
} from "@nextui-org/react"
import { Lead } from "./Model/LeadModel"
import { STATUS } from "./Model/StatusEnum"

//now we are expecting 2 props: columns and the data(that we are expecting from the page component)
export function DataTable({
    columns,
    data
}: {columns: any[], data: Lead[]} ) {

    return (
        <Table aria-label="Example table with dynamic content">
            <TableHeader columns={columns}>
                {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
            </TableHeader>
            {data?.length ? <TableBody items={data}>
                {(item: Lead) => (
                    <TableRow key={item.id}>
                        {(columnKey: any) => {
                            if (columnKey === 'status') return <TableCell>{STATUS[getKeyValue(item, columnKey)]}</TableCell>
                            return <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                        }
                        }
                    </TableRow>
                )}
            </TableBody> 
            : 
            <TableBody emptyContent={"No rows to display."}>{[]}</TableBody>}
        </Table>
    )
}