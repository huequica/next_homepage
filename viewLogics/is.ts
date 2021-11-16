/** Build Class Query of `is-*`
 * @param query injection parameter
 * @returns className
 */
const is = (query: string | number): string => `is-${query}`;

export default is;
