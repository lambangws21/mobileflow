import { DashboardData } from "@/types/mobile";

// Sesuaikan bentuk data berdasarkan hasil doGet dari Apps Script
export async function fetchDashboardData(): Promise<DashboardData> {
  const response = await fetch("/api/get-data-pre");

  if (!response.ok) {
    throw new Error(`Failed to fetch data, status: ${response.status}`);
  }

  const rawData = await response.json();

  // Mapping data agar sesuai dengan tipe DashboardData
  return {
    profile: {
      name: "Egor Gajduk",  // Diambil statis karena tidak ada di Sheet1
      level: "Intermediate", // Diambil statis karena tidak ada di Sheet1
      stars: 2,               // Diambil statis karena tidak ada di Sheet1
    },
    tournament: {
      name: "Autumn Cup",     // Statis juga (dummy)
      entryFee: 100,          // Statis juga (dummy)
      endDate: "10.07.2019",  // Statis juga (dummy)
    },
    stats: {
      progress: rawData.data.length,    // Anggap jumlah data adalah progress
      arenaScore: 77,                    // Statis (dummy)
      ranking: 1239,                      // Statis (dummy)
      following: 10,                      // Statis (dummy)
    },
    transactions: rawData.data.map((row: any) => ({
      date: row.date,
      amount: row.jumlah ? `$${Number(row.jumlah).toLocaleString()}` : "$0",
    })),
  };
}
