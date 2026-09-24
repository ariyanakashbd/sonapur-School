import { useState } from 'react'

const steps = [
  { n: '১', title: 'ফরম সংগ্রহ', desc: 'স্কুল অফিস থেকে বা অনলাইনে ভর্তি ফরম সংগ্রহ করুন।' },
  { n: '২', title: 'ফরম জমা', desc: 'প্রয়োজনীয় কাগজপত্রসহ পূরণকৃত ফরম জমা দিন।' },
  { n: '৩', title: 'লটারি/ভাইভা', desc: 'আবেদন বেশি হলে লটারির মাধ্যমে শিক্ষার্থী বাছাই করা হয়।' },
  { n: '৪', title: 'ভর্তি নিশ্চিতকরণ', desc: 'ভর্তি ফি জমা দিয়ে ভর্তি নিশ্চিত করুন। বই বিতরণ করা হবে।' },
]

export default function Admission() {
  const [form, setForm] = useState({ student: '', parent: '', phone: '', cls: 'প্রাক-প্রাথমিক', dob: '' })
  const [submitted, setSubmitted] = useState(false)

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-primary mb-2">ভর্তি তথ্য 📝</h1>
      <p className="text-gray-600 mb-10">নতুন শিক্ষাবর্ষে ভর্তির জন্য প্রয়োজনীয় তথ্য</p>

      <div className="grid md:grid-cols-4 gap-4 mb-14">
        {steps.map((s) => (
          <div key={s.n} className="bg-white rounded-2xl shadow p-6 text-center relative">
            <div className="w-12 h-12 mx-auto rounded-full bg-secondary text-primary text-xl font-bold flex items-center justify-center">
              {s.n}
            </div>
            <h3 className="font-bold text-gray-800 mt-4">{s.title}</h3>
            <p className="text-gray-500 text-sm mt-2">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-light rounded-2xl p-8">
          <h2 className="text-xl font-bold text-primary mb-4">📋 প্রয়োজনীয় কাগজপত্র</h2>
          <ul className="space-y-3 text-gray-700">
            <li>✅ জন্মসনদের ফটোকপি (অবশ্যই)</li>
            <li>✅ পাসপোর্ট সাইজ ছবি — ২ কপি</li>
            <li>✅ অভিভাবকের জাতীয় পরিচয়পত্রের ফটোকপি</li>
            <li>✅ পূর্ববর্তী প্রতিষ্ঠানের ট্রান্সফার সার্টিফিকেট (প্রযোজ্য ক্ষেত্রে)</li>
            <li>✅ টিকা কার্ডের ফটোকপি</li>
          </ul>
          <div className="mt-6 bg-secondary/20 border border-secondary rounded-xl p-4 text-sm text-gray-700">
            📞 ভর্তি সংক্রান্ত যেকোনো প্রশ্নের জন্য: <strong>০১৭XX-XXXXXX</strong> (সকাল ৯টা–বিকেল ৪টা)
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-8">
          <h2 className="text-xl font-bold text-primary mb-4">🖥️ অনলাইন আগ্রহ ফরম</h2>
          {submitted ? (
            <div className="text-center py-10">
              <div className="text-5xl">✅</div>
              <h3 className="font-bold text-xl text-primary mt-4">ধন্যবাদ!</h3>
              <p className="text-gray-600 mt-2">আপনার আবেদন পাওয়া গেছে। বিদ্যালয় অফিস থেকে ফোনে যোগাযোগ করা হবে।</p>
              <button onClick={() => setSubmitted(false)} className="mt-6 text-secondary font-semibold hover:underline">
                নতুন আবেদন করুন
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">শিক্ষার্থীর নাম *</label>
                <input required name="student" value={form.student} onChange={handle}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">অভিভাবকের নাম *</label>
                <input required name="parent" value={form.parent} onChange={handle}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">মোবাইল নম্বর *</label>
                  <input required name="phone" value={form.phone} onChange={handle} placeholder="01XXXXXXXXX"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">জন্ম তারিখ *</label>
                  <input required type="date" name="dob" value={form.dob} onChange={handle}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ভর্তিচ্ছু শ্রেণি *</label>
                <select name="cls" value={form.cls} onChange={handle}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>প্রাক-প্রাথমিক</option>
                  {[1,2,3,4,5].map((n) => <option key={n}>{n}ম শ্রেণি</option>)}
                </select>
              </div>
              <button type="submit" className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-emerald-800 transition">
                আবেদন জমা দিন 🚀
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
