import Table from "@/components/ui/table";

interface Transaction {
    date: string;
    information: string;
    typecost: string;
    amount: number;
    claim: string;
  }
  
  interface TableColumn<T> {
    key: keyof T;      // ✅ kuncinya ada di sini
    label: string;
  }
  

  const columns: readonly TableColumn<Transaction>[] = [
    { key: "date", label: "Date" },
    { key: "information", label: "Information" },
    { key: "typecost", label: "Type Cost" },
    { key: "amount", label: "Amount" },
    { key: "claim", label: "Claim" },
  ];
  


const data: Transaction[] = [
  { date: "2025-02-28", information: "Pembelian Alat", typecost: "Operational", amount: 500000, claim: "Approved" },
  { date: "2025-02-29", information: "Meeting Internal", typecost: "Entertainment", amount: 300000, claim: "Pending" },
];

export default function TransactionTable() {
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Transaction List</h2>
      <Table<Transaction> columns={columns} data={data} />
    </div>
  );
}
