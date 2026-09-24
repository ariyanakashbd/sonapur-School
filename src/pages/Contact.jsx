import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-primary mb-2">যোগাযোগ 📞</h1>
      <p className="text-gray-600 mb-10">আমাদের সাথে যোগাযোগের সব মাধ্যম</p>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-5">
          <div className="bg-white rounded-2xl shadow p-6 flex gap-4 items-start">
            <div className="text-3xl">📍</div>
            <div>
              <h3 className="font-bold text-gray-800">ঠিকানা</h3>
              <p className="text-gray-600 text-sm">সোনাপুর সরকারি প্রাথমিক বিদ্যালয়,<br />সোনাপুর, ঢাকা, বাংলাদেশ</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 flex gap-4 items-start">
            <div className="text-3xl">📞</div>
            <div>
              <h3 className="font-bold text-gray-800">ফোন</h3>
              <p className="text-gray-600 text-sm">০১৭XX-XXXXXX (অফিস)<br />০১৯XX-XXXXXX (প্রধান শিক্ষক)</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 flex gap-4 items-start">
            <div className="text-3xl">✉️</div>
            <div>
              <h3 className="font-bold text-gray-800">ইমেইল</h3>
              <p className="text-gray-600 text-sm">sonapurschool@gmail.com</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 flex gap-4 items-start">
            <div className="text-3xl">🕐</div>
            <div>
              <h3 className="font-bold text-gray-800">অফিস সময়</h3>
              <p className="text-gray-600 text-sm">রবিবার – বৃহস্পতিবার: সকাল ৯টা – বিকেল ৪টা<br />শুক্র–শনি: বন্ধ</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-8">
          <h2 className="text-xl font-bold text-primary mb-4">✉️ বার্তা পাঠান</h2>
          {sent ? (
            <div className="text-center py-10">
              <div className="text-5xl">📨</div>
              <h3 className="font-bold text-xl text-primary mt-4">বার্তা পাঠানো হয়েছে!</h3>
              <p className="text-gray-600 mt-2">ধন্যবাদ! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।</p>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">আপনার নাম *</label>
                <input required name="name" value={form.name} onChange={handle}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ইমেইল *</label>
                <input required type="email" name="email" value={form.email} onChange={handle}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">বার্তা *</label>
                <textarea required name="message" value={form.message} onChange={handle} rows="4"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
              </div>
              <button type="submit" className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-emerald-800 transition">
                পাঠান 📤
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
