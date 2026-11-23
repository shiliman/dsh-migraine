export const DATA = {
  id: 'dsh-migraine',
  name: '偏头痛',
  prefix: 'migraine',
  label: '偏头痛',
  defaultEeriness: 2,
  gain: 0.4,
  flareChance: 0.35,
  flareGain: 28,
  triggerWeight: 0.95,
  flareWeight: 1.1,
  reliefs: [
    { id: 'dark', label: '躲进暗处', relief: 28, minutes: 50, calm: 12 },
    { id: 'painkiller', label: '止痛药', relief: 24, minutes: 40, calm: 8 },
    { id: 'sleep', label: '睡一觉', relief: 36, minutes: 90, calm: 15 },
  ],
  body: {
    stiff: '太阳穴有点紧，看屏幕久了发晃。',
    ache: '左边太阳穴一下一下地跳，光有点刺眼；说话想省着点说。',
    flare: '眼前有一圈锯齿一样的光在闪，接着半边头像被箍住；声音都嫌吵。',
  },
  voice: {
    base: '句子变短，能一句说完的不要两句；对亮和吵敏感，可以说一句「灯太亮了」。',
    flare: '允许要求关灯/小声、允许回答只有半句；不要描述医学。别把痛说得很戏剧化。',
  },
}
