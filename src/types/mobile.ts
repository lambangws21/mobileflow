// Profile data
export interface Profile {
    name: string;
    level: string;
    stars: number;
  }
  
  // Tournament data
  export interface Tournament {
    name: string;
    entryFee: number;
    endDate: string;
  }
  
  // Stats data
  export interface Stats {
    progress: number;
    arenaScore: number;
    ranking: number;
    following: number;
  }
  
  // Transaction data
  export interface Transaction {
    date: string;
    amount: string;
  }
  
  // Full Dashboard Data (gabungan semua di atas)
  export interface DashboardData {
    profile: Profile;
    tournament: Tournament;
    stats: Stats;
    transactions: Transaction[];
  }
  
  export interface DataRow {
    no: number;
    date: string;
    jenisBiaya: string;
    keterangan: string;
    jumlah: string;
    klaimOleh: string;
    status: string;
  }