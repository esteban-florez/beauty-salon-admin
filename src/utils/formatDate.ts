export default function formatDate(dateString: string | null): string {
  if (dateString === null) return 'N/A'

  const date = new Date(dateString)

  const months = [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
  ]

  return `${date.getDate()} de ${months[date.getMonth()]} del ${date.getFullYear()}`
}
