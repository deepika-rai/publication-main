import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


/* ─── Field helpers ─────────────────────────────────────────── */
const departments = [
  'Archaeology',
  'External / General Public',
  'Faculty / Staff',
  'Research Scholar',
  'Other',
];

const idTypes = [
  'Pandit Deen Dayal College Student ID',
  'Aadhaar Card',
  'Voter ID',
  'PAN Card',
];

const initialState = {
  // Personal
  fullName: '',
  dob: '',
  gender: '',
  nationality: 'Indian',
  // Contact
  email: '',
  phone: '',
  altPhone: '',
  address: '',
  state: '',
  pincode: '',
  // Academic
  memberType: '',
  // Identity
  idType: '',
  idNumber: '',
  // Other
  purpose: '',
  declaration: false,
};

/* ─── Input primitives ─────────────────────────────────────── */
const Label = ({ children, required }) => (
  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
    {children}
    {required && <span className="text-[#E2691E] ml-0.5">*</span>}
  </label>
);

const inputCls =
  'w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#E2691E] focus:ring-2 focus:ring-[#E2691E]/10 transition bg-white';

const selectCls =
  'w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#E2691E] focus:ring-2 focus:ring-[#E2691E]/10 transition bg-white appearance-none';

const Field = ({ label, required, children }) => (
  <div>
    <Label required={required}>{label}</Label>
    {children}
  </div>
);

/* ─── Section wrapper ───────────────────────────────────────── */
const Section = ({ step, title, icon, children }) => (
  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
    <div className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-[#1a1a2e] to-[#2d1a22] border-b border-white/10">
      <span className="w-7 h-7 rounded-full bg-[#E2691E] flex items-center justify-center text-white text-xs font-bold shrink-0">
        {step}
      </span>
      <span className="text-lg mr-2">{icon}</span>
      <h3 className="text-white font-semibold text-sm tracking-wide">{title}</h3>
    </div>
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5">
        {children}
      </div>
    </div>
  </div>
);

/* ─── Progress stepper ──────────────────────────────────────── */
const steps = ['Personal', 'Contact', 'Academic', 'Identity', 'Review'];

const Stepper = ({ current }) => (
  <div className="flex items-center justify-center gap-0 mb-10 overflow-x-auto pb-2">
    {steps.map((s, i) => (
      <div key={s} className="flex items-center">
        <div className="flex flex-col items-center">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-colors
            ${i < current  ? 'bg-[#E2691E] border-[#E2691E] text-white'
            : i === current ? 'bg-white border-[#E2691E] text-[#E2691E]'
            :                 'bg-white border-gray-200 text-gray-400'}`}>
            {i < current
              ? <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              : i + 1}
          </div>
          <span className={`text-[10px] mt-1 whitespace-nowrap font-medium ${i === current ? 'text-[#E2691E]' : 'text-gray-400'}`}>{s}</span>
        </div>
        {i < steps.length - 1 && (
          <div className={`w-8 sm:w-12 h-0.5 mx-1 mb-4 transition-colors ${i < current ? 'bg-[#E2691E]' : 'bg-gray-200'}`} />
        )}
      </div>
    ))}
  </div>
);

/* ─── Review row ────────────────────────────────────────────── */
const ReviewRow = ({ label, value }) =>
  value ? (
    <div className="flex gap-3 py-2 border-b border-gray-50 last:border-0">
      <span className="w-40 shrink-0 text-xs text-gray-500 font-medium uppercase tracking-wide">{label}</span>
      <span className="text-sm text-gray-800 font-medium">{value}</span>
    </div>
  ) : null;

/* ─── Main component ────────────────────────────────────────── */
const Form = () => {
  const location = useLocation();
  const passedPlan = location.state?.plan ?? '';

  const [step, setStep]     = useState(0);
  const [form, setForm]     = useState({ ...initialState, plan: passedPlan });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const set = (field) => (e) => {
    const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm((f) => ({ ...f, [field]: val }));
    setErrors((er) => ({ ...er, [field]: '' }));
  };

  /* per-step validation */
  const validate = () => {
    const e = {};
    if (step === 0) {
      if (!form.fullName.trim())  e.fullName = 'Full name is required';
      if (!form.dob)              e.dob      = 'Date of birth is required';
      if (!form.gender)           e.gender   = 'Gender is required';
    }
    if (step === 1) {
      if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
                                  e.email    = 'Valid email is required';
      if (!form.phone.trim() || !/^\d{10}$/.test(form.phone))
                                  e.phone    = 'Valid 10-digit phone is required';
      if (!form.address.trim())   e.address  = 'Address is required';
      if (!form.pincode.trim() || !/^\d{6}$/.test(form.pincode))
                                  e.pincode  = 'Valid 6-digit pincode is required';
    }
    if (step === 2) {
      if (!form.memberType)       e.memberType  = 'Member type is required';
    }
    if (step === 3) {
      if (!form.idType)           e.idType   = 'ID type is required';
      if (!form.idNumber.trim())  e.idNumber = 'ID number is required';
    }
    
    if (step === 4) {
      if (!form.declaration)      e.declaration = 'You must accept the declaration';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => { if (validate()) setStep((s) => s + 1); };
  const back = () => setStep((s) => s - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  /* ── Success screen ── */
  if (submitted) {
    return (
      <div className="font-[Poppins,sans-serif] min-h-[60vh] flex items-center justify-center bg-gray-50 py-16 px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-gray-100 p-10 text-center">
          <div className="w-20 h-20 rounded-full bg-green-50 border-4 border-green-200 flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Application Submitted!</h2>
          <p className="text-gray-500 text-sm mb-1">
            Thank you, <strong>{form.fullName}</strong>.
          </p>
          <p className="text-gray-500 text-sm mb-6">
            Your library membership application has been received. A confirmation will be sent to <strong>{form.email}</strong> within one working day.
          </p>
          {activePlan && (
            <div className="bg-[#E2691E]/5 border border-[#E2691E]/20 rounded-xl px-5 py-4 mb-6 text-left">
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Selected Plan</p>
              <p className="text-[#E2691E] font-bold">{activePlan.label} — {activePlan.duration}</p>
              <p className="text-gray-700 font-semibold text-lg">₹{activePlan.price.toLocaleString('en-IN')}</p>
            </div>
          )}
          <div className="flex flex-col gap-3">
            <Link to="/libraryhome" className="w-full bg-[#E2691E] hover:bg-[#B8581E] text-white font-semibold py-3 rounded-xl transition-colors text-sm">
              Back to Home
            </Link>
   
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="font-[Poppins,sans-serif]" style={{ fontFamily: 'Poppins, sans-serif' }}>

      {/* ── Page Banner ── */}
      <div className="relative bg-[#0F2044] py-14 overflow-hidden"
        style={{ backgroundImage: 'linear-gradient(135deg, #0F2044 60%, #1a3560 100%)' }}>
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full border border-white/5" />
        <div className="absolute -bottom-16 -left-16 w-60 h-60 rounded-full border border-[#E2691E]/10" />
        <div className="relative max-w-[1200px] mx-auto px-4 text-center">
          <nav className="flex items-center justify-center gap-2 text-xs text-gray-500 mb-4">
            <Link to="/libraryhome" className="hover:text-[#E2691E] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/library/membership" className="hover:text-[#E2691E] transition-colors">Membership</Link>
            <span>/</span>
            <span className="text-white">Apply</span>
          </nav>
          {/* <span className="inline-block bg-[#E2691E]/20 text-[#F5A973] text-xs font-semibold uppercase tracking-widest px-4 py-1 rounded-full mb-4">
            Library Membership
          </span> */}
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Membership <span className="text-[#F5A973]">Application Form</span>
          </h1>
          <p className="text-gray-400 text-sm max-w-lg mx-auto">
            Complete all sections below. Fields marked with <span className="text-[#F5A973]">*</span> are required. Your application will be reviewed within one working day.
          </p>
        </div>
      </div>

      {/* ── Form body ── */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-[860px] mx-auto px-4">
         

          {/* Stepper */}
          <Stepper current={step} />

          <form onSubmit={handleSubmit} noValidate>
            <div className="space-y-6">

              {/* ── STEP 0: Personal ── */}
              {step === 0 && (
                <Section step={1} title="Personal Information" icon="👤">
                  <Field label="Full Name" required>
                    <input type="text" placeholder="As per official ID" value={form.fullName} onChange={set('fullName')} className={inputCls} />
                    {errors.fullName && <p className="text-[#E2691E] text-xs mt-1">{errors.fullName}</p>}
                  </Field>

                  <Field label="Date of Birth" required>
                    <input type="date" value={form.dob} onChange={set('dob')} className={inputCls} />
                    {errors.dob && <p className="text-[#E2691E] text-xs mt-1">{errors.dob}</p>}
                  </Field>

                  <Field label="Gender" required>
                    <div className="relative">
                      <select value={form.gender} onChange={set('gender')} className={selectCls}>
                        <option value="">Select gender</option>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                      <ChevronDown />
                    </div>
                    {errors.gender && <p className="text-[#E2691E] text-xs mt-1">{errors.gender}</p>}
                  </Field>

                  <Field label="Nationality">
                    <input type="text" value={form.nationality} onChange={set('nationality')} className={inputCls} />
                  </Field>
                </Section>
              )}

              {/* ── STEP 1: Contact ── */}
              {step === 1 && (
                <Section step={2} title="Contact Details" icon="📬">
                  <Field label="Email Address" required>
                    <input type="email" placeholder="you@example.com" value={form.email} onChange={set('email')} className={inputCls} />
                    {errors.email && <p className="text-[#E2691E] text-xs mt-1">{errors.email}</p>}
                  </Field>

                  <Field label="Mobile Number" required>
                    <input type="tel" placeholder="10-digit mobile" maxLength={10} value={form.phone} onChange={set('phone')} className={inputCls} />
                    {errors.phone && <p className="text-[#E2691E] text-xs mt-1">{errors.phone}</p>}
                  </Field>
           
                  <div className="sm:col-span-2">
                    <Field label="Residential Address" required>
                      <textarea rows={3} placeholder="Street / House no. / Society" value={form.address} onChange={set('address')} className={inputCls + ' resize-none'} />
                      {errors.address && <p className="text-[#E2691E] text-xs mt-1">{errors.address}</p>}
                    </Field>
                  </div>

                 
                  <Field label="State">
                    <div className="relative">
                      <select value={form.state} onChange={set('state')} className={selectCls}>
                        <option value="">Select state</option>
                        {['Maharashtra','Delhi','Karnataka','Tamil Nadu','West Bengal','Uttar Pradesh','Gujarat','Rajasthan','Other'].map(s => <option key={s}>{s}</option>)}
                      </select>
                      <ChevronDown />
                    </div>
                  </Field>

                  <Field label="Pincode" required>
                    <input type="text" placeholder="6-digit pincode" maxLength={6} value={form.pincode} onChange={set('pincode')} className={inputCls} />
                    {errors.pincode && <p className="text-[#E2691E] text-xs mt-1">{errors.pincode}</p>}
                  </Field>
                </Section>
              )}

              {/* ── STEP 2: Academic ── */}
              {step === 2 && (
                <Section step={3} title="Academic / Professional Details" icon="🎓">
                  <Field label="Member Type" required>
                    <div className="relative">
                      <select value={form.memberType} onChange={set('memberType')} className={selectCls}>
                        <option value="">Select type</option>
                        <option>Student</option>
                        <option>Research Scholar</option>
                      </select>
                      <ChevronDown />
                    </div>
                    {errors.memberType && <p className="text-[#E2691E] text-xs mt-1">{errors.memberType}</p>}
                  </Field>

                  {/* <Field label="Department / Institution" required>
                    <div className="relative">
                      <select value={form.department} onChange={set('department')} className={selectCls}>
                        <option value="">Select department</option>
                        {departments.map(d => <option key={d}>{d}</option>)}
                      </select>
                      <ChevronDown />
                    </div>
                    {errors.department && <p className="text-[#E2691E] text-xs mt-1">{errors.department}</p>}
                  </Field> */}

                  {/* <Field label="Course / Programme">
                    <input type="text" placeholder="e.g. M.A. Linguistics, Ph.D." value={form.course} onChange={set('course')} className={inputCls} />
                  </Field> */}

                  <Field label="Enrollment / Employee No.">
                    <input type="text" placeholder="College-issued number" value={form.enrollmentNo} onChange={set('enrollmentNo')} className={inputCls} />
                  </Field>

                  <Field label="Current Year / Batch">
                    <div className="relative">
                      <select value={form.year} onChange={set('year')} className={selectCls}>
                        <option value="">Select year</option>
                        <option>1st Year</option>
                        <option>2nd Year</option>
                        <option>3rd Year +</option>
                        <option>Final Year</option>
                        <option>N/A</option>
                      </select>
                      <ChevronDown />
                    </div>
                  </Field>

                  {/* <div className="sm:col-span-2">
                    <Field label="Purpose of Membership">
                      <textarea rows={3} placeholder="Briefly describe your research or study purpose..." value={form.purpose} onChange={set('purpose')} className={inputCls + ' resize-none'} />
                    </Field>
                  </div> */}
                </Section>
              )}

              {/* ── STEP 3: Identity ── */}
              {step === 3 && (
                <Section step={4} title="Identity Verification" icon="🪪">
                  <Field label="ID Document Type" required>
                    <div className="relative">
                      <select value={form.idType} onChange={set('idType')} className={selectCls}>
                        <option value="">Select ID type</option>
                        {idTypes.map(t => <option key={t}>{t}</option>)}
                      </select>
                      <ChevronDown />
                    </div>
                    {errors.idType && <p className="text-[#E2691E] text-xs mt-1">{errors.idType}</p>}
                  </Field>

                  <Field label="ID Number" required>
                    <input type="text" placeholder="Enter ID document number" value={form.idNumber} onChange={set('idNumber')} className={inputCls} />
                    {errors.idNumber && <p className="text-[#E2691E] text-xs mt-1">{errors.idNumber}</p>}
                  </Field>

                  {/* Upload hint */}
                  <div className="sm:col-span-2">
                    <Label>Upload ID Proof (optional at this stage)</Label>
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-200 rounded-xl cursor-pointer bg-gray-50 hover:border-[#E2691E]/50 hover:bg-[#E2691E]/5 transition-colors">
                      <svg className="w-8 h-8 text-gray-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <span className="text-xs text-gray-400">Click to upload or drag & drop</span>
                      <span className="text-[11px] text-gray-300 mt-1">PNG, JPG, PDF up to 2 MB</span>
                      <input type="file" className="hidden" accept=".png,.jpg,.jpeg,.pdf" />
                    </label>
                    <p className="text-[11px] text-gray-400 mt-1.5">Physical copy must be presented at the library counter to activate your membership.</p>
                  </div>
                </Section>
              )}

              {/* ── STEP 4: Plan ── */}
              {/* {step === 4 && (
                <Section step={5} title="Select Membership Plan" icon="📋">
                  <div className="sm:col-span-2">
                    <Label required>Choose a Plan</Label>
                    {errors.plan && <p className="text-[#E2691E] text-xs mb-2">{errors.plan}</p>}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {Object.entries(planMeta).map(([key, p]) => (
                        <label key={key} className={`relative flex flex-col items-center text-center p-5 rounded-xl border-2 cursor-pointer transition-all
                          ${form.plan === key ? 'border-[#E2691E] bg-[#E2691E]/5 shadow-md' : 'border-gray-200 hover:border-[#E2691E]/40 bg-white'}`}>
                          <input type="radio" name="plan" value={key} checked={form.plan === key} onChange={set('plan')} className="sr-only" />
                          {key === 'yearly' && (
                            <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-[#E2691E] text-white text-[10px] font-bold px-3 py-0.5 rounded-full">
                              Popular
                            </span>
                          )}
                          {key === '24months' && (
                            <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-[#0F2044] text-white text-[10px] font-bold px-3 py-0.5 rounded-full">
                              Best Value
                            </span>
                          )}
                          <span className={`text-base font-bold mb-1 ${form.plan === key ? 'text-[#E2691E]' : 'text-gray-800'}`}>{p.label}</span>
                          <span className="text-xs text-gray-400 mb-3">{p.duration}</span>
                          <span className={`text-2xl font-extrabold ${form.plan === key ? 'text-[#E2691E]' : 'text-gray-700'}`}>
                            ₹{p.price.toLocaleString('en-IN')}
                          </span>
                          {form.plan === key && (
                            <span className="mt-2 w-5 h-5 rounded-full bg-[#E2691E] flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </span>
                          )}
                        </label>
                      ))}
                    </div>
                  </div>

                  <Field label="Preferred Start Date" required>
                    <input
                      type="date"
                      value={form.startDate}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={set('startDate')}
                      className={inputCls}
                    />
                    {errors.startDate && <p className="text-[#E2691E] text-xs mt-1">{errors.startDate}</p>}
                  </Field>

                  <Field label="How did you hear about us?">
                    <div className="relative">
                      <select value={form.referral} onChange={set('referral')} className={selectCls}>
                        <option value="">Select source</option>
                        <option>College Notice Board</option>
                        <option>Faculty Recommendation</option>
                        <option>Friend / Colleague</option>
                        <option>College Website</option>
                        <option>Social Media</option>
                        <option>Other</option>
                      </select>
                      <ChevronDown />
                    </div>
                  </Field>
                </Section>
              )} */}

              {/* ── STEP 4: Review & Submit ── */}
              {step === 4 && (
                <div className="space-y-5">
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                    <div className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-[#1a1a2e] to-[#2d1a22]">
                      <span className="w-7 h-7 rounded-full bg-[#E2691E] flex items-center justify-center text-white text-xs font-bold">5</span>
                      <span className="text-lg mr-2">✅</span>
                      <h3 className="text-white font-semibold text-sm tracking-wide">Review &amp; Submit</h3>
                    </div>
                    <div className="p-6 space-y-1">
                      <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-3">Personal</p>
                      <ReviewRow label="Full Name"     value={form.fullName} />
                      <ReviewRow label="Date of Birth" value={form.dob} />
                      <ReviewRow label="Gender"        value={form.gender} />
                      <ReviewRow label="Nationality"   value={form.nationality} />

                      <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mt-5 mb-3">Contact</p>
                      <ReviewRow label="Email"   value={form.email} />
                      <ReviewRow label="Phone"   value={form.phone} />
                      <ReviewRow label="Address" value={form.address} />
                      <ReviewRow label="State"   value={form.state} />
                      <ReviewRow label="Pincode" value={form.pincode} />

                      <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mt-5 mb-3">Academic</p>
                      <ReviewRow label="Member Type"   value={form.memberType} />
                      <ReviewRow label="Department"    value={form.department} />

                      <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mt-5 mb-3">Identity</p>
                      <ReviewRow label="ID Type"   value={form.idType} />
                      <ReviewRow label="ID Number" value={form.idNumber} />
                      
                    </div>
                  </div>

                  {/* Declaration */}
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                    <h4 className="text-sm font-bold text-gray-800 mb-3">Declaration</h4>
                    <p className="text-xs text-gray-600 leading-relaxed mb-4">
                      I hereby declare that the information provided in this application is true and correct to the best of my knowledge. I agree to abide by the rules and regulations of the ASI Libraray Post-Graduate &amp; Research Institute Library. I understand that my membership may be revoked if I violate any library policy or provide false information.
                    </p>
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={form.declaration}
                        onChange={set('declaration')}
                        className="mt-0.5 w-4 h-4 accent-[#E2691E] shrink-0"
                      />
                      <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                        I have read and accept the above declaration and the{' '}
                        <a href="#" className="text-[#E2691E] hover:underline font-medium">Library Membership Terms</a>.
                      </span>
                    </label>
                    {errors.declaration && <p className="text-[#E2691E] text-xs mt-2">{errors.declaration}</p>}
                  </div>
                </div>
              )}

              {/* ── Navigation buttons ── */}
              <div className="flex items-center justify-between pt-2">
                {step > 0 ? (
                  <button type="button" onClick={back}
                    className="flex items-center gap-2 border border-gray-200 hover:border-[#E2691E] text-gray-600 hover:text-[#E2691E] font-semibold px-6 py-2.5 rounded-xl transition-colors text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                    </svg>
                    Back
                  </button>
                ) : (
                  <Link to="#"
                    className="flex items-center gap-2 border border-gray-200 hover:border-[#E2691E] text-gray-600 hover:text-[#E2691E] font-semibold px-6 py-2.5 rounded-xl transition-colors text-sm">
                    View Plans
                  </Link>
                )}

                {step < steps.length - 1 ? (
                  <button type="button" onClick={next}
                    className="flex items-center gap-2 bg-[#E2691E] hover:bg-[#B8581E] text-white font-semibold px-8 py-2.5 rounded-xl transition-colors text-sm shadow-md shadow-red-100">
                    Continue
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                ) : (
                  <button type="submit"
                    className="flex items-center gap-2 bg-[#E2691E] hover:bg-[#B8581E] text-white font-bold px-10 py-2.5 rounded-xl transition-colors text-sm shadow-md shadow-red-100">
                    Submit Application
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </button>
                )}
              </div>

              {/* Step counter */}
              <p className="text-center text-xs text-gray-400">
                Step {step + 1} of {steps.length}
              </p>

            </div>
          </form>
        </div>
      </div>

      {/* ── Info strip ── */}
      <div className="bg-[#0F2044] py-8">
        <div className="max-w-[860px] mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            {[
              { icon: '🕐', title: 'Quick Activation', desc: 'Membership activated within 1 working day after verification.' },
              { icon: '📍', title: 'Library Counter', desc: 'Ground Floor, Main Building — Mon to Fri, 10:00 AM to 5:30 PM.' },
              { icon: '📞', title: 'Need Help?', desc: 'Call 011 2307 5357 or email calmembership2026@gmail.com' },
            ].map((i) => (
              <div key={i.title} className="bg-white/5 border border-white/10 rounded-xl px-4 py-5">
                <div className="text-3xl mb-2">{i.icon}</div>
                <h4 className="text-white text-sm font-semibold mb-1">{i.title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed">{i.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

/* ─── tiny chevron used inside selects ─────────────────────── */
const ChevronDown = () => (
  <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
    fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

export default Form;
