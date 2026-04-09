import React, { useState } from "react";
import { Calculator } from "lucide-react";

const ROICalculator = () => {
    const [mode, setMode] = useState("device");

    // Engineer inp
    const [l1, setL1] = useState(0);
    const [l2, setL2] = useState(0);
    const [l3, setL3] = useState(0);

    // Device inputs
    const [workstations, setWorkstations] = useState(3);
    const [servers, setServers] = useState(3);
    const [network, setNetwork] = useState(2);

    // ---------- CALCULATIONS ----------

    let inHouse = 0;
    let medha = 0;
    let extraText = "";

    if (mode === "engineer") {
        inHouse = l1 * 3800 + l2 * 5500 + l3 * 7000;

        medha = l1 * 1600 + l2 * 2500 + l3 * 2700;

        const total = l1 + l2 + l3;
        extraText = `${total} engineer(s)`;
    } else {
        const totalDevices = workstations + servers + network;

        const requiredTechs =
            totalDevices > 0 ? Math.ceil(totalDevices / 80) : 0;

        inHouse = requiredTechs * 5000;

        // ✅ FIXED MINIMUM PRICING LOGIC
        const wsCost = Math.max(workstations * 22, 330);
        const serverCost = Math.max(servers * 75, 225);
        const networkCost = Math.max(network * 45, 90);

        medha = wsCost + serverCost + networkCost;

        extraText = `You need ${requiredTechs} tech(s) for ${totalDevices} devices`;
    }

    const savings = inHouse - medha;
    const annual = savings * 12;
    const percent =
        inHouse > 0 ? Math.round((savings / inHouse) * 100) : 0;

    // ---------- UI ----------

    return (
        <section className="bg-slate-50 py-24 px-6">
            <div className="max-w-6xl mx-auto">

                {/* TITLE */}
                <div className="text-center mb-12">
                    <div className="flex justify-center mb-3">
                        <Calculator className="text-blue-600" />
                    </div>

                    <h2 className="text-3xl font-bold text-slate-900">
                        ROI Calculator
                    </h2>

                    <p className="text-slate-500 mt-2">
                        Calculate your potential savings with white label support services
                    </p>
                </div>

                {/* TOGGLE */}
                <div className="flex justify-center mb-10">
                    <div className="bg-white p-1 rounded-lg shadow-sm flex">
                        <button
                            onClick={() => setMode("engineer")}
                            className={`px-4 py-2 rounded-md text-sm ${mode === "engineer"
                                    ? "bg-blue-50 text-blue-600"
                                    : "text-slate-500"
                                }`}
                        >
                            Per Engineer
                        </button>

                        <button
                            onClick={() => setMode("device")}
                            className={`px-4 py-2 rounded-md text-sm ${mode === "device"
                                    ? "bg-blue-50 text-blue-600"
                                    : "text-slate-500"
                                }`}
                        >
                            Per Device
                        </button>
                    </div>
                </div>

                {/* GRID */}
                <div className="grid md:grid-cols-2 gap-8">

                    {/* LEFT */}
                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <h3 className="font-semibold text-slate-900 mb-6">
                            Your Current Setup
                        </h3>

                        {mode === "engineer" ? (
                            <>
                                <Input label="Level 1 Engineers (Helpdesk)" value={l1} setValue={setL1} sub="White label: $1,600/mo • Market: $3,800/mo" />
                                <Input label="Level 2 Engineers (Advanced)" value={l2} setValue={setL2} sub="White label: $2,500/mo • Market: $5,500/mo" />
                                <Input label="Level 3 / NOC Engineers" value={l3} setValue={setL3} sub="White label: $2,700/mo • Market: $7,000/mo" />
                            </>
                        ) : (
                            <>
                                <Input label="Workstations / Endpoints" value={workstations} setValue={setWorkstations} sub="$22/mo each • Min: 15 units or $330/mo" />
                                <Input label="Servers" value={servers} setValue={setServers} sub="$75/mo each • Min: 3 units or $225/mo" />
                                <Input label="Network Devices (Firewalls, Switches)" value={network} setValue={setNetwork} sub="$45/mo each • Min: 2 units or $90/mo" />

                                <div className="bg-slate-50 border rounded-lg p-3 text-sm text-slate-500 mt-4">
                                    Industry standard: 1 tech per 80 devices @ $5,000/mo <br />
                                    <span className="text-blue-600">{extraText}</span>
                                </div>
                            </>
                        )}
                    </div>

                    {/* RIGHT */}
                    <div className="space-y-6">

                        {/* ROI BOX */}
                        <div className="bg-white rounded-xl shadow-sm p-6 text-center">
                            <p className="text-sm text-slate-500 mb-2">YOUR ROI</p>
                            <p className="text-5xl font-bold text-slate-900">
                                {percent}%
                            </p>
                            <p className="text-sm text-slate-500">
                                Cost savings vs. in-house hiring
                            </p>
                        </div>

                        {/* DETAILS */}
                        <div className="bg-white rounded-xl shadow-sm p-6 space-y-4 text-sm">
                            <div>
                                <p className="text-slate-500">CURRENT MONTHLY COST</p>
                                <p className="font-bold text-lg">${inHouse.toLocaleString()}</p>
                                <p className="text-xs text-slate-400">Hiring in-house</p>
                            </div>

                            <div>
                                <p className="text-slate-500">WITH MEDHA CLOUD</p>
                                <p className="font-bold text-lg text-blue-600">
                                    ${medha.toLocaleString()}
                                </p>
                                <p className="text-xs text-slate-400">{extraText}</p>
                            </div>

                            <div>
                                <p className="text-red-500">MONTHLY SAVINGS</p>
                                <p className="font-bold text-lg text-red-500">
                                    ${savings.toLocaleString()}
                                </p>
                            </div>

                            <div>
                                <p className="text-green-600">ANNUAL SAVINGS</p>
                                <p className="font-bold text-lg text-green-600">
                                    ${annual.toLocaleString()}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

// INPUT COMPONENT
const Input = ({ label, value, setValue, sub }) => (
    <div className="mb-4">
        <label className="text-sm text-slate-600">{label}</label>
        <input
            type="number"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            className="w-full mt-1 border rounded-lg px-3 py-2"
        />
        <p className="text-xs text-slate-400 mt-1">{sub}</p>
    </div>
);

export default ROICalculator;