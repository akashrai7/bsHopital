export function diffChanges(oldObj: any, newObj: any) {
  const changes: Record<string, { old: any; new: any }> = {};

  Object.keys(newObj).forEach((key) => {
    if (JSON.stringify(oldObj?.[key]) !== JSON.stringify(newObj?.[key])) {
      changes[key] = {
        old: oldObj?.[key] ?? null,
        new: newObj?.[key] ?? null,
      };
    }
  });

  return changes;
}
