function scopedClassMaker(prefix: string) {
  return (name?: string) => {
    return ['golu-dialog', name].filter(Boolean).join('-');
  };
}
export { scopedClassMaker };
