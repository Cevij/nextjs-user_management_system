import { Lead } from "./Model/LeadModel"
import { columns } from "./Columns";
import { DataTable } from "./DataTable";
import { STATUS } from "./Model/StatusEnum";

async function getLeads(): Promise<Lead[]> {
  const res = await fetch('http://localhost:5000/api/leads');
  const leads: Lead[] = await res.json()

  leads.map(lead => {
    lead.status = STATUS[lead.status]
  })

  // Fetch data from your API here.

  return leads;
}

export default async function HomePage() {
  const data = await getLeads()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}