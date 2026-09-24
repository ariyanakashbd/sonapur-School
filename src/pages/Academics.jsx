const classes = [
  {
    grade: '১ম–২য় শ্রেণি',
    desc: 'শিশুর হাতের লেখা, সংখ্যা চেনা ও মৌলিক পড়াশোনার ভিত্তি তৈরি। খেলাধুলার মাধ্যমে আনন্দময় শিক্ষা।',
    subjects: ['বাংলা', 'ইংরেজি', 'গণিত', 'প্রাথমিক বিজ্ঞান'],
  },
  {
    grade: '৩য়–৪র্থ শ্রেণি',
    desc: 'পাঠ্যবইয়ের গভীরে প্রবেশ ও নিয়মিত মূল্যায়ন। কুইজ, বার্ষিক ক্রীড়া ও সাংস্কৃতিক অনুষ্ঠানে অংশগ্রহণ।',
    subjects: ['বাংলা', 'ইংরেজি', 'গণিত', 'বাংলাদেশ ও বিশ্বপরিচয়', 'প্রাথমিক বিজ্ঞান', 'ধর্ম ও নৈতিক শিক্ষা'],
  },
  {
    grade: '৫ম শ্রেণি',
    desc: 'প্রাথমিক সমাপনী পরীক্ষার (PSC) জন্য বিশেষ প্রস্তুতি। মডেল টেস্ট ও অতিরিক্ত ক্লাসের মাধ্যমে সাফল্য নিশ্চিতকরণ।',
    subjects: ['বাংলা', 'ইংরেজি', 'গণিত', 'বাংলাদেশ ও বিশ্বপরিচয়', 'প্রাথমিক বিজ্ঞান'],
  },
]

const routine = [
  { time: '৯:০০ - ৯:৪৫', period: '১ম পিরিয়ড' },
  { time: '৯:৪৫ - ১০:৩০', period: '২য় পিরিয়ড' },
  { time: '১০:৩০ - ১০:৪৫', period: 'টিফিন বিরতি' },
  { time: '১০:৪৫ - ১১:৩০', period: '৩য় পিরিয়ড' },
  { time: '১১:৩০ - ১২:১৫', period: '৪র্থ পিরিয়ড' },
  { time: '১২:১৫ - ১:০০', period: '৫ম পিরিয়ড' },
]

export default function Academics() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-primary mb-2">একাডেমিক কার্যক্রম 📚</h1>
      <p className="text-gray-600 mb-10">জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) অনুমোদিত পাঠদান</p>

      <div className="grid md:grid-cols-3 gap-6">
        {classes.map((c) => (
          <div key={c.grade} className="bg-white rounded-2xl shadow p-6 border-t-4 border-secondary">
            <h2 className="text-xl font-bold text-primary">{c.grade}</h2>
            <p className="text-gray-600 text-sm mt-3">{c.desc}</p>
            <h4 className="font-semibold mt-4 text-gray-700">বিষয়সমূহ:</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {c.subjects.map((s) => (
                <span key={s} className="bg-light text-primary text-xs font-medium px-3 py-1 rounded-full border border-primary/20">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-primary mt-14 mb-6">⏰ দৈনিক ক্লাস রুটিন</h2>
      <div className="bg-white rounded-2xl shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-primary text-white">
            <tr>
              <th className="px-6 py-3">সময়</th>
              <th className="px-6 py-3">কার্যক্রম</th>
            </tr>
          </thead>
          <tbody>
            {routine.map((r, i) => (
              <tr key={r.time} className={i % 2 ? 'bg-light' : ''}>
                <td className="px-6 py-3 font-semibold text-primary">{r.time}</td>
                <td className="px-6 py-3 text-gray-700">{r.period}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
