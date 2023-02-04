export function Random(max: number, min: number) {
  return Math.round(Math.random() * (max - min)) + min
}

export function getStyle(el: Element, styleName: any) {
  // 注意：此处为了解决当 style 值为 auto 时，返回 auto 的问题
  const win = el.ownerDocument.defaultView

  // null 的意思是不返回伪类元素
  return win!.getComputedStyle(el, null)[styleName]
}
