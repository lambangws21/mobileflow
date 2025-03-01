export default function TransactionList() {
    const transactions = [
      { name: "Hunter Macbook", amount: "$200", status: "New" },
      { name: "Hexagon", amount: "$340", status: "" },
      { name: "Marco Ruiz", amount: "$120", status: "" },
    ];
  
    return (
      <div className="p-6 rounded-xl shadow-md bg-white space-y-4">
        <h3 className="font-semibold">Today</h3>
        {transactions.map((trx, index) => (
          <div key={index} className="flex justify-between items-center">
            <div>
              <p className="font-medium">{trx.name}</p>
              <p className="text-sm text-gray-500">{trx.amount}</p>
            </div>
            {trx.status && <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">{trx.status}</span>}
          </div>
        ))}
      </div>
    );
  }
  