
import { useState } from "react";

/* ─── Constants ─────────────────────────────────────────────── */

const idTypes = [
  "Pandit Deen Dayal College Student ID",
  "Aadhaar Card",
  "Voter ID",
  "PAN Card",
];

const states = [
  "Maharashtra",
  "Delhi",
  "Karnataka",
  "Tamil Nadu",
  "West Bengal",
  "Uttar Pradesh",
  "Gujarat",
  "Rajasthan",
  "Other",
];

const steps = [
  "Personal",
  "Contact",
  "Academic",
  "Identity",
  "Review",
];

const initialState = {
  fullName: "",
  dob: "",
  gender: "",
  nationality: "Indian",

  email: "",
  phone: "",
  altPhone: "",
  address: "",
  state: "",
  pincode: "",

  memberType: "",
  enrollmentNo: "",
  year: "",

  idType: "",
  idNumber: "",
  idProof: null,

  declaration: false,
};

/* ─── Tailwind Classes ─────────────────────────────────────── */

const inputCls =
  "w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#E2691E] focus:ring-2 focus:ring-[#E2691E]/10 transition bg-white";

const selectCls =
  "w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#E2691E] focus:ring-2 focus:ring-[#E2691E]/10 transition bg-white appearance-none";

/* ─── Reusable Field Components ─────────────────────────────── */

const Label = ({ children, required }) => (
  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
    {children}
    {required && (
      <span className="text-[#E2691E] ml-0.5">*</span>
    )}
  </label>
);

const Field = ({ label, required, children }) => (
  <div>
    <Label required={required}>{label}</Label>
    {children}
  </div>
);

const ChevronDown = () => (
  <svg
    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

/* ─── Section Wrapper ───────────────────────────────────────── */

const Section = ({ step, title, icon, children }) => (
  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
    <div className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-[#1a1a2e] to-[#2d1a22] border-b border-white/10">
      <span className="w-7 h-7 rounded-full bg-[#E2691E] flex items-center justify-center text-white text-xs font-bold shrink-0">
        {step}
      </span>

      <span className="text-lg mr-2">{icon}</span>

      <h3 className="text-white font-semibold text-sm tracking-wide">
        {title}
      </h3>
    </div>

    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5">
        {children}
      </div>
    </div>
  </div>
);

/* ─── Progress Stepper ──────────────────────────────────────── */

const Stepper = ({ current }) => (
  <div className="flex items-center justify-center gap-0 mb-10 overflow-x-auto pb-2">
    {steps.map((step, index) => (
      <div key={step} className="flex items-center shrink-0">
        <div className="flex flex-col items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-colors
              ${
                index < current
                  ? "bg-[#E2691E] border-[#E2691E] text-white"
                  : index === current
                  ? "bg-white border-[#E2691E] text-[#E2691E]"
                  : "bg-white border-gray-200 text-gray-400"
              }`}
          >
            {index < current ? (
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : (
              index + 1
            )}
          </div>

          <span
            className={`text-[10px] mt-1 whitespace-nowrap font-medium ${
              index === current
                ? "text-[#E2691E]"
                : "text-gray-400"
            }`}
          >
            {step}
          </span>
        </div>

        {index < steps.length - 1 && (
          <div
            className={`w-8 sm:w-12 h-0.5 mx-1 mb-4 transition-colors ${
              index < current
                ? "bg-[#E2691E]"
                : "bg-gray-200"
            }`}
          />
        )}
      </div>
    ))}
  </div>
);

/* ─── Review Row ────────────────────────────────────────────── */

const ReviewRow = ({ label, value }) =>
  value ? (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-3 py-2 border-b border-gray-50 last:border-0">
      <span className="sm:w-40 shrink-0 text-xs text-gray-500 font-medium uppercase tracking-wide">
        {label}
      </span>

      <span className="text-sm text-gray-800 font-medium break-words">
        {value}
      </span>
    </div>
  ) : null;

/* ─── Main Reusable Form Component ──────────────────────────── */

const MembershipForm = () => {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ ...initialState });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  /* Update Form Fields */

  const set = (field) => (e) => {
    const value =
      e.target.type === "checkbox"
        ? e.target.checked
        : e.target.type === "file"
        ? e.target.files?.[0] || null
        : e.target.value;

    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [field]: "",
    }));
  };

  /* ─── Validation ─────────────────────────────────────────── */

  const validate = () => {
    const newErrors = {};

    // Personal Information
    if (step === 0) {
      if (!form.fullName.trim()) {
        newErrors.fullName = "Full name is required";
      }

      if (!form.dob) {
        newErrors.dob = "Date of birth is required";
      }

      if (!form.gender) {
        newErrors.gender = "Gender is required";
      }
    }

    // Contact Details
    if (step === 1) {
      if (
        !form.email.trim() ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
      ) {
        newErrors.email = "Valid email is required";
      }

      if (!/^\d{10}$/.test(form.phone)) {
        newErrors.phone =
          "Valid 10-digit phone is required";
      }

      if (!form.address.trim()) {
        newErrors.address = "Address is required";
      }

      if (!/^\d{6}$/.test(form.pincode)) {
        newErrors.pincode =
          "Valid 6-digit pincode is required";
      }
    }

    // Academic Details
    if (step === 2) {
      if (!form.memberType) {
        newErrors.memberType =
          "Member type is required";
      }
    }

    // Identity Verification
    if (step === 3) {
      if (!form.idType) {
        newErrors.idType = "ID type is required";
      }

      if (!form.idNumber.trim()) {
        newErrors.idNumber =
          "ID number is required";
      }

      if (form.idProof) {
        const allowedTypes = [
          "image/png",
          "image/jpeg",
          "application/pdf",
        ];

        if (!allowedTypes.includes(form.idProof.type)) {
          newErrors.idProof =
            "Only PNG, JPG, or PDF files are allowed";
        } else if (form.idProof.size > 2 * 1024 * 1024) {
          newErrors.idProof =
            "File size must not exceed 2 MB";
        }
      }
    }

    // Declaration
    if (step === 4) {
      if (!form.declaration) {
        newErrors.declaration =
          "You must accept the declaration";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  /* ─── Navigation ─────────────────────────────────────────── */

  const next = () => {
    if (validate()) {
      setStep((previous) => previous + 1);
    }
  };

  const back = () => {
    setStep((previous) => previous - 1);
  };

  /* ─── Submit Form ────────────────────────────────────────── */

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setSubmitted(true);
    }
  };

  /* ─── Success Screen ─────────────────────────────────────── */

  if (submitted) {
    return (
      <div className="font-[Poppins,sans-serif] min-h-[60vh] flex items-center justify-center bg-gray-50 py-16 px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-gray-100 p-10 text-center">
          <div className="w-20 h-20 rounded-full bg-green-50 border-4 border-green-200 flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-10 h-10 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Application Submitted!
          </h2>

          <p className="text-gray-500 text-sm mb-1">
            Thank you, <strong>{form.fullName}</strong>.
          </p>

          <p className="text-gray-500 text-sm mb-6">
            Your library membership application has been
            completed successfully.
          </p>

          <button
            type="button"
            onClick={() => {
              setForm({ ...initialState });
              setErrors({});
              setStep(0);
              setSubmitted(false);
            }}
            className="w-full bg-[#E2691E] hover:bg-[#B8581E] text-white font-semibold py-3 rounded-xl transition-colors text-sm"
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  /* ─── Form UI ────────────────────────────────────────────── */

  return (
    <div
      className="font-[Poppins,sans-serif] bg-gray-50 py-12"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="max-w-[860px] mx-auto px-4">
        <Stepper current={step} />

        <form onSubmit={handleSubmit} noValidate>
          <div className="space-y-6">

            {/* ── STEP 1: Personal Information ── */}

            {step === 0 && (
              <Section
                step={1}
                title="Personal Information"
                icon="👤"
              >
                <Field label="Full Name" required>
                  <input
                    type="text"
                    placeholder="As per official ID"
                    value={form.fullName}
                    onChange={set("fullName")}
                    className={inputCls}
                  />

                  {errors.fullName && (
                    <p className="text-[#E2691E] text-xs mt-1">
                      {errors.fullName}
                    </p>
                  )}
                </Field>

                <Field label="Date of Birth" required>
                  <input
                    type="date"
                    value={form.dob}
                    onChange={set("dob")}
                    max={new Date().toISOString().split("T")[0]}
                    className={inputCls}
                  />

                  {errors.dob && (
                    <p className="text-[#E2691E] text-xs mt-1">
                      {errors.dob}
                    </p>
                  )}
                </Field>

                <Field label="Gender" required>
                  <div className="relative">
                    <select
                      value={form.gender}
                      onChange={set("gender")}
                      className={selectCls}
                    >
                      <option value="">Select gender</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>

                    <ChevronDown />
                  </div>

                  {errors.gender && (
                    <p className="text-[#E2691E] text-xs mt-1">
                      {errors.gender}
                    </p>
                  )}
                </Field>

                <Field label="Nationality">
                  <input
                    type="text"
                    value={form.nationality}
                    onChange={set("nationality")}
                    className={inputCls}
                  />
                </Field>
              </Section>
            )}

            {/* ── STEP 2: Contact Details ── */}

            {step === 1 && (
              <Section
                step={2}
                title="Contact Details"
                icon="📬"
              >
                <Field label="Email Address" required>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={set("email")}
                    className={inputCls}
                  />

                  {errors.email && (
                    <p className="text-[#E2691E] text-xs mt-1">
                      {errors.email}
                    </p>
                  )}
                </Field>

                <Field label="Mobile Number" required>
                  <input
                    type="tel"
                    placeholder="10-digit mobile"
                    maxLength={10}
                    value={form.phone}
                    onChange={set("phone")}
                    className={inputCls}
                  />

                  {errors.phone && (
                    <p className="text-[#E2691E] text-xs mt-1">
                      {errors.phone}
                    </p>
                  )}
                </Field>

                <Field label="Alternate Mobile Number">
                  <input
                    type="tel"
                    placeholder="Optional alternate number"
                    maxLength={10}
                    value={form.altPhone}
                    onChange={set("altPhone")}
                    className={inputCls}
                  />
                </Field>

                <Field label="State">
                  <div className="relative">
                    <select
                      value={form.state}
                      onChange={set("state")}
                      className={selectCls}
                    >
                      <option value="">Select state</option>

                      {states.map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>

                    <ChevronDown />
                  </div>
                </Field>

                <div className="sm:col-span-2">
                  <Field
                    label="Residential Address"
                    required
                  >
                    <textarea
                      rows={3}
                      placeholder="Street / House no. / Society"
                      value={form.address}
                      onChange={set("address")}
                      className={`${inputCls} resize-none`}
                    />

                    {errors.address && (
                      <p className="text-[#E2691E] text-xs mt-1">
                        {errors.address}
                      </p>
                    )}
                  </Field>
                </div>

                <Field label="Pincode" required>
                  <input
                    type="text"
                    placeholder="6-digit pincode"
                    maxLength={6}
                    value={form.pincode}
                    onChange={set("pincode")}
                    className={inputCls}
                  />

                  {errors.pincode && (
                    <p className="text-[#E2691E] text-xs mt-1">
                      {errors.pincode}
                    </p>
                  )}
                </Field>
              </Section>
            )}

            {/* ── STEP 3: Academic Details ── */}

            {step === 2 && (
              <Section
                step={3}
                title="Academic / Professional Details"
                icon="🎓"
              >
                <Field label="Member Type" required>
                  <div className="relative">
                    <select
                      value={form.memberType}
                      onChange={set("memberType")}
                      className={selectCls}
                    >
                      <option value="">Select type</option>
                      <option>Student</option>
                      <option>Research Scholar</option>
                    </select>

                    <ChevronDown />
                  </div>

                  {errors.memberType && (
                    <p className="text-[#E2691E] text-xs mt-1">
                      {errors.memberType}
                    </p>
                  )}
                </Field>

                <Field label="Enrollment / Employee No.">
                  <input
                    type="text"
                    placeholder="College-issued number"
                    value={form.enrollmentNo}
                    onChange={set("enrollmentNo")}
                    className={inputCls}
                  />
                </Field>

                <Field label="Current Year / Batch">
                  <div className="relative">
                    <select
                      value={form.year}
                      onChange={set("year")}
                      className={selectCls}
                    >
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
              </Section>
            )}

            {/* ── STEP 4: Identity Verification ── */}

            {step === 3 && (
              <Section
                step={4}
                title="Identity Verification"
                icon="🪪"
              >
                <Field label="ID Document Type" required>
                  <div className="relative">
                    <select
                      value={form.idType}
                      onChange={set("idType")}
                      className={selectCls}
                    >
                      <option value="">Select ID type</option>

                      {idTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>

                    <ChevronDown />
                  </div>

                  {errors.idType && (
                    <p className="text-[#E2691E] text-xs mt-1">
                      {errors.idType}
                    </p>
                  )}
                </Field>

                <Field label="ID Number" required>
                  <input
                    type="text"
                    placeholder="Enter ID document number"
                    value={form.idNumber}
                    onChange={set("idNumber")}
                    className={inputCls}
                  />

                  {errors.idNumber && (
                    <p className="text-[#E2691E] text-xs mt-1">
                      {errors.idNumber}
                    </p>
                  )}
                </Field>

                <div className="sm:col-span-2">
                  <Label>Upload ID Proof (optional)</Label>

                  <label className="flex flex-col items-center justify-center w-full min-h-32 border-2 border-dashed border-gray-200 rounded-xl cursor-pointer bg-gray-50 hover:border-[#E2691E]/50 hover:bg-[#E2691E]/5 transition-colors p-4">
                    <svg
                      className="w-8 h-8 text-gray-300 mb-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>

                    <span className="text-xs text-gray-500 text-center">
                      {form.idProof
                        ? form.idProof.name
                        : "Click to upload or drag & drop"}
                    </span>

                    <span className="text-[11px] text-gray-400 mt-1">
                      PNG, JPG, PDF up to 2 MB
                    </span>

                    <input
                      type="file"
                      className="hidden"
                      accept=".png,.jpg,.jpeg,.pdf"
                      onChange={set("idProof")}
                    />
                  </label>

                  {errors.idProof && (
                    <p className="text-[#E2691E] text-xs mt-1">
                      {errors.idProof}
                    </p>
                  )}

                  {form.idProof && (
                    <button
                      type="button"
                      onClick={() =>
                        setForm((previous) => ({
                          ...previous,
                          idProof: null,
                        }))
                      }
                      className="text-xs text-[#E2691E] mt-2 hover:underline"
                    >
                      Remove uploaded file
                    </button>
                  )}

                  <p className="text-[11px] text-gray-400 mt-2">
                    Physical copy must be presented at the
                    library counter to activate your membership.
                  </p>
                </div>
              </Section>
            )}

            {/* ── STEP 5: Review & Submit ── */}

            {step === 4 && (
              <div className="space-y-5">

                {/* Review Details */}

                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <div className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-[#1a1a2e] to-[#2d1a22]">
                    <span className="w-7 h-7 rounded-full bg-[#E2691E] flex items-center justify-center text-white text-xs font-bold">
                      5
                    </span>

                    <span className="text-lg mr-2">✅</span>

                    <h3 className="text-white font-semibold text-sm tracking-wide">
                      Review &amp; Submit
                    </h3>
                  </div>

                  <div className="p-6 space-y-1">

                    <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-3">
                      Personal Information
                    </p>

                    <ReviewRow
                      label="Full Name"
                      value={form.fullName}
                    />

                    <ReviewRow
                      label="Date of Birth"
                      value={form.dob}
                    />

                    <ReviewRow
                      label="Gender"
                      value={form.gender}
                    />

                    <ReviewRow
                      label="Nationality"
                      value={form.nationality}
                    />

                    <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mt-5 mb-3">
                      Contact Details
                    </p>

                    <ReviewRow
                      label="Email"
                      value={form.email}
                    />

                    <ReviewRow
                      label="Phone"
                      value={form.phone}
                    />

                    <ReviewRow
                      label="Alternate Phone"
                      value={form.altPhone}
                    />

                    <ReviewRow
                      label="Address"
                      value={form.address}
                    />

                    <ReviewRow
                      label="State"
                      value={form.state}
                    />

                    <ReviewRow
                      label="Pincode"
                      value={form.pincode}
                    />

                    <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mt-5 mb-3">
                      Academic Details
                    </p>

                    <ReviewRow
                      label="Member Type"
                      value={form.memberType}
                    />

                    <ReviewRow
                      label="Enrollment No."
                      value={form.enrollmentNo}
                    />

                    <ReviewRow
                      label="Year / Batch"
                      value={form.year}
                    />

                    <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mt-5 mb-3">
                      Identity Verification
                    </p>

                    <ReviewRow
                      label="ID Type"
                      value={form.idType}
                    />

                    <ReviewRow
                      label="ID Number"
                      value={form.idNumber}
                    />

                    <ReviewRow
                      label="ID Proof"
                      value={form.idProof?.name}
                    />

                  </div>
                </div>

                {/* Declaration */}

                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                  <h4 className="text-sm font-bold text-gray-800 mb-3">
                    Declaration
                  </h4>

                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    I hereby declare that the information provided
                    in this application is true and correct to the
                    best of my knowledge. I agree to abide by the
                    rules and regulations of the ASI Library
                    Post-Graduate &amp; Research Institute Library.
                    I understand that my membership may be revoked
                    if I violate any library policy or provide
                    false information.
                  </p>

                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={form.declaration}
                      onChange={set("declaration")}
                      className="mt-0.5 w-4 h-4 accent-[#E2691E] shrink-0"
                    />

                    <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                      I have read and accept the above declaration
                      and the{" "}
                      <a
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="text-[#E2691E] hover:underline font-medium"
                      >
                        Library Membership Terms
                      </a>.
                    </span>
                  </label>

                  {errors.declaration && (
                    <p className="text-[#E2691E] text-xs mt-2">
                      {errors.declaration}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* ── Navigation Buttons ── */}

            <div className="flex items-center justify-between pt-2">

              {step > 0 ? (
                <button
                  type="button"
                  onClick={back}
                  className="flex items-center gap-2 border border-gray-200 hover:border-[#E2691E] text-gray-600 hover:text-[#E2691E] font-semibold px-6 py-2.5 rounded-xl transition-colors text-sm"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16l-4-4m0 0l4-4m-4 4h18"
                    />
                  </svg>

                  Back
                </button>
              ) : (
                <div />
              )}

              {step < steps.length - 1 ? (
                <button
                  type="button"
                  onClick={next}
                  className="flex items-center gap-2 bg-[#E2691E] hover:bg-[#B8581E] text-white font-semibold px-8 py-2.5 rounded-xl transition-colors text-sm shadow-md shadow-red-100"
                >
                  Continue

                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              ) : (
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-[#E2691E] hover:bg-[#B8581E] text-white font-bold px-10 py-2.5 rounded-xl transition-colors text-sm shadow-md shadow-red-100"
                >
                  Submit Application

                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </button>
              )}

            </div>

            {/* Step Counter */}

            <p className="text-center text-xs text-gray-400">
              Step {step + 1} of {steps.length}
            </p>

          </div>
        </form>
      </div>
    </div>
  );
};

export default MembershipForm;