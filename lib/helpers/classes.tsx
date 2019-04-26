interface Options {
  extra: string | undefined;
}

interface ClassToggles {
  [k: string]: boolean;
}

function scopedClassMaker(prefix: string) {
  return (name?: string | ClassToggles, options?: Options) => {
    let name2;
    let result;
    if (typeof name === 'string' || name === undefined) {
      name2 = name;
      result = [prefix, name2].filter(Boolean).join('-');
    } else {
      name2 = Object.entries(name)
        .filter(kv => kv[1])
        .map(kv => kv[0]);

      result = name2.map(n => [prefix, n].filter(Boolean).join('-')).join(' ');
    }

    if (options && options.extra) {
      return [result, options && options.extra].filter(Boolean).join(' ');
    } else {
      return result;
    }
  };
}
export { scopedClassMaker };
