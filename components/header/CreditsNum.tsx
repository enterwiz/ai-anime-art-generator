import { useEffect, useState } from "react";

export default function CreditsNum() {
  const [credits, setCredits] = useState(0);

  useEffect(() => {
    // 这里应该是从API或状态管理中获取实际的积分数量
    // 这只是一个示例，实际使用时请替换为真实的数据获取逻辑
    const fetchCredits = async () => {
      const response = await fetch("/api/credits");
      const data = await response.json();
      setCredits(data.credits);
    };

    fetchCredits();
  }, []);

  return (
    <div className="flex items-center">
      <div className="relative flex items-center justify-center w-8 h-8 mr-2 bg-yellow-400 rounded-full border-2 border-yellow-500 shadow-inner">
        <div className="absolute inset-0 bg-yellow-300 rounded-full m-1"></div>
        <span className="relative text-xs font-bold text-yellow-800">$</span>
      </div>
      <span className="font-bold text-yellow-800">{credits}</span>
    </div>
  );
}

