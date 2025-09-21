declare global {
  namespace JSX {
    // What JSX expressions evaluate to
    type Element = string;

    // Allow any intrinsic tag/attrs (start loose; tighten later if desired)
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

export {};

