import React, { useMemo, useState } from "react";
import {
  Sparkles,
  Shirt,
  Recycle,
  Truck,
  Heart,
  ShoppingBag,
  Leaf,
  Filter,
  RefreshCcw,
  Wand2,
} from "lucide-react";

const inventory = [
  { id: 1, name: "Structured Blazer", category: "Workwear", style: ["Minimal", "Classic"], season: ["Spring", "Fall"], fit: "Tailored", price: 88, impact: 14, scoreBase: 78 },
  { id: 2, name: "Relaxed Knit Set", category: "Casual", style: ["Minimal", "Comfort"], season: ["Fall", "Winter"], fit: "Relaxed", price: 64, impact: 11, scoreBase: 74 },
  { id: 3, name: "Wide-Leg Trousers", category: "Workwear", style: ["Classic", "Minimal"], season: ["All"], fit: "Relaxed", price: 72, impact: 13, scoreBase: 76 },
  { id: 4, name: "Utility Jacket", category: "Weekend", style: ["Street", "Utility"], season: ["Spring", "Fall"], fit: "Relaxed", price: 69, impact: 12, scoreBase: 71 },
  { id: 5, name: "Ribbed Midi Dress", category: "Going Out", style: ["Classic", "Elevated"], season: ["All"], fit: "Tailored", price: 79, impact: 12, scoreBase: 75 },
  { id: 6, name: "Soft Denim Shirt", category: "Casual", style: ["Classic", "Utility"], season: ["All"], fit: "Relaxed", price: 54, impact: 9, scoreBase: 68 },
  { id: 7, name: "Performance Layer", category: "Active", style: ["Comfort", "Minimal"], season: ["Winter", "Fall"], fit: "Tailored", price: 49, impact: 8, scoreBase: 66 },
  { id: 8, name: "Silk-Feel Shell Top", category: "Workwear", style: ["Elevated", "Minimal"], season: ["All"], fit: "Tailored", price: 46, impact: 7, scoreBase: 67 },
  { id: 9, name: "Weekend Barrel Jeans", category: "Weekend", style: ["Street", "Comfort"], season: ["All"], fit: "Relaxed", price: 58, impact: 10, scoreBase: 69 },
  { id: 10, name: "Statement Coat", category: "Outerwear", style: ["Elevated", "Classic"], season: ["Winter"], fit: "Tailored", price: 99, impact: 16, scoreBase: 79 },
  { id: 11, name: "Travel Jogger", category: "Travel", style: ["Comfort", "Minimal"], season: ["All"], fit: "Relaxed", price: 44, impact: 8, scoreBase: 65 },
  { id: 12, name: "Poplin Overshirt", category: "Workwear", style: ["Minimal", "Utility"], season: ["Spring", "Summer"], fit: "Relaxed", price: 52, impact: 8, scoreBase: 64 },
];

const styleOptions = ["Minimal", "Classic", "Comfort", "Street", "Utility", "Elevated"];
const categoryOptions = ["Workwear", "Casual", "Weekend", "Going Out", "Travel", "Active", "Outerwear"];
const seasons = ["Spring", "Summer", "Fall", "Winter"];

const tabButtonStyle = (active) => ({
  flex: 1,
  padding: "12px 16px",
  borderRadius: 12,
  border: "1px solid #dbe4ee",
  background: active ? "#0f172a" : "#ffffff",
  color: active ? "#ffffff" : "#0f172a",
  fontWeight: 600,
  cursor: "pointer",
});

const cardStyle = {
  background: "#ffffff",
  border: "1px solid #e2e8f0",
  borderRadius: 24,
  padding: 20,
  boxShadow: "0 1px 3px rgba(15, 23, 42, 0.06)",
};

const primaryButton = {
  padding: "10px 14px",
  borderRadius: 14,
  border: "1px solid #0f172a",
  background: "#0f172a",
  color: "#fff",
  fontWeight: 600,
  cursor: "pointer",
};

const secondaryButton = {
  padding: "10px 14px",
  borderRadius: 14,
  border: "1px solid #cbd5e1",
  background: "#fff",
  color: "#0f172a",
  fontWeight: 600,
  cursor: "pointer",
};

const textInput = {
  width: "100%",
  padding: "10px 12px",
  borderRadius: 12,
  border: "1px solid #cbd5e1",
  fontSize: 14,
  boxSizing: "border-box",
};

const pill = {
  display: "inline-block",
  padding: "6px 10px",
  borderRadius: 999,
  background: "#0f172a",
  color: "#fff",
  fontSize: 12,
  fontWeight: 600,
};

const softPill = {
  display: "inline-block",
  padding: "6px 10px",
  borderRadius: 999,
  background: "#e2e8f0",
  color: "#0f172a",
  fontSize: 12,
  fontWeight: 600,
};

const rowBetween = {
  display: "flex",
  justifyContent: "space-between",
};

function MetricCard({ icon, label, value }) {
  return (
    <div style={{ background: "#f8fafc", borderRadius: 16, padding: 16 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#64748b", fontSize: 12, textTransform: "uppercase", marginBottom: 8 }}>
        {icon}
        <span>{label}</span>
      </div>
      <div style={{ fontSize: 28, fontWeight: 700 }}>{value}</div>
    </div>
  );
}

function FlowStep({ icon, title, text }) {
  return (
    <div style={{ background: "#f8fafc", borderRadius: 16, padding: 16 }}>
      <div style={{ width: 40, height: 40, borderRadius: 12, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
        {icon}
      </div>
      <div style={{ fontWeight: 600 }}>{title}</div>
      <div style={{ marginTop: 4, fontSize: 14, color: "#475569" }}>{text}</div>
    </div>
  );
}

function MiniStat({ label, value }) {
  return (
    <div style={{ background: "#f8fafc", borderRadius: 16, padding: 14 }}>
      <div style={{ fontSize: 11, textTransform: "uppercase", color: "#64748b" }}>{label}</div>
      <div style={{ marginTop: 6, fontSize: 24, fontWeight: 700 }}>{value}</div>
    </div>
  );
}

function ActionLine({ label, count, icon }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#f8fafc", borderRadius: 16, padding: 12, marginBottom: 10 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14 }}>
        {icon}
        <span>{label}</span>
      </div>
      <span style={pill}>{count}</span>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <div style={{ marginBottom: 8, fontSize: 14, fontWeight: 600 }}>{label}</div>
      {children}
    </div>
  );
}

function ProgressBlock({ label, value }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, marginBottom: 6 }}>
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div style={{ height: 10, background: "#e2e8f0", borderRadius: 999 }}>
        <div
          style={{
            width: `${value}%`,
            height: "100%",
            background: "#0f172a",
            borderRadius: 999,
          }}
        />
      </div>
    </div>
  );
}

export default function App() {
  const [profile, setProfile] = useState({
    name: "Zach",
    size: "M",
    season: "Fall",
    budget: 80,
    style: ["Minimal", "Classic"],
    categories: ["Workwear", "Casual", "Weekend"],
  });

  const [wardrobeSize, setWardrobeSize] = useState(6);
  const [favorites, setFavorites] = useState([1, 3]);
  const [keptItems] = useState([5]);
  const [returnedItems] = useState([2, 6, 11]);
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("dashboard");

  const recommended = useMemo(() => {
    return inventory
      .map((item) => {
        let score = item.scoreBase;
        if (profile.style.some((s) => item.style.includes(s))) score += 18;
        if (profile.categories.includes(item.category)) score += 16;
        if (item.season.includes(profile.season) || item.season.includes("All")) score += 10;
        if (item.price <= profile.budget) score += 7;
        if (favorites.includes(item.id)) score += 12;
        return { ...item, score };
      })
      .filter(
        (item) =>
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.category.toLowerCase().includes(search.toLowerCase())
      )
      .sort((a, b) => b.score - a.score)
      .slice(0, wardrobeSize);
  }, [profile, wardrobeSize, favorites, search]);

  const metrics = useMemo(() => {
    const rotated = recommended.length + returnedItems.length;
    const impact = recommended.reduce((sum, item) => sum + item.impact, 0) + returnedItems.length * 6;
    const utilization = Math.min(92, 45 + favorites.length * 8 + keptItems.length * 6 + returnedItems.length * 4);
    return { rotated, impact, utilization };
  }, [recommended, returnedItems, favorites, keptItems]);

  const toggleStyle = (style) => {
    setProfile((prev) => ({
      ...prev,
      style: prev.style.includes(style)
        ? prev.style.filter((s) => s !== style)
        : [...prev.style, style],
    }));
  };

  const toggleCategory = (category) => {
    setProfile((prev) => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter((c) => c !== category)
        : [...prev.categories, category],
    }));
  };

  const toggleFavorite = (id) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        color: "#0f172a",
        fontFamily: "Inter, system-ui, Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: 24 }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 16, marginBottom: 24 }}>
          <div style={cardStyle}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 16 }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#64748b", fontSize: 14, marginBottom: 12 }}>
                  <Sparkles size={16} />
                  AI-powered circular wardrobe
                </div>
                <h1 style={{ fontSize: 44, margin: "0 0 10px 0" }}>ReLoop</h1>
                <p style={{ margin: 0, color: "#475569", lineHeight: 1.6 }}>
                  A real product prototype for your sustainable marketing plan: monthly wardrobe rotation,
                  AI recommendations, closet optimization, and circular impact tracking in one app.
                </p>
              </div>
              <div>
                <span style={{ padding: "6px 12px", borderRadius: 999, background: "#e2e8f0", fontSize: 12 }}>
                  Prototype
                </span>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginTop: 24 }}>
              <MetricCard icon={<Shirt size={16} />} label="Items in rotation" value={String(metrics.rotated)} />
              <MetricCard icon={<Leaf size={16} />} label="Impact score" value={String(metrics.impact)} />
              <MetricCard icon={<RefreshCcw size={16} />} label="Utilization" value={`${metrics.utilization}%`} />
            </div>
          </div>

          <div style={cardStyle}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 600, marginBottom: 16 }}>
              <Wand2 size={16} />
              AI summary
            </div>
            <div style={{ color: "#475569", fontSize: 14, lineHeight: 1.7 }}>
              <p>
                Based on {profile.style.join(" + ")} preferences, the engine is prioritizing{" "}
                {profile.categories.slice(0, 2).join(" and ")} pieces for {profile.season.toLowerCase()}.
              </p>
              <p>
                It is favoring versatile neutrals, repeat-wear staples, and items under your target monthly
                value threshold of ${profile.budget}.
              </p>
              <p>
                Recommendation confidence rises as the user rates looks, keeps favorites, and returns low-fit items.
              </p>
            </div>
          </div>
        </div>

        <div style={{ ...cardStyle, padding: 8, display: "flex", gap: 8, marginBottom: 24 }}>
          <button onClick={() => setActiveTab("dashboard")} style={tabButtonStyle(activeTab === "dashboard")}>Dashboard</button>
          <button onClick={() => setActiveTab("recommendations")} style={tabButtonStyle(activeTab === "recommendations")}>AI Wardrobe</button>
          <button onClick={() => setActiveTab("closet")} style={tabButtonStyle(activeTab === "closet")}>Digital Closet</button>
          <button onClick={() => setActiveTab("settings")} style={tabButtonStyle(activeTab === "settings")}>Profile Engine</button>
        </div>

        {activeTab === "dashboard" && (
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 16 }}>
            <div style={cardStyle}>
              <h3 style={{ marginTop: 0 }}>Product flow</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
                <FlowStep icon={<Sparkles size={18} />} title="1. Profile" text="Capture size, style, fit, and occasion needs." />
                <FlowStep icon={<Shirt size={18} />} title="2. Curate" text="AI assembles a monthly wardrobe." />
                <FlowStep icon={<Truck size={18} />} title="3. Rotate" text="Ship, wear, swap, and return items." />
                <FlowStep icon={<Recycle size={18} />} title="4. ReLoop" text="Recirculate, donate, or retire inventory." />
              </div>
            </div>

            <div style={cardStyle}>
              <h3 style={{ marginTop: 0 }}>Impact dashboard</h3>
              <ProgressBlock label="Monthly circularity target" value={72} />
              <ProgressBlock label="Repeat wear rate" value={metrics.utilization} />

              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12, marginTop: 16 }}>
                <MiniStat label="Items kept in use" value="24" />
                <MiniStat label="Estimated purchases avoided" value="9" />
                <MiniStat label="Items donated" value="5" />
                <MiniStat label="AI fit accuracy" value="88%" />
              </div>
            </div>
          </div>
        )}

        {activeTab === "recommendations" && (
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, marginBottom: 20 }}>
              <div>
                <h2 style={{ margin: 0 }}>AI wardrobe recommendations</h2>
                <p style={{ color: "#475569" }}>Personalized capsule based on style, season, price comfort, and prior behavior.</p>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <div style={{ position: "relative" }}>
                  <Filter size={16} style={{ position: "absolute", left: 10, top: 12, color: "#94a3b8" }} />
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search category or item"
                    style={{
                      padding: "10px 12px 10px 34px",
                      borderRadius: 14,
                      border: "1px solid #cbd5e1",
                      minWidth: 240,
                    }}
                  />
                </div>
                <button style={primaryButton}>Refresh AI Mix</button>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
              {recommended.map((item) => (
                <div key={item.id} style={cardStyle}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
                    <div>
                      <div style={{ fontSize: 20, fontWeight: 700 }}>{item.name}</div>
                      <div style={{ fontSize: 14, color: "#64748b" }}>{item.category} · {item.fit}</div>
                    </div>
                    <span style={pill}>AI {item.score}</span>
                  </div>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 14 }}>
                    {item.style.map((s) => (
                      <span key={s} style={softPill}>{s}</span>
                    ))}
                  </div>

                  <div style={{ marginTop: 16, color: "#475569", fontSize: 14, lineHeight: 1.8 }}>
                    <div style={rowBetween}><span>Monthly value</span><span>${item.price}</span></div>
                    <div style={rowBetween}><span>Impact score</span><span>{item.impact}</span></div>
                    <div style={rowBetween}><span>Best season</span><span>{item.season.join(", ")}</span></div>
                  </div>

                  <div style={{ display: "flex", gap: 8, marginTop: 18 }}>
                    <button style={{ ...primaryButton, flex: 1 }}>Add to box</button>
                    <button
                      onClick={() => toggleFavorite(item.id)}
                      style={{
                        ...secondaryButton,
                        width: 48,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Heart size={18} fill={favorites.includes(item.id) ? "currentColor" : "none"} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "closet" && (
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 16 }}>
            <div style={cardStyle}>
              <h3 style={{ marginTop: 0 }}>Current digital closet</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
                {inventory.slice(0, 6).map((item) => (
                  <div key={item.id} style={{ border: "1px solid #e2e8f0", borderRadius: 16, padding: 16 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <div>
                        <div style={{ fontWeight: 600 }}>{item.name}</div>
                        <div style={{ color: "#64748b", fontSize: 14 }}>{item.category}</div>
                      </div>
                      <span style={keptItems.includes(item.id) ? pill : softPill}>
                        {keptItems.includes(item.id) ? "Keep" : "Rotate"}
                      </span>
                    </div>
                    <div style={{ marginTop: 10, color: "#475569", fontSize: 14 }}>
                      Suggested next action: {keptItems.includes(item.id) ? "Offer purchase option" : "Rotate after current cycle"}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={cardStyle}>
              <h3 style={{ marginTop: 0 }}>Cycle actions</h3>
              <ActionLine label="Buy favorites" count={keptItems.length} icon={<ShoppingBag size={16} />} />
              <ActionLine label="Return this month" count={returnedItems.length} icon={<RefreshCcw size={16} />} />
              <ActionLine label="Items loved" count={favorites.length} icon={<Heart size={16} />} />
              <div style={{ marginTop: 12, background: "#f8fafc", borderRadius: 16, padding: 16, color: "#475569", fontSize: 14 }}>
                AI suggests increasing next month’s mix of workwear staples and reducing occasion-only pieces.
              </div>
            </div>
          </div>
        )}

        {activeTab === "settings" && (
          <div style={{ display: "grid", gridTemplateColumns: "0.95fr 1.05fr", gap: 16 }}>
            <div style={cardStyle}>
              <h3 style={{ marginTop: 0 }}>Profile engine</h3>

              <Field label="Name">
                <input
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  style={textInput}
                />
              </Field>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <Field label="Size">
                  <select
                    value={profile.size}
                    onChange={(e) => setProfile({ ...profile, size: e.target.value })}
                    style={textInput}
                  >
                    {["XS", "S", "M", "L", "XL"].map((s) => <option key={s}>{s}</option>)}
                  </select>
                </Field>

                <Field label="Season">
                  <select
                    value={profile.season}
                    onChange={(e) => setProfile({ ...profile, season: e.target.value })}
                    style={textInput}
                  >
                    {seasons.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </Field>
              </div>

              <Field label={`Target monthly item value: $${profile.budget}`}>
                <input
                  type="range"
                  min="40"
                  max="120"
                  step="2"
                  value={profile.budget}
                  onChange={(e) => setProfile({ ...profile, budget: Number(e.target.value) })}
                  style={{ width: "100%" }}
                />
              </Field>

              <Field label={`Wardrobe size: ${wardrobeSize} items`}>
                <input
                  type="range"
                  min="4"
                  max="10"
                  step="1"
                  value={wardrobeSize}
                  onChange={(e) => setWardrobeSize(Number(e.target.value))}
                  style={{ width: "100%" }}
                />
              </Field>
            </div>

            <div style={cardStyle}>
              <h3 style={{ marginTop: 0 }}>Preference tuning</h3>

              <div style={{ marginBottom: 24 }}>
                <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 12 }}>Style tags</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {styleOptions.map((style) => (
                    <button
                      key={style}
                      onClick={() => toggleStyle(style)}
                      style={profile.style.includes(style) ? primaryButton : secondaryButton}
                    >
                      {style}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 12 }}>Priority categories</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10 }}>
                  {categoryOptions.map((category) => (
                    <label
                      key={category}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        border: "1px solid #e2e8f0",
                        borderRadius: 16,
                        padding: 12,
                        background: "#fff",
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={profile.categories.includes(category)}
                        onChange={() => toggleCategory(category)}
                      />
                      <span>{category}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}