---
layout: home

hero:
  name: "CereNexus"
  text: "API 学习中心"
  tagline: "从零开始，系统学习 AI API 的使用"
  actions:
    - theme: brand
      text: 入门教程 →
      link: /beginner/引言
    - theme: alt
      text: 进阶教程（敬请期待）
      link: /advanced/

features:
  - icon: 🧠
    title: 从零开始
    details: 不需要任何基础，用最直白的语言讲清楚 AI API 是什么、怎么用。
  - icon: 🎮
    title: 🎮 交互式演示
    details: 每个关键概念配有可操作的交互演示，看得见、摸得着。
  - icon: 🚀
    title: 循序渐进
    details: 从模型选择到 Token 计费，内容层层递进，不跳跃不跨步。
---

<style>
/* 1. 苹果风液态渐变文字与炫彩全局背景 */
:root {
  --vp-home-hero-name-color: linear-gradient(135deg, #0051ff 0%, #c800ff 50%, #ff007f 100%) !important;
}

/* 在首页背景注入三处液体弥散高光氛围灯 */
.VPHome {
  background-image: 
    radial-gradient(at 0% 0%, rgba(0, 102, 204, 0.08) 0, transparent 45%),
    radial-gradient(at 50% 0%, rgba(200, 0, 255, 0.05) 0, transparent 50%),
    radial-gradient(at 100% 10%, rgba(255, 0, 128, 0.06) 0, transparent 40%) !important;
}

/* 2. 液态玻璃卡片核心样式 */
.VPFeatures .VPFeature {
  background: rgba(255, 255, 255, 0.35) !important;
  backdrop-filter: blur(24px) saturate(190%) !important;
  -webkit-backdrop-filter: blur(24px) saturate(190%) !important;
  border: 1px solid rgba(255, 255, 255, 0.5) !important;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.04) !important;
  border-radius: 24px !important;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1) !important;
}

/* 暗黑模式下的高科技黑玻璃 */
.dark .VPFeatures .VPFeature {
  background: rgba(26, 26, 30, 0.45) !important;
  border: 1px solid rgba(255, 255, 255, 0.08) !important;
  box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.25) !important;
}

/* 悬浮微调：液体反光向外微扩，带有一层极其精致的幽蓝色外发光 */
.VPFeatures .VPFeature:hover {
  transform: translateY(-6px) scale(1.015);
  border-color: rgba(0, 113, 227, 0.35) !important;
  box-shadow: 0 20px 48px 0 rgba(0, 113, 227, 0.12) !important;
}

/* 3. 苹果标志性的胶囊高光按钮 */
.VPButton.brand {
  background: linear-gradient(135deg, #0071e3 0%, #1b8eff 100%) !important;
  border-radius: 999px !important;
  font-weight: 500 !important;
  box-shadow: 0 4px 16px 0 rgba(0, 113, 227, 0.35) !important;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
}
.VPButton.brand:hover {
  box-shadow: 0 8px 24px 0 rgba(0, 113, 227, 0.55) !important;
  transform: translateY(-2px);
}

/* 灰色的次级按钮也做成半透明玻璃感 */
.VPButton.alt {
  background: rgba(0, 0, 0, 0.04) !important;
  backdrop-filter: blur(10px) !important;
  -webkit-backdrop-filter: blur(10px) !important;
  border: 1px solid rgba(0, 0, 0, 0.08) !important;
  border-radius: 999px !important;
  color: var(--vp-c-text-1) !important;
}
.dark .VPButton.alt {
  background: rgba(255, 255, 255, 0.06) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
}
.VPButton.alt:hover {
  background: rgba(0, 0, 0, 0.08) !important;
}
.dark .VPButton.alt:hover {
  background: rgba(255, 255, 255, 0.12) !important;
}
</style>