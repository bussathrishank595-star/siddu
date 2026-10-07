export default function StatCard({ icon: Icon, label, value, detail, accent = 'green' }) {
  return <article className={`stat-card ${accent}`}><div className="stat-icon"><Icon size={20}/></div><div><p>{label}</p><h3>{value}</h3><small>{detail}</small></div></article>;
}
