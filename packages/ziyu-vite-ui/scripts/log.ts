export const log = (value: any, name = '') => {
  console.log(name, JSON.stringify(value, null, 2))
}
