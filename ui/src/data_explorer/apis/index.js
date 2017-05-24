import AJAX from 'src/utils/ajax'

export const writeData = async (source, db, data) => {
  return await AJAX({
    url: `${source.links.write}?db=${db}`,
    method: 'POST',
    data,
  })
}
