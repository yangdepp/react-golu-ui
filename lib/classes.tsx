function scopedClassMaker(prefix: string) {
  return (name?: string) => {
    return [prefix, name].filter(Boolean).join('-');
  };
}
export { scopedClassMaker };
