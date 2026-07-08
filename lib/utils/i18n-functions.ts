/**
 * Utility for i18n function name matching
 */
export function getI18nFunctionNames(options?: {
  additionalFunctionNames?: string[]
}) {
  const defaultFunctions = ['$t', 't', '$tc', 'tc']
  const additionalFunctionNames = options?.additionalFunctionNames || []
  return new Set([...defaultFunctions, ...additionalFunctionNames])
}
