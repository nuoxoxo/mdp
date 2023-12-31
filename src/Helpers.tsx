export const GetRandomColor = () => {
  const chars: string = '0123456789ABCDEF'
  let hex: string = '#'
  let i: number = -1
  while (++i < 6) {
    hex += chars[Math.floor(Math.random() * 16)];
  }
  return hex;
}
