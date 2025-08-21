import DashboardSkeleton from '@/app/ui/skeletons';

export default function Loading() { // loading.tsx is a special file that Next.js looks for when a page is loading
    return <DashboardSkeleton />; // Adds a loading skeleton to the dashboard page
  }