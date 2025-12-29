export function diffChanges(
  oldDoc: any,
  newData: any,
  allowedFields: string[]
) {
  const changes: any = {};

  for (const field of allowedFields) {
    if (
      typeof newData[field] !== "undefined" &&
      String(oldDoc[field]) !== String(newData[field])
    ) {
      changes[field] = {
        old: oldDoc[field] ?? null,
        new: newData[field],
      };
    }
  }

  return changes;
}
