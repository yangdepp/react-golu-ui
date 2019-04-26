interface Options {
  extra: string | undefined;
}

interface ClassToggles {
  [k: string]: boolean;
}

function scopedClassMaker(prefix: string) {
  return (name: string | ClassToggles, options?: Options) => {
    const namesObject = typeof name === 'string' || name === undefined ? { [name]: name } : name;

    const scoped = Object.entries(namesObject)
      .filter(kv => kv[1] !== false)
      .map(kv => kv[0])
      .map(name => [prefix, name].filter(Boolean).join('-'))
      .join(' ');

    if (options && options.extra) {
      return [scoped, options && options.extra].filter(Boolean).join(' ');
    } else {
      return scoped;
    }
  };
}
export { scopedClassMaker };
