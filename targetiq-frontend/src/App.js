import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './Navbar'

export default function UploadTarget() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setResult(null);
  };

  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('https://targetiq-backend.onrender.com/upload', formData);
      setResult(res.data);
    } catch (err) {
      console.error('Upload failed:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <Navbar />
      <h1 className="text-2xl font-bold mb-4">🎯 Upload Your Target</h1>
      <h2 className="text-lg font-semibold mb-2">1. Upload Target Image</h2>
      <p><input type="file" accept="image/*" onChange={handleFileChange} className="mb-4" /></p>
      <br></br>
      <h2 className="text-lg font-bold mb-2">2. Enter Shooter Information</h2>
      <p>
        <input type="text" placeholder="Enter Shooter's First Name" className="mb-4 w-full p-2 border rounded" />
      </p>
      <p>
        <input type="text" placeholder="Enter Shooter's Last Name" className="mb-4 w-full p-2 border rounded" />
      </p>
      <p><input type="text" id="handedness" name="handedness" list="handedness-list" placeholder="Select Handedness" className="mb-4 w-full p-2 border rounded" /></p>
      <datalist id="handedness-list">
        <option value="Right-handed" />
        <option value="Left-handed" />
      </datalist>
      <p><input type="text" id="dominanteye" name="dominanteye" list="dominanteye-list" placeholder="Select Dominant Eye" className="mb-4 w-full p-2 border rounded" /></p>
      <datalist id="dominanteye-list">
        <option value="Right Eye" />
        <option value="Left Eye" />
      </datalist>
      <h2 className="text-lg font-bold mb-2">3. Enter Target Information</h2>
      <p><input type="text" placeholder="Enter Target Distance in Yards" className="mb-4 w-full p-2 border rounded" pattern="[0-9]*" title="Only numbers are allowed" /></p>
      <p><input list="target-location" name="targetLocation" id="targetLocation" placeholder="Select Target Location" /></p>
      <datalist id="target-location">
      <option value="Indoor" />
      <option value="Outdoor" />
      </datalist>
      <p><input list="target-traininggoal" name="trainingGoal" id="trainingGoal" placeholder="Select Training Goal" /></p>
      <datalist id="target-traininggoal">
      <option value="Self-Defense" />
      <option value="Precision Shooting" />
      </datalist>
      <p><input list="target-types" name="targetType" id="targetType" placeholder="Select Target Type" /></p>
      <datalist id="target-types">
      <option value="Unknown or Unspecified" />
      <option value="AP-1(CB)" />
      <option value="AP-1(P)" />
      <option value="AP-1(T)" />
      <option value="AP-1C" />
      <option value="AP-2" />
      <option value="B-11" />
      <option value="B-16" />
      <option value="B-17" />
      <option value="B-17C" />
      <option value="B-18" />
      <option value="B-18C" />
      <option value="B-19" />
      <option value="B-19C" />
      <option value="B-2" />
      <option value="B-2 Blue" />
      <option value="B-2 Orange" />
      <option value="B-24" />
      <option value="B-24 Orange" />
      <option value="B-24 RC" />
      <option value="B-24 REV C" />
      <option value="B-27" />
      <option value="B-27 (24 in)" />
      <option value="B-27C (24 in) CB" />
      <option value="B-27C" />
      <option value="B-27E" />
      <option value="B-29" />
      <option value="B-3" />
      <option value="B-3 Blue" />
      <option value="B-3 Orange" />
      <option value="B-33" />
      <option value="B-34" />
      <option value="B-35" />
      <option value="B-37" />
      <option value="B-37C" />
      <option value="B-38" />
      <option value="B-38C" />
      <option value="B-39" />
      <option value="B-4" />
      <option value="B-5" />
      <option value="B-6(P)" />
      <option value="B-6(T)" />
      <option value="B-6C(P)" />
      <option value="B-6C(T)" />
      <option value="B-8(P)" />
      <option value="B-8(P) Blue" />
      <option value="B-8(T)" />
      <option value="B-8C(P)" />
      <option value="B-8C(T)" />
      <option value="D-1(CB)" />
      <option value="D-1(P)" />
      <option value="D-1(T)" />
      <option value="D-1C" />
      <option value="D-2" />
      <option value="IDPA (CB)" />
      <option value="IDPA (P)" />
      <option value="IDSC (CB)" />
      <option value="IDSC (P)" />
      </datalist>
      <h3 className="text-lg font-bold mb-2">Target Types Reference (Use the images below to select the appropriate target type or select Unknown or Unspecified)</h3>
      <p>
        <div class="image-grid">
          <label>
          <img src="https://xxhmosfjm5xayj7j.public.blob.vercel-storage.com/ap-1cb-300x300.jpg" alt="AP-1(CB)" class="image-grid img" />AP-1(CB)
          </label>
          <label>
          <img src="https://xxhmosfjm5xayj7j.public.blob.vercel-storage.com/ap-1-300x300.jpg" alt="AP-1(P)" class="image-grid img" />AP-1(P)
          </label>
          <label>
          <img src="https://xxhmosfjm5xayj7j.public.blob.vercel-storage.com/ap-1-300x300.jpg" alt="AP-1(T)" class="image-grid img" />AP-1(T)
          </label>
          <label>
          <img src="https://xxhmosfjm5xayj7j.public.blob.vercel-storage.com/ap-1c-300x300.jpg" alt="AP-1C" class="image-grid img" />AP-1C
          </label>
          <label>
          <img src="https://xxhmosfjm5xayj7j.public.blob.vercel-storage.com/ap-1-300x300.jpg" alt="AP-2" class="image-grid img" />AP-2
          </label>
          <label>
          <img src="https://xxhmosfjm5xayj7j.public.blob.vercel-storage.com/B-11.gif" alt="B-11" class="image-grid img" />B-11
          </label>
          <label>
          <img src="https://xxhmosfjm5xayj7j.public.blob.vercel-storage.com/B-16-300x300.jpg" alt="B-16" class="image-grid img" />B-16
          </label>
          <label>
          <img src="https://xxhmosfjm5xayj7j.public.blob.vercel-storage.com/2013-B-17-300x300.jpg" alt="B-17" class="image-grid img" />B-17
          </label>
          <label>
          <img src="https://xxhmosfjm5xayj7j.public.blob.vercel-storage.com/2013-b-17c-300x300.jpg" alt="B-17C" class="image-grid img" />B-17C
          </label>
          <label>
          <img src="https://xxhmosfjm5xayj7j.public.blob.vercel-storage.com/B-18.gif" alt="B-18" class="image-grid img" />B-18
          </label>
          <label>
          <img src="https://xxhmosfjm5xayj7j.public.blob.vercel-storage.com/NRA-B-18C-300x300.png" alt="B-18C" class="image-grid img" />B-18C
          </label>
          <label>
          <img src="https://xxhmosfjm5xayj7j.public.blob.vercel-storage.com/2013-B-19-300x300.jpg" alt="B-19" class="image-grid img" />B-19
          </label>
          <label>
          <img src="https://xxhmosfjm5xayj7j.public.blob.vercel-storage.com/2013-b-19c-300x300.jpg" alt="B-19C" class="image-grid img" />B-19C
          </label>
          <label>
          <img src="https://xxhmosfjm5xayj7j.public.blob.vercel-storage.com/B-2-300x300.jpg" alt="B-2" class="image-grid img" />B-2
          </label>
          <label>
          <img src="https://xxhmosfjm5xayj7j.public.blob.vercel-storage.com/B-2-BLUE-ART-300x300.png" alt="B-2 Blue" class="image-grid img" />B-2 Blue
          </label>
          <label>
          <img src="https://xxhmosfjm5xayj7j.public.blob.vercel-storage.com/B-3-ORANGE-ART-300x300.png" alt="B-2 Orange" class="image-grid img" />B-2 Orange
          </label>
          <label>
          <img src="https://xxhmosfjm5xayj7j.public.blob.vercel-storage.com/2013-B-24-300x300.jpg" alt="B-24" class="image-grid img" />B-24
          </label>
          <label>
          <img src="https://xxhmosfjm5xayj7j.public.blob.vercel-storage.com/B-24-ORANGE-300x300.png" alt="B-24 Orange" class="image-grid img" />B-24 Orange
          </label>
          <label>
          <img src="https://xxhmosfjm5xayj7j.public.blob.vercel-storage.com/B-24-REV-RC-300x300.jpg" alt="B-24 RC" class="image-grid img" />B-24 RC
          </label>
          <label>
          <img src="https://xxhmosfjm5xayj7j.public.blob.vercel-storage.com/B-24-REV-RC-300x300.jpg" alt="B-24 REV C" class="image-grid img" />B-24 REV C
          </label>
          <label>
          <img src="https://xxhmosfjm5xayj7j.public.blob.vercel-storage.com/B-27-300x300.jpg" alt="B-27" class="image-grid img" />B-27
          </label>
          <label>
          <img src="https://xxhmosfjm5xayj7j.public.blob.vercel-storage.com/B-2724-300x300.jpg" alt="B-27 (24 in)" class="image-grid img" />B-27 (24 in)
          </label>
          <label>
          <img src="https://xxhmosfjm5xayj7j.public.blob.vercel-storage.com/b-2724cb-300x300.jpg" alt="B-27C (24 in) CB" class="image-grid img" />B-27C (24 in) CB
          </label>
          <label>
          <img src="https://xxhmosfjm5xayj7j.public.blob.vercel-storage.com/B-27C-300x300.jpg" alt="B-27C" class="image-grid img" />B-27C
          </label>
          <label>
          <img src="https://xxhmosfjm5xayj7j.public.blob.vercel-storage.com/B-27E-300x300.jpg" alt="B-27E" class="image-grid img" />B-27E
          </label>
          <label>
          <img src="https://xxhmosfjm5xayj7j.public.blob.vercel-storage.com/B-29-300x300.jpg" alt="B-29" class="image-grid img" />B-29
          </label>
          <label>
          <img src="https://xxhmosfjm5xayj7j.public.blob.vercel-storage.com/B-3-300x300.jpg" alt="B-3" class="image-grid img" />B-3
          </label>
          <label>
          <img src="https://xxhmosfjm5xayj7j.public.blob.vercel-storage.com/B-3-BLUE-ART-300x300.png" alt="B-3 Blue" class="image-grid img" />B-3 Blue
          </label>
          <label>
          <img src="https://xxhmosfjm5xayj7j.public.blob.vercel-storage.com/B-3-ORANGE-ART-300x300.png" alt="B-3 Orange" class="image-grid img" />B-3 Orange
          </label>
          <label>
          <img src="https://xxhmosfjm5xayj7j.public.blob.vercel-storage.com/B-33-300x300.jpg" alt="B-33" class="image-grid img" />B-33
          </label>
          <label>
          <img src="https://xxhmosfjm5xayj7j.public.blob.vercel-storage.com/B-34-300x300.jpg" alt="B-34" class="image-grid img" />B-34
          </label>
          <label>
          <img src="https://xxhmosfjm5xayj7j.public.blob.vercel-storage.com/B-35.gif" alt="B-35" class="image-grid img" />B-35
          </label>
          <label>
          <img src="https://xxhmosfjm5xayj7j.public.blob.vercel-storage.com/2013-b-37-300x300.jpg" alt="B-37" class="image-grid img" />B-37
          </label>
          <label>
          <img src="https://xxhmosfjm5xayj7j.public.blob.vercel-storage.com/2013-b-28c-300x300.jpg" alt="B-37C" class="image-grid img" />B-37C
          </label>
          <label>
          <img src="https://xxhmosfjm5xayj7j.public.blob.vercel-storage.com/2013-b-38-300x300.jpg" alt="B-38" class="image-grid img" />B-38
          </label>
          <label>
          <img src="https://xxhmosfjm5xayj7j.public.blob.vercel-storage.com/2013-b-28c-300x300.jpg" alt="B-38C" class="image-grid img" />B-38C
          </label>
          <label>
          <img src="https://xxhmosfjm5xayj7j.public.blob.vercel-storage.com/2013-B-39-300x300.jpg" alt="B-39" class="image-grid img" />B-39
          </label>
          <label>
          <img src="https://xxhmosfjm5xayj7j.public.blob.vercel-storage.com/B-4-300x300.jpg" alt="B-4" class="image-grid img" />B-4
          </label>
          <label>
          <img src="https://xxhmosfjm5xayj7j.public.blob.vercel-storage.com/B-5-300x300.jpg" alt="B-5" class="image-grid img" />B-5
          </label>
          <label>
          <img src="https://xxhmosfjm5xayj7j.public.blob.vercel-storage.com/B-6P-300x300.jpg" alt="B-6(P)" class="image-grid img" />B-6(P)
          </label>
          <label>
          <img src="https://xxhmosfjm5xayj7j.public.blob.vercel-storage.com/B-6T-300x300.jpg" alt="B-6(T)" class="image-grid img" />B-6(T)
          </label>
          <label>
          <img src="https://xxhmosfjm5xayj7j.public.blob.vercel-storage.com/B-6CP-300x300.jpg" alt="B-6C(P)" class="image-grid img" />B-6C(P)
          </label>
          <label>
          <img src="https://xxhmosfjm5xayj7j.public.blob.vercel-storage.com/B-6CP-300x300.jpg" alt="B-6C(T)" class="image-grid img" />B-6C(T)
          </label>
          <label>
          <img src="https://xxhmosfjm5xayj7j.public.blob.vercel-storage.com/B-8P-300x300.jpg" alt="B-8(P)" class="image-grid img" />B-8(P)
          </label>
          <label>
          <img src="https://xxhmosfjm5xayj7j.public.blob.vercel-storage.com/B-8-P-BLUE-ART-300x300.png" alt="B-8(P) Blue" class="image-grid img" />B-8(P) Blue
          </label>
          <label>
          <img src="https://xxhmosfjm5xayj7j.public.blob.vercel-storage.com/B-8P-300x300.jpg" alt="B-8(T)" class="image-grid img" />B-8(T)
          </label>
          <label>
          <img src="https://xxhmosfjm5xayj7j.public.blob.vercel-storage.com/B-8CP-300x300.jpg" alt="B-8C(P)" class="image-grid img" />B-8C(P)
          </label>
          <label>
          <img src="https://xxhmosfjm5xayj7j.public.blob.vercel-storage.com/B-8CP-300x300.jpg" alt="B-8C(T)" class="image-grid img" />B-8C(T)
          </label>
          <label>
          <img src="https://xxhmosfjm5xayj7j.public.blob.vercel-storage.com/D-1CB-300x300.jpg" alt="D-1(CB)" class="image-grid img" />D-1(CB)
          </label>
          <label>
          <img src="https://xxhmosfjm5xayj7j.public.blob.vercel-storage.com/D-1-300x300.jpg" alt="D-1(P)" class="image-grid img" />D-1(P)
          </label>
          <label>
          <img src="https://xxhmosfjm5xayj7j.public.blob.vercel-storage.com/D-1-300x300.jpg" alt="D-1(T)" class="image-grid img" />D-1(T)
          </label>
          <label>
          <img src="https://xxhmosfjm5xayj7j.public.blob.vercel-storage.com/d-1c-300x300.jpg" alt="D-1C" class="image-grid img" />D-1C
          </label>
          <label>
          <img src="https://xxhmosfjm5xayj7j.public.blob.vercel-storage.com/D-2.gif" alt="D-2" class="image-grid img" />D-2
          </label>
          <label>
          <img src="https://xxhmosfjm5xayj7j.public.blob.vercel-storage.com/sqt-a-1-art-300x300.png" alt="GA SQT. A-1" class="image-grid img" />GA SQT. A-1
          </label>
          <label>
          <img src="https://xxhmosfjm5xayj7j.public.blob.vercel-storage.com/GA-PT.gif" alt="GA-PT" class="image-grid img" />GA-PT
          </label>
          <label>
          <img src="https://xxhmosfjm5xayj7j.public.blob.vercel-storage.com/IDPA-CB-300x300.jpg" alt="IDPA (CB)" class="image-grid img" />IDPA (CB)
          </label>
          <label>
          <img src="https://xxhmosfjm5xayj7j.public.blob.vercel-storage.com/IDPA-NEW-20171-300x300.jpg" alt="IDPA (P)" class="image-grid img" />IDPA (P)
          </label>
          <label>
          <img src="https://xxhmosfjm5xayj7j.public.blob.vercel-storage.com/IPSCCB-300x300.jpg" alt="IDSC (CB)" class="image-grid img" />IDSC (CB)
          </label>
          <label>
          <img src="https://xxhmosfjm5xayj7j.public.blob.vercel-storage.com/IPSC-300x300.jpg" alt="IDSC (P)" class="image-grid img" />IDSC (P)
          </label>
        </div>
      </p>
      <h2 className="text-lg font-bold mb-2">4. Enter Firearm Information</h2>
      <p><input list="firearm-makes" name="firearmMake" id="firearmMake" placeholder="Select Firearm's Make" className="mb-4 w-full p-2 border rounded" /></p>
      <datalist id="firearm-makes">
        <option value="Beretta" />
        <option value="Browning" />
        <option value="Colt" />
        <option value="CZ (Česká Zbrojovka)" />
        <option value="FN Herstal" />
        <option value="Glock" />
        <option value="Heckler & Koch (HK)" />
        <option value="IWI (Israel Weapon Industries)" />
        <option value="Kel-Tec" />
        <option value="Kimber" />
        <option value="Mossberg" />
        <option value="Remington" />
        <option value="Ruger" />
        <option value="Sako" />
        <option value="Savage Arms" />
        <option value="SIG Sauer" />
        <option value="Smith & Wesson" />
        <option value="Springfield Armory" />
        <option value="Steyr Arms" />
        <option value="Stoeger" />
        <option value="Taurus" />
        <option value="Tikka" />
        <option value="Walther" />
        <option value="Weatherby" />
        <option value="Wilson Combat" />
        <option value="Zastava Arms" />
        <option value="Marlin" />
        <option value="Christensen Arms" />
        <option value="Daniel Defense" />
        <option value="Century Arms" />
        <option value="PTR Industries" />
        <option value="Palmetto State Armory" />
        <option value="DSA Inc." />
        <option value="Bushmaster" />
        <option value="Armalite" />
        <option value="Faxon Firearms" />
        <option value="FN America" />
        <option value="JP Enterprises" />
        <option value="Kahr Arms" />
        <option value="Bergara" />
        <option value="Rock River Arms" />
        <option value="Adams Arms" />
        <option value="Christensen Arms" />
        <option value="Other" />
      </datalist>
      <p><input type="text" placeholder="Enter Firearm Model" className="mb-4 w-full p-2 border rounded" /></p>
      <p><input type="text" id="caliber" name="caliber" list="caliber-list" placeholder="Select Caliber" className="mb-4 w-full p-2 border rounded" /></p>
      <datalist id="caliber-list">
        <option value="9mm Luger" />
        <option value=".45 ACP" />
        <option value=".40 S&W" />
        <option value=".38 Special" />
        <option value=".357 Magnum" />
        <option value=".22 LR" />
        <option value=".380 ACP" />
        <option value="5.56x45mm NATO" />
        <option value="7.62x39mm" />
        <option value="7.62x51mm NATO (.308 Winchester)" />
        <option value=".300 Winchester Magnum" />
        <option value="10 mm Auto" />
        <option value=".44 Special" />
        <option value=".44 Magnum" />
        <option value=".223 Remington" />
        <option value=".243 Winchester" />
        <option value=".270 Winchester" />
        <option value=".30-06 Springfield" />
        <option value=".300 Blackout" />
        <option value=".338 Lapua Magnum" />
        <option value=".50 BMG" />
        <option value=".17 HMR" />
        <option value=".204 Ruger" />
        <option value=".22-250 Remington" />
        <option value=".243 WSSM" />
        <option value=".25-06 Remington" />
        <option value=".280 Remington" />
        <option value=".300 Remington Ultra Magnum" />
        <option value=".338 Winchester Magnum" />
        <option value=".375 H&H Magnum" />
        <option value=".416 Rigby" />
        <option value=".458 Winchester Magnum" />
        <option value=".500 S&W Magnum" />
        <option value=".577 Tyrannosaur" />
        <option value=".600 Nitro Express" />
        <option value=".700 Nitro Express" />
        <option value=".22 WMR" />
        <option value=".32 ACP" />
        <option value=".32 H&R Magnum" />
        <option value=".38 Super" />
        <option value=".357 SIG" />
        <option value=".40 Super" />
        <option value=".45 GAP" />
        <option value=".50 AE" />
        <option value=".500 Auto Max" />
        <option value=".22 Hornet" />
        <option value=".218 Bee" />
        <option value=".22 K-Hornet" />
        <option value=".22-250 Ackley Improved" />
        <option value=".243 Ackley Improved" />
        <option value=".25-06 Ackley Improved" />
        <option value=".270 Ackley Improved" />
        <option value=".30-06 Ackley Improved" />
        <option value=".300 Winchester Ackley Improved" />
        <option value=".338-06 Ackley Improved" />
        <option value=".35 Whelen Ackley Improved" />
        <option value=".375 Ackley Improved" />
        <option value=".416 Ackley Improved" />
        <option value=".458 Ackley Improved" />
        <option value=".500 Ackley Improved" />
        <option value=".577 Ackley Improved" />
        <option value=".600 Ackley Improved" />
        <option value=".700 Ackley Improved" />
        <option value=".22-250 Remington" />
        <option value=".243 Winchester" />
        <option value=".270 Winchester" />
        <option value=".30-06 Springfield" />
        <option value=".300 Winchester Magnum" />
        <option value=".338 Winchester Magnum" />
        <option value=".375 H&H Magnum" />
        <option value=".416 Rigby" />
        <option value=".458 Winchester Magnum" />
        <option value=".500 Nitro Express" />
        <option value=".577 Nitro Express" />
        <option value=".600 Nitro Express" />
        <option value=".700 Nitro Express" />
        <option value="Other" />
      </datalist>
      <br></br>
      <p>
      <h2 className="text-lg font-bold mb-2">5. Click Button to Analyze Your Target</h2></p>
      <p>
      <button
        onClick={handleUpload}
        disabled={!file || loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Processing...' : 'Analyze Target'}
      </button>
      </p>
      {result && (
        <div className="mt-6 bg-gray-100 p-4 rounded shadow">
          
          <h2 className="text-lg font-semibold mb-2">Shooter's Profile</h2>
          <p><strong>Name:</strong> {result.shooter_name}</p>
          <p><strong>Handedness:</strong> {result.shooter_handedness}</p>
          <p><strong>Dominant Eye:</strong> {result.shooter_dominant_eye}</p>
          <p><strong>Caliber:</strong> {result.shooter_caliber}</p>
          <p><strong>Target Type:</strong> {result.shooter_target_type}</p>
          <p><strong>Firearm Make:</strong> {result.shooter_firearm_make}</p>
          <p><strong>Firearm Model:</strong> {result.shooter_firearm_model}</p>
          <p><strong>Distance:</strong> {result.shooter_distance}</p>
          <p><strong>Location:</strong> {result.shooter_location}</p>

          <h2 className="text-lg font-semibold mb-2">🔍 Results</h2>
          <p><strong>Shot Grouping Pattern:</strong> {result.shot_group_pattern}</p>
          <p><strong>Shot Vertical Pattern:</strong> {result.shot_vertical_pattern}</p>
          <p><strong>Shot Distribution Overview:</strong> {result.shot_distribution_overview}</p>
          <br></br>
          <div className="mt-2">
            <strong>Coaching Analysis:</strong>
            <p>
              {result.coaching_analysis.map((tip, i) => (
                <p key={i}>- {tip}</p>
              ))}
            </p>
          </div>
          <br></br>
          <div className="mt-2">
            <strong>Areas of Improvement:</strong>
            <p>
              {result.areas_of_improvement.map((tip, i) => (
                <p key={i}>- {tip}</p>
              ))}
            </p>
          </div>
          <br></br>
          <div className="mt-2">
            <strong>Suggestions:</strong>
            <p>
              {result.suggestions.map((tip, i) => (
                <p key={i}>- {tip}</p>
              ))}
            </p>
          </div>

          <br></br>    

          <p><strong>Recommendations:</strong> {result.recommendations}</p>

          <p><strong>Corrective Drills:</strong> {result.corrective_drills}</p>

          <p><strong>Summary:</strong> {result.summary}</p>

        </div>
      )}
      <br></br>
  <footer>
    <p>&copy; 2025 TargetIQ. All rights reserved.</p>
  </footer>
    </div>
  );
}


