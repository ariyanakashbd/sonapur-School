export default function NoticeCard({ date, title, desc }) {
  return (
    <div className="bg-white rounded-xl shadow p-5 border-l-4 border-secondary hover:shadow-lg transition">
      <span className="text-xs bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full">
        📅 {date}
      </span>
      <h3 className="font-bold text-lg mt-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm mt-1">{desc}</p>
    </div>
  )
}
