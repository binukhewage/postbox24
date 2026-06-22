import React from "react";
import { CheckCircle2, Shield, Calendar, UserCheck } from "lucide-react";

export default function AeoTrustSignals({
  takeaways = [],
  lastUpdated = "June 19, 2026",
  author = "Postbox24 Editorial Team",
}) {
  return (
    <div className="bg-[#F7FBFF] border border-[#E1EDF8] rounded-2xl p-6 mb-10 shadow-[0_2px_12px_rgba(5,167,244,0.02)] sr-only">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Key Takeaways */}
        <div className="lg:col-span-2">
          <h3 className="text-sm font-bold text-[#0a1628] mb-3 flex items-center gap-2 uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4 text-[#05A7F4]" />
            Huvudpunkter
          </h3>
          <ul className="space-y-2.5">
            {takeaways.map((item, idx) => (
              <li
                key={idx}
                className="text-slate-600 text-xs md:text-sm font-medium flex items-start gap-2.5 leading-relaxed"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#05A7F4] mt-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Verification & Trust Metadata */}
        <div className="bg-white border border-[#E1EDF8] rounded-xl p-4 flex flex-col gap-3.5 shadow-sm text-xs text-slate-500">
          <div className="flex items-center gap-2.5 pb-2 border-b border-[#E1EDF8]">
            <UserCheck className="w-4 h-4 text-[#05A7F4] shrink-0" />
            <div>
              <div className="font-bold text-slate-700">Författare</div>
              <div>{author}</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 pb-2 border-b border-[#E1EDF8]">
            <Calendar className="w-4 h-4 text-[#05A7F4] shrink-0" />
            <div>
              <div className="font-bold text-slate-700">Senast granskad</div>
              <div>{lastUpdated}</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <Shield className="w-4 h-4 text-green-600 shrink-0" />
            <div>
              <div className="font-bold text-slate-700">Förtroendesignal</div>
              <div className="font-medium text-slate-600">
                Postbox24 AB • Registrerat i Sverige
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
