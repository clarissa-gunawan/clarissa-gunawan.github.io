export function h(tag: any, props: any, ...children: any[]): string {
  // Component function: call it with props + children
  if (typeof tag === "function") {
    return tag({ ...(props || {}), children });
  }

  // Intrinsic element
  const attrs = serializeAttrs(props);
  const open = attrs ? `<${tag} ${attrs}>` : `<${tag}>`;

  if (selfClosing(tag)) {
    // For self-closing tags, ignore children and closing tag
    return open;
  }

  const body = children.flat().map(toHtml).join("");
  return `${open}${body}</${tag}>`;
}

export function Fragment({ children }: { children?: any[] }): string {
  return (children ?? []).flat().map(toHtml).join("");
}

function toHtml(x: any): string {
  if (x == null || x === false) return "";
  if (Array.isArray(x)) return x.map(toHtml).join("");
  // Treat child strings as HTML/text already – do not escape here
  if (typeof x === "string" || typeof x === "number") return String(x);
  return String(x);
}

function serializeAttrs(props: any): string {
  if (!props) return "";
  return Object.entries(props)
    .filter(([k, v]) => k !== "children" && v != null && v !== false)
    .map(([k, v]) => (v === true ? `${k}` : `${k}="${escapeHtml(String(v))}"`))
    .join(" ");
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function selfClosing(tag: string): boolean {
  return /^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/i.test(tag);
}
