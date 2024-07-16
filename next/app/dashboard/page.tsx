"use client"

import { useEffect, useState } from 'react';
import Statistics from '../ui/dashboard/statistics';
import type { Statistic } from '../lib/@types/dashboard';
import { fetchDashboardStats } from '../services/dashboard';

export default async function Page() {

  const [data, setData] = useState<Statistic[]>([])

  useEffect(() => {
    fetchDashboardStats().then(res => setData(res.data))
  }, [])

  return (
    <div>
      <h1 className={`mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <Statistics data={data} />
    </div>
  );
}