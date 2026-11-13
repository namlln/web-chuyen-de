
import { useState } from "react";
import "./App.css";

export default function App() {
  const [showHobbies, setShowHobbies] = useState(true);

  const hobbies = [
    "Lập trình web",
    "Khám phá công nghệ",
    "Chơi game"
  ];

  return (
    <div className="profile-card">
      <div className="avatar">IT</div>
      <h1>GIỚI THIỆU BẢN THÂN</h1>
      <h2>Lê Lâm Nhật Nam</h2>
      <p>Sinh viên Công nghệ thông tin</p>

      <div className="info">
        <p><b>Lớp:</b> 242101TH001</p>
        <p><b>Chuyên ngành:</b> Công nghệ thông tin</p>
        <p><b>Sở thích:</b> Công nghệ và lập trình</p>
      </div>

      <button onClick={() => setShowHobbies(!showHobbies)}>
        {showHobbies ? "Ẩn sở thích" : "Xem sở thích"}
      </button>

      {showHobbies && (
        <ul>
          {hobbies.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}

      <a href="https://github.com/"
         target="_blank"
         rel="noopener noreferrer">
        Xem GitHub của tôi
      </a>
    </div>
  );
}
