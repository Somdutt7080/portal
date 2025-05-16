export function Badge({ children }: { children: React.ReactNode }) {
  const colorMap: any = {
    Bronze: 'bg-yellow-200 text-yellow-800',
    Silver: 'bg-gray-200 text-gray-700',
    Platinum: 'bg-green-200 text-green-700',
    'No plan': 'bg-gray-100 text-gray-400',
  };
  return (
    <span className={`text-xs px-2 py-1 rounded-full ${colorMap[children as string]}`}>
      {children}
    </span>
  );
}