import type { NextApiRequest, NextApiResponse } from 'next';
import { DashboardData } from '@/types/mobile';

export default function handler(req: NextApiRequest, res: NextApiResponse<DashboardData | { error: string }>) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const mockData: DashboardData = {
    profile: {
      name: "Egor Gajduk",
      level: "Intermediate",
      stars: 2,
    },
    tournament: {
      name: "Autumn Cup",
      entryFee: 100,
      endDate: "10.07.2019",
    },
    stats: {
      progress: 43,
      arenaScore: 77,
      ranking: 1239,
      following: 10,
    },
    transactions: [
      { date: "2025-03-01", amount: "$500.00" },
      { date: "2025-03-02", amount: "$300.00" },
    ],
  };

  res.status(200).json(mockData);
}
