export default function (search) {
  if (!search.includes('?')) return {};
  return search
          .split('?')[1]
          .split('&')
          .filter(d => d)// 过滤掉空串
          .reduce((pre, curr) => {
            const [key, value] = curr.split('=');
            return Object.assign(pre, { [key]: value });
          }, {});
}
