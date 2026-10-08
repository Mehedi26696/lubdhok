// Course codes are often typed without the separator used in the archive.
export function normalizeSearch(value: string) {
  return value
    .toLowerCase()
    .normalize('NFKC')
    .replace(/[^\p{L}\p{N}]/gu, '')
}

export function matchesQuery(values: readonly string[], query: string) {
  const terms = query.trim().split(/\s+/).map(normalizeSearch).filter(Boolean)
  const normalizedValues = values.map(normalizeSearch)
  return terms.every((term) =>
    normalizedValues.some((value) => value.includes(term))
  )
}
